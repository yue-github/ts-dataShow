define(["require", "exports", "./component1", "./component2", "./component3", "./component4", "./component5", "./component6", "./component7", "./component8", "./staticcom", "./dynamiccom"], function (require, exports, component1_1, component2_1, component3_1, component4_1, component5_1, component6_1, component7_1, component8_1, staticcom_1, dynamiccom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.onmouseup = function () {
        document.onmousemove = null;
    };
    const windowNdoe = document.querySelector('.window-box');
    const create = document.querySelector('.add');
    const reduce = document.querySelector('.reduce');
    const refresh = document.querySelector('.refresh');
    let comp1 = new component1_1.Component1("canvas1");
    let comp2 = new component2_1.Component2("canvas2");
    let comp3 = new component3_1.Component3("canvas3");
    let comp4 = new component4_1.Component4("canvas4");
    let comp5 = new component5_1.Component5("canvas5");
    let comp6 = new component6_1.Component6("canvas6");
    let comp7 = new component7_1.Component7("canvas7");
    let comp8 = new component8_1.Component8("canvas8");
    let debug = true;
    // comp7.clickMap();
    comp7.click(windowNdoe);
    comp7.mouseWhell(create, reduce, refresh);
    let com;
    if (debug)
        com = new staticcom_1.StaticCom();
    else
        com = new dynamiccom_1.DynamicCom();
    let ret = com.func1(null);
    comp1.setTarget(ret);
    ret = com.func2(null);
    comp2.setTarget(ret);
    ret = com.func3(null);
    comp3.setTarget(ret);
    ret = com.func4(null);
    comp4.setTarget(ret);
    ret = com.func5(null);
    comp5.setTarget(ret);
    ret = com.func6(null);
    comp6.setTarget(ret);
    ret = com.func7(null);
    comp7.setTarget(ret);
    ret = com.func8(null);
    comp8.setTarget(ret);
    setInterval(function () {
        let incId = localStorage["incId"];
        let ret = com.func1(null);
        comp1.setTarget(ret);
        ret = com.func2(incId);
        comp2.setTarget(ret);
        ret = com.func3(incId);
        comp3.setTarget(ret);
        // ret = com.func4(null);
        // comp4.setTarget(ret);
        // ret = com.func5(null);
        // comp5.setTarget(ret);
        ret = com.func6(incId);
        comp6.setTarget(ret);
        ret = com.func7(null);
        comp7.setTarget(ret);
    }, 6000);
    setInterval(function () {
        let ret = com.func4(null);
        comp4.setTarget(ret);
        ret = com.func5(null);
        comp5.setTarget(ret);
        ret = com.func8(null);
        comp8.setTarget(ret);
    }, 6000);
    let beforeIncId = '';
    setInterval(res => {
        if (localStorage["incId"] != beforeIncId) {
            beforeIncId = localStorage["incId"];
            ret = com.func2(beforeIncId);
            comp2.setTarget(ret);
            ret = com.func3(beforeIncId);
            comp3.setTarget(ret);
            ret = com.func6(beforeIncId);
            comp6.setTarget(ret);
        }
    }, 6000);
});
