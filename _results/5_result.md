---
name: Stochastic Schr&ouml;dinger equation for completely bounded dynamical maps
description: Markovian dynamics on the system's Bloch hyper-sphere.
---
<h4> 
<!-- Stochastic Schr&ouml;dinger Equation for -->
Unraveling of Completely Bounded Dynamical Maps
</h4>


<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
	<div class="slideshow-container">
    	    <div class="mySlides_Influence fade">
    		<div class="numbertext">1 / 3</div>
        	{% include figure.html path="assets/img/John_Quang.jpg" title="Influence 1" class="img-fluid rounded z-depth-1" caption="Quantum revivals captured by the influence martingale" %}
    	    </div>
    	    <div class="mySlides_Influence fade">
    		<div class="numbertext">2 / 3</div>
        	{% include figure.html path="assets/img/survival_together_JoQu.jpg" title="Jump process" class="img-fluid rounded z-depth-1" caption="More revivals"%}
    	    </div>
    	    <div class="mySlides_Influence fade">
    		<div class="numbertext">3 / 3</div>
        	{% include figure.html path="assets/img/Times_Sine.jpg" title="Gaussian underdamped" class="img-fluid rounded z-depth-1" caption="Crossover in computation time between master equation and quantum trajectories."%}
    	    </div>
  	<!-- Next and previous buttons -->
  	    <a class="prev" onclick="plusSlides(-1,1)">&#10094;</a>
  	    <a class="next" onclick="plusSlides(1,1)">&#10095;</a>
	</div>
<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
           $$ \boldsymbol{\rho}_{t} = \operatorname{E} \Big{(}\mu_{t}\boldsymbol{\psi}_{t}\boldsymbol{\psi}_{t}^{\dagger}\Big{)} $$
<a href="https://www.nature.com/articles/s41467-022-31533-8">We proved</a> that the most general quantum master equation, the completely bounded master equation, may be solved by averaging over the realizations of a Markov process in the Hilbert state of the open quantum system. <a href="https://iopscience.iop.org/article/10.1088/1367-2630/acd4dc">We later further developed</a> the theory to prove the existence of a duality at the level of unraveling between completely positive and completely bounded master equations. These results have interesting applications to <a href="https://arxiv.org/abs/2305.19874">quantum error mitigation</a>. An efficient numerical implementation of the influence martingale is now available in QuTip v5 as `nm_solve'. The tutorial is <a href="https://github.com/qutip/qutip-tutorials/blob/main/tutorials-v5/time-evolution/013_nonmarkovian_monte_carlo.md">in github</a>.  
    </div>
</div>
<div class="caption">
</div>

