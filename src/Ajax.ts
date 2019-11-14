export class Ajax {
    /**
     * 封装自己的ajax函数
     * @param method(必选)    请求类型  get 和 post
     * @param url(必选)       请求的url地址   相同域名下的页面（此函数不支持跨域请求）
     * @param data(必选)      请求协带的数据  以js对象的形式定义，如：{name:'张三'}
     * @param callback(必选)  回调函数,可接收一个参数，这个参数就是服务器响应的数据
     * @param dataType(可选)      指定服务器响应的数据类型（可选值：json,xml,text），如果是json模式，则使用json解析数据，默认为text普通字符串
     */

    public post(url,data){
        let promise:any = new Promise((resolve,reject)=>{
            //创建异步对象  
            var xhr = new XMLHttpRequest();
            //设置请求的类型及url
            //post请求一定要添加请求头才行不然会报错
            xhr.open('post', url );
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            //发送请求
            xhr.send(data);
            xhr.onreadystatechange = function () {
                // 这步为判断服务器是否正确响应
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText).result);
                }
            };
        });
        return promise;
    }

    public ajax(url, fnSuccess, fnFail) {
        let promise:any = new Promise((resolve,reject)=>{
            //创建对象
            var xhr = new XMLHttpRequest();
            //alert(xhr.readyState);:0
            //链接服务器 请求方式   请求文件  异步或同步 异步
            xhr.open("POST", url, true);
            //alert(xhr.readyState);:1
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
            //发送请求
            xhr.send();
            //alert(xhr.readyState);:1
            //接收返回
            xhr.onreadystatechange = function() {
                //alert(xhr.readyState);:2,3,4
                if(xhr.readyState === 4) {
                    //xhr.status http状态码：
                    //301：永久重定向
                    //302：临时重定向   tamall.com=>www.tamall.com
                    //304也是成功得
                    if(xhr.status >= 200 && xhr.status < 300) {
                        var json = null;
                        json = JSON.parse(xhr.responseText);
                        resolve(json)
                        // fnSuccess(json);
                        fnSuccess(fnSuccess(json));
                    } else {
                        fnFail(xhr.status);
                    }
                }
            }
        });
    
        return promise;
    }
}