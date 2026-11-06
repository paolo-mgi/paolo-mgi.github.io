---
layout: page
title: Results
permalink: /results/
description: Some results I contributed to.  
nav: true
nav_order: 2
horizontal: false
---
<!-- here the info stored in the dir _results is organized for display-->

{% for result in site.results reversed%}
{{ result.content }}
{% endfor %}

<style>
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}


/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

/* this creates an unwanted background in the header
.active, .dot:hover {
  background-color: #717171;
}
*/


/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: 1}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: 1}
  to {opacity: 1}
}
</style>

<script>
(function () {
  const groups = [
    "mySlides_LGKS",
    "mySlides_Influence",
    "mySlides_Landauer"
  ];
  const indices = [1, 1, 1];

  function showResultSlide(number, group) {
    if (!Number.isInteger(group) || group < 0 || group >= groups.length) return;

    const slides = document.getElementsByClassName(groups[group]);
    if (!slides.length) return;

    if (number > slides.length) number = 1;
    if (number < 1) number = slides.length;
    indices[group] = number;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.setProperty("display", "none", "important");
    }

    slides[number - 1].style.setProperty("display", "block", "important");
  }

  window.resultsPlusSlides = function (step, group) {
    showResultSlide(indices[group] + step, group);
  };

  window.resultsCurrentSlide = function (number, group) {
    showResultSlide(number, group);
  };

  function initialize() {
    groups.forEach(function (_, group) {
      showResultSlide(1, group);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
</script>

