$(document).ready(function(){
  $('.multiple-items').slick({
    setting-name: setting-value
    arrows: true
  });

  size_li = $("#myList li").size();
  x=3;
  $('#myList li:lt('+x+')').show();
  $('#loadMore').click(function () {
      x= (x+5 <= size_li) ? x+5 : size_li;
      $('#myList li:lt('+x+')').show();
  });
  $('#showLess').click(function () {
      x=(x-5<0) ? 3 : x-5;
      $('#myList li').not(':lt('+x+')').hide();
  });
});

$('.multiple-items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
