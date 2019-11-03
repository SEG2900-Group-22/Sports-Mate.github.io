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
  function showLogin(){
    
   
    $(".content").css("filter","blur(2px)");
   
    
    $(".form-popup").show();
    
   

}
function closeLogin(){
    
    $(".form-popup").hide();

} 
      
var myIndex = 0;
            
var lastIndex=0;
var x = document.getElementsByClassName("mySlides");
var dots=document.getElementsByClassName("dot"); 
currentIndex(1) ;
var c=setInterval(carousel,6000);
 
function currentIndex(n){
    myIndex=n
    dots[lastIndex].className=dots[lastIndex].className.replace(" active","");
    x[lastIndex].style.display="none";
    
    showSlide();
    
   
    setTimeout(showSlide,6000)
}

function carousel(){
   

   
    if(myIndex>=document.getElementsByClassName('mySlides').length){myIndex=0;}
    
    myIndex++;
   
   showSlide();
   setTimeout(showSlide,6000); 
  
    
}

function showSlide() {
changeActive()

x[myIndex-1].style.display="block";

dots[myIndex-1].className+=" active";
lastIndex=myIndex-1; 




}
function changeActive(){
    dots[lastIndex].className=dots[lastIndex].className.replace(" active","");
    x[lastIndex].style.display="none"; 
}


