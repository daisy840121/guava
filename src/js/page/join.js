
$(function () {

  // 網頁版用 mouse
  $('.pullee').on("mousedown", function () {
    $('.pullee-txt').text(" ");
  });

  $('.pullee').on("mouseup", function () {
    let value = $('.pullee').val();//取值
    let isSuccess = false;
    // 版本一
    // if (value <= 99) {
    //   $('.pullee-txt').text("向右滑動解鎖").css({ "color": "#000" });
    //   $('.pullee').val('0');
    //   return
    // }
    // if (isSuccess) {
    //   $('.pullee_success').fadeIn("500ms")
    //   $('.pullee-txt').text("成功解鎖").css({ "color": "#FFF" });

    // } else {
    //   $('.pullee_error').fadeIn("500ms")
    //   $('.pullee-txt').text("失敗,再試一次").css({ "color": "#FFF" });
    // }
    // 版本二
    if (value <= 99) {
      //小於99就紅色
      $('.pullee_error').fadeIn("500ms")
      $('.pullee-txt').text("失敗,再試一次").css({ "color": "#FFF" });
      //點擊紅色就
      $('.pullee_error').on('click', function () {
        //變回原本
        $('.pullee-txt').text("向右滑動解鎖").css({ "color": "#000" });
        $('.pullee').val('0');
        $('.pullee_error').fadeOut();
      });
      // setTimeout(()=>{
      //           $('.pullee-txt').text("向右滑動解鎖").css({ "color": "#000" });
      //   $('.pullee').val('0');
      //   $('.pullee_error').fadeOut();
      // },2500)
    } else {
      //大於99給綠色
      $('.pullee_success').fadeIn("500ms")
      $('.pullee-txt').text("成功解鎖").css({ "color": "#FFF" });
    }
  });

  // 手機版用 touch
  // $('.pullee').on("touchstart", function () {

  // });

  // $('.pullee').on("touchend", function () {

  // });



  $('.pullee').on("change", function () {
    console.log('change');
  });

  
});