import easydropdown from 'easydropdown/bundle/easydropdown.js';
require('webpack-jquery-ui');
require('jquery-ui/ui/i18n/datepicker-zh-TW.js');
require('jquery-ui-themes/themes/flick/jquery-ui.min.css');
require('../../scss/jquery-ui.theme.css');

$(function () {
    //cart switch pay info
    $("#cart-tab p").on('click', function (e) {
        var index = $(this).index();
        $(this).addClass("btn-active");
        $(this).siblings().removeClass("btn-active");
        $("#cart-tab-content .cart-tab-txt-wrap")
            .fadeOut(function () {
                $("#cart-tab-content .cart-tab-txt-wrap")
                    .eq(index)
                    .fadeIn()
            });
    });
    $("#cart-tab-content .cart-tab-txt-wrap")
        .hide()
        .first()
        .show()

    let thisYear = new Date().getYear();
    $("#datepicker").datepicker({
        // changeMonth: true,
        // changeYear: true,
        // yearRange: `${thisYear + 1800}:${thisYear + 1900}`,
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        regional: "zh-TW",
        dateFormat: 'yy-mm-dd',
    });
});





console.log(document.querySelectorAll('.prd_add_num'));


let prdLen = document.querySelectorAll('.prd_add_num').length;



for (let index = 0; index < prdLen; index++) {
    const prd_add_num = easydropdown('.prd_add_num', {
    behavior: {
      liveUpdates: true
    }
  });  
}

let prd_add_num = easydropdown('.prd_add_num', {
    behavior: {
      liveUpdates: true
    }
  });

