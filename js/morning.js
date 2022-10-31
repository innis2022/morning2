$(document).ready(function(){
    //상단메뉴 마우스오버시_각 항목 섭메뉴 슬라이드
    $(".mainMenu").on("mouseenter click" ,function(){
        $(".mainMenu").removeClass("active");
        // $(".subMenu").stop().slideUp();
        //위로 슬라이드하겠다(display:none)
        $("#white").stop().animate({height:"80px"});
        $(".subMenu").stop().slideDown();
        //모든 하위메뉴가 슬라이드 다운한다
    });

    $(".subMenu").mouseenter(function(){
        $(".mainMenu").removeClass("active");
        $(this).prev().addClass("active");
    });

    //섭메뉴 마우스아웃시 위로 슬라이드
    $("header>nav").mouseleave(function(){
        menu();
    });

    //메뉴 마지막 포커스를 잃을 때
    $(".last").blur(function(){
        menu();
    });

    function menu() {
        $(".mainMenu").removeClass("active");
        $(".subMenu").stop().slideUp();
        $("#white").stop().animate({height:0});
    }

    setInterval(x,2000);
    function x() {
        $("#sliding div").stop().animate({left:"-1000px"}, 1000, function(){
            $(this).append($(this).children().first() );
            $(this).css("left",0);
        });
    }

//공지사항
$(".show").click(function(){
    $("#popup").fadeIn();
});
$("#popup button").click(function(){
    $("#popup").fadeOut();
});

//키보드자판에서 어떠키를 눙렀는지 
$(document).keydown(function(event){		
    if(event.key === "Escape"){
        //alert("ddd");
        $("#popup").fadeOut();
    }
});
    //mouseover()와 mouseout()의 단점
    // bubbling현상이 생긴다(버벅거림)
    // 해당 지정요소에만 이벤트가 발생하지 않고 부모요소에서도 동일하게 발생함
    //(부모요소로 했을 때 bubbling현상이 심하다)
    //mouseover() = mouseenter()
    //mouseout() = mouseleave()

});