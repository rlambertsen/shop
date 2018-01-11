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
/*==== End ====*/
/*==== Document Ready only below ====*/
$(function() {
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
    var topToMenu = $('#price-menu').offset();
    var bottom = $('#bottom').offset();
    if ($(window).scrollTop() >= topToMenu.top && $(window).scrollTop() <= bottom.top){
      $('.sticky-prices').fadeIn();
    } else {
      $('.sticky-prices').hide();
    }
    $(document).scroll(function(e){
      if ($(window).scrollTop() >= topToMenu.top && $(window).scrollTop() <= bottom.top){
        $('.sticky-prices').fadeIn();
      } else {
        $('.sticky-prices').hide();
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
  $('#how-it-works').on('slide.bs.carousel', function (e) {
    $this = $(this);
    console.log(e);
    
    //var current = e.target.data('step');
    var next = $(e.relatedTarget).data('step');
    $('.how-it-works-numbers').find('.green-text').removeClass('green-text').addClass('grey-text');
    $('.how-it-works-numbers').find('[data-step="'+next+'"]').addClass('green-text').removeClass('grey-text');
  });
  $('.icon-green-circle-arrow-left').click(function(e){
    $this = $(this);
    $('#how-it-works').carousel('prev');
  });
  $('.icon-green-circle-arrow-right').click(function(e){
    $this = $(this);
    $('#how-it-works').carousel('next');
  });
});