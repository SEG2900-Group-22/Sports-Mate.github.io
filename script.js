// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;



  /* Navigation bar */
  function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }
  