// 登录
document.getElementById('phone').addEventListener('blur', function (event) {
    event.preventDefault();
    var phone = getValueById('phone');
    var phonetest = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    var email = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/

    console.log(email.test(phone))
    console.log(phonetest.test(phone))
    if (email.test(phone) || phonetest.test(phone)) {
        document.getElementById('tip').innerHTML = "";
        return false;
    }else {
        document.getElementById('tip').innerHTML = "";
        document.getElementById('tip').innerHTML = "<font color='red' size='2px'>手机号或邮箱格式错误</font>";
        return false;
    }
});
// 登录
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    var phone = getValueById('phone');
    var password = getValueById('password');
    if (!phone) {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>请输入手机号码</font>";
        return false;
    }
    else if (!password) {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>请输入密码</font>";
        return false;
    }else{
        let url = 'http://data-visualization.bayou-tech.cn/web/login?username='+ phone + '&password='+ password
        let url1 = 'http://data-visualization.bayou-tech.cn/web/login?username=1142327164@qq.com&password=hlm.0427.'
        ajax(url,function(res){
            if(res.status == 'success'){
                console.log(res.result.access_token)
                localStorage["token"] = res.result.access_token
                localStorage["phone"] = phone
                localStorage["password"] = password
                window.location.href='./index.html'
            }else{
                alert('登陆失败')
            }
        },function(fail){

            alert('登陆失败')
        })
        
    }


});
// 根据id获取value
function getValueById(id) {
    if (id) {
        return document.getElementById(id).value;
    }
}



function ajax(url, fnSuccess, fnFail) {
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
                fnSuccess(json);
            } else {
                fnFail(xhr.status);
            }
        }
    }
}