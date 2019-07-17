function validate() {
    var re = /^[a-zA-Z0-9]{4,12}$/ // 아이디와 패스워드가 적합한지 검사할 정규식
    var $id = $('#id');
    var $pw = $('#pw');
    //체킹함수
    function check(re, what, message) {
        if (re.test(what.value)) {
            return true;
        }
        alert(message);
        what.value = ""; //해당 위치값 초기화
        what.focus(); //해당 위치로 마우스커서 옮김
        return false;
    }
    //만든 체킹함수로 아이디, 패스워드 잘입력됬는지 확인.

    if (!check(re, id, "아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }

    if (!check(re, pw, "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }
    alert("로그인이 완료되었습니다.");
}

//좌측상단 토글
$('p.a').click(function () {
    $('p.b').toggle('slow');
    $('p.c').toggle('slow');
});

$('.b').click(function () {
    $('body').css("background-color", "#0099a4");

})
$('.c').click(function () {
    $('body').css("background-color", "#00ffa8");

})
//목차 토글

$('.nav').click(function () {
    $('.top').toggle('slow');
    $('.mid').toggle('slow');
    $('.jungle').toggle('slow');
    $('.ad').toggle('slow');
    $('.sup').toggle('slow');
});


$(window).resize(function(){

       if ($('header').width() == 320 ){

              // is mobile device

       }

});

$(document).load($(window).bind("resize", checkPosition));

function checkPosition()
{
    if($(window).width() < 767)
    {
        $("#body-container .main-content").remove().insertBefore($("#body-container .left-sidebar"));
    } else {
        $("#body-container .main-content").remove().insertAfter($("#body-container .left-sidebar"));
    }
}
