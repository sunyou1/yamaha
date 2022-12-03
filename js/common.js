$(document).ready(function() {

    $('.depth2, #gnb_bg').hide();

    $('.gnb>li').mouseenter(function(){
        $('.depth2, #gnb_bg').stop().fadeIn();

    });
    $('.gnb>li').mouseleave(function(){
        $('#gnb_bg').stop().fadeOut();
        $('.depth2').stop().fadeOut(100);
    });


    //search
    $(".search_wrap").hide();

    $(".bi-search").click(function () {
        $(".search_wrap").fadeToggle();
    });

    $(".search_close").click(function () {
        $(".search_wrap").fadeOut();
    });

    
    //동영상 슬라이드
    const experience_items = new Swiper('.experience_items', {
        // 옵션
        slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 50,  // 슬라이드 사이 여백
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        loop: true,  // 슬라이드 반복 여부

        // 자동 슬라이드 설정, 비활성화 false
        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000,
    });

    //동영상 구역 마우스 진입시 스탑
    $('.experience_items_list > li > iframe').mouseenter(function () {
        experience_items.autoplay.stop();
    });
    $('.experience_items_list > li > iframe').mouseleave(function () {
        experience_items.autoplay.start();
    });


    //field section
    $('.area_list li:first-child').addClass('active')

    $('.area_list li').click(function(){
        $(this).addClass('active')
        // 선택자를 클릭한 요소에 active라는 클래스를 부여하시오
        $(this).siblings().removeClass('active');
        //형제요소를 ('active')를 제거하라
    });


    $('.field_area ul:not(:first-child)').hide();

    $('.area_list li').click(function(){
        let btnNum = $(this).index();
        $('.field_area ul').eq(btnNum).fadeIn().siblings().hide();
    });



    //SUB

    //concert model
    $('.model_list li:first-child').addClass('active')

    $('.model_list li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active');
    });

    $('.model_ex li:not(:first-child)').hide();

    
    $('.model_list li').click(function(){
        let btnNum = $(this).index();
        console.log('1',$('.model_ex li').eq(btnNum))
        $('.model_ex li').eq(btnNum).fadeIn().siblings().hide();
    });

    



});