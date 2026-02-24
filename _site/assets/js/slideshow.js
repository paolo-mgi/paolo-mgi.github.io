// 1. Define the arrays (0=LGKS, 1=Influence, 2=Landauer)
var slideIndex =; 
var slideId = ["mySlides_LGKS", "mySlides_Influence", "mySlides_Landauer"];

// 2. The "Switcher" function
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.setProperty("display", "none", "important"); // Force hide others
  }
  if (x[slideIndex[no]-1]) {
     x[slideIndex[no]-1].style.setProperty("display", "block", "important"); // Force show active
  }
}

// 3. The "Trigger" (This is likely what's missing!)
$(document).ready(function() {
  if (document.getElementsByClassName("mySlides_LGKS").length > 0) showSlides(1, 0);
  if (document.getElementsByClassName("mySlides_Influence").length > 0) showSlides(1, 1);
  if (document.getElementsByClassName("mySlides_Landauer").length > 0) showSlides(1, 2);
});

// 4. The Navigation functions
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}
