import validate from 'jquery-validation'
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

$(function () {
//login_box
  $(".toggle-password").on('click', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    let input = $(this).parent().find("#user-password-input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


    //加入會員,修改會員
    $("#joinForm").validate({
      validClass: "success",
      rules: {
        email: {
          email:true,
          required: true,
        },
        name:{
          required: true,
        },
        
        add:{
          required: true,
        },

        tel: {
          required: true,
          number:true,
        },
        phone: {
          required: true,
          number:true,
          min:10
        },
        account: {
          required: true,
        },
        password: {
          required: true,
        },
        checkPassword: {
          required: true,
        }
      },
      messages: {
        email: {
          email:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
        },
        name:{
          required:"格式好像不對，再確認一次吧!",
        },
        
        add:{
          required:"格式好像不對，再確認一次吧!",
        },

        tel: {
          required:"格式好像不對，再確認一次吧!",
          number:"格式好像不對，再確認一次吧!",
        },
        phone: {
          required:"格式好像不對，再確認一次吧!",
          number:"格式好像不對，再確認一次吧!",
          min:10
        },
        account: {
          required:"格式好像不對，再確認一次吧!",
        },
        password: {
          required:"格式好像不對，再確認一次吧!",
        },
        checkPassword: {
          required:"格式好像不對，再確認一次吧!",
        }
      },
      success: function (label) {
        label.text("Ok!").addClass("successEl")
      },
    });
    //登入
    $("#signupForm").validate({
      validClass: "success",
      rules: {
        account: {
          required: true,
          focusInvalid: false
        },
        password: {
          required: true,
          focusInvalid: false
        },
      },
      messages: {
        account: {
          required: "格式好像不對，再確認一次吧!",
        },
        password: {
          required: "格式好像不對，再確認一次吧!",
        },
      },
      success: function (label) {
        label.text("Ok!").addClass("successEl")
      },
    
    });
    //忘記密碼
    $("#forget-password-Form").validate({
      validClass: "success",
      rules: {
        email: {
          email:true,
          required: true,
          focusInvalid: false
        },
      },
      messages: {
        email: {
          email:"格式好像不對，再確認一次吧!",
          required: "格式好像不對，再確認一次吧!",
        },
      },
      success: function (label) {
        label.text("Ok!").addClass("successEl")
      },
    
    });
    //聯絡我們
    $("#contactus-form").validate({
      validClass: "success",
      rules: {
        note:{
          required:true
        },
        phone:{
          number:true,
          required:true,
          min:10
        },
        tel:{
          number:true,
          required: true,
        },
        name:{
          required:true,
        },
        email: {
          email:true,
          required: true,
          focusInvalid: false
        },

      },
      messages: {
        note:{
          required:"格式好像不對，再確認一次吧!"
        },
        phone:{
          number:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
          min:"格式好像不對，再確認一次吧!",
        },
        tel:{
          number:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
        },
        name:{
          required:"格式好像不對，再確認一次吧!",
        },
        email: {
          email:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
          focusInvalid: false
        },
      },
      success: function (label) {
        label.text("Ok!").addClass("successEl")
      },
    
    });

    $('#order-info').validate({
      validClass: "success",
      rules: {
        name:{
          required:true
        },
        tel:{
          required:true,
          number:true,
        },
        phone:{
          number:true,
          required: true,
          min:10,
        },
        email: {
          email:true,
          required: true,
          focusInvalid: false
        },
        postalcode:{
          number:true,
          required: true,
        }
      },
      messages: {
        name:{
          required:"格式好像不對，再確認一次吧!",
        },
        tel:{
          required:"格式好像不對，再確認一次吧!",
          number:"格式好像不對，再確認一次吧!",
        },
        phone:{
          number:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
          min:"格式好像不對，再確認一次吧!",
        },
        email: {
          email:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
          focusInvalid:"格式好像不對，再確認一次吧!",
        },
        postalcode:{
          number:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
        }
      },
        success: function (label) {
        label.text("Ok!").addClass("successEl")
      },
    
    });

    $('#recipient-info').validate({
      validClass: "success",
      rules: {
        name:{
          required:true
        },
        phone:{
          number:true,
          required: true,
          min:10,
        },
        email: {
          email:true,
          required: true,
          focusInvalid: false
        },
        postalcode:{
          number:true,
          required: true,
        },
        add:{
          required: true,
        }
      },
      messages: {
        name:{
          required:"格式好像不對，再確認一次吧!",
        },
        phone:{
          number:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
          min:"格式好像不對，再確認一次吧!",
        },
        email: {
          email:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
          focusInvalid:"格式好像不對，再確認一次吧!",
        },
        postalcode:{
          number:"格式好像不對，再確認一次吧!",
          required:"格式好像不對，再確認一次吧!",
        },
        add:{
          required:"格式好像不對，再確認一次吧!",
        }
      },
        success: function (label) {
        label.text("Ok!").addClass("successEl")
      },
    
    });
    

    //關閉預設輸入時藍色背景
    $('form,input,textarea').attr("autocomplete", "off");

  });



