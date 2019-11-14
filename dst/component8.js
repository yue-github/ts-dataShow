define(["require", "exports", "./component2d"], function (require, exports, component2d_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Component8 extends component2d_1.Component2D {
        constructor(id) {
            super(id);
            // canvas的属性
            this.cWidth = 0; // 折线图的宽度
            this.cHeight = 0; // 折线图的高度
            this.cMargin = 0;
            this.cSpace = 0;
            // 原点的坐标
            this.originX = 0;
            this.originY = 0;
            // 折线图属性
            this.tobalDots = 0; // 折线图的x轴为几等分
            this.dotSpace = 0; // x轴每个格子的宽度
            this.maxValue = 0; // y轴的最大值
            this.totalYNumber = 0; // 折线图的y轴为几等分
            // 颜色数组
            this.colorList = ['#3673B7'];
            this.json = [
                [
                    {
                        time: '08:00',
                        number: 492
                    },
                    {
                        time: '09:00',
                        number: 1050
                    },
                    {
                        time: '10:00',
                        number: 800
                    },
                    {
                        time: '11:00',
                        number: 879
                    },
                    {
                        time: '12:00',
                        number: 700
                    },
                    {
                        time: '13:00',
                        number: 777
                    },
                    {
                        time: '14:00',
                        number: 1000
                    },
                    {
                        time: '15:00',
                        number: 1000
                    },
                    {
                        time: '16:00',
                        number: 650
                    }
                ]
            ];
            // y轴的最大值maxValue等于数据中的最大值
            this.maxValue = this.getMaxNumByY(this.json);
            this.initData(this.json);
        }
        /**
         * 返回输入的数组中的最大值（相当于求y轴的最大值）
         * @param data JSON数据
         */
        getMaxNumByY(data) {
            if (data) {
                let maxNum = 0;
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].length; j++) {
                        if (data[i][j].number > maxNum) {
                            maxNum = data[i][j].number;
                        }
                    }
                }
                return maxNum;
            }
        }
        /**
         * 返回x轴几等分的值（相当于求数据中数组的length）
         * @param data JSON数据
         */
        getMaxNumByX(data) {
            let maxX = 0;
            for (let i = 0; i < data.length; i++) {
                maxX = data[i].length;
            }
            return maxX;
        }
        /**
     * 初始化
     * @param dataArr 模拟的JSON数据
     */
        initData(dataArr) {
            if (!dataArr)
                return false;
            this.canvas = this.node;
            this.canvas.style.background = '#2D3343'; // 设置背景色
            this.ctx = this.context;
            this.cMargin = 40;
            this.cSpace = 80;
            this.cWidth = 550;
            this.cHeight = 50;
            this.originX = this.cSpace + 50;
            this.originY = this.cMargin + this.cHeight;
            // 求出折线图信息
            // totalDots: x轴为几等分
            this.tobalDots = this.getMaxNumByX(dataArr);
            // dotSpace: x轴每个格子的宽度
            this.dotSpace = this.cWidth / (this.tobalDots - 1);
            this.dotSpace = Number(this.dotSpace.toFixed(0));
            // 将y轴的最大值加上100(这样就不会有坐标点在最上面)赋给maxValue
            this.maxValue += 300;
            // 将y几等分
            this.totalYNumber = 6;
            // 当只绘制1像素的线的时候，坐标点需要偏移，这样才能画出1像素实线
            this.ctx.translate(0.5, 0.5);
            this.drawChart();
            this.drawLineAnimate(this.json);
            this.drawMarkers(this.json);
        }
        /**
         * 绘制图表
         * @param dataArr json数据
         */
        drawChart() {
            // 先清空
            this.ctx.clearRect(this.originX, this.originY - this.cHeight, this.cWidth, this.cHeight);
            this.ctx.fillStyle = '#244D81';
            this.ctx.fillRect(this.cSpace + 50, this.cMargin, this.cWidth, this.cHeight);
        }
        /**
         * 绘制标记
         */
        drawMarkers(dataArr) {
            if (dataArr) {
                // 先清空
                this.ctx.clearRect(0, 0, this.cSpace + 50, this.height);
                this.ctx.clearRect(this.originX + this.cWidth, 0, this.width - this.cWidth - this.cSpace - 50, this.height);
                // 设置样式
                this.ctx.font = '14px Arial';
                this.ctx.fillStyle = '#a5aabd';
                this.ctx.strokeStyle = '#a5aabd';
                // 绘制坐标的标记
                // 取第一个数组的第一个对象的时间
                let start = dataArr[0][0].time;
                // 取第一个数组的最后一个对象的时间
                let end = dataArr[0][dataArr[0].length - 1].time;
                this.ctx.fillText(start, this.originX - 50, this.originY - 20);
                this.ctx.fillText(end, this.originX + this.cWidth + 20, this.originY - 20);
            }
        }
        /**
         * 绘制折线
         * @param dataArr json数据
         */
        drawLineAnimate(dataArr) {
            for (let i = 0; i < dataArr.length; i++) {
                this.ctx.strokeStyle = this.colorList[i];
                // 绘制折线
                this.ctx.beginPath();
                for (let j = 0; j < this.tobalDots; j++) {
                    let dotVal = dataArr[i][j].number;
                    let x = this.originX + this.dotSpace * j;
                    let y = (1 - dotVal / this.maxValue) * this.cHeight + this.cMargin;
                    if (j == 0) {
                        this.ctx.moveTo(x, y);
                    }
                    else {
                        this.ctx.lineTo(x, y);
                    }
                }
                this.ctx.stroke();
            }
        }
        setTarget(arg) {
            arg.then(arg => {
                if (arg) {
                    // console.log(arg)
                    this.json = [arg];
                    // y轴的最大值maxValue等于数据中的最大值
                    this.maxValue = this.getMaxNumByY(this.json);
                    this.maxValue += 300;
                    this.drawChart();
                    this.drawLineAnimate(this.json);
                    this.drawMarkers(this.json);
                }
            });
        }
        //更新画布参数
        update() {
        }
        //更新参数后的渲染
        render() {
            if (this.json) {
                // y轴的最大值maxValue等于数据中的最大值
                this.maxValue = this.getMaxNumByY(this.json);
                this.initData(this.json);
            }
        }
    }
    exports.Component8 = Component8;
});
