$(window).scroll(function () {
  if ($(window).scrollTop() >= 380) {
    $('.navbar').css('background','black');
  } else {
    $('.navbar').css('background','transparent');
    }
});

