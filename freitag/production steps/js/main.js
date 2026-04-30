$(function () {

    let $con_2_height = $("#con_2").offset().top;
    let $con_3_height = $("#con_3").offset().top;
    let $con_4_height = $("#con_4").offset().top;
    let $con_5_height = $("#con_5").offset().top;
    let $con_6_height = $("#con_6").offset().top;

    $("#step_1").click(function(){
        // alert();
     $("html, body").stop().animate({scrollTop:$con_2_height},800);
     });


     $("#step_2").click(function(){
        // alert();
     $("html, body").stop().animate({scrollTop:$con_3_height},800);
     });


     $("#step_3").click(function(){
        // alert();
     $("html, body").stop().animate({scrollTop:$con_4_height},800);
     });


     $("#step_4").click(function(){
        // alert();
     $("html, body").stop().animate({scrollTop:$con_5_height},800);
     });

    $("#step_5").click(function(){
        // alert();
     $("html, body").stop().animate({scrollTop:$con_6_height},800);
     });




    // // alert();

    $("#con_2_button").click(function () {
        $("#con_2_info").css("z-index","0");
        $("body").css("overflow","hidden");
        $("#header_wrap").css("display","none");
        $("html, body").stop().animate({scrollTop:$con_2_height},500);

    })

    $("#con_2_undo").click(function () {
        $("#con_2_info").css("z-index","-1");
        $("body").css("overflow","auto");
        $("#header_wrap").css("display","block");
    })


    //////////////////////////

    $("#con_3_button").click(function () {
        $("#con_3_info").css("z-index","0");
        $("body").css("overflow","hidden");
        $("#header_wrap").css("display","none");
        $("html, body").stop().animate({scrollTop:$con_3_height},500);
    })

    $("#con_3_undo").click(function () {
        $("#con_3_info").css("z-index","-1");
        $("body").css("overflow","auto");
        $("#header_wrap").css("display","block");
    })


    //////////////////////////

    $("#con_4_button").click(function () {
        $("#con_4_info").css("z-index","0");
        $("body").css("overflow","hidden");
        $("#header_wrap").css("display","none");
        $("html, body").stop().animate({scrollTop:$con_4_height},500);
    })

    $("#con_4_undo").click(function () {
        $("#con_4_info").css("z-index","-1");
        $("body").css("overflow","auto");
        $("#header_wrap").css("display","block");
    })


    //////////////////////////
    $("#con_5_button").click(function () {
        $("#con_5_info").css("z-index","0");
        $("body").css("overflow","hidden");
        $("#header_wrap").css("display","none");
        $("html, body").stop().animate({scrollTop:$con_5_height},500);
    })

    $("#con_5_undo").click(function () {
        $("#con_5_info").css("z-index","-1");
        $("body").css("overflow","auto");
        $("#header_wrap").css("display","block");
    })

    //////////////////////////

    $("#con_6_button").click(function () {
        $("#con_6_info").css("z-index","0");
        $("body").css("overflow","hidden");
        $("#header_wrap").css("display","none");
        $("html, body").stop().animate({scrollTop:$con_6_height},800);
    })

    $("#con_6_undo").click(function () {
        $("#con_6_info").css("z-index","-1");
        $("body").css("overflow","auto");
        $("#header_wrap").css("display","block");
    })



}); //$(function)