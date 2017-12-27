var mobile = (function(){
  return {
    init: function(){
      //read more in hero slider
      $('.more').click(function(){
        $('.full').slideToggle(); //toggle open/close state
      });
      //when a slider is swiped on mobile/desktop
      $('.carousel').on('swiperight', function(e){
        $(e.currentTarget).carousel('prev');
      });
      $('.carousel').on('swipeleft', function(e){
        $(e.currentTarget).carousel('next');
      });
      //mobile reporting accordion
      $('.change-me').click(function(){
        $this = $(this);
        //if the link being clicked is already open close it remove classes
        if ($this.attr('aria-expanded') == 'true'){
          $this.removeClass('grey-text').children('svg').removeClass('open rotate-180');
        } else {
        // if not then open the one clicked
          $parent =  $this.parents('#accordion').find('.show');
          $parent.siblings().find('a').removeClass('grey-text');
          $parent.siblings().find('svg').removeClass('open rotate-180');
          $this.addClass('grey-text').children('svg').addClass('open rotate-180');
        }
      });
      //move the price slider with buttons as well
      $('.btn').click(function(){
        $this = $(this);
        if ($this.data('index') === 0){
          $('#mobile-price-slider').carousel($this.data('index'));
        }
        if ($this.data('index') === 1){
          $('#mobile-price-slider').carousel($this.data('index'));
        }
        if ($this.data('index') === 2){
          $('#mobile-price-slider').carousel($this.data('index'));
        }
      });
      //footer links
      $('.footer-link-change').click(function(){
        $this = $(this);
        if ($this.children('span.plus').hasClass('minus')){
          $this.children('span.plus').removeClass('minus');
        } else {
          $this.parents('#footer-accordian').find('span.plus.minus').removeClass('minus');
          $this.children('span.plus').addClass('minus');
        }
      });
    }
  };
})(window);
