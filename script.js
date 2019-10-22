/* Automatic slideshow */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000);}

  /* Navigation bar */
  function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }
  