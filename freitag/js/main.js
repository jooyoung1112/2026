$(function(){

    //Section #con_1  Interaction
    $("#con_4_btn li").click(function(){

         var $con_4BtnIndex=$(this).index();
          console.log($con_4BtnIndex);
         //첫번째 버튼을 클릭하면 클래스 on을 갖어라 = $click.
         var $con_4BtnHasOn=$(this).hasClass("on");

         console.log($con_4BtnHasOn);

         //첫번째 버튼을 클릭할때 클래스 on을 갖고 있지 않다면, =클래스 on이 비활성화라면, 
         if($con_4BtnHasOn != true){
             $("#con_4_slide li").fadeOut();
             $("#con_4_slide li").eq($con_4BtnIndex).fadeIn();

             $("#con_4_btn li").removeClass("on");
             $(this).addClass("on");
         }
    }); // $("#con_2_btn li").click(function(){

    //----------------------------------------------


    // let $con_2_height = $("#con_2").offset().top;
    // console.log($con_2_height);

    // $(window).scroll(function(){
    //     if($(this).scrollTop() > $con_2_height){
    //         //$(".con_2_slide").fadeOut();
    //         $(".con_2_slide").eq(1).stop().animate({"display":"block"},100,"easeOutBounce");
    //     }else{
           
    //     }	

    //   //Section #con_3  Interaction

    // $("#con_3_contents_wrap li").click(function(){
    
    //     var $a=$(this).index();
 
    //     $(".con_3_contents_text_box p").removeClass("on");
    //     $(".con_3_contents_text_box h5").removeClass("on");
    //     $(".con_3_contents_text_box div").removeClass("on");


    //     $(".con_3_contents_text_box p").eq($a).addClass("on");
    //     $(".con_3_contents_text_box h5").eq($a).addClass("on");
    //     $(".con_3_contents_text_box div").eq($a).addClass("on");

    // });

    // $("#con_3_contents_wrap li").hover(function(){
    
    //     var $a=$(this).index();
 
    //     $(".con_3_contents_text_box p").removeClass("on");
    //     $(".con_3_contents_text_box h5").removeClass("on");
    //     $(".con_3_contents_text_box div").removeClass("on");


    //     $(".con_3_contents_text_box p").eq($a).addClass("on");
    //     $(".con_3_contents_text_box h5").eq($a).addClass("on");
    //     $(".con_3_contents_text_box div").eq($a).addClass("on");

    // });

    // $("#con_3_contents_wrap").hover(function(){
    
       
    //     $(".con_3_contents_text_box p").removeClass("on");
    //     $(".con_3_contents_text_box h5").removeClass("on");
    //     $(".con_3_contents_text_box div").removeClass("on");



    // });
 
    //----------------------------------------------


}); //$(function()