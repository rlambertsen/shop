var resize = (function(){
  return {
    init: function(){
      //add thse classes to match styles these are shopify added
      $('#customer_login_link').addClass('nav-link fs12');
      $('#customer_register_link').addClass('nav-link fs12');
      $('#customer_logout_link').addClass('nav-link fs12');
      $(window).resize(this.resize);
      var windowSize = window.innerWidth;
      if (windowSize <= 992){
        if (window.location.pathname === '/pages/pricing'){
          var mobileTop = $('#mobile-top').offset()
          var mobileBottom = $('#mobile-bottom').offset();
          if ($(window).scrollTop() >= mobileTop.top && $(window).scrollTop() <= mobileBottom.top){
            $('.sticky-prices').addClass('fixed-top').fadeIn();
          } else {
            $('.sticky-prices').removeClass('fixed-top').hide();
          }
          $(document).scroll(function(e){
            if ($(window).scrollTop() >= mobileTop.top && $(window).scrollTop() <= mobileBottom.top){
              $('.sticky-prices').addClass('fixed-top').show();
            } else {
              $('.sticky-prices').removeClass('fixed-top').hide();
            }
          });
        }
        $('.chat-links a').removeClass('pull-right pull-left').addClass('btn-block');
        $('.malware-removal.green-gradients').removeClass('py-10').addClass('py-3');
        $('.csoc').removeClass('light-grey-background');
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
        
        //homepage slider only control icons when in mobile
        $('#security-mobile-slider').carousel();
        $('#security-mobile-slider').on('slide.bs.carousel', function (e) {
          $this = $(this);
          if (e.from === 0){
            $('#security-mobile-slider .icon-bug-2, #security-mobile-slider .icon-bug-3, #security-mobile-slider .icon-worm, #security-mobile-slider .icon-bug-mobile').hide();
          }
          if (e.from === 1){
            $('#security-mobile-slider .icon-number-screen, #security-mobile-slider .icon-credit-cards-falling, #security-mobile-slider .icon-alarm-clock').hide();
          }
          if (e.from === 2){
            $('#security-mobile-slider .icon-money-cloud').hide();
          }
          if (e.from === 3){
            $('#security-mobile-slider .icon-rockets-incoming').hide();
          }
        });
        $('#security-mobile-slider').on('slid.bs.carousel', function (e) {
          $this = $(this);
          if (e.to === 0){
            $('#security-mobile-slider .icon-bug-2, #security-mobile-slider .icon-bug-3, #security-mobile-slider .icon-worm, #security-mobile-slider .icon-bug-mobile').fadeIn();
          }
          if (e.to === 1){
            $('#security-mobile-slider .icon-number-screen, #security-mobile-slider .icon-credit-cards-falling, #security-mobile-slider .icon-alarm-clock').fadeIn();
          }
          if (e.to === 2){
            $('#security-mobile-slider .icon-money-cloud').fadeIn();
          }
          if (e.to === 3){
            $('#security-mobile-slider .icon-rockets-incoming').fadeIn();
          }
        });
      } else{
        $('.chat-links a').removeClass('btn-block');
        $('.chat-links a').first().addClass('pull-right');
        $('.chat-links a').last().addClass('pull-left');
        $('#security-mobile-slider').carousel('dispose');
        $('.malware-removal.green-gradients').addClass('py-10').removeClass('py-3');;
        $('.csoc').addClass('light-grey-background');
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
      }
      if (windowSize <= 769) {
        $('.page-hero h2').removeClass('fs47').addClass('fs35');
      } else {
        /*==== benefits main shield hovers ====*/
        //enhance
        $('.icon-enhance_animated').mouseenter(function(){
          $(this).show();
          $('.icon-enhance-shadow').show();
          $('.enhance-hover').hide();
        }).mouseleave(function(){
          $('.enhance-hover').show();
          $('.icon-enhance-shadow').hide();
          $(this).hide();
        });
        $('.enhance-hover').mouseenter(function(){
          $('.icon-enhance_animated').show();
          $('.icon-enhance-shadow').show();
          $(this).hide();
        }).mouseleave(function(){
          $('.icon-enhance_animated').hide();
          $('.icon-enhance-shadow').hide();
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
          $('.icon-protect-shadow').show();
          $('.protect-hover').hide();
        }).mouseleave(function(){
          $('.protect-hover').show();
          $('.icon-protect-shadow').hide();
          $(this).hide();
        });
        $('.protect-hover').mouseenter(function(){
          $('.icon-protect_animated').show();
          $('.icon-protect-shadow').show();
          $(this).hide();
        }).mouseleave(function(){
          $('.icon-protect_animated').hide();
          $('.icon-protect-shadow').hide();
          $(this).show();
        });
        /*==== End ====*/
        $('.page-hero h2').removeClass('fs35').addClass('fs47');

      }
    },
    resize: function(){
      var windowSize = window.innerWidth;
      if (windowSize <= 992){
        if (window.location.pathname === '/pages/pricing'){
          var mobileTop = $('#mobile-top').offset()
          var mobileBottom = $('#mobile-bottom').offset();
          if ($(window).scrollTop() >= mobileTop.top && $(window).scrollTop() <= mobileBottom.top){
            $('.sticky-prices').addClass('fixed-top').fadeIn();
          } else {
            $('.sticky-prices').removeClass('fixed-top').hide();
          }
          $(document).scroll(function(e){
            if ($(window).scrollTop() >= mobileTop.top && $(window).scrollTop() <= mobileBottom.top){
              $('.sticky-prices').addClass('fixed-top').show();
            } else {
              $('.sticky-prices').removeClass('fixed-top').hide();
            }
          });
        }
        $('.chat-links a').removeClass('pull-right pull-left').addClass('btn-block');
        $('.malware-removal.green-gradients').removeClass('py-10').addClass('py-3');
        $('.csoc').removeClass('light-grey-background');
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
        
        //homepage slider only control icons when in mobile
        $('#security-mobile-slider').carousel();
        $('#security-mobile-slider').on('slide.bs.carousel', function (e) {
          $this = $(this);
          if (e.from === 0){
            $('#security-mobile-slider .icon-bug-2, #security-mobile-slider .icon-bug-3, #security-mobile-slider .icon-worm, #security-mobile-slider .icon-bug-mobile').hide();
          }
          if (e.from === 1){
            $('#security-mobile-slider .icon-number-screen, #security-mobile-slider .icon-credit-cards-falling, #security-mobile-slider .icon-alarm-clock').hide();
          }
          if (e.from === 2){
            $('#security-mobile-slider .icon-money-cloud').hide();
          }
          if (e.from === 3){
            $('#security-mobile-slider .icon-rockets-incoming').hide();
          }
        });
        $('#security-mobile-slider').on('slid.bs.carousel', function (e) {
          $this = $(this);
          if (e.to === 0){
            $('#security-mobile-slider .icon-bug-2, #security-mobile-slider .icon-bug-3, #security-mobile-slider .icon-worm, #security-mobile-slider .icon-bug-mobile').fadeIn();
          }
          if (e.to === 1){
            $('#security-mobile-slider .icon-number-screen, #security-mobile-slider .icon-credit-cards-falling, #security-mobile-slider .icon-alarm-clock').fadeIn();
          }
          if (e.to === 2){
            $('#security-mobile-slider .icon-money-cloud').fadeIn();
          }
          if (e.to === 3){
            $('#security-mobile-slider .icon-rockets-incoming').fadeIn();
          }
        });
      } else{
        $('.chat-links a').removeClass('btn-block');
        $('.chat-links a').first().addClass('pull-right');
        $('.chat-links a').last().addClass('pull-left');
        $('#security-mobile-slider').carousel('dispose');
        $('.malware-removal.green-gradients').addClass('py-10').removeClass('py-3');;
        $('.csoc').addClass('light-grey-background');
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
      }
      if (windowSize <= 769) {
        $('.page-hero h2').removeClass('fs47').addClass('fs35');
      } else {
        /*==== benefits main shield hovers ====*/
        //enhance
        $('.icon-enhance_animated').mouseenter(function(){
          $(this).show();
          $('.icon-enhance-shadow').show();
          $('.enhance-hover').hide();
        }).mouseleave(function(){
          $('.enhance-hover').show();
          $('.icon-enhance-shadow').hide();
          $(this).hide();
        });
        $('.enhance-hover').mouseenter(function(){
          $('.icon-enhance_animated').show();
          $('.icon-enhance-shadow').show();
          $(this).hide();
        }).mouseleave(function(){
          $('.icon-enhance_animated').hide();
          $('.icon-enhance-shadow').hide();
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
          $('.icon-protect-shadow').show();
          $('.protect-hover').hide();
        }).mouseleave(function(){
          $('.protect-hover').show();
          $('.icon-protect-shadow').hide();
          $(this).hide();
        });
        $('.protect-hover').mouseenter(function(){
          $('.icon-protect_animated').show();
          $('.icon-protect-shadow').show();
          $(this).hide();
        }).mouseleave(function(){
          $('.icon-protect_animated').hide();
          $('.icon-protect-shadow').hide();
          $(this).show();
        });
        /*==== End ====*/
        $('.page-hero h2').removeClass('fs35').addClass('fs47');

      }
    }
  };
})(window);
