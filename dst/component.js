define(["require", "exports", "./timeslice"], function (require, exports, timeslice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Component {
        constructor() {
            this.timerId = null;
            this.duration = 0;
            this.time = 0;
            this.tslices = new Array();
        }
        isPlaying() {
            return this.timerId !== null;
        }
        addTimeSlice(s, d, e) {
            this.tslices.push(new timeslice_1.TimeSlice(s, d, e));
        }
        getTime(id) {
            return this.tslices[id].getValue();
        }
        start() {
            this.time = 0;
            this.duration = 0;
            for (var i = 0; i < this.tslices.length; i++) {
                let end = this.tslices[i].getEndTime();
                if (end > this.duration)
                    this.duration = end;
                this.tslices[i].reset();
            }
            this.timerId = setInterval(() => {
                this.animate(0.03);
            }, 30);
        }
        stop() {
            this.tslices.forEach((e, index) => {
                if (e.getAnimateType() == 'linear') {
                    this.tslices[index].setValueOne(1);
                }
            });
            clearInterval(this.timerId);
            this.timerId = null;
        }
        animate(dt) {
            this.time += dt;
            if (this.time >= this.duration)
                this.stop();
            for (var i = 0; i < this.tslices.length; i++)
                this.tslices[i].update(dt);
            this.update();
            this.render();
        }
    }
    exports.Component = Component;
});
