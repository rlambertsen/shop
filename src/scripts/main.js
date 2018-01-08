//main entry for custom js
/*! jQuery.Flipster, v1.1.2 (built 2017-11-10) */
!function(a,b,c){"use strict";function d(a,b){var c=null;return function(){var d=this,e=arguments;null===c&&(c=setTimeout(function(){a.apply(d,e),c=null},b))}}var e=function(){var a={};return function(b){if(a[b]!==c)return a[b];var d=document.createElement("div"),e=d.style,f=b.charAt(0).toUpperCase()+b.slice(1),g=["webkit","moz","ms","o"],h=(b+" "+g.join(f+" ")+f).split(" ");for(var i in h)if(h[i]in e)return a[b]=h[i];return a[b]=!1}}(),f="http://www.w3.org/2000/svg",g=function(){var a;return function(){if(a!==c)return a;var b=document.createElement("div");return b.innerHTML="<svg/>",a=b.firstChild&&b.firstChild.namespaceURI===f}}(),h=a(b),i=e("transform"),j={itemContainer:"ul",itemSelector:"li",start:"center",fadeIn:400,loop:!1,autoplay:!1,pauseOnHover:!0,style:"coverflow",spacing:-.6,click:!0,keyboard:!0,scrollwheel:!0,touch:!0,nav:!1,buttons:!1,buttonPrev:"Previous",buttonNext:"Next",onItemSwitch:!1},k={main:"flipster",active:"flipster--active",container:"flipster__container",nav:"flipster__nav",navChild:"flipster__nav__child",navItem:"flipster__nav__item",navLink:"flipster__nav__link",navCurrent:"flipster__nav__item--current",navCategory:"flipster__nav__item--category",navCategoryLink:"flipster__nav__link--category",button:"flipster__button",buttonPrev:"flipster__button--prev",buttonNext:"flipster__button--next",item:"flipster__item",itemCurrent:"flipster__item--current",itemPast:"flipster__item--past",itemFuture:"flipster__item--future",itemContent:"flipster__item__content"},l=new RegExp("\\b("+k.itemCurrent+"|"+k.itemPast+"|"+k.itemFuture+")(.*?)(\\s|$)","g"),m=new RegExp("\\s\\s+","g");a.fn.flipster=function(b){if("string"==typeof b){var e=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("methods");return c[b]?c[b].apply(this,e):this})}var n=a.extend({},j,b);return this.each(function(){function b(a){var b="next"===a?n.buttonNext:n.buttonPrev;return"custom"!==n.buttons&&g?'<svg viewBox="0 0 13 20" xmlns="'+f+'" aria-labelledby="title"><title>'+b+'</title><polyline points="10,3 3,10 10,17"'+("next"===a?' transform="rotate(180 6.5,10)"':"")+"/></svg>":b}function e(c){return c=c||"next",a('<button class="'+k.button+" "+("next"===c?k.buttonNext:k.buttonPrev)+'" role="button" />').html(b(c)).on("click",function(a){v(c),a.preventDefault()})}function j(){n.buttons&&J.length>1&&(O.find("."+k.button).remove(),O.append(e("prev"),e("next")))}function o(){var b={};!n.nav||J.length<=1||(L&&L.remove(),L=a('<ul class="'+k.nav+'" role="navigation" />'),N=a(""),J.each(function(c){var d=a(this),e=d.data("flip-category"),f=d.data("flip-title")||d.attr("title")||c,g=a('<a href="#" class="'+k.navLink+'">'+f+"</a>").data("index",c);if(N=N.add(g),e){if(!b[e]){var h=a('<li class="'+k.navItem+" "+k.navCategory+'">'),i=a('<a href="#" class="'+k.navLink+" "+k.navCategoryLink+'" data-flip-category="'+e+'">'+e+"</a>").data("category",e).data("index",c);b[e]=a('<ul class="'+k.navChild+'" />'),N=N.add(i),h.append(i,b[e]).appendTo(L)}b[e].append(g)}else L.append(g);g.wrap('<li class="'+k.navItem+'">')}),L.on("click","a",function(b){var c=a(this).data("index");c>=0&&(v(c),b.preventDefault())}),"after"===n.nav?O.append(L):O.prepend(L),M=L.find("."+k.navItem))}function p(){if(n.nav){var b=K.data("flip-category");M.removeClass(k.navCurrent),N.filter(function(){return a(this).data("index")===Q||b&&a(this).data("category")===b}).parent().addClass(k.navCurrent)}}function q(){O.css("transition","none"),G.css("transition","none"),J.css("transition","none")}function r(){O.css("transition",""),G.css("transition",""),J.css("transition","")}function s(){var b,c=0;return J.each(function(){(b=a(this).height())>c&&(c=b)}),c}function t(b){if(b&&q(),H=G.width(),G.height(s()),!H)return void(I=I||setInterval(function(){t(b)},500));I&&(clearInterval(I),I=!1),J.each(function(c){var d,e,f=a(this);f.attr("class",function(a,b){return b&&b.replace(l,"").replace(m," ")}),d=f.outerWidth(),0!==n.spacing&&f.css("margin-right",d*n.spacing+"px"),e=f.position().left,P[c]=-1*(e+d/2-H/2),c===J.length-1&&(u(),b&&setTimeout(r,1))})}function u(){var b,d,e,f=J.length;J.each(function(c){b=a(this),d=" ",c===Q?(d+=k.itemCurrent,e=f+1):c<Q?(d+=k.itemPast+" "+k.itemPast+"-"+(Q-c),e=f-(Q-c)):(d+=k.itemFuture+" "+k.itemFuture+"-"+(c-Q),e=f-(c-Q)),b.css("z-index",e).attr("class",function(a,b){return b&&b.replace(l,"").replace(m," ")+d})}),Q>=0&&(H&&P[Q]!==c||t(!0),i?G.css("transform","translateX("+P[Q]+"px)"):G.css({left:P[Q]+"px"})),p()}function v(a){var b=Q;if(!(J.length<=1))return"prev"===a?Q>0?Q--:n.loop&&(Q=J.length-1):"next"===a?Q<J.length-1?Q++:n.loop&&(Q=0):"number"==typeof a?Q=a:a!==c&&(Q=J.index(a),n.loop&&b!=Q&&(b==J.length-1&&Q!=J.length-2&&(Q=0),0==b&&1!=Q&&(Q=J.length-1))),K=J.eq(Q),Q!==b&&n.onItemSwitch&&n.onItemSwitch.call(O,J[Q],J[b]),u(),O}function w(a){return n.autoplay=a||n.autoplay,clearInterval(R),R=setInterval(function(){var a=Q;v("next"),a!==Q||n.loop||clearInterval(R)},n.autoplay),O}function x(){return clearInterval(R),R=0,O}function y(a){return x(),n.autoplay&&a&&(R=-1),O}function z(){t(!0),O.hide().css("visibility","").addClass(k.active).fadeIn(n.fadeIn)}function A(){if(G=O.find(n.itemContainer).addClass(k.container),J=G.find(n.itemSelector),!(J.length<=1))return J.addClass(k.item).each(function(){var b=a(this);b.children("."+k.itemContent).length||b.wrapInner('<div class="'+k.itemContent+'" />')}),n.click&&J.on("click.flipster touchend.flipster",function(b){S||(a(this).hasClass(k.itemCurrent)||b.preventDefault(),v(this))}),j(),o(),Q>=0&&v(Q),O}function B(a){n.keyboard&&(a[0].tabIndex=0,a.on("keydown.flipster",d(function(a){var b=a.which;37!==b&&39!==b||(v(37===b?"prev":"next"),a.preventDefault())},250,!0)))}function C(a){if(n.scrollwheel){var b,c,e=!1,f=0,g=0,i=0,j=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());a.on("mousewheel.flipster wheel.flipster",function(){e=!0}).on("mousewheel.flipster wheel.flipster",d(function(a){clearTimeout(g),g=setTimeout(function(){f=0,i=0},300),a=a.originalEvent,i+=a.wheelDelta||-1*(a.deltaY+a.deltaX),Math.abs(i)<25&&!j||(f++,b=i>0?"prev":"next",c!==b&&(f=0),c=b,(f<6||f%3==0)&&v(b),i=0)},50)),h.on("mousewheel.flipster wheel.flipster",function(a){e&&(a.preventDefault(),e=!1)})}}function D(a){if(n.touch){var b,c,d,e,f,g;a.on({"touchstart.flipster":function(a){a=a.originalEvent,b=a.touches?a.touches[0].clientX:a.clientX,c=a.touches?a.touches[0].clientY:a.clientY},"touchmove.flipster":function(a){a=a.originalEvent,d=a.touches?a.touches[0].clientX:a.clientX,e=a.touches?a.touches[0].clientY:a.clientY,g=d-b,f=e-c,Math.abs(g)>30&&Math.abs(f)<100&&a.preventDefault()},"touchend.flipster touchcancel.flipster ":function(){g=d-b,f=e-c,Math.abs(g)>30&&Math.abs(f)<100&&v(g>0?"prev":"next")}})}}function E(){var a;if(O.css("visibility","hidden"),A(),J.length<=1)return void O.css("visibility","");a=!!n.style&&"flipster--"+n.style.split(" ").join(" flipster--"),O.addClass([k.main,i?"flipster--transform":" flipster--no-transform",a,n.click?"flipster--click":""].join(" ")),n.start&&(Q="center"===n.start?Math.floor(J.length/2):n.start),v(Q);var b=O.find("img");if(b.length){var c=0;b.on("load",function(){++c>=b.length&&z()}),setTimeout(z,750)}else z();h.on("resize.flipster",d(t,400)),n.autoplay&&w(),n.pauseOnHover&&G.on("mouseenter.flipster",function(){R?y(!0):x()}).on("mouseleave.flipster",function(){-1===R&&w()}),B(O),C(G),D(G)}var F,G,H,I,J,K,L,M,N,O=a(this),P=[],Q=0,R=!1,S=!1;F={jump:v,next:function(){return v("next")},prev:function(){return v("prev")},play:w,stop:x,pause:y,index:A},O.data("methods",F),O.hasClass(k.active)||E()})}}(jQuery,window);
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

  $('.flipster').flipster({
    style: 'carousel',
    spacing: -0.5,
    nav: false,
    buttons: false,
});
});