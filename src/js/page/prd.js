import "slick-carousel";
$(function(){
  $('.slider-for').slick({
    slidesToShow: 1, //預設 1 幻燈片顯示幾張
    slidesToScroll: 1,//預設 1 幻灯片每次滑動幾張
    arrows: false, // 預設 true 左右箭頭是否顯示
    fade: true, // 預設 false 淡入淡出
    asNavFor: '.slider-nav'//將滑塊設置為其他滑塊的導航（類或ID名稱）,適用於多個輪播圖共用一個導航
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false, // 預設 false 指示点
    arrows: false, // 預設 true 左右箭頭是否顯示
    focusOnSelect: true // 預設 false
  });
    
});


//Quantity counter
var value = 0
$(".counter").val(value);
$('.increment').on("click", function() {
  value = parseInt(value+1);
  $(".counter").val(value);
});
$('.decrement').on("click", function(){
  if(value > 0){
    value = parseInt(value-1);
    $(".counter").val(value);
  }else{
    value = 0;
    $(".counter").val(value);
  }
});



//move

var $status = $('.product-move-pagingInfo');
var $slickElement = $('.product-move-pic-slideshow');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay:false,
  dots: true
});