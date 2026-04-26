---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<h2 class="home-hero">{{ site.name }}</h2>
<p class="home-hero-sub">{{ site.title }}, {{ site.institution }}</p>

<div class="chip-container" markdown="0">
<a href="#research" class="chip">Interpretability</a>
<a href="#research" class="chip">AI Alignment</a>
<a href="#research" class="chip">Computer Vision</a>
<a href="#research" class="chip">Psychophysics</a>
<a href="#research" class="chip">Deep Learning</a>
</div>

Hi, my name is Julien. I am a 4rth year 
<a href="https://ellis.eu/" target="_blank" rel="noopener noreferrer" class="affiliation-link">
  <span style="color: #DC715F;">E</span><span style="color: #B5E681;">L</span><span style="color: #55C5BF;">L</span><span style="color: #E08E42;">I</span><span style="color: #6C9BDF;">S</span>
</a>
PhD student, working under the supervision of Nuria Oliver and Thomas Serre.
 
<!-- In my research, I explore what makes computer vision models interpretable to people.  -->
I want to understand what makes representations interpretable to humans, how aligning models with human perception reshape their representations, and what impacts this has on their interpretability.

If you are interested in any of those questions, feel free to reach out to chat.

<!-- When I am not working, I am mostly reading books, or running. -->
<!-- I am deeply interested in understanding what kind of visual representations are learned by different representational learning framework. I am interested in understanding how aligning models with humans reshape their representation. I want to understand what kind of features are interpretable, what kind of principles makes representation interpretable. 
Aiming to understand | what makes vision models interpretable to humans | how and why aligning them with humans shape their representation in a way that make them more interpretable. 
Making progress toward this goal one psychophysics experiment at a time. -->

<!-- home-full-width -->

<div class="section-card research-section" id="research" markdown="0">
<h3>Research (selected)</h3>

<div class="research-grid home-research">

<div class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/alignment_features.png" class="research-thumb" alt="Layered model interpretation illustration" loading="lazy">
<div class="research-body">
<h4 class="research-title">Does human-alignment benefit interpretability?</h4>
<p class="research-authors">Colin, Julien, Oliver, Nuria, and Serre Thomas.</p>
<p class="research-desc">We study how aligning models with human perceptual similarity judgmenent affects their representations. We find that alignment reshapes not only the structure and functional properties of learned representations, but also the nature of their visual features---impacting the degree to which people can interpret them.</p>
</div>
</div>

<div class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/choosingv2.png" class="research-thumb" alt="Human-centered evaluation illustration" loading="lazy">
<div class="research-body">
<h4 class="research-title">Choosing the right basis for interpretability: Psychophysical comparison between neuron-based and dictionary-based representations</h4>
<p class="research-authors">Colin, Julien, Oliver, Nuria, and Serre Thomas.</p>
<p class="research-desc">What is the right "atom" for interpreting vision models? Neurons have long been the default, yet they often mix unrelated patterns—motivating a recent shift toward dictionary learning methods. Across 481 participants and 2 models, we measured how visually coherent features from neurons or dictionary elements are, and find (1) dictionary-based features consistently more interpretable, and (2) that comparing models using neurons alone can mask real differences and  mislead conclusions.</p>
</div>
</div>


<div class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/Figures_metapred.png" class="research-thumb" alt="Visual reasoning illustration" loading="lazy">
<div class="research-body">
<h4 class="research-title">What i cannot predict, i do not understand: A human-centered evaluation framework for explainability methods</h4>
<p class="research-authors">Colin, Julien, Oliver, Nuria, and Serre Thomas.</p>
<p class="research-desc">How useful are explainability methods for actual end-users? Most evaluation metrics for attribution methods have remained theoretical, with little regard for whether they help people understand AI systems. We address this gap with large-scale psychophysics experiments (n = 1,150) testing attribution methods across three real-world scenarios. Usefulness varies widely across scenarios, faithfulness metrics fail to predict practical utility, and high perceptual similarity between class-discriminative regions predicts failure cases — pointing to an intrinsic limitation of methods that show *where* but not *what* drives a decision.</p>
</div>
</div>


<div class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/visual-reasoning.svg" class="research-thumb" alt="Visual reasoning illustration" loading="lazy">
<div class="research-body">
<h4 class="research-title">CRAFT: Concept Recursive Activation FacTorization for Explainability</h4>
<p class="research-authors">Colin, Julien, Oliver, Nuria, and Serre Thomas.</p>
<p class="research-desc">What it does, and the human experiments I have run.</p>
</div>
</div>

<div class="research-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/visual-reasoning.svg" class="research-thumb" alt="Visual reasoning illustration" loading="lazy">
<div class="research-body">
<h4 class="research-title">Unlocking feature visualization for deeper networks with magnitude constrained optimization</h4>
<p class="research-authors">Colin, Julien, Oliver, Nuria, and Serre Thomas.</p>
<p class="research-desc">What it does, and the human experiments I have run.</p>
</div>
</div>

</div>

</div>
