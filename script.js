$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('.navbar').css('background','black');
  } else {
    $('.navbar').css('background','transparent');
    }
});

function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
