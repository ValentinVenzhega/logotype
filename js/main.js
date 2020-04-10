$(document).ready(function() {

  $('.production-slaider').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 3000,
    arrows: false,
    height: 497,


  });

  $('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<div class="slider-arrow slider-arrow-left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow-right"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          
        }
      }
   

    ]
  });

});

/* $(document).ready(function() {
  var link = $('.menu-link');
  var link_active = $('.menu-link_active');
  var menu = $('.menu');
  var nav_link = $('.menu a')

  link.click(function() {
      link.toggleClass('menu-link_active');
      menu.toggleClass('menu_active');
  });
  nav_link.click(function() {
      link.toggleClass('menu-link_active');
      menu.toggleClass('menu_active');
  });
}); */

$('form').submit(function(event) { //отправка формы ajax
event.preventDefault();
var form = $(this);
$.ajax({
type: form.attr('method'),
url: form.attr('action'),
data: form.serialize()
}).done(function() {
$('.thanks').fadeIn();
$(this).find('input').val('');
$(".form-reset").trigger('reset');
});
return false;
});


$(document).mouseup(function (e) { // по клику вне попапа спасибо
var popup = $('.popup');
if (e.target!=popup[0]&&popup.has(e.target).length === 0){
$('.feedback, .thanks').fadeOut();
}
});

$(document).ready(function(){ // про верка правильности ввода телефона
$(".phone").mask("+7(999) 999-99-99");
});


$(document).scroll(function(){
if ($(this).scrollTop()
  );
});

$(document).ready(function() { // открытие и закрытие формы

$('.button,.button-sr,.button-sr1,.button-com').on("click", function(){
$('.feedback').fadeIn();
});

$('.feedback-close').on("click", function(){
$('.feedback').fadeOut();
});

});
