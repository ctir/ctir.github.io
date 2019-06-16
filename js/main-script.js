//Author: Charles Tiriamai

//window.onscroll = function () { attachNavbar() };

function attachNavbar() {
  var navbar = document.querySelector(".top-nav");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("top-nav--fixed")
  } else {
    navbar.classList.remove("top-nav--fixed");
  }
}
