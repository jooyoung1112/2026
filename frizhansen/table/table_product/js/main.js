
$(function(){
    // alert();
       //scroll event : header fixed
        var $header_height = $("header").offset().top+$("header").outerHeight(true);  
       
    
    
        $(window).scroll(function(){
            if($(this).scrollTop() > $header_height){
                $("header").addClass("fix_box"); 
                $("#logo_wrap").addClass("fix_box");    
                $("#menu_wrap").addClass("fix_box");  
                $(".menu_item span").addClass("fix_box");   
                $(".menu_item").addClass("fix_box"); 
                $("nav").css("top","-500px");    
                $(".menu_item span").removeClass("on");   
    
                
    
            }else{
               $("header").removeClass("fix_box"); 
               $("#logo_wrap").removeClass("fix_box"); 
               $("#menu_wrap").removeClass("fix_box");  
               $(".menu_item span").removeClass("fix_box"); 
               $(".menu_item").removeClass("fix_box"); 
               $("#sub_menu").removeClass("fix_box");   
               $("nav").removeClass("fix_box");     
    
            }	
    
        });// 
    
         //nav event
    
      //nav event
      var a = 0;
      var b = 0;
    
      $(".menu_item")
        .eq(0)
        .click(function () {
    
          $("header").removeClass("fix_box");
          $("html, body").stop().animate({ scrollTop: 0 }, 800);
    
          a ++;
          b=a%2;
    
            if(b==1){
                $("nav").css("top", "135px"); //nav background appearing
                $(".menu_item span").removeClass("on"); //all underline bar removing
                $(".menu_item span").eq(0).addClass("on"); //the targeted-underline bar appearing
                $(".sub_menu_item").css("display", "none"); //all submenu removing
                $(".sub_menu_item").eq(0).css("display", "block"); // the targeted-submenu appearing
            }else{
                $("nav").css("top", "-500px"); //nav background appearing
                $(".menu_item span").eq(0).removeClass("on"); //the targeted-underline bar appearing
                $(".sub_menu_item").eq(0).css("display", "none"); // the targeted-submenu appearing
            }
        });
    
      $(".menu_item")
        .eq(1)
        .click(function () {
          $("header").removeClass("fix_box");
          $("html, body").stop().animate({ scrollTop: 0 }, 800);
    
          a ++;
          b=a%2;
    
          if(b==1){
             $("nav").css("top", "135px"); //nav background appearing
             $(".menu_item span").removeClass("on"); //all underline bar removing
             $(".menu_item span").eq(1).addClass("on"); //the targeted-underline bar appearing
             $(".sub_menu_item").css("display", "none"); //all submenu removing
             $(".sub_menu_item").eq(1).css("display", "block"); // the targeted-submenu appearing
          }else{
              $("nav").css("top", "-500px"); //nav background appearing
              $(".menu_item span").eq(1).removeClass("on"); //the targeted-underline bar appearing
              $(".sub_menu_item").eq(1).css("display", "none"); // the targeted-submenu appearing
          }
        });
    
      $(".menu_item")
        .eq(4)
        .click(function () {
          $("header").removeClass("fix_box");
          $("html, body").stop().animate({ scrollTop: 0 }, 800);
    
          a ++;
          b=a%2;
    
          if(b==1){
             $("nav").css("top", "135px"); //nav background appearing
             $(".menu_item span").removeClass("on"); //all underline bar removing
             $(".menu_item span").eq(4).addClass("on"); //the targeted-underline bar appearing
             $(".sub_menu_item").css("display", "none"); //all submenu removing
             $(".sub_menu_item").eq(2).css("display", "block"); // the targeted-submenu appearing
          }else{
              $("nav").css("top", "-500px"); //nav background appearing
              $(".menu_item span").eq(4).removeClass("on"); //the targeted-underline bar appearing
              $(".sub_menu_item").eq(2).css("display", "none"); // the targeted-submenu appearing
          }
        });
    
      $(".menu_item")
        .eq(6)
        .click(function () {
          // $("header").removeClass("fix_box");
          $("html, body").stop().animate({ scrollTop: 0 }, 800);
    
    
          a ++;
          b=a%2;
    
          if(b==1){
            $("nav").css("top", "135px"); //nav background appearing
            $(".menu_item span").removeClass("on"); //all underline bar removing
            // $(".menu_item span").eq(6).addClass("on");  //the targeted-underline bar appearing
            $(".sub_menu_item").css("display", "none"); //all submenu removing
            $(".sub_menu_item").eq(3).css("display", "block"); // the targeted-submenu appearing
          }else{
              $("nav").css("top", "-500px"); //nav background appearing
              $(".sub_menu_item").eq(3).css("display", "none"); // the targeted-submenu appearing
          }
        });
    
    
       //toggle button
    
       $("#con_2_text_box li").eq(0).click(function(){
        a++
        b=a%2;
    
    
        if(b==1){
    
        
        $("#con_2_text_box li").removeClass("on");    
        $(this).addClass("on");
        $("table").css("display","none");
        $("table").eq(0).css("display","block");
        $(".toggle_button").removeClass("on");
        $(".toggle_button").eq(0).addClass("on");
        }else{
    
        $(this).removeClass("on");
        $("table").eq(0).css("display","none");
        $(".toggle_button").eq(0).removeClass("on");
        }
    
       });
    
    
    
       $("#con_2_text_box li").eq(1).click(function(){
        a++
        b=a%2;
    
    
        if(b==1){
    
        
        $("#con_2_text_box li").removeClass("on");        
        $(this).addClass("on");
        $("table").css("display","none");
        $("table").eq(1).css("display","block");
        $(".toggle_button").removeClass("on");
        $(".toggle_button").eq(1).addClass("on");
        }else{
    
        $(this).removeClass("on");
        $("table").eq(1).css("display","none");
        $(".toggle_button").eq(1).removeClass("on");
        }
    
       });
    
    
       $("#con_2_text_box li").eq(2).click(function(){
        a++
        b=a%2;
    
    
        if(b==1){
    
        
        $("#con_2_text_box li").removeClass("on");    
        $(this).addClass("on");
        $("table").css("display","none");
        $("table").eq(2).css("display","block");
        $(".toggle_button").removeClass("on");
        $(".toggle_button").eq(2).addClass("on");
        }else{
    
        $(this).removeClass("on");
        $("table").eq(2).css("display","none");
        $(".toggle_button").eq(2).removeClass("on");
        }
    
       });
    
       $("#con_2_text_box li").eq(3).click(function(){
        a++
        b=a%2;
    
    
        if(b==1){
    
        $("#con_2_text_box li").removeClass("on");        
        $(this).addClass("on");
        $("table").css("display","none");
        $("table").eq(3).css("display","block");
        $(".toggle_button").removeClass("on");
        $(".toggle_button").eq(3).addClass("on");
        }else{
    
        $(this).removeClass("on");
        $("table").eq(3).css("display","none");
        $(".toggle_button").eq(3).removeClass("on");
        }
    
       });
    
    
    
    
       
    });//$function구문닫기
    