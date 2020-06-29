// 아이디 조건 확인
function checkId(str) {
    var reg1 = /^[A-Za-z0-9]{6,14}$/; // 영문+숫자 6자리이상 14자리 이하
    var reg2 = /[A-Za-z]/g;
    var reg3 = /[0-9]/g;

    var s = str.value;
    var message = "";
    var color = "";

    if (s.length) {
        if (!reg1.test(s) || !reg2.test(s) || !reg3.test(s)) {
            color = "red";
            message = "영문+숫자 6자리 이상 입력해주세요.";
        }
    }
    else {
        message = "";
        color = "red";
    }

    document.getElementById("textId").innerHTML = message;
    document.getElementById("textId").style.color = color;

}

// 비밀번호 조건 확인
function checkPw(str) {
    var pw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$$/;

    var s = str.value;
    var message = "";
    var color = "";
    if (s.length) {
        if (!pw.test(s)) {
            color = "red";
            message = "영문+숫자+특수문자 6자리 이상 필요";
        }
    }
    else {
        message = "";
        color = "red";
    }

    document.getElementById("textPw").innerHTML = message;
    document.getElementById("textPw").style.color = color;

}

// 비밀번호와 재입력 비밀번호 확인
function recheckPw(str) {
    var pwd1 = $('input[name=pass]').val();
    var pwd2 = $('input[name=pass2]').val();
    var message = "";
    var color = "";

    if (pwd1 != '' && pwd2 == '') {
        color = "red";
        message = "비밀번호를 확인해주세요.";
    } else if (pwd1 != "" || pwd2 != "") {
        if (pwd1 == pwd2) {
            message = "비밀번호가 일치합니다."
            color = "red";
        } else {
            message = "비밀번호가 일치하지 않습니다."
            color = "red";
        }
    }

    document.getElementById("checkPw").innerHTML = message;
    document.getElementById("checkPw").style.color = color;

}