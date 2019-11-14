import { Component2D } from "./component2d";

export class Component7 extends Component2D {

    private canvasJson: any; //JSON数据
    private changeJson: any;
    private radius: number = 0;//半径
    private num:number = 0;
    private img: any;   //图片
    private moveX: number = 0; //x轴移动的像素
    private moveY: number = 0; //y轴移动的像素
    private x:number =0;
    private y:number = 0;
    private scaleX: number = 1; //横向放大的倍数
    private scaleY: number = 1; //竖直放大的倍数
    private xx:number = 0;
    private yy:number = 0;
    private tempNode:  HTMLCanvasElement | null = null; //临时的canvas节点
    private tempContext: CanvasRenderingContext2D | null = null; 
    protected mapBg:any = document.getElementsByClassName('incSeven')[0];
    
    protected resetScaleX: number = 1;
    protected resetScaleY:number = 1;
    protected mapDomLeft: any = 0;
    protected mapDomTop: any = 0;
    //临时的canvas对象

    public constructor(id: string) {
        //继承父类的构造方法
        super(id);
        let windowNdoe:HTMLElement = document.querySelector('.window-box');
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
   
    public setTarget(arg: any): void {
        //写个静态数据
        let staticData: object[] = [{
            name: '广州市',
            mapX: 100,
            mapY: 200
        },{
            name: '茂名市',
            mapX: 300,
            mapY: 300
        },{
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
    protected update(): void {
        let a = 1
        this.num = a * this.getTime(0)
    }

    
    //更新参数后的渲染
    protected render(): void {
        // this.context.clearRect(0, 0, this.width, this.height);
        // this.drawring(this.num)
    }

    //画canvas
    private draw(): void {
        if(this.tempContext) {
            this.tempContext.clearRect(0, 0, this.width, this.height);
            this.tempContext.translate(this.moveX-5, this.moveY);
            // this.tempContext.scale(this.scaleX, this.scaleY);
           
            this.img.src = 'http://data-visualization.bayou-tech.cn/images/map.png'
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
                this.context.clearRect(0, 0, this.width, this.height)
                this.context.drawImage(this.tempNode, 0, 0, this.width, this.height)
                
            }
        }
    }

    private drawring(num): void{
        for(let i in this.canvasJson){
            this.tempContext.beginPath();
            this.tempContext.arc(this.canvasJson[i].mapX,this.canvasJson[i].mapY,this.radius+num*10,0,Math.PI*2);
            this.tempContext.closePath();
            this.tempContext.lineWidth = 1; //线条宽度
            this.tempContext.strokeStyle = 'blue'; //颜色
            this.tempContext.stroke();    
        }
        
    }

    public click(windowNode: HTMLElement): void{
        // this.node.onclick =(event) =>{
        //     let x = event.pageX - this.node.offsetLeft
        //     let y = event.pageY - this.node.offsetTop
        //     for(let i in this.canvasJson){
        //         if(x >= this.canvasJson[i].mapX * (1+this.xx) +this.x -this.radius && x <= this.canvasJson[i].mapX * (1+this.xx) +this.x  + this.radius && y >=this.canvasJson[i].mapY * (1+this.xx) +this.y - this.radius && y <= this.canvasJson[i].mapY * (1+this.xx) +this.y+ this.radius ){
        //             windowNode.style.cssText = 'top:50%'
        //         }
        //     }
        // }
        windowNode.onclick = (event: Event) => {
           
            if (event.target == windowNode) {
                windowNode.style.cssText = 'width:0%;height:0%;background-color: rgba(0, 0, 0, 0);'
                // windowNode.style.cssText = 'width:0%;height:0%;background-color: pink;'
            }
        }
    }

     //让鼠标滚动事件启动
     public mouseWhell(create: HTMLElement,reduce: HTMLElement,refresh: HTMLElement): void {
       
        create.onclick = (event: Event) => {
            this.resetScaleX += 0.1;
            this.resetScaleY += 0.1;
            this.scaleX = 1;
            this.scaleY = 1;
            this.xx += 0.1
            this.scaleX += 0.1
            this.scaleY += 0.1
            this.mapBg.style.transform = `scale(${this.resetScaleX},${this.resetScaleY})`;
 
        }
        reduce.onclick = (event: Event) => {
            this.resetScaleX -= 0.1;
            this.resetScaleY -= 0.1;
            this.scaleX = 1;
            this.scaleY = 1;
            this.xx -= 0.1
            this.scaleX -= 0.1
            this.scaleY -= 0.1
            this.mapBg.style.transform = `scale(${this.resetScaleX},${this.resetScaleY})`;
     
        }
        refresh.onclick = (event: Event) => {
            this.scaleX = 1;
            this.scaleY = 1;
            this.xx = 0
            this.x= 0
            this.y = 0
            this.tempNode.width = this.node.width;
            this.tempNode.height = this.node.height;
            this.resetScaleX = 1;
            this.resetScaleY = 1;
            this.mapBg.style.transform = `scale(${this.resetScaleX},${this.resetScaleY})`;
          
        }
     }

     //鼠标的按下事件
     private mouseDown(e): void {
        this.mapBg.onmousedown = (e: MouseEvent) => {  
            this.scaleX = 1;
            this.scaleY = 1;
            let cInitX = e.pageX;
            let cInitY = e.pageY;
           
            //监听鼠标移动事件
            document.onmousemove = (e: MouseEvent) => {
                this.moveX = e.pageX - cInitX;
                this.moveY = e.pageY - cInitY;
                this.x= this.moveX+ this.x
                this.y = this.moveY + this.y
                cInitX = e.pageX;
                cInitY = e.pageY;
                this.mapBg.style.position = "absolute";
                this.mapBg.style.left = this.mapDomLeft + this.moveX + 'px';
                this.mapBg.style.top = this.mapDomTop + this.moveY +'px';
                this.mapDomLeft = parseInt(this.mapBg.style.left);
                this.mapDomTop = parseInt(this.mapBg.style.top);
                return false;
                // this.draw();
            }
            return false;
        }
        
     }
     
     
}