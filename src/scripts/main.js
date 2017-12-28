//main entry for custom js
// expose other pages globally and use the function calls here
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
    var percent = (parseInt(step) / totalSteps) * 100;
    console.log(percent)
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
});