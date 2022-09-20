$(function($){
    

    $('.about_slider').slick({
      arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

      //back Top js
      $(window) .on('scroll',function(){
        var scrollToTop = $(window).scrollTop();
        // backtop button js
        if(scrollToTop > 500){
            $('.backtop').fadeIn(500);
        }else{
            $('.backtop').fadeOut(500);
        }
    });
// backtop button js
$('.backtop').on('click' , function(){
  $('html , body').animate({
      scrollTop : 0
  } , 500);
})

      //wow js
      new WOW().init();
});