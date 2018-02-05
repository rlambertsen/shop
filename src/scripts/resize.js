var resize = (function(){
  return {
    init: function(){
      $('#customer_login_link').addClass('nav-link fs12');
      $('#customer_register_link').addClass('nav-link fs12');
      $('#customer_logout_link').addClass('nav-link fs12');

      $(window).resize(this.resize);
      var windowSize = window.innerWidth;
      if (windowSize <= 992){
        $('.malware-removal.green-gradients').removeClass('py-10').addClass('py-3');
        $('.hero_cta').removeClass('mt-4 mb-4');
        $('.csoc').removeClass('light-grey-background');
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
        $('.hero').removeClass('mh-519');
        //homepage slider only control icons when in mobile
        $('#security-mobile-slider').carousel();
        $('#security-mobile-slider').on('slide.bs.carousel', function (e) {
          $this = $(this);
          console.log(e.from);
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
          console.log(e.to);
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
        $('#security-mobile-slider').carousel('dispose');
        $('.malware-removal.green-gradients').addClass('py-10').removeClass('py-3');;
        $('.csoc').addClass('light-grey-background');
        $('.hero_cta').addClass('mt-4 mb-4');
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
        $('.hero').addClass('mh-519');
      }
      if (windowSize <= 769) {
        $('.page-hero h2').removeClass('fs47').addClass('fs35');
      } else {
        $('.page-hero h2').removeClass('fs35').addClass('fs47');

      }
    },
    resize: function(){
      var windowSize = window.innerWidth;
      if (windowSize <= 992){
        $('.malware-removal.green-gradients').removeClass('py-10').addClass('py-3');
        $('.hero_cta').removeClass('mt-4 mb-4');
        $('.csoc').removeClass('light-grey-background');
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
        $('.hero').removeClass('mh-519');
        //homepage slider only control icons when in mobile
        $('#security-mobile-slider').carousel();
        $('#security-mobile-slider').on('slide.bs.carousel', function (e) {
          $this = $(this);
          console.log(e.from);
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
          console.log(e.to);
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
        $('#security-mobile-slider').carousel('dispose');
        $('.malware-removal.green-gradients').addClass('py-10').removeClass('py-3');
        $('.csoc').addClass('light-grey-background');
        $('.hero_cta').addClass('mt-4 mb-4');
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
        $('.hero').addClass('mh-519');
      }
      if (windowSize <= 769) {
        $('.page-hero h2').removeClass('fs47').addClass('fs35');
      } else {
        $('.page-hero h2').removeClass('fs35').addClass('fs47');

      }
    }
  };
})(window);
