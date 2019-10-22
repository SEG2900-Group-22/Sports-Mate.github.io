var slideIndex = 1;

function currentSlide(n){
  alert("ok")
  showSlides(slideIndex=n)
  

}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides fade");
  alert(slides.length)
  if (n > slides.length) {slideIndex = 1} 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  if (n < 1) {slideIndex = slides.length}
  
  
  
  slides[slideIndex-1].style.display = "block"; }

  /* Navigation bar */
  function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }
  