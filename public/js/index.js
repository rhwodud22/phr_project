$(".s_rightBtn").click(function () {
    var clickID = $(this).parent().parent().children().eq(1);

    if (clickID.is(":visible")) {
        $(this).children("span").toggleClass("fa fa-chevron-up fa fa-chevron-down");
        clickID.slideUp();
    } else {
        $(this).children("span").toggleClass("fa fa-chevron-down fa fa-chevron-up");
        clickID.slideDown();
    }
});

$('.tab_menu_btn').on('click', function () {
    //버튼 색 제거,추가
    $('.tab_menu_btn').removeClass('on');
    $(this).addClass('on')

    //컨텐츠 제거 후 인덱스에 컨텐츠 노출 맞는
    var idx = $('.tab_menu_btn').index(this);

    $('.tab_box').hide();
    $('.tab_box').eq(idx).show();
});


// // 파형 출력
// var wavesurfer = WaveSurfer.create({
//     container: '#waveform',
//     scrollParent: true,
//     waveColor: 'violet',
//     progressColor: 'purple'
// });

// wavesurfer.load('/audio/1.mp3');
// // wavesurfer.load('/audio/1.pcm');

// wavesurfer.on('ready', function () {
//     wavesurfer.play();
// });


// QnA 더보기 토글
$('.btn_more').click(function(event) {
    
    // console.log('.btn_more click', event.target);


    // input hidTempSynopsis 태그 참조
    // var flag = $('#hidTempSynopsis');
    var flag = $(event.target).siblings('#hidTempSynopsis');

    // input hidTempSynopsis 태그가 가지고 있는 값
    var flagValue = flag.val();

    // 본문 내용이 담기는 div 태그 참조
    var SynopsisDiv = $(event.target).parent().find('#SynopsisDiv');    
    // console.log(SynopsisDiv);

    // 
    var synopMore = $(this);
    
    // 플래그 태그가 있는 경우
    if (flag != null) {
        // 플래그 값 0 인 경우 - 더보기 기능 
        if (flagValue == "0") {
            SynopsisDiv.css("height", "auto");
            SynopsisDiv.css("font-size", "1em");
            SynopsisDiv.css("display", "block");
            // $("#synopMore").text("닫기");
            synopMore.text("닫기");
            flag.val("1");
        }
        // 플래그 값이 0이 아닌 경우 - 더보기 닫기 기능
        else {
            SynopsisDiv.css("height", "3em");
            SynopsisDiv.css("display", "-webkit-box");
            // $("#synopMore").text("더보기");
            synopMore.text("더보기");
            flag.val("0");
        }
    }
    // 플래그 태그가 없는 경우
    else {
        alert("[더보기] 추가 정보가 없습니다.");
    }

});


// 답장하기 버튼 클릭 시 답변area 출력(replyarea)
$('.btn_reply').click(function(event){
    var replyarea=$(event.target).siblings('#replyarea');
    console.log(replyarea);
    replyarea.show();
});

$('.btn_cancel').click(function(event){
    var hid=$(event.target).parent().parent().parent('#replyarea');
    hid.val('');
    var hid_textarea=$(event.target).parent().parent().siblings('textarea');
    console.log('hid_textarea', hid_textarea)
    hid_textarea.val('');
    hid.css("display", "none");
});