---
name: Refined Second Law for Markov Processes
description: Stochastic optimal control in non-equiibrium thermodynamics
---
<h4> 
Refined Second Law for Markov Processes
</h4>


<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
	<div class="slideshow-container">
    	    <div class="mySlides_Landauer fade">
    		<div class="numbertext">1 / 5</div>
        	{% include figure.html path="assets/img/kl_land_driftv2.png" title="Erasure of 1 bit of memory" class="img-fluid rounded z-depth-1" caption="Probability density evolution during erasure: overdamped vs underdamped dynamics" %}
    	    </div>
    	    <div class="mySlides_Landauer fade">
    		<div class="numbertext">2 / 5</div>
        	{% include figure.html path="assets/img/landauer.jpg" title="Landauer's principle 1" class="img-fluid rounded z-depth-1" caption="Optimal overdamped erasure protocol" %}
    	    </div>
    	    <div class="mySlides_Landauer fade">
    		<div class="numbertext">3 / 5</div>
        	{% include figure.html path="assets/img/prob-threestates.jpg" title="Jump process" class="img-fluid rounded z-depth-1" caption="Optimal transition \( [0.9,0.05,0.05]\to [0.05,0.05,0.9] \) for a jump process"%}
    	    </div>
    	    <div class="mySlides_Landauer fade">
    		<div class="numbertext">4 / 5</div>
        	{% include figure.html path="assets/img/gaussian_underdamped.jpg" title="Gaussian underdamped" class="img-fluid rounded z-depth-1" caption="Evolution of mean position and momentum for minimum entropy production transitions between Gaussian states for underdamped dynamics."%}
    	    </div>
    	    <div class="mySlides_Landauer fade">
    		<div class="numbertext">5 / 5</div>
        	{% include figure.html path="assets/img/valleymethod.jpg" title="Valey method" class="img-fluid rounded z-depth-1" caption="Erasure protocol between equilibria in the valley method description"%}
    	    </div>
    	    <div class="mySlides_Landauer fade">
    		<div class="numbertext">6 / 5</div>
        	{% include figure.html path="assets/img/erasure.jpg" title="Erasure" class="img-fluid rounded z-depth-1" caption="Consequences of speed constraints on the protocol" %}
	    </div>  
  	<!-- Next and previous buttons -->
  	    <a class="prev" onclick="plusSlides(-1,0)">&#10094;</a>
  	    <a class="next" onclick="plusSlides(1,0)">&#10095;</a>
	</div>
<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
           $$ E\,\geq\,\mathrm{K_{B}}\,T\,\ln 2 $$
In a series of distinct collaborations, we proved that thermodynamic transitions in non-equilibrium thermodynamics described by Markov processes (<a href="https://doi.org/10.1007/s10955-012-0478-x">overdamped</a>, underdamped with <a href="https://doi.org/10.1088/1742-5468/2014/05/p05013">arbitrary</a> or <a href="https://doi.org/10.1103/PhysRevE.90.060102">kinetic plus potential </a> Hamiltonian, <a href="https://doi.org/10.1007/s10955-012-0676-6">pure jump</a> ) always occur with average entropy production
bounded away from zero. Optimal control problems are notoriously sensitive to the class of admissible protocols. In all the cases above, optimal protocol are smooth and non-equilibrium: the current velocity at the end of the control horizon is non-vanishing. 
<a href="http://doi.org/10.48550/ARXIV.2403.00679">We also succeeded</a> to develop a systematic analytic theory to compute underdamped corrections to overdamped Schr&ouml;dinger bridges.     
    </div>
</div>
<div class="caption">
It is also possible to impose constraints (via <a href="https://doi.org/10.1103/PhysRevE.85.020103">valley method</a> or via an <a href="https://doi.org/10.3390/e19070379">upper bound </a>) on the protocols' acceleration. This is in my view a realistic way to inquire speed way to address speed limits and shortcuts to equilibration of therodynamic transitions. 
</div>

