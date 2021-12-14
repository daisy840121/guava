
$(function() {
    var jsonData = [
      {
        id:1,
        title: "紅心芭樂",
        pic:"../assets/product/product1.jpeg",
        commit:"備註備註備註備註備註備註備註備註備註備註備註備註備註",
        price: 25,
        quantity: 1,
        total: 25
      },
      {
        id:2,
        title: "牛奶芭樂",
        pic:"../assets/product/product2.jpeg",
        commit:"備註備註備註備註備註備註備註備註備註備註備註備註備註",
        price: 25,
        quantity: 1,
        total: 25
      },
    ];
    let html = "";
    $.each(jsonData, function() {
      html += `
                <div class='cart-order-item'>
                <div class="cart-order-move-prd-name">
                  <p>${this.title}</p>
                </div>
                 <div class="cart-order-pic"> <img src="${this.pic}" alt=""></div>
                 <div class="cart-order-prd-name">
                  <p class="cart-order-title">品項</p>
                  <p class="cart-order-txt">${this.title}</p>
                 </div>
                 <div class="cart-order-note"> 
                   <p class="cart-order-title">備註</p>
                   <p class="cart-order-txt">${this.commit}</p>
                 </div>
                 <div class="cart-order-num">
                   <p class="cart-order-title">數量</p>
                   <select aria-label="product-number" class="cart-item-qty-select form-select">
                      <option value="1" data-price="${this.price}">1</option>
                      <option value="2" data-price="${this.price}">2</option>
                      <option value="3" data-price="${this.price}">3</option>
                    </select> 
                 </div>
                 <div class="cart-order-price"> 
                   <p class="cart-order-title">價格</p>
                   <p class="cart-order-price-txt cart-item-total">${this.total}</p>
                 </div>
                 <div class="cart-order-del">
                   <p class="cart-order-title cart-order-opacity-tit">刪除</p><img src="../assets/garbage.svg" alt="">
                 </div>
              </div>
      `     
    });
    $(".cart-item").append(html);
    recalculateCart();
  
  $(".cart-item-qty-select").on('change',function(event){
    let $this = $(this);
    let parent = $this.parent().parent();
    let $target = $(event.target); 
    let quantity = $target.val();
    let price = $this.children().attr("data-price");
    let total = price * quantity;
    parent.find(".cart-item-total").html(total);
      recalculateCart();
  })
  
    $(".cart-order-del").click(function() {
      var parent = $(this).parent();
      parent.remove();
      recalculateCart();
    });
  });
  
  let taxRate = 0.09;
  let shipping = 100;
  
  function recalculateCart(){
    let subTotal = 0;
    let tax = 0;
    let grandTotal = 0;
    let items = $(".cart-item-total")
    $.each(items, function() {
   subTotal += parseFloat($(this).text());
  })
  
  tax = subTotal * taxRate; 
  grandTotal = subTotal - tax + shipping ;
  
  $("#cart-item-tot").html(subTotal);
  $("#cart-subtotal").html(subTotal);
  $("#cart-tax").html(Math.round(tax));
  $("#cart-total").html(Math.floor(grandTotal));
  
  }
  
  recalculateCart();