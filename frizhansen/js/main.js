$(function () {

  //scroll event : header fixed
  var $header_height = $("header").offset().top + $("header").outerHeight(true);

  $(window).scroll(function () {
    if ($(this).scrollTop() > $header_height) {
      $("header").addClass("fix_box");
      $("#logo_wrap").addClass("fix_box");
      $("#menu_wrap").addClass("fix_box");
      $(".menu_item span").addClass("fix_box");
      $(".menu_item").addClass("fix_box");
      $("nav").css("top", "-500px");
      $(".menu_item span").removeClass("on");
    } else {
      $("header").removeClass("fix_box");
      $("#logo_wrap").removeClass("fix_box");
      $("#menu_wrap").removeClass("fix_box");
      $(".menu_item span").removeClass("fix_box");
      $(".menu_item").removeClass("fix_box");
      $("#sub_menu").removeClass("fix_box");
      $("nav").removeClass("fix_box");
    }
  }); //

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

  // 4th section slider
  let e = 0; //클릭하는 횟수를 담는 변수명
  let f = 0; //홀짝 연산해서 담을 그릇

  $("#con_4_title").click(function () {
    e++;
    f = e % 2;

    if (f == 1) {
      $("#con_4_products ul").eq(1).fadeIn();
    } else {
      $("#con_4_products ul").eq(1).fadeOut();
    }
  });

  // 5th section slider
  let c = 0; //클릭하는 횟수를 담는 변수명
  let d = 0; //홀짝 연산해서 담을 그릇

  $("#con_5_title").click(function () {
    c++;
    d = c % 3;

    if (d == 1) {
      $("#con_5_img_wrap li").eq(1).fadeIn();
    } else if (d == 2) {
      $("#con_5_img_wrap li").eq(1).fadeOut();
      $("#con_5_img_wrap li").eq(2).fadeIn();
    } else {
      $("#con_5_img_wrap li").eq(2).fadeOut();
    }
  });

  $("#con_5_img_wrap").click(function () {
    c++;
    d = c % 3;

    if (d == 1) {
      $("#con_5_img_wrap li").eq(1).fadeIn();
    } else if (d == 2) {
      $("#con_5_img_wrap li").eq(1).fadeOut();
      $("#con_5_img_wrap li").eq(2).fadeIn();
    } else {
      $("#con_5_img_wrap li").eq(2).fadeOut();
    }
  });
}); //$function구문닫기
