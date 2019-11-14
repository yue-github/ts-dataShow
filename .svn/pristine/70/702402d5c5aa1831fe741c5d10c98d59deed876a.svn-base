define(["require", "exports", "./component2d"], function (require, exports, component2d_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DemoComponent extends component2d_1.Component2D {
        constructor(id) {
            super(id);
            this.x1 = 0;
            this.y1 = 0;
            this.x2 = 0;
            this.y2 = 0;
            this.dx = 0;
            this.dy = 0;
            this.addTimeSlice(0, 0.5, "elasticOut");
        }
        setTarget(arg) {
            if (!this.isPlaying()) {
                this.dx = arg.x - this.x1;
                this.dy = arg.y - this.y1;
                this.start();
            }
        }
        update() {
            let value = this.getTime(0);
            this.x2 = this.x1 + value * this.dx;
            this.y2 = this.y1 + value * this.dy;
        }
        render() {
            if (this.context) {
                this.context.clearRect(0, 0, this.width, this.height);
                this.context.beginPath();
                this.context.moveTo(this.x1, this.y1);
                this.context.lineTo(this.x2, this.y2);
                this.context.stroke();
                this.context.closePath();
                this.context.beginPath();
                this.context.ellipse(this.x2, this.y2, 3, 3, 0, 0, 360);
                this.context.fillStyle = "white";
                this.context.fill();
                this.context.stroke();
                this.context.closePath();
            }
        }
    }
    exports.DemoComponent = DemoComponent;
});
