define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Easing {
        static find(name) {
            if (Easing.funcs.hasOwnProperty(name))
                return Easing.funcs[name];
            return Easing.linear;
        }
        static linear(k) {
            return k;
        }
        static quadraticIn(k) {
            return k * k;
        }
        static quadraticOut(k) {
            return k * (2 - k);
        }
        static quadraticInOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k;
            }
            return -0.5 * (--k * (k - 2) - 1);
        }
        static cubicIn(k) {
            return k * k * k;
        }
        static cubicOut(k) {
            return --k * k * k + 1;
        }
        static cubicInOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        }
        static quarticIn(k) {
            return k * k * k * k;
        }
        static quarticOut(k) {
            return 1 - (--k * k * k * k);
        }
        static quarticInOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        }
        static quinticIn(k) {
            return k * k * k * k * k;
        }
        static quinticOut(k) {
            return --k * k * k * k * k + 1;
        }
        static quinticInOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        }
        static sinIn(k) {
            return 1 - Math.cos(k * Math.PI / 2);
        }
        static sinOut(k) {
            return Math.sin(k * Math.PI / 2);
        }
        static sinInOut(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        static exponentialIn(k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        }
        static exponentialOut(k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        }
        static exponentialInOut(k) {
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        }
        static circularIn(k) {
            return 1 - Math.sqrt(1 - k * k);
        }
        static circularOut(k) {
            return Math.sqrt(1 - (--k * k));
        }
        static circularInOut(k) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
        static elasticIn(k) {
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        }
        static elasticOut(k) {
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        }
        static elasticInOut(k) {
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            k *= 2;
            if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        }
        static backIn(k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        }
        static backOut(k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        }
        static backInOut(k) {
            var s = 1.70158 * 1.525;
            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        }
        static bounceIn(k) {
            return 1 - Easing.bounceOut(1 - k);
        }
        static bounceOut(k) {
            if (k < (1 / 2.75)) {
                return 7.5625 * k * k;
            }
            else if (k < (2 / 2.75)) {
                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            }
            else if (k < (2.5 / 2.75)) {
                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            }
            else {
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
        }
        static bounceInOut(k) {
            if (k < 0.5) {
                return Easing.bounceIn(k * 2) * 0.5;
            }
            return Easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
        }
    }
    Easing.funcs = {
        "linear": Easing.linear,
        "quadraticIn": Easing.quadraticIn,
        "quadraticOut": Easing.quadraticOut,
        "quadraticInOut": Easing.quadraticInOut,
        "cubicIn": Easing.cubicIn,
        "cubicOut": Easing.cubicOut,
        "cubicInOut": Easing.cubicInOut,
        "quarticIn": Easing.quarticIn,
        "quarticOut": Easing.quarticOut,
        "quarticInOut": Easing.quarticInOut,
        "quinticIn": Easing.quinticIn,
        "quinticOut": Easing.quinticOut,
        "quinticInOut": Easing.quinticInOut,
        "sinIn": Easing.sinIn,
        "sinOut": Easing.sinOut,
        "sinInOut": Easing.sinInOut,
        "exponentialIn": Easing.exponentialIn,
        "exponentialOut": Easing.exponentialOut,
        "exponentialInOut": Easing.exponentialInOut,
        "circularIn": Easing.circularIn,
        "circularOut": Easing.circularOut,
        "circularInOut": Easing.circularInOut,
        "elasticIn": Easing.elasticIn,
        "elasticOut": Easing.elasticOut,
        "elasticInOut": Easing.elasticInOut,
        "backIn": Easing.backIn,
        "backOut": Easing.backOut,
        "backInOut": Easing.backInOut,
        "bounceIn": Easing.bounceIn,
        "boundOut": Easing.bounceOut,
        "boundInOut": Easing.bounceInOut
    };
    exports.Easing = Easing;
});
