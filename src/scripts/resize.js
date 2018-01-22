var resize = (function(){
  return {
    init: function(){
      $('#customer_login_link').addClass('nav-link fs12');
      $('#customer_register_link').addClass('nav-link fs12');
      $('#customer_logout_link').addClass('nav-link fs12');

      $(window).resize(this.resize);
      var windowSize = window.innerWidth;
      if (windowSize <= 992){
        $('.hero_cta').removeClass('mt-4');
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
        
      } else{
        $('.hero_cta').addClass('mt-4');
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
        
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
        $('.hero_cta').removeClass('mt-4');
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
        
      } else{
        $('.hero_cta').addClass('mt-4');
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
        
      }
      if (windowSize <= 769) {
        $('.page-hero h2').removeClass('fs47').addClass('fs35');
      } else {
        $('.page-hero h2').removeClass('fs35').addClass('fs47');
      }
    }
  };
})(window);
