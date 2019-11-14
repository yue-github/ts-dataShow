define(["require", "exports", "./component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Component2D extends component_1.Component {
        constructor(id) {
            super();
            this.node = null;
            this.context = null;
            this.width = 0;
            this.height = 0;
            this.node = document.getElementById(id);
            if (this.node) {
                this.context = this.node.getContext("2d");
                this.width = this.node.width;
                this.height = this.node.height;
            }
            this.render();
        }
        getNode() {
            return this.node;
        }
    }
    exports.Component2D = Component2D;
});
