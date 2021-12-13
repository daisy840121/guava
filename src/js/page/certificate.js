import "slick-carousel";
$(function(){
  $('.certificate-pic-for').slick({
    slidesToShow: 1, //預設 1 幻燈片顯示幾張
    slidesToScroll: 1,//預設 1 幻灯片每次滑動幾張
    arrows: false, // 預設 true 左右箭頭是否顯示
    fade: true, // 預設 false 淡入淡出
    asNavFor: '.certificate-pic-nav'//將滑塊設置為其他滑塊的導航（類或ID名稱）,適用於多個輪播圖共用一個導航
  });

  $('.certificate-pic-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.certificate-pic-for',
    dots: false, // 預設 false 指示点
    arrows: false, // 預設 true 左右箭頭是否顯示
    focusOnSelect: true, // 預設 false
    vertical: true
  });
    
});


//move

var $status = $('.pagingInfo');
var $slickElement = $('.slideshow');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay:false,
  dots: true
});