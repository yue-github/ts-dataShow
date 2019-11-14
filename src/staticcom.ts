import { Comunication } from "./comunication";
import { Ajax } from "./Ajax";

export class StaticCom extends Comunication {
    public func1(arg: any) {
        let promise = new Promise((resolve, index) => {
            let json: any = [
                {
                    count: 1500,
                    color: '#28FF28',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: -340,
                    countY: -150,
                    name: '正常企业',
                    percent: 0
                },
                {
                    count: 500,
                    color: 'pink',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: 230,
                    countY: -150,
                    name: '轻微异常',
                    percent: 0
                },
                {
                    count: 45,
                    color: 'yellow',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: -340,
                    countY: 250,
                    name: '一般异常',
                    percent: 0
                },
                {
                    count: 15,
                    color: 'red',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: 230,
                    countY: 250,
                    name: '严重异常',
                    percent: 0
                }
            ]
           
        //     let ajax = new Ajax();
        //     let url = 'http://data-visualization.bayou-tech.cn/web/mobile_org_info/entDataStatistic';
        //     let url1='http://data-visualization.bayou-tech.cn/web/mobile_org_info/entDataStatistic?accessToken='+localStorage["token"]
        //     let token: string = localStorage["token"], data: string;
        //     if (token) {
        //         data = `accessToken=${token}`;
        //     } else {
        //         window.location.href = './login.html';
        //     }
        //     let a = ajax.post(url, data)
        //     let abc=ajax.ajax(url1,function(res){},function(fail){})
        //     // console.log(abc)
        //     abc.then(res => {
        //         json.map((item, index) => {
        //             switch (index) {
        //                 case 0:
        //                     return item.count = res.result.normalCount;
        //                 case 1:
        //                     return item.count = res.result.mildAbnormal;
        //                 case 2:
        //                     return item.count = res.result.abnormalCount;
        //                 case 3:
        //                     return item.count = res.result.serAbnormalCount;
        //             }
        //         })
                resolve(json);
        //     })

        })
        return promise;
    }

    public func2(arg: any) {
        arg = arg?arg:'46c054cb-15f1-4d05-90e8-0a22548488fa';
        let promise: any = new Promise((resolve, reject) => {
            let json = [
                {
                    name: '初装',
                    number: 6
                },
                {
                    name: '调试',
                    number: 2
                },
                {
                    name: '故障',
                    number: 10
                },
                {
                    name: '保修',
                    number: 3
                },
                {
                    name: '维修',
                    number: 7
                }
            ]
            let ajax = new Ajax();
            let url = 'http://data-visualization.bayou-tech.cn/web/mobile_org_info/barDiagramDevice';
            let url1 = 'http://data-visualization.bayou-tech.cn/web/mobile_org_info/barDiagramDevice?accessToken='+localStorage["token"]
            let data2 = localStorage["token"]
            // console.log(data2)
            let data = 'accessToken=' + data2
            let a = ajax.post(url, data)
            let abc=ajax.ajax(url1,function(res){},function(fail){})
            abc.then(res => {
                json.map((item, index) => {
                    switch (index) {
                        case 0:
                            return item.number = res.result.initialAssembly;
                        case 1:
                            return item.number = res.result.debug;
                        case 2:
                            return item.number = res.result.fault;
                        case 3:
                            return item.number = res.result.repairs;
                        case 4:
                            return item.number = res.result.maintain;
                    }
                })
                resolve(json)
            })
        })
        return promise
    }
    public func3(arg: any) {
        arg = arg?arg:'46c054cb-15f1-4d05-90e8-0a22548488fa';
        let promise = new Promise((resolve, index) => {
            let json : any = [
                {
                    count: 80
                },
                {
                    count: 50
                }
            ]
            let ajax = new Ajax();
            let url = 'http://data-visualization.bayou-tech.cn/web/equipment_statistic/equipmentRate';
            let url1 = 'http://data-visualization.bayou-tech.cn/web/equipment_statistic/equipmentRate?accessToken='+localStorage["token"]+'&incId=' + arg;
            let token: string = localStorage["token"], data: string;
            if (token) {
                data = `accessToken=${token}&incId=${arg}`;
            } else {
                window.location.href = './login.html';
            }
            let a = ajax.post(url, data);
            let abc=ajax.ajax(url1,function(res){},function(fail){})
            abc.then(res => {
                json.map((item, index) => {
                    switch (index) {
                        case 0:
                            return item.count = res.result.onLineRate;
                        case 1:
                            return item.count = res.result.runRate;
                       
                    }
                })
                resolve(json);
            })

        })
        return promise;
    }
    public func4(arg: any) {
        let promise = new Promise((resolve, index) => {
            let json;
            if(localStorage['json']){
                 json = JSON.parse(localStorage['json']);
                 let newJson = json.map(arr=>{
                    //  去除待定的
                      return arr.filter(it=>{
                          return it.timer != '待定';
                      });
                 });
                 json = newJson;
            }else{
                 json = [[],[]]
            }
             
            let ajax = new Ajax();
            let url1 = 'http://data-visualization.bayou-tech.cn/web/mobile_org_info/graphActualTimeData?accessToken='+ localStorage["token"]
            let token: string = localStorage["token"], data: string;
            if (token) {
                data = `accessToken=${token}`;
            } else {
                window.location.href = './login.html';
            }
            let abc=ajax.ajax(url1,function(res){},function(fail){})
            abc.then(res => {
                json.map((item, index) => {
                    if(index == 0){
                        let obj: any = {};
                        obj.time = res.result.time;
                        obj.number = res.result.runEntCount;
                        item.push(obj);
                        if(item.length > 9){
                            item.shift();
                        }
                    }else{
                        let obj: any = {};
                        obj.time = res.result.time;
                        obj.number = res.result.abnormalEntCount;
                        item.push(obj);
                        if(item.length > 9){
                            item.shift();
                        }
                    }
                     
                })
                localStorage['json'] = JSON.stringify(json);
                let newObj:any = {};
                newObj.time = '待定';
                newObj.number = '0';
                // 增加待定的
                json.map((it,ind)=>{
                    for(let i=0; i<15; i++){
                        if(it.length < 9){
                            it.push(newObj);
                        }else{
                            break;
                        }
                    }
                })
                resolve(json);
            })

        })
        return promise;
        
    }
    public func5(arg: any) {
        let promise = new Promise((resolve, index) => {
            let json: any = [
                [
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    }
                ],
                [
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    }
                ],
                [
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    },
                    {
                        time: '待定',
                        number: 0
                    }
                ]
            ]
            let ajax = new Ajax();
            let url = 'http://data-visualization.bayou-tech.cn/web/inc_evaluate/historyData';
            let url1 = 'http://data-visualization.bayou-tech.cn/web/inc_evaluate/historyData?accessToken='+localStorage["token"]
            let token: string = localStorage["token"], data: string;
            if (token) {
                data = `accessToken=${token}`;
            } else {
                window.location.href = './login.html';
            }
            let a = ajax.post(url, data)
            let abc=ajax.ajax(url1,function(res){},function(fail){})
            abc.then(res => {
                let result = res.result;
                console.log(res)
                
                result.reverse();
                result.splice(-7,6);
                json.map((item, index) => {
                    result.map((arr,num) =>{
                        let obj = {
                            time: '待定',
                            number: 0
                        }
                        if(index == 0){
                            obj.time = arr.date + '号'
                            obj.number = arr.normalCount
                            item.unshift(obj)
                            item.pop()
                        }else if(index == 1){
                            obj.time = arr.date+ '号'
                            obj.number = arr.abnormalCount
                            item.unshift(obj)
                            item.pop()
                        }else{
                            obj.time = arr.date+ '号'
                            obj.number = arr.offLine
                            item.unshift(obj)
                            item.pop()
                        }
                    })
                })
                resolve(json);
            })

        })
        return promise;
    }
    public func6(arg: any) {
        arg = arg ? arg : '46c054cb-15f1-4d05-90e8-0a22548488fa';
        let promise = new Promise((resolve, index) => {
            let json: any = [
                {
                    id: 0,
                    count: 150,
                    color: '#28FF28',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: -340,
                    countY: -150,
                    name: 'UV',
                    percent: 0
                },
                {
                    id: 1,
                    count: 23,
                    color: 'red',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: 230,
                    countY: -150,
                    name: '活性炭',
                    percent: 0
                },
                {
                    id: 2,
                    count: 45,
                    color: 'yellow',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: -340,
                    countY: 250,
                    name: 'RCO',
                    percent: 0
                },
                {
                    id: 3,
                    count: 32,
                    color: 'pink',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: 230,
                    countY: 250,
                    name: 'RTO',
                    percent: 0
                }
            ]
            // let ajax = new Ajax();
            // let url = 'http://data-visualization.bayou-tech.cn/web/govern_fows/governFlows';
            // let url1 = 'http://data-visualization.bayou-tech.cn/web/govern_fows/governFlows?accessToken='+localStorage["token"]+'&incId=46c054cb-15f1-4d05-90e8-0a22548488fa'
            // let token: string = localStorage["token"], data: string;
            // if (token) {
            //     data = `accessToken=${token}&incId=${arg}`;
            // } else {
            //     window.location.href = './login.html';
            // }

            // let a = ajax.post(url, data)
            // let abc=ajax.ajax(url1,function(res){},function(fail){})
            // abc.then(res => {
            //     json.map((item, index) => {
            //         switch (index) {
            //             case 0:
            //                 return item.count = res.result.uv;
            //             case 1:
            //                 return item.count = res.result.aca;
            //             case 2:
            //                 return item.count = res.result.rco;
            //             case 3:
            //                 return item.count = res.result.rto;
            //         }
            //     })
                resolve(json);
            // })

        })
        return promise;
    }
    public func7(arg: any) {

    }
    public func8(arg: any) {
        let promise = new Promise((resolve, index) => {
            let json: any = [
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                },
                {
                    time: '待定',
                    number: 0
                }
            ]  
            let ajax = new Ajax();
            let url = 'http://data-visualization.bayou-tech.cn/web/mobile_org_info/graphActualTimeData';
            let url1 = 'http://data-visualization.bayou-tech.cn/web/mobile_org_info/graphActualTimeData?accessToken='+localStorage["token"];
            let token: string = localStorage["token"], data: string;
            if (token) {
                data = `accessToken=${token}`;
            } else {
                window.location.href = './login.html';
            }
            let a = ajax.post(url, data)
            let abc=ajax.ajax(url1,function(res){},function(fail){})
            abc.then(res => {
               
                let obj = {
                    time: '待定',
                    number: 0
                }
                obj.time = res.result.time;
                obj.number = res.result.entCount;
                
                json.unshift(obj);
                json.pop();

                resolve(json);
            })

        })
        return promise;
    }
}