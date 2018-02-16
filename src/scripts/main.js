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
  $('.Countries').animateNumber({
      number: 190,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    5000
  );
  $('.Endpoints').animateNumber({
      number: 100,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    5000
  );
  $('.unique').animateNumber({
      number: 800,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    5000
  );
  $('.threats').animateNumber({
      number: 500,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    5000
  );
  $('.analyzed').animateNumber({
      number: 13,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    5000
  );
  $('.performance').animateNumber({
      number: 13,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number + '%');
      }
    },
    5000
  );
  $('.blocked').animateNumber({
      number: 15,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number);
      }
    },
    5000
  );
  $('.Support').animateNumber({
      number: 99.9,
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);
        target.text(floored_number + '%');
      }
    },
    5000
  );
  return false;
}
/*==== End ====*/
/*==== Document Ready only below ====*/
$(function() {
  $('#preview-bar-iframe').remove();
  resize.init();
  mobile.init();
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
      $this.removeClass('btn-light').addClass('btn-success active');
      $('[data-tab="one"]').removeClass('hidden').addClass('show');
      $('[data-tab="two"]').addClass('hidden').removeClass('show');
    } else{
      // nothing
    }
  });
  $('[data-tab="2"]').click(function(){
    $this = $(this);
    if ($('[data-tab="1"]').hasClass('btn-success active') && $this.hasClass('btn-light')){
      $('[data-tab="1"]').removeClass('btn-success active').addClass('btn-light');
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

  /*==== Price page collapse event binds ====*/
  $('.icon-green-plus').click(function (e) {
    $('svg use').attr('xlink:href', function(i,attr){
      return attr == '#plus' ? '#minus': '#plus';
    });
  });
  /*==== End ====*/
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
  }
  /*==== End ====*/
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
      $('.how-it-works-numbers').find('.green-text').removeClass('green-text').addClass('grey-text');
      $('.how-it-works-numbers').find('[data-step="'+next+'"]').addClass('green-text').removeClass('grey-text');
    }
  });
  $('.show-mobile-992 div').click(function(e){
    if ($(this).attr('data-step')){
      var number = $(this).data('step') - 1;
      $('#how-it-works').carousel(number);  
    }
    
  });
  $('.icon-green-circle-arrow-left').click(function(e){
    $this = $(this);
    $('#how-it-works').carousel('prev');
  });
  $('.icon-green-circle-arrow-right').click(function(e){
    $this = $(this);
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
                      <p class="fs11 mb-0">Quantiy:'+v.quantity+'</p>\
                    </li>'
                  );
                });
                cartUL.removeClass('hidden').siblings('p').addClass('hidden');
              }
              cartUL.append(
                '<li class="dropdown-item border-top border-grey-light">\
                  <p class="fs15 mb-0">Total: '+slate.Currency.formatMoney(cart.total_price, theme.moneyFormat)+'</p>\
                </li>');
              
            $('.badge').text('('+cart.item_count+')');
            $this.html('Item added!');
            setTimeout(function(){
              var currentText = $this.data('current');
              $this.html(currentText);
            }, 2000);
          });
        }
      });
    } else { // no attribute do nothing with button (it will be a link then)
      console.log('nope');
    }
  });
  /*==== End ====*/
  /*==== Page load get cart contents and display them if any ====*/
  $.getJSON('/cart.js', function(cart) {
    var cartUL = $('.cart-contents');
    cartUL.empty();
    if (cart.items.length > 0){ // check for items in cart
      $(cart.items).each(function(i,v){ //loop over and get info, then display
        cartUL.append(
          '<li class="dropdown-item">\
            <p class="fs15 mb-0">'+v.product_title+'<span class="fs11 pull-right">'+slate.Currency.formatMoney(v.price, theme.moneyFormat)+'</span></p>\
            <p class="fs11 mb-0">Quantiy:'+v.quantity+'</p>\
          </li>'
        );
      });
      cartUL.removeClass('hidden').siblings('p').addClass('hidden');
    }
    // get total amount and display
    cartUL.append(
      '<li class="dropdown-item border-top border-grey-light">\
        <p class="fs15 mb-0">Total: '+slate.Currency.formatMoney(cart.total_price, theme.moneyFormat)+'</p>\
      </li>');
  });
  /*==== End====*/



  /*==== Home page laptop computer section show/hide on hover ====*/
  $('.hover').mouseenter(function(){
    if ($(this).hasClass('hacked-hover')){
      $(this).fadeIn('slow');
      $('.icon-thief').show();
      $(this).siblings().addClass('invisible');
    } else{
      $(this).fadeIn('slow');
      $(this).siblings().addClass('invisible');
    }
  }).mouseleave(function(){
    $(this).hide();
    $('.icon-thief').hide();
    $(this).siblings().removeClass('invisible');
  });
  $('.no-hov').mouseenter(function(){
    $(this).fadeOut().addClass('invisible');
    $(this).siblings().show();
  }).mouseleave(function(){
    $(this).removeClass('invisible').fadeIn();
    $(this).siblings().hide();
  });
  /*==== End ====*/

  /*==== benefits main shield hovers ====*/
  //enhance
  $('.icon-enhance_animated').mouseenter(function(){
    $(this).show();
    $('.enhance-hover').hide();
  }).mouseleave(function(){
    $('.enhance-hover').show();
    $(this).hide();
  });
  $('.enhance-hover').mouseenter(function(){
    $('.icon-enhance_animated').show();
    $(this).hide();
  }).mouseleave(function(){
    $('.icon-enhance_animated').hide();
    $(this).show();
  });
  //respond
  $('.icon-respond_animated').mouseenter(function(){
    $(this).show();
    $('.respond-hover').hide()
  }).mouseleave(function(){
    $('.respond-hover').show()
    $(this).hide();
  });
  $('.respond-hover').mouseenter(function(){
    $('.icon-respond_animated').show();
    $(this).hide()
  }).mouseleave(function(){
    $('.icon-respond_animated').hide();
    $(this).show()
  });
  //detect
  $('.icon-detect_animated').mouseenter(function(){
    $(this).show();
    $('.detect-hover').hide();
  }).mouseleave(function(){
    $('.detect-hover').show();
    $(this).hide();
  });
  $('.detect-hover').mouseenter(function(){
    $('.icon-detect_animated').show();
    $(this).hide();
  }).mouseleave(function(){
    $('.icon-detect_animated').hide();
    $(this).show();
  });
  //protect
  $('.icon-protect_animated').mouseenter(function(){
    $(this).show();
    $('.protect-hover').hide();
  }).mouseleave(function(){
    $('.protect-hover').show();
    $(this).hide();
  });
  $('.protect-hover').mouseenter(function(){
    $('.icon-protect_animated').show();
    $(this).hide();
  }).mouseleave(function(){
    $('.icon-protect_animated').hide();
    $(this).show();
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
  $('#protect-tabs a').click(function(){
    $this = $(this);
    $this.siblings().find('svg path.svg-green').addClass('svg-grey').removeClass('svg-green');
    $this.find('svg path').addClass('svg-green').removeClass('svg-grey');
  });
  /*==== End ====*/

  /*==== contact us blue box ====*/ 
  $('.form-type-select').click(function(){
    $this = $(this);
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
    $('.malware-banner-mobile').remove();
  })


  /*==== Form validation ====*/
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false && $('[name="terms"]').not(':checked')) {
          event.preventDefault();
          event.stopPropagation();
          $('.checkbox-error').show();
        }
        if (form.checkValidity() === true && $('[name="terms"]').is(':checked')){
          $('.checkbox-error').hide();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  //find all svg data-linsk to activate on benefits page only for now
  if (window.location.pathname === '/pages/benefits'){
    $('[data-link]').each(function(i,v){
      $(this).attr('href', $(this).data('link'))
    })
  }
    
});