$(function(){

    let $con_2_1_height = $("#con_2 li").eq(0).offset().top;
    let $con_2_2_height = $("#con_2 li").eq(1).offset().top;
    let $con_2_3_height = $("#con_2 li").eq(2).offset().top;
    let $con_2_4_height = $("#con_2 li").eq(3).offset().top;

    $("#1st_manifesto").click(function(){
        $("html, body").stop().animate({scrollTop:$con_2_1_height},800);
    });



    $("#2nd_manifesto").click(function(){
        $("html, body").stop().animate({scrollTop:$con_2_2_height},800);
    });


    $("#3rd_manifesto").click(function(){
        $("html, body").stop().animate({scrollTop:$con_2_3_height},800);
    });

    $("#4th_manifesto").click(function(){
        $("html, body").stop().animate({scrollTop:$con_2_4_height},800);
    });


}); //$(function()