$(function(){

     let $con_1_height = $("#con_1").offset().top;
     let $con_3_height = $("#con_3").offset().top;
    let $con_5_height = $("#con_5").offset().top;
    let $con_12_height = $("#con_12").offset().top;
    let $icon_1_height = $("#icon_1").offset().top;
    let $icon_2_height = $("#icon_2").offset().top;
    let $thanks_height = $("#thanks").offset().top;
    // console.log($con_3_height);
    // console.log($con_5_height);
    // console.log($con_12_height);

    $(window).scroll(function () {

      if ($(this).scrollTop() > 0) {
    
         $("#con_1_img_wrap").stop().animate({"left": "0px"},8000,"linear",function(){
					
          $("#con_1_img_wrap").stop().animate({"left":"1200px"},8000,"linear"); 

				}); 

      }else{
        $("#con_1_img_wrap").stop().animate({"left":"1200px"},8000,"linear"); 
      }

	});


    $("#con_1_button").click(function(){
        $("#con_1_button").addClass("on");
        $("#con_3_button").removeClass("on");
        $("#con_5_button").removeClass("on");
        $("#con_12_button").removeClass("on");
        $("html, body").stop().animate({ scrollTop: $con_1_height}, 300, "linear");

   });
    $("#con_3_button").click(function(){
        $("#con_3_button").addClass("on");
        $("#con_1_button").removeClass("on");
        $("#con_5_button").removeClass("on");
        $("#con_12_button").removeClass("on");
        
         $("html, body").stop().animate({ scrollTop: $con_3_height+30 }, 300, "linear");
    });

    $("#con_5_button").click(function(){
        $("#con_1_button").removeClass("on");
        $("#con_3_button").removeClass("on");
        $("#con_12_button").removeClass("on");
        $("#con_5_button").addClass("on");
        $("html, body").animate({scrollTop:$con_5_height},300, "linear");
   });

   $("#con_12_button").click(function(){
    $("#con_12_button").addClass("on");
    $("#con_1_button").removeClass("on");
     $("#con_3_button").removeClass("on");
     $("#con_5_button").removeClass("on");
    $("html, body").animate({scrollTop:$icon_2_height},300, "linear");

   });

    $("#nav_wrap li").click(function(){
        let $NavIndex=$(this).index();
         console.log($NavIndex);

        let $Nav_HasOn=$(this).hasClass("on");


         //첫번째 버튼을 클릭할때 클래스 on을 갖고 있지 않다면, =클래스 on이 비활성화라면, 
         if($Nav_HasOn != true){
            $("#nav_wrap li").removeClass("on");
            $(this).addClass("on");
         }
    }); 

    $(window).scroll(function () {
      if ($(this).scrollTop() < $con_3_height) {
        $("#con_1_button").addClass("on");
        $("#con_3_button").removeClass("on");
        $("#con_5_button").removeClass("on");
        $("#con_12_button").removeClass("on");
      } else if ( $(this).scrollTop() >= $con_3_height && $(this).scrollTop() < $con_5_height){
        $("#con_3_button").addClass("on");
        $("#con_1_button").removeClass("on");
        $("#con_5_button").removeClass("on");
        $("#con_12_button").removeClass("on");
    } else if ( $(this).scrollTop() >= $con_5_height && $(this).scrollTop() < $icon_2_height){
        $("#con_1_button").removeClass("on");
        $("#con_3_button").removeClass("on");
        $("#con_12_button").removeClass("on");
        $("#con_5_button").addClass("on");
      } else if ( $(this).scrollTop() >= $icon_2_height){
        $("#con_12_button").addClass("on");
        $("#con_1_button").removeClass("on");
        $("#con_3_button").removeClass("on");
        $("#con_5_button").removeClass("on");
    }
      //a>=27 && a<=36

    });


    let $q_1_height = $("#con_3_q_1").offset().top;
    let $q_2_height = $("#con_3_q_2").offset().top;
    let $q_3_height = $("#con_3_q_3").offset().top;

    // console.log($q_1_height);

    $(window).scroll(function () {

      if ($(this).scrollTop() > $q_1_height-500 && $(this).scrollTop() < $q_2_height) {
        // alert();
        $("#con_3_q_1_a_1").stop().animate({"width":"650px"},500, "linear");
        $("#con_3_q_1_a_2").stop().animate({"width":"250px"},510, "linear");
        $("#con_3_q_1_a_3").stop().animate({"width":"100px"},520, "linear");

      } else{
        $("#con_3_q_1_a_1").css("width","50px");
        $("#con_3_q_1_a_2").css("width","50px");
        $("#con_3_q_1_a_3").css("width","50px");
      }

    });

    $(window).scroll(function () {

      if ($(this).scrollTop() > $q_2_height-500 && $(this).scrollTop() < $q_3_height) {
        // alert();
        $("#con_3_q_2_a_1").stop().animate({"width":"590px"},500, "linear");
        $("#con_3_q_2_a_2").stop().animate({"width":"330px"},510, "linear");
        $("#con_3_q_2_a_3").stop().animate({"width":"220px"},520, "linear");
        $("#con_3_q_2_a_4").stop().animate({"width":"180px"},530, "linear");
        $("#con_3_q_2_a_5").stop().animate({"width":"180px"},540, "linear");

      }     else{
        $("#con_3_q_2_a_1").css("width","50px");
        $("#con_3_q_2_a_2").css("width","50px");
        $("#con_3_q_2_a_3").css("width","50px");
        $("#con_3_q_2_a_4").css("width","50px");
        $("#con_3_q_2_a_5").css("width","50px");
      }


    });

    let $con_5_wrap_1 = $("#con_5_wrap_1").offset().top;
    let $con_5_wrap_2 = $("#con_5_wrap_2").offset().top;
    let $con_5_wrap_3 = $("#con_5_wrap_3").offset().top;



    console.log($con_5_wrap_1);
    console.log($con_5_wrap_2);
    console.log($con_5_wrap_3);

    $(window).scroll(function () {

      if ($(this).scrollTop() > $con_5_wrap_1 -300) {
        $("#con_5_span_1").stop().animate({"width":"100%"},500, "linear");

      } else{
        $("#con_5_span_1").css("width","50px");
      }

    });


    $(window).scroll(function () {

      if ($(this).scrollTop() > $con_5_wrap_2 -300) {
        $("#con_5_span_2").stop().animate({"width":"100%"},500, "linear");

      } else{
        $("#con_5_span_2").css("width","50px");
      }

    

    });

    $(window).scroll(function () {

      if ($(this).scrollTop() > $con_5_wrap_3 -300) {
        $("#con_5_span_3").stop().animate({"width":"100%"},500, "linear");

      } else{
        $("#con_5_span_3").css("width","50px");
      }

    

    });


   
    $(window).scroll(function () {

      if ($(this).scrollTop() > $q_1_height-500 && $(this).scrollTop() < $q_2_height) {
        // alert();
        $("#con_3_q_1_a_1").stop().animate({"width":"650px"},500, "linear");
        $("#con_3_q_1_a_2").stop().animate({"width":"250px"},510, "linear");
        $("#con_3_q_1_a_3").stop().animate({"width":"100px"},520, "linear");

      } else{
        $("#con_3_q_1_a_1").css("width","50px");
        $("#con_3_q_1_a_2").css("width","50px");
        $("#con_3_q_1_a_3").css("width","50px");
      }

    });



    // $(window).scroll(function () {

    //   if ($(this).scrollTop() > $icon_1_height -300 && $(this).scrollTop() < $icon_1_height + 800) {
    //     $("#icon_1").stop().animate({"padding-top":"200px"},500, "linear");

    //   } else{
    //     $("#icon_1").stop().animate({"padding-top":"1500px"},500, "linear");
    //   }

    

    // });



    $(window).scroll(function () {

      if ($(this).scrollTop() > $icon_2_height -300) {
        $("#icon_2 p").stop().animate({"margin-top":"0"},500, "linear");

      } else{
        $("#icon_2 p").stop().animate({"margin-top":"1500px"},500, "linear");
      }

    

    });


    let $con_6 = $("#con_6").offset().top;



    $(window).scroll(function () {

      if ($(this).scrollTop() > $con_6  ) {
        // alert();
        $("#con_6_toggle div").addClass("on");
        $("#con_6_screen").addClass("on");
       } else{
         $("#con_6_toggle div").removeClass("on");
         $("#con_6_screen").removeClass("on");
       }

    });




   let a = 0; //클릭하는 횟수를 담는 변수명
   let b = 0; //홀짝 연산해서 담을 그릇
 

   $("#con_6_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_6_toggle div").addClass("on");
        $("#con_6_screen").addClass("on");
    }else{
        $("#con_6_toggle div").removeClass("on");
        $("#con_6_screen").removeClass("on");
    }
   });

   $("#con_12_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_12_toggle div").addClass("on");
        $("#con_12_screen_1").addClass("on");
        $("#con_12_screen_2").addClass("on");
    }else{
        $("#con_12_toggle div").removeClass("on");
        $("#con_12_screen_1").removeClass("on");
        $("#con_12_screen_2").removeClass("on");
    }
   });

   $("#con_13_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_13_toggle div").addClass("on");
        $("#con_13_screen_1").addClass("on");
        $("#con_13_screen_2").addClass("on");
    }else{
        $("#con_13_toggle div").removeClass("on");
        $("#con_13_screen_1").removeClass("on");
        $("#con_13_screen_2").removeClass("on");
    }
   });


   $("#con_14_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_14_toggle div").addClass("on");
        $("#con_14_screen_1").addClass("on");
        $("#con_14_screen_2").addClass("on");
    }else{
        $("#con_14_toggle div").removeClass("on");
        $("#con_14_screen_1").removeClass("on");
        $("#con_14_screen_2").removeClass("on");
    }
   });

   $("#con_15_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_15_toggle div").addClass("on");
        $("#con_15_screen_1").addClass("on");
    }else{
        $("#con_15_toggle div").removeClass("on");
        $("#con_15_screen_1").removeClass("on");
    }
   });


 
   $("#con_16_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_16_toggle div").addClass("on");
        $("#con_16_screen_1").addClass("on");
        $("#con_16_screen_2").addClass("on");
    }else{
        $("#con_16_toggle div").removeClass("on");
        $("#con_16_screen_1").removeClass("on");
        $("#con_16_screen_2").removeClass("on");
    }
   });

    
   $("#con_17_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_17_toggle div").addClass("on");
        $("#con_17_screen_1").addClass("on");
        $("#con_17_screen_2").addClass("on");
    }else{
        $("#con_17_toggle div").removeClass("on");
        $("#con_17_screen_1").removeClass("on");
        $("#con_17_screen_2").removeClass("on");
    }
   });

   $("#con_18_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_18_toggle div").addClass("on");
        $("#con_18_screen_1").addClass("on");
        $("#con_18_screen_2").addClass("on");
    }else{
        $("#con_18_toggle div").removeClass("on");
        $("#con_18_screen_1").removeClass("on");
        $("#con_18_screen_2").removeClass("on");
    }
   });


   $("#con_19_toggle").click(function(){

    a++;
    b=a%2;

    if(b==1){
        $("#con_19_toggle div").addClass("on");
        $("#con_19_screen_1").addClass("on");
        $("#con_19_screen_2").addClass("on");
    }else{
        $("#con_19_toggle div").removeClass("on");
        $("#con_19_screen_1").removeClass("on");
        $("#con_19_screen_2").removeClass("on");
    }
   });



   let $con_12 = $("#con_12").offset().top;
   let $con_13 = $("#con_13").offset().top;
   let $con_14 = $("#con_14").offset().top;
   let $con_15 = $("#con_15").offset().top;
   let $con_16 = $("#con_16").offset().top;
   let $con_17 = $("#con_17").offset().top;
   let $con_18 = $("#con_18").offset().top;
   let $con_19 = $("#con_19").offset().top;



   $(window).scroll(function () {

    if ($(this).scrollTop() > $con_12  && $(this).scrollTop() < $con_12 +800 ) {
      // alert();
      $("#con_12_toggle div").addClass("on");
      $("#con_12_screen_1").addClass("on");
      $("#con_12_screen_2").addClass("on");
     } else{
      $("#con_12_toggle div").removeClass("on");
      $("#con_12_screen_1").removeClass("on");
      $("#con_12_screen_2").removeClass("on");
     }

  });

  $(window).scroll(function () {

    if ($(this).scrollTop() > $con_13  && $(this).scrollTop() < $con_13 +500 ) {
      // alert();
      $("#con_13_toggle div").addClass("on");
      $("#con_13_screen_1").addClass("on");
      $("#con_13_screen_2").addClass("on");
     } else{
      $("#con_13_toggle div").removeClass("on");
      $("#con_13_screen_1").removeClass("on");
      $("#con_13_screen_2").removeClass("on");
     }

  });
  

  $(window).scroll(function () {

    if ($(this).scrollTop() > $con_14  && $(this).scrollTop() < $con_14 +500 ) {
      // alert();
      $("#con_14_toggle div").addClass("on");
      $("#con_14_screen_1").addClass("on");
      $("#con_14_screen_2").addClass("on");
     } else{
      $("#con_14_toggle div").removeClass("on");
      $("#con_14_screen_1").removeClass("on");
      $("#con_14_screen_2").removeClass("on");
     }

  });

  $(window).scroll(function () {

    if ($(this).scrollTop() > $con_15  && $(this).scrollTop() < $con_15 +500 ) {
      // alert();
      $("#con_15_toggle div").addClass("on");
      $("#con_15_screen_1").addClass("on");
      $("#con_15_screen_2").addClass("on");
     } else{
      $("#con_15_toggle div").removeClass("on");
      $("#con_15_screen_1").removeClass("on");
      $("#con_15_screen_2").removeClass("on");
     }

  });
  

  $(window).scroll(function () {

    if ($(this).scrollTop() > $con_16  && $(this).scrollTop() < $con_16 +500 ) {
      // alert();
      $("#con_16_toggle div").addClass("on");
      $("#con_16_screen_1").addClass("on");
      $("#con_16_screen_2").addClass("on");
     } else{
      $("#con_16_toggle div").removeClass("on");
      $("#con_16_screen_1").removeClass("on");
      $("#con_16_screen_2").removeClass("on");
     }

  });
  

  $(window).scroll(function () {

    if ($(this).scrollTop() > $con_17  && $(this).scrollTop() < $con_17 +500  ) {
      // alert();
      $("#con_17_toggle div").addClass("on");
      $("#con_17_screen_1").addClass("on");
      $("#con_17_screen_2").addClass("on");
     } else{
      $("#con_17_toggle div").removeClass("on");
      $("#con_17_screen_1").removeClass("on");
      $("#con_17_screen_2").removeClass("on");
     }

  });
  

  $(window).scroll(function () {

    if ($(this).scrollTop() > $con_18 && $(this).scrollTop() < $con_18 +500  ) {
      // alert();
      $("#con_18_toggle div").addClass("on");
      $("#con_18_screen_1").addClass("on");
      $("#con_18_screen_2").addClass("on");
     } else{
      $("#con_18_toggle div").removeClass("on");
      $("#con_18_screen_1").removeClass("on");
      $("#con_18_screen_2").removeClass("on");
     }

  });


  $(window).scroll(function () {

    if ($(this).scrollTop() > $con_19 && $(this).scrollTop() < $con_19 +500 ) {
      //  alert();
      $("#con_19_toggle div").addClass("on");
      $("#con_19_screen_1").addClass("on");
      $("#con_19_screen_2").addClass("on");
     } else{
      $("#con_19_toggle div").removeClass("on");
      $("#con_19_screen_1").removeClass("on");
      $("#con_19_screen_2").removeClass("on");
     }

  });


  $(window).scroll(function () {

    if ($(this).scrollTop() > $thanks_height) {
      $("#thanks_center").stop().animate({"left":"1080px"},3500,"linear",function(){
					
        $("#thanks_center").stop().animate({"top":"600px"},3000,"linear"); 
      }); 

    } else{
      $("#thanks_center").stop().animate({"left":"10px"},10,"linear",function(){
					
        $("#thanks_center").stop().animate({"top":"230px"},10,"linear"); 
      }); 
    }


  });

  



});
