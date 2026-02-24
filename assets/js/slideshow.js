var slideIndex =; // Initialize index 0 and 1 separately
var slideId = ["mySlides_LGKS", "mySlides_Influence"];

// This function now uses the 'no' argument to stay within one slider
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // Hides only images in THIS slider
  }
  if (x[slideIndex[no]-1]) {
     x[slideIndex[no]-1].style.display = "block"; // Shows only the active one
  }
}

// Initial call to start both
$(document).ready(function() {
    showSlides(1, 0);
    showSlides(1, 1);
});
