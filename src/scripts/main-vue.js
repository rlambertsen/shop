var supportFaq = new Vue({
  el: '#faqs',
  data: {
    faq: ''
  },
  method:{
    faqSelect: function(){
      var vm = this
      window.console.log(this.faq)
    }
  }
})