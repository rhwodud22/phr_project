// 현재 비밀번호(기존 비밀번호) 확인
// function checkPw(str) {

// }

// 새 비밀번호 조건 확인(위 조건 만족 후)

// 비밀번호 조건 확인
function checkNewpw(str) {
    var pw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$$/;


    var s = str.value;
    var message = "";
    var color = "";
    if (s.length) {
        if (!pw.test(s)) {
            color = "#FF8C42";
            message = "영문+숫자+특수문자 6자리 이상 필요";
        }
        else {
            message = "";
            color = "#808080";
        }

        document.getElementById("checkNewpw").innerHTML = message;
        document.getElementById("checkNewpw").style.color = color;
    }
}

// 새 비밀번호와 재입력한 새 비밀번호 확인
function recheckNewpw(str) {
    var pwd1 = $('input[name=passNew]').val();
    var pwd2 = $('input[name=passNew2]').val();
    var message = "";
    var color = "";

    if (pwd1 != '' && pwd2 == '') {
        color = "#FF8C42";
        message = "비밀번호를 확인해주세요.";
    } else if (pwd1 != "" || pwd2 != "") {
        if (pwd1 == pwd2) {
            message = "비밀번호가 일치합니다."
            color = "#FF8C42";
        } else {
            message = "비밀번호가 일치하지 않습니다."
            color = "#FF8C42";
        }
    }

    document.getElementById("recheckNewpw").innerHTML = message;
    document.getElementById("recheckNewpw").style.color = color;
}

// 취소 버튼 클릭 시, 팝업 토스트 표시
// function btn_cancel() {

// }
// 저장 버튼 클릭 시, 팝업 토스트 표시
// function btn_save() {

// }