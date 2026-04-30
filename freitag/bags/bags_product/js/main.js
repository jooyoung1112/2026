$(function(){

//   alert();

   //toggle button

   let a = 0; //클릭하는 횟수를 담는 변수명
   let b = 0; //홀짝 연산해서 담을 그릇
 

   $("#con_1_text_4 li").click(function(){

    // alert();

    let $con_1_text_4_li_index = $(this).index();
    // console.log($con_1_text_4_li_index);
    a++;
    b=a%2;


    if(b==1){

        $(".con_1_sub_info").fadeOut();
        $(".con_1_sub_info").eq($con_1_text_4_li_index).fadeIn();
        $(".toggle_button").removeClass("on");
        $(".toggle_button").eq($con_1_text_4_li_index).addClass("on");
    }else{


     
        $(".con_1_sub_info").eq($con_1_text_4_li_index).css("display","none");
        $(".toggle_button").eq($con_1_text_4_li_index).removeClass("on");
    }
   });
 

   //liked interaction
   $(".liked").click(function(){

    // alert();
    a++;
    b=a%2;


    if(b==1){

        $(".liked").addClass("on");
    }else{

        $(".liked").removeClass("on");
    }
   });
 
      //button interaction
      $("#con_1_button button").click(function(){
        let $con_1_button_index = $(this).index();

 
        // a++;
        // b=a%2;
    
    
        // if(b==1){
            $("#con_1_button button").removeClass("on");
        
            $("#con_1_button button").eq($con_1_button_index).addClass("on");

        // }else{
            // $("#con_1_button button").removeClass("on");
            // $("#con_1_button button").eq($con_1_button_index).removeClass("on");
 
        });

        $("#con_1_text_3").click(function(){
        
     
                $("#con_1_button button").removeClass("on");
    
            });


        $("#con_1_text_4").click(function(){
        
     
                $("#con_1_button button").removeClass("on");
    
            });
}); //$(function()