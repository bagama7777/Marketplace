$(function () {


  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    ratedFill: "#ffc000",
    normalFill: "#ffffff",
    starWidth: "15px"

  });

  $('.featured__slider').slick({
    nextArrow: '<span class="lnr lnr-chevron-right slick-arrow slick-next"></span>',
    prevArrow: '<span class="lnr lnr-chevron-left slick-arrow slick-prev"></span>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.followers__content').slick({
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true
    // centerMode: true
    // centerPadding: '0px'
  });



  var mixer = mixitup('.products__inner-box');

});





