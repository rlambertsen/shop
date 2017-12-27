var resize = (function(){
  return {
    init: function(){
      $('#customer_login_link').addClass('nav-link fs12');
      $('#customer_register_link').addClass('nav-link fs12');
      $('#customer_logout_link').addClass('nav-link fs12');

      $(window).resize(this.resize);
      var windowSize = window.innerWidth;
      if (windowSize <= 992){
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
      } else{
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
      }
      if (windowSize <= 769) {
        $('.security-hide-mobile').addClass('hidden');
        $('.security-show-mobile').removeClass('hidden');
        $('.tab-security-info').addClass('hidden');
        $('.reporting').addClass('hidden');
        $('.reporting-mobile').removeClass('hidden');
        $('.protect-mobile').removeClass('hidden');
        $('.protect').addClass('hidden');
        $('.partners').addClass('hidden');
        $('.malware-banner').addClass('hidden');
        $('.malware-banner-mobile').removeClass('hidden');
        $('.security-partners-mobile').removeClass('hidden');
        $('.icon-bug-mobile').removeClass('hidden');
        $('.icon-bug-trail').addClass('hidden');
        
        $('.footer').addClass('hidden');
        $('.footer-mobile').removeClass('hidden');
      } else {
        $('.malware-banner-mobile').addClass('hidden');
        $('.security-hide-mobile').removeClass('hidden');
        $('.security-show-mobile').addClass('hidden');
        $('.tab-security-info').removeClass('hidden');
        $('.reporting').removeClass('hidden');
        $('.reporting-mobile').addClass('hidden');
        $('.protect-mobile').addClass('hidden');
        $('.tab-security-info').removeClass('hidden');
        $('.partners').removeClass('hidden');
        $('.malware-banner').removeClass('hidden');
        $('.security-partners-mobile').addClass('hidden');
        $('.protect').removeClass('hidden');
        $('.icon-bug-mobile').addClass('hidden');
        $('.icon-bug-trail').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.footer').removeClass('hidden');
        $('.footer-mobile').addClass('hidden');
      }
    },
    resize: function(){
      var windowSize = window.innerWidth;
      if (windowSize <= 992){
        $('.pricing').addClass('hidden');
        $('.pricing-mobile').removeClass('hidden');
        $('.search-desktop').removeClass('mainNav').addClass('hidden');
        $('.navbar-expand-lg').removeClass('container');
        $('.search-mobile').removeClass('hidden').addClass('navbar-collapse collapse');
      } else{
        $('.search-desktop').addClass('mainNav').removeClass('hidden');
        $('.pricing').removeClass('hidden');
        $('.pricing-mobile').addClass('hidden');
        $('.navbar-expand-lg').addClass('container');
        $('.search-mobile').addClass('hidden').removeClass('navbar-collapse collapse');
      }
        if (windowSize <= 769) {
        $('.footer').addClass('hidden');
        $('.footer-mobile').removeClass('hidden');
        $('.security-hide-mobile').addClass('hidden');
        $('.security-show-mobile').removeClass('hidden');
        $('.tab-security-info').addClass('hidden');
        $('.reporting').addClass('hidden');
        $('.reporting-mobile').removeClass('hidden');
        $('.protect-mobile').removeClass('hidden');
        $('.protect').addClass('hidden');
        $('.partners').addClass('hidden');
        $('.malware-banner').addClass('hidden');
        $('.malware-banner-mobile').removeClass('hidden');
        $('.security-partners-mobile').removeClass('hidden');
        $('.icon-bug-mobile').removeClass('hidden');
        $('.icon-bug-trail').addClass('hidden');
      } else {
        $('.security-hide-mobile').removeClass('hidden');
        $('.security-show-mobile').addClass('hidden');
        $('.tab-security-info').removeClass('hidden');
        $('.reporting').removeClass('hidden');
        $('.reporting-mobile').addClass('hidden');
        $('.protect-mobile').addClass('hidden');
        $('.tab-security-info').removeClass('hidden');
        $('.partners').removeClass('hidden');
        $('.malware-banner').removeClass('hidden');
        $('.malware-banner-mobile').addClass('hidden');
        $('.security-partners-mobile').addClass('hidden');
        $('.protect').removeClass('hidden');
        $('.icon-bug-mobile').addClass('hidden');
        $('.icon-bug-trail').removeClass('hidden');
        $('.footer').removeClass('hidden');
        $('.footer-mobile').addClass('hidden');
      }
    }
  };
})(window);
