$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});

/* --- Existing al-folio code ends here --- */

// --- START YOUR SLIDESHOW CODE ---
var slideIndex = [1, 1, 1]; 
var slideId = ["mySlides_LGKS", "mySlides_Influence", "mySlides_Landauer"];

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (!x || x.length === 0) return; // Guard against missing sliders
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.setProperty("display", "none", "important"); 
  }
  x[slideIndex[no]-1].style.setProperty("display", "block", "important");
}

// These MUST be global so the HTML 'onclick' can see them
window.plusSlides = function(n, no) {
  showSlides(slideIndex[no] += n, no);
}
window.currentSlide = function(n, no) {
  showSlides(slideIndex[no] = n, no);
}

// Auto-start when page loads
$(document).ready(function() {
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);
});
