//main entry for custom js
/*! jQuery.Flipster, v1.1.2 (built 2017-11-10) */

// expose other pages globally and use the function calls here
/*==== Functions go here ====*/
$.fn.isOnScreen = function(){
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
};
(function ($, sr) {
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced() {
      var obj = this, args = arguments;

      function delayed() {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      }

      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
    };
  };
  // smartscroll
  jQuery.fn[sr] = function (fn, threshhold) { return fn ? this.bind('scroll', debounce(fn, threshhold)) : this.trigger(sr); };
})(jQuery, 'smartscroll');
function countingUp(){
  var time = 3000;
  $('.Countries').animateNumber({
      number: 190,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.Endpoints').animateNumber({
      number: 100,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.unique').animateNumber({
      number: 800,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.threats').animateNumber({
      number: 500,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.analyzed').animateNumber({
      number: 13,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.performance').animateNumber({
      number: 13,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number + '%');
      }
    },
    time
  );
  $('.blocked').animateNumber({
      number: 15,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.Support').animateNumber({
      number: 99.9,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number + '%');
      }
    },
    time
  );
  return false;
}
function countingUpAbout(){
  var time = 3000;
  $('.virus-count').animateNumber({
      number: 25,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.internet-count').animateNumber({
      number: 50,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.business-count').animateNumber({
      number: 700,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.digital-count').animateNumber({
      number: 2,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.partner-count').animateNumber({
      number: 8,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.global-count').animateNumber({
      number: 1000,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.private-count').animateNumber({
      number: 8,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  $('.found-count').animateNumber({
      number: 1998,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    time
  );
  return false;
}
/*==== End ====*/
/*==== Page load get cart contents and display them if any ====*/
function getcart(){
  $.getJSON('/cart.js', function(cart) {
    var cartUL = $('.cart-contents');
    cartUL.empty(); 
    if (cart.item_count > 0){ // check for items in cart
      $(cart.items).each(function(i,v){ //loop over and get info, then display
        cartUL.append(
          '<li class="dropdown-item">\
            <p class="fs15 mb-0">'+v.product_title+'<span class="fs11 pull-right">'+slate.Currency.formatMoney(v.price, theme.moneyFormat)+'</span></p>\
            <p class="fs11 mb-0">Quantiy:'+v.quantity+' <span data-item-id="'+ v.id +'" class="blue-text pointer pull-right remove-from-cart">Remove</span></p>\
          </li>'
        );
      });
      cartUL.removeClass('hidden').siblings('p').addClass('hidden');
    } else {
      cartUL.addClass('hidden').siblings('p').removeClass('hidden');
    }
    // get total amount and display  
    cartUL.append(
      '<li class="dropdown-item border-top border-grey-light">\
        <p class="fs15 mb-0">Total: '+slate.Currency.formatMoney(cart.total_price, theme.moneyFormat)+'</p>\
      </li>');
  });
}
function cartUpdate(lineId, cartUL){
  $.post('/cart/update.js', 'updates['+lineId+']=0').then(function(cart){
    cart = JSON.parse(cart);
    cartUL.empty();
    if (cart.item_count > 0){ // check for items in cart
      $(cart.items).each(function(i,v){ //loop over and get info, then display
        cartUL.append(
          '<li class="dropdown-item">\
            <p class="fs15 mb-0">'+v.product_title+'<span class="fs11 pull-right">'+slate.Currency.formatMoney(v.price, theme.moneyFormat)+'</span></p>\
            <p class="fs11 mb-0">Quantiy:'+v.quantity+' <span data-item-id="'+ v.id +'" class="blue-text pointer pull-right remove-from-cart">Remove</span></p>\
          </li>'
        );
      });
      cartUL.append(
      '<li class="dropdown-item border-top border-grey-light">\
        <p class="fs15 mb-0">Total: <span class="pull-right">'+slate.Currency.formatMoney(cart.total_price, theme.moneyFormat)+'</span></p>\
      </li>');
      cartUL.siblings('p').addClass('hidden');
      $('.badge').text(cart.item_count);
    } else {
      cartUL.addClass('hidden').siblings('p').removeClass('hidden');
      $('.badge').text(cart.item_count);
    }
  });
}
function getStuff(form){
  $.ajax({
    type: "GET", 
    url: 'https://sandboxapi.cwatchstore.com/api/token/Get', 
    data: stuff,                 
      contentType: 'JSON' 
  }).then(function (response) {
      window.localStorage.setItem('string', response);
      sendForm(form);
  }).fail(function (err)  {
      //do noting
  });
}
function sendForm(form){
  $.ajax({
    type: "POST", 
    url: 'https://sandboxapi.cwatchstore.com/api/contactform/post',
    data: $(form).serialize(),
    headers: {
      'Authorization': 'Bearer '+ localStorage.getItem('string')
    } 
  }).done(function(xhr, data, textStatus){
    if (xhr === true){
      $(form).trigger("reset")
      $(form).find('.btn').attr('disabled', true);
      $(form).addClass('hidden');
      $('.success-form').removeClass('hidden');
      window.localStorage.removeItem('string')
    }
  }).fail(function(xhr, data, textStatus){
    if (xhr.status === 401){
      $(form).addClass('hidden');
      $('.server-error').removeClass('hidden');
    }
  })
}
/*==== End ====*/
var stuff = {
  username: 'menefrEs7$sta85atrerubras',
  password: '$utr?qebutUref3crax2m*qax'
} 
/*==== Document Ready only below ====*/
$(function() {
  $('#preview-bar-iframe').remove();
  resize.init();
  mobile.init();
  if (window.location.pathname === '/pages/benefits'){
    benefits.init();
    $('[data-link]').each(function(i,v){
      $(this).attr('href', $(this).data('link'))
    })
  }
  //navigation hovers
  $('.nav-item.dropdown').mouseenter(function(){ //activate drop menu on hover
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }).mouseleave(function(){
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });
  $('.nav-item.dropdown').click(function(e){ //override bootstrap click to activate drop menu and go to the link
    var link = $(this).find('a').attr('href');
    window.location.href = link;
  });
  //home page tabs
  $('[data-tab="1"]').click(function(){
    $this = $(this);
    if ($('[data-tab="2"]').hasClass('btn-danger active') && $this.hasClass('btn-light')){
      $('[data-tab="2"]').removeClass('btn-danger active').addClass('btn-light');
      $this.removeClass('btn-light').addClass('btn-blue active');
      $('[data-tab="one"]').removeClass('hidden').addClass('show');
      $('[data-tab="two"]').addClass('hidden').removeClass('show');
    } else{
      // nothing
    }
  });
  $('[data-tab="2"]').click(function(){
    $this = $(this);
    if ($('[data-tab="1"]').hasClass('btn-blue active') && $this.hasClass('btn-light')){
      $('[data-tab="1"]').removeClass('btn-blue active').addClass('btn-light');
      $this.removeClass('btn-light').addClass('btn-danger active');
      $('[data-tab="two"]').removeClass('hidden').addClass('show');
      $('[data-tab="one"]').addClass('hidden').removeClass('show');
    } else{
      // nothing
    }
  });
  // End 
  /*==== real-time slider control and logic ====*/
  var $el = $('#baraja-el'),
  baraja = $el.baraja(),
  tabs = $('#slider-tabs');

  $( '#nav-prev' ).on( 'click', function( event ) {
    var showing = tabs.find('a.active');
    if (showing.data('index') === 2){
      var showMe = showing.data('index') - 1;
      baraja.update($('.baraja-container').find('[data-index="'+showMe+'"]'), 'next');
      tabs.find('a.active').removeClass('active');
      tabs.find('[data-index="'+showMe+'"]').addClass('active');
    } else if (showing.data('index') === 1){
      var showMe = showing.data('index') - 1;
      baraja.update($('.baraja-container').find('[data-index="'+showMe+'"]'), 'next');
      tabs.find('a.active').removeClass('active');
      tabs.find('[data-index="'+showMe+'"]').addClass('active');
    } else if (showing.data('index') === 0){
      var showMe = 2;
      baraja.update($('.baraja-container').find('[data-index="'+showMe+'"]'), 'next');
      tabs.find('a.active').removeClass('active');
      tabs.find('[data-index="'+showMe+'"]').addClass('active');
    }
  });
  $( '#nav-next' ).on( 'click', function( event ) {
    var showing = $('#slider-tabs').find('a.active');
    if (showing.data('index') === 2){
      var showMe = 0;
      baraja.update($('.baraja-container').find('[data-index="'+showMe+'"]'), 'next');
      tabs.find('a.active').removeClass('active');
      tabs.find('[data-index="'+showMe+'"]').addClass('active');
    } else if (showing.data('index') === 1){
      var showMe = showing.data('index') + 1;
      baraja.update($('.baraja-container').find('[data-index="'+showMe+'"]'), 'next');
      tabs.find('a.active').removeClass('active');
      tabs.find('[data-index="'+showMe+'"]').addClass('active');
    } else if (showing.data('index') === 0){
      var showMe = showing.data('index') + 1;
      baraja.update($('.baraja-container').find('[data-index="'+showMe+'"]'), 'next');
      tabs.find('a.active').removeClass('active');
      tabs.find('[data-index="'+showMe+'"]').addClass('active');
    }
  }); 
    
  $('#slider-tabs a[data-toggle="pill"]').on('show.bs.tab', function (e) {
    $this = $(this);
    var index = $this.data('index');
    var showMe = $('.baraja-container').find('[data-index="'+index+'"]');
    baraja.update(showMe, 'next');
  });
  /*==== End ====*/
  //var $mobileCarFlip =  $('#mobile-car-flip').baraja();
  /*==== Firewal page custom slider + progress bar ====*/
  $('#target-slide').on('slide.bs.carousel', function (e) {
    //update progress
    var totalSteps = 3;
    var step = $(e.relatedTarget).data('step');
    var percent = (parseInt(step)/totalSteps) * 100;
    $('.progress-bar').css({width: percent + '%'});
  });
  $('.icon-green-circle-arrow-left').click(function(e){
    $this = $(this);
    $('#target-slide').carousel('prev');
  });
  $('.icon-green-circle-arrow-right').click(function(e){
    $this = $(this);
    $('#target-slide').carousel('next');
  });
  /*==== End ====*/
  /*==== Tooltip / Popover  ====*/
  $('.tool-tip').popover({
    container: 'body'
  });
  $('body').popover({
    trigger: 'focus'
  });
  /*==== End ====*/

  if (window.location.pathname === '/pages/contact' || window.location.pathname === 'pages/malware-removal' || window.location.pathname === 'pages/partners'){
    $.ajax({
      type: "GET", 
      url: 'https://sandboxapi.cwatchstore.com/api/token/Get', 
      data: stuff,                 
        contentType: 'JSON' 
    }).then(function (response) {
        window.localStorage.setItem('string', response);
    }).fail(function (err)  {
        //do noting
    });
  }
  /*==== Pricing page sticky prices mnenu ====*/
  if (window.location.pathname === '/pages/pricing'){
    var windowSize = window.innerWidth;
    var topToMenu = $('#price-menu').offset(),
    bottom = $('#bottom').offset();
    if (windowSize >= 993 && $(window).scrollTop() >= topToMenu.top && $(window).scrollTop() <= bottom.top){
      $('.sticky-prices').addClass('fixed-top').fadeIn();
    } else {
      $('.sticky-prices').removeClass('fixed-top').hide();
    }
    $(document).scroll(function(e){
      if (windowSize >= 993 && $(window).scrollTop() >= topToMenu.top && $(window).scrollTop() <= bottom.top){
        $('.sticky-prices').addClass('fixed-top').fadeIn();
      } else {
        $('.sticky-prices').removeClass('fixed-top').hide();
      }
    });
    // mobile details
    $('.detail').click(function(){
      $this = $(this);
      var title = $this.data('detail');
      $('.package').text(title);
      $('.details-layover').addClass('details-show')
    });
    $('.details-layover').click(function(){
      $(this).removeClass('details-show');
    });
  }
  /*==== End ====*/
  /*==== Compare mobile fixed menu ====*/
  if (window.location.pathname === '/pages/compare'){
    var windowSize = window.innerWidth;
    var topToMenu = $('#top-part').offset(),
    bottom = $('#bottom').offset();
    if (windowSize <= 575 && $(window).scrollTop() >= topToMenu.top && $(window).scrollTop() <= bottom.top){
      $('.sticky-header').addClass('fixed-top white-background py-2 drop-shadow trans-ease')
    } else {
      $('.sticky-header').removeClass('fixed-top white-background py-2 drop-shadow trans-ease')
    }
    $(document).scroll(function(e){
      console.log(windowSize <= 575 && $(window).scrollTop() >= topToMenu.top && $(window).scrollTop() <= bottom.top)
      if (windowSize <= 575 && $(window).scrollTop() >= topToMenu.top && $(window).scrollTop() <= bottom.top){
        $('.sticky-header').addClass('fixed-top white-background py-2 drop-shadow trans-ease')
      } else {
        $('.sticky-header').removeClass('fixed-top white-background py-2 drop-shadow trans-ease')
      }
    });
  }
  /*====  ====*/
  /*==== Mobile only WAF target section ====*/
  if (window.location.pathname === '/pages/web-application-firewall'){
    var options = {
      style: 'carousel',
      spacing: -0.7,
      nav: false,
      buttons: false,
      loop: true
    };
    var flip = $('.flipster').flipster(options);
    $('.circle').on('click touchend', function(e){
      $this = $(this);
      $this.parents('.row').find('.circle.active').removeClass('active');
      $this.addClass('active');
      var index = $('.circle').index($this);
      flip.flipster('jump', index);
      $('.fliper-content').each(function(i,v){
        if (i !== index){
          $(v).hide();
        } else {
          $(v).fadeIn();
        }
      });
    });
    $('.flipster__item').on('click touchend', function(e){
      $this = $(this);
      var index = $('.flipster__item').index($this);
      $('.circle').each(function(i,v){
        if (i === index){
          $('.circles').find('.circle.active').removeClass('active');
          $(v).addClass('active');
        }
      });
      $('.fliper-content').each(function(i,v){
        if (i !== index){
          $(v).hide();
        } else {
          $(v).fadeIn();
        }
      });
    });
  }
  /*==== End ====*/

  /*==== malware form page slider ====*/
  $('#how-it-works').on('slide.bs.carousel', function (e) {
    $this = $(this);
    var next = $(e.relatedTarget).data('step');
    var windowSize = window.innerWidth;
    if (windowSize <= 992){
      $('.how-it-works-numbers').find('.green-circle').removeClass('green-circle').addClass('grey-circle');
      $('.how-it-works-numbers').find('[data-step="'+next+'"]').addClass('green-circle').removeClass('grey-circle');
    } else {
      $('.how-it-works-numbers').find('.green-text').removeClass('green-text').addClass('blue-text');
      $('.how-it-works-numbers').find('[data-step="'+next+'"]').addClass('green-text').removeClass('blue-text');
    }
  });
  $('.show-mobile-992 div').click(function(e){
    if ($(this).attr('data-step')){
      var number = $(this).data('step') - 1;
      $('#how-it-works').carousel(number);  
    }
  });
  $('.hide-mobile-992 span').click(function(e){
    if ($(this).attr('data-step')){
      var number = $(this).data('step') - 1;
      $('#how-it-works').carousel(number);  
    }
  });
  $('.icon-green-circle-arrow-left').click(function(e){
    $('#how-it-works').carousel('prev');
  });
  $('.icon-green-circle-arrow-right').click(function(e){
    $('#how-it-works').carousel('next');
  });

  /*====  End ====*/


  /*==== counting numbers run ====*/
  var $window = $(window);
  var counted = false;
  if (window.location.pathname === '/'){
    $(window).smartscroll(function(e){
      if ($('.counting-numbers').isOnScreen() && counted === false){
        countingUp();
        counted = true;
      }
    });
  }
  if (window.location.pathname === '/pages/about-us'){
    $(window).smartscroll(function(e){
      if ($('.counting-numbers').isOnScreen() && counted === false){
        countingUpAbout();
        counted = true;
      }
    });
  }
  /*==== Add to cart button/s ====*/
  $('.btn').click(function(){
    $this = $(this);
    if ($this.attr('data-id')){ //check for correct data attr
      var loadingText = $this.data('loading-text');
      $this.html(loadingText);
      var id = $this.data('id');
      var data ={
        quantity: 1,
        id: id
      };
      $.ajax({
        url: '/cart/add.js',
        type: 'POST',
        // async: false,
        // cache: false,
        data: data,
        success: function(msg){
          $.getJSON('/cart.js', function(cart) {
            var cartUL = $('.cart-contents');
            cartUL.empty();
            if (cart.items.length > 0){
                $(cart.items).each(function(i,v){
                  cartUL.append(
                    '<li class="dropdown-item">\
                      <p class="fs15 mb-0">'+v.product_title+'<span class="fs11 pull-right">'+slate.Currency.formatMoney(v.price, theme.moneyFormat)+'</span></p>\
                      <p class="fs11 mb-0">Quantiy:'+v.quantity+'<span style="z-index:999999;" data-item-id="'+ v.id +'" class="position-relative pointer blue-text pull-right remove-from-cart">Remove</span></p>\
                    </li>'
                  );
                });
                cartUL.removeClass('hidden').siblings('p').addClass('hidden');
                $('.remove-from-cart').click(function(e){
                  e.preventDefault();
                  e.stopPropagation();
                  var lineId = $(this).data('item-id');
                  cartUpdate(lineId, cartUL);
                });
              }
              cartUL.append(
                '<li class="dropdown-item border-top border-grey-light">\
                  <p class="fs15 mb-0">Total: <span class="pull-right">'+slate.Currency.formatMoney(cart.total_price, theme.moneyFormat)+'</span></p>\
                </li>');
              
            $('.badge').text(cart.item_count);
            $this.html('Item added!');
            setTimeout(function(){
              var currentText = $this.data('current');
              $this.html(currentText);
            }, 2000);
          });
        }
      });
    }
  });
  /*==== End ====*/

  /*==== remove cart items ====*/
  $('.remove-from-cart').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var cartUL = $('.cart-contents');
    var lineId = $(this).data('item-id');
    cartUpdate(lineId, cartUL);
  });
  /*=== End ====*/

  /*==== Price select box actions ====*/
  var bizMonth = '<span class="dollar-sign fs26 fw300">$</span>24<span class="fs20">.</span><span class="cents fs20 fw300">90</span>';
  var bizYear = '<span class="dollar-sign fs26 fw300">$</span>249<span class="fs20">.</span><span class="cents fs20 fw300">00</span>';
  var proMonth = '<span class="dollar-sign fs26 fw300">$</span>9<span class="fs20">.</span><span class="cents fs20 fw300">90</span>';
  var proYear = '<span class="dollar-sign fs26 fw300">$</span>99<span class="fs20">.</span><span class="cents fs20 fw300">00</span>';
  $('select[name="price_select"]').on('change', function(e){
    $this = $(this);
    $this.parents('.price-box').find('.btn').attr('data-id', $this.val());
    if ($this.attr('id') === 'business_price_select'){
      if ($this.find(':selected').data('type') === 'month'){
        $this.parents('.price-box').find('.price').html(bizMonth)
        if ($('.sticky-prices')){
          $('.sticky-prices').find('.biz-price').html(bizMonth)
          $('.product-features').find('.biz-price').html(bizMonth)
          $('.product-features').find('.monthly').removeClass('hidden')
          $('.product-features').find('.yearly').addClass('hidden')
          $('.sticky-prices').find('.monthly').removeClass('hidden')
          $('.sticky-prices').find('.yearly').addClass('hidden')
        }
      } else{
        $this.parents('.price-box').find('.price').html(bizYear)
        if ($('.sticky-prices')){
          $('.sticky-prices').find('.biz-price').html(bizYear)
          $('.product-features').find('.biz-price').html(bizYear)
          $('.product-features').find('.monthly').addClass('hidden')
          $('.product-features').find('.yearly').removeClass('hidden')
          $('.sticky-prices').find('.monthly').addClass('hidden')
          $('.sticky-prices').find('.yearly').removeClass('hidden')
        }
      }
    } else if ($this.attr('id') === 'pro_price_select'){
      if ($this.find(':selected').data('type') === 'month'){
        $this.parents('.price-box').find('.price').html(proMonth)
        if ($('.sticky-prices')){
          $('.sticky-prices').find('.pro-price').html(proMonth)
          $('.product-features').find('.pro-price').html(proMonth)
          $('.product-features').find('.monthly').removeClass('hidden')
          $('.product-features').find('.yearly').addClass('hidden')
          $('.sticky-prices').find('.monthly').removeClass('hidden')
          $('.sticky-prices').find('.yearly').addClass('hidden')
        }
      } else{
        $this.parents('.price-box').find('.price').html(proYear)
        if ($('.sticky-prices')){
          $('.sticky-prices').find('.pro-price').html(proYear)
          $('.product-features').find('.pro-price').html(proYear)
          $('.product-features').find('.monthly').addClass('hidden')
          $('.product-features').find('.yearly').addClass('hidden')
          $('.sticky-prices').find('.monthly').addClass('hidden')
          $('.sticky-prices').find('.yearly').removeClass('hidden')
        }
      }
    }
      
  })
  /*==== End ====*/

  /*==== Home page laptop computer section show/hide on hover ====*/
  $('.no-hov').mouseenter(function(){
    $(this).find('.slide-up').addClass('move-up');
    if($(this).hasClass('hacked-solution')){
      $('.icon-thief').fadeIn();
    }
    $(this).find('.buggy').fadeIn();
    $(this).find('.slide-down').addClass('slide-down-show');
  }).mouseleave(function(){
    $(this).find('.slide-down').removeClass('slide-down-show');
    if($(this).hasClass('hacked-solution')){
      $('.icon-thief').fadeOut();
    }
    $(this).find('.buggy').fadeOut();
    $(this).find('.slide-up').removeClass('move-up')
  });
  /*==== End ====*/

  

  /*==== OWASP tooltip ====*/
  $('.icon-owasp-text').mouseenter(function(){
    $(this).siblings('.toolTip').show();
  }).mouseleave(function(){
    $(this).siblings('.toolTip').hide();
  });
  /*==== End ====*/
  /*==== CDN mobile tabs ====*/
  $('.cdn-btn-group .btn').click(function(){
    if ($(this).text() === 'Without CDN'){
      $('.without-cdn').removeClass('hidden');
      $('.with-cdn').addClass('hidden');
    } else {
      $('.without-cdn').addClass('hidden');
      $('.with-cdn').removeClass('hidden');
    }
    if ($(this).siblings().hasClass('active')){
      $(this).siblings('.btn.active').removeClass('active');
      $(this).addClass('active');
    } else {
      $(this).addClass('active');
    }
  });
  /*==== End ====*/

  /*==== More mobile button ====*/
  // $('.more').unbind('click touchend');
  $('.more').on('click', function(e){
    if ($(this).text() == 'More'){
      $(this).text('Less');
    } else {
      $(this).text('More');
    }
    $('.click-to-show').slideToggle();
  });

  /*==== Free walware form turn labels blue when input is active ====*/
  $('.free-malware-form').click(function(){
    var active = $(document.activeElement);
    $this = $(this);
    if (active.is('input')){
      $this.find('.blue-text').removeClass('blue-text');
      active.prev('label').addClass('blue-text');
    } else if (active.is('textarea')){
      $this.find('.blue-text').removeClass('blue-text');
      active.prev('label').addClass('blue-text');
    }
  });
  /*==== End ====*/

  /*==== svg change colors ====*/
  $(document).find('svg path.svg-green').addClass('svg-blue').removeClass('svg-green');
  $('#protect-tabs a').click(function(){
    $this = $(this);
    $this.siblings().find('svg path.svg-blue').addClass('svg-grey').removeClass('svg-blue');
    $this.find('svg path').addClass('svg-blue').removeClass('svg-grey');
  });
  /*==== End ====*/

  /*==== contact us blue box ====*/ 
  $('.form-type-select').click(function(){
    $this = $(this);
    $('.success-form').addClass('hidden');
    if ($this.hasClass('blue-background')){
      //nothing
    } else{
      $this.parents('.row').find('.blue-background').removeClass('blue-background white-text')
      $this.parents('.row').find('.show-white').hide();
      $this.parents('.row').find('.show-grey').show();
      $this.addClass('blue-background white-text');
      $this.find('.show-white').show();
      $this.find('.show-grey').hide();
    }
    if ($this.data('type') === 'sales'){
      $('.tech-form').hide();
      $('.sales-form').fadeIn();
    } else if ($this.data('type') === 'tech'){
      $('.sales-form').hide();
      $('.tech-form').fadeIn();
    }
  });
  $('.form-type-select-mobile').click(function(){
    $this = $(this);
    $this.siblings().find('.HeaderB-Level5').removeClass('blue-text');
    $this.find('.HeaderB-Level5').addClass('blue-text');
    if ($this.data('type') === 'sales'){
      $('.tech').removeClass('border-bottom border-blue');
      $('.sales').addClass('border-bottom border-blue');
      $('.tech-form').hide();
      $('.sales-form').fadeIn();
    }
    if ($this.data('type') === 'tech'){
      $('.sales').removeClass('border-bottom border-blue');
      $('.tech').addClass('border-bottom border-blue');
      $('.sales-form').hide();
      $('.tech-form').fadeIn();
    }
  });
  /*==== End ====*/ 
  
  /*==== mobile malware banner click ====*/
  $('.icon-white-x').on('click touchend',function(){
    $('.malware-banner, .malware-banner-mobile').remove();
  })


  /*==== Form validation ====*/
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false && $('[type="checkbox"]').not(':checked')) {
          event.preventDefault();
          event.stopPropagation();
          $('.checkbox-error').show();
          form.classList.add('was-validated');
        }
        if (form.checkValidity() === true && $('[type="checkbox"]').is(':checked')){
          event.preventDefault();
          event.stopPropagation();
          $('.checkbox-error').hide();
          $.ajax({
            type: "POST", 
            url: 'https://sandboxapi.cwatchstore.com/api/contactform/post',
            data: $(form).serialize(),
            headers: {
              'Authorization': 'Bearer '+ localStorage.getItem('string')
            } 
          }).done(function(xhr, data, textStatus){
            if (xhr === true){
              $(form).trigger("reset")
              $(form).find('.btn').attr('disabled', true);
              $(form).addClass('hidden');
              $('.success-form').removeClass('hidden');
              window.localStorage.removeItem('string')
            }
          }).fail(function(xhr, data, textStatus){
            if (xhr.status === 401){
              getStuff(form);
            }
          })
        }
        
      }, false);
    });
  }, false);
  
  /**
  @
  @ login page reset password actions
  @ 
  **/
  $('.recover').click(function(e){
    e.preventDefault();
    $(this).parents('.page-hero').hide().siblings().show();
  })

  /**
  @
  @ pricing page desktop top table accordion style with out using card class
  @ 
  **/
  $('.row[data-toggle="collapse"]').click(function(e){
    $this = $(this)
    if ($this.hasClass('accent-grey1-background row-box-shadow')){
      $this.toggleClass('accent-grey1-background row-box-shadow');
      $this.find('svg use').attr('xlink:href', function(i,attr){
        return attr == '#plus' ? '#minus': '#plus';
      });
    } else {
      $open = $this.parents('.container').find('.accent-grey1-background.row-box-shadow');
      $open.removeClass('accent-grey1-background row-box-shadow')
      $($open.attr('href')).collapse('toggle')
      $open.find('svg use').attr('xlink:href', function(i,attr){
        return attr == '#plus' ? '#minus': '#plus';
      });
      $this.toggleClass('accent-grey1-background row-box-shadow');
      $this.find('svg use').attr('xlink:href', function(i,attr){
        return attr == '#plus' ? '#minus': '#plus';
      });
    }
  });



  $.get('/admin/orders/373328543786/transactions.json').then(function(response){
    console.log(response)
  })
});