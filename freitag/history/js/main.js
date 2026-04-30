$(function(){

    $(function(){
  

        let $con_2_height = $("#con_2").offset().top;
    
        $("#con_1 button").click(function(){
         $("html, body").stop().animate({scrollTop:$con_2_height},800);
         });
    
    
    
    }); //$(function()
 


}); //$(function()