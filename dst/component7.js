define(["require", "exports", "./component2d"], function (require, exports, component2d_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Component7 extends component2d_1.Component2D {
        //临时的canvas对象
        constructor(id) {
            //继承父类的构造方法
            super(id);
            this.radius = 0; //半径
            this.num = 0;
            this.moveX = 0; //x轴移动的像素
            this.moveY = 0; //y轴移动的像素
            this.x = 0;
            this.y = 0;
            this.scaleX = 1; //横向放大的倍数
            this.scaleY = 1; //竖直放大的倍数
            this.xx = 0;
            this.yy = 0;
            this.tempNode = null; //临时的canvas节点
            this.tempContext = null;
            this.mapBg = document.getElementsByClassName('incSeven')[0];
            this.resetScaleX = 1;
            this.resetScaleY = 1;
            this.mapDomLeft = 0;
            this.mapDomTop = 0;
            let windowNdoe = document.querySelector('.window-box');
            //初始化一个图片对象待会使用
            this.img = new Image();
            //一个临时的canvas节点
            this.tempNode = document.createElement('canvas');
            //把原始节点宽高赋值给临时节点
            this.tempNode.width = this.node.width;
            this.tempNode.height = this.node.height;
            this.radius = 10;
            //一个临时的canvas对象
            this.tempNode ? this.tempContext = this.tempNode.getContext('2d') : this.tempContext;
            //初始化的时候调用画一次
            this.node.style.transform = 'scale(1.2,1.2)';
            // this.node.style.transform = 'rotate(10deg)';
            this.draw();
            //鼠标滚动变大变小
            // this.mouseWhell();
            //鼠标点住地图移动
            this.mouseDown(this.mapBg);
        }
        setTarget(arg) {
            //写个静态数据
            let staticData = [{
                    name: '广州市',
                    mapX: 100,
                    mapY: 200
                }, {
                    name: '茂名市',
                    mapX: 300,
                    mapY: 300
                }, {
                    name: '汕尾市',
                    mapX: 600,
                    mapY: 400
                }];
            //判断传来的json数据是否有值，如果有则赋值，没有则暂时用静态数据
            arg ? this.canvasJson = arg : this.canvasJson = staticData;
            this.addTimeSlice(0, 6, "easeOutCubic");
            //启动计时器
            if (!this.isPlaying())
                this.start();
        }
        //更新画布参数
        update() {
            let a = 1;
            this.num = a * this.getTime(0);
        }
        //更新参数后的渲染
        render() {
            // this.context.clearRect(0, 0, this.width, this.height);
            // this.drawring(this.num)
        }
        //画canvas
        draw() {
            if (this.tempContext) {
                this.tempContext.clearRect(0, 0, this.width, this.height);
                this.tempContext.translate(this.moveX - 5, this.moveY);
                // this.tempContext.scale(this.scaleX, this.scaleY);
                this.img.src = 'http://data-visualization.bayou-tech.cn/images/map.png';
                this.img.onload = () => {
                    this.tempContext.beginPath();
                    this.tempContext.drawImage(this.img, 0, 0, this.width, this.height);
                    // for(let i in this.canvasJson){
                    //     this.tempContext.beginPath();
                    //     this.tempContext.fillStyle = 'blue';
                    //     this.tempContext.arc(this.canvasJson[i].mapX, this.canvasJson[i].mapY, this.radius, 0, 2 * Math.PI)
                    //     this.tempContext.fill();  
                    // }
                    // this.drawring(2)
                    this.context.clearRect(0, 0, this.width, this.height);
                    this.context.drawImage(this.tempNode, 0, 0, this.width, this.height);
                };
            }
        }
        drawring(num) {
            for (let i in this.canvasJson) {
                this.tempContext.beginPath();
                this.tempContext.arc(this.canvasJson[i].mapX, this.canvasJson[i].mapY, this.radius + num * 10, 0, Math.PI * 2);
                this.tempContext.closePath();
                this.tempContext.lineWidth = 1; //线条宽度
                this.tempContext.strokeStyle = 'blue'; //颜色
                this.tempContext.stroke();
            }
        }
        click(windowNode) {
            // this.node.onclick =(event) =>{
            //     let x = event.pageX - this.node.offsetLeft
            //     let y = event.pageY - this.node.offsetTop
            //     for(let i in this.canvasJson){
            //         if(x >= this.canvasJson[i].mapX * (1+this.xx) +this.x -this.radius && x <= this.canvasJson[i].mapX * (1+this.xx) +this.x  + this.radius && y >=this.canvasJson[i].mapY * (1+this.xx) +this.y - this.radius && y <= this.canvasJson[i].mapY * (1+this.xx) +this.y+ this.radius ){
            //             windowNode.style.cssText = 'top:50%'
            //         }
            //     }
            // }
            windowNode.onclick = (event) => {
                if (event.target == windowNode) {
                    windowNode.style.cssText = 'width:0%;height:0%;background-color: rgba(0, 0, 0, 0);';
                    // windowNode.style.cssText = 'width:0%;height:0%;background-color: pink;'
                }
            };
        }
        //让鼠标滚动事件启动
        mouseWhell(create, reduce, refresh) {
            create.onclick = (event) => {
                this.resetScaleX += 0.1;
                this.resetScaleY += 0.1;
                this.scaleX = 1;
                this.scaleY = 1;
                this.xx += 0.1;
                this.scaleX += 0.1;
                this.scaleY += 0.1;
                this.mapBg.style.transform = `scale(${this.resetScaleX},${this.resetScaleY})`;
            };
            reduce.onclick = (event) => {
                this.resetScaleX -= 0.1;
                this.resetScaleY -= 0.1;
                this.scaleX = 1;
                this.scaleY = 1;
                this.xx -= 0.1;
                this.scaleX -= 0.1;
                this.scaleY -= 0.1;
                this.mapBg.style.transform = `scale(${this.resetScaleX},${this.resetScaleY})`;
            };
            refresh.onclick = (event) => {
                this.scaleX = 1;
                this.scaleY = 1;
                this.xx = 0;
                this.x = 0;
                this.y = 0;
                this.tempNode.width = this.node.width;
                this.tempNode.height = this.node.height;
                this.resetScaleX = 1;
                this.resetScaleY = 1;
                this.mapBg.style.transform = `scale(${this.resetScaleX},${this.resetScaleY})`;
            };
        }
        //鼠标的按下事件
        mouseDown(e) {
            this.mapBg.onmousedown = (e) => {
                this.scaleX = 1;
                this.scaleY = 1;
                let cInitX = e.pageX;
                let cInitY = e.pageY;
                //监听鼠标移动事件
                document.onmousemove = (e) => {
                    this.moveX = e.pageX - cInitX;
                    this.moveY = e.pageY - cInitY;
                    this.x = this.moveX + this.x;
                    this.y = this.moveY + this.y;
                    cInitX = e.pageX;
                    cInitY = e.pageY;
                    this.mapBg.style.position = "absolute";
                    this.mapBg.style.left = this.mapDomLeft + this.moveX + 'px';
                    this.mapBg.style.top = this.mapDomTop + this.moveY + 'px';
                    this.mapDomLeft = parseInt(this.mapBg.style.left);
                    this.mapDomTop = parseInt(this.mapBg.style.top);
                    return false;
                    // this.draw();
                };
                return false;
            };
        }
    }
    exports.Component7 = Component7;
});
