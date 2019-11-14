// 为注册按钮添加监听事件
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    // 验证表单
    if (!getValueById('phone') || !getValueById('password') || !getValueById('repassword') || !getValueById('email')) {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>请将信息填写完整</font>";
        return false;
    }
    else if (validationPhone() && validationPassword() && validationRePassword() && validationEmail()) {
        alert('注册成功');
        window.location.href = './login.html';
    }
});
// 为phone输入框添加监听
document.getElementById('phone').addEventListener('blur', validationPhone);
// 验证手机号
function validationPhone() {
    var phone = getValueById('phone');
    if (phone === '') {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>手机号码不能为空</font>";
        return false;
    }
    var reg = /^1[34578]\d{9}$/;
    if (!reg.test(phone)) {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>手机号码格式不正确</font>";
        return false;
    }
    document.getElementById('tip').innerHTML = "";
    return true;
}
// 为password输入框添加监听
document.getElementById('password').addEventListener('blur', validationPassword);
// 验证密码
function validationPassword() {
    var password = getValueById('password');
    if (password === '') {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>密码不能为空</font>";
        return false;
    }
    document.getElementById('tip').innerHTML = "";
    return true;
}
// 为repassword输入框添加监听
document.getElementById('repassword').addEventListener('blur', validationRePassword);
// 验证两次输入密码是否一致
function validationRePassword() {
    var password = getValueById('password');
    var repassword = getValueById('repassword');
    if (repassword === '') {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>确认密码不能为空</font>";
        return false;
    }
    if (password !== repassword) {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>两次密码不一致</font>";
        return false;
    }
    document.getElementById('tip').innerHTML = "";
    return true;
}
// 为email输入框添加监听
document.getElementById('email').addEventListener('blur', validationEmail);
// 验证邮箱
function validationEmail() {
    var email = getValueById('email');
    if (email === '') {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>邮箱不能为空</font>";
        return false;
    }
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!reg.test(email)) {
        document.getElementById('tip').innerHTML = "<font color='red' size='3px'>邮箱格式不正确</font>";
        return false;
    }
    document.getElementById('tip').innerHTML = "";
    return true;
}
// 根据id获取value
function getValueById(id) {
    if (id) {
        return document.getElementById(id).value;
    }
}
