
  $(document).ready(function(){

    //prd
    $('.product-filter .product-filter-btn').click(function(){
      $('.product-filter-btn').removeClass("btn-active");
      $(this).addClass("btn-active");
  });
  
  $('.prd-detail-filter .prd-detail-filter-btn').click(function(){
    $('.prd-detail-filter-btn').removeClass("btn-active");
    $(this).addClass("btn-active");
  });

  //news

  $('.news-filter .news-filter-btn').click(function(){
    $('.news-filter-btn').removeClass("btn-active");
    $(this).addClass("btn-active");
});

  //.certificate
  $('.certificate-filter .certificate-filter-btn').click(function(){
    $('.certificate-filter-btn').removeClass("btn-active");
    $(this).addClass("btn-active");
});

  //faq
$('.faq-filter .faq-filter-btn').click(function(){
  $('.faq-filter-btn').removeClass("btn-active");
  $(this).addClass("btn-active");
});

//prd_detail
$('.prd-detail-filter .prd-detail-filter-btn').click(function(){
  $('.prd-detail-filter-btn').removeClass("btn-active");
  $(this).addClass("btn-active");
});





  });