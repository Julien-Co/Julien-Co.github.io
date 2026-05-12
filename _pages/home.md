---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<h2 class="home-hero">{{ site.name }}</h2>
<p class="home-hero-sub">{{ site.title }}, {% include institutions.html %}</p>

<div class="chip-container" markdown="0">
<span class="chip">Interpretability</span>
<span class="chip">AI Alignment</span>
<span class="chip">Computer Vision</span>
<span class="chip">Psychophysics</span>
<span class="chip">Deep Learning</span>
</div>

Hi, my name is Julien. I am a 4th year 
<a href="https://ellis.eu/" target="_blank" rel="noopener noreferrer" class="affiliation-link">
  <span style="color: #DC715F;">E</span><span style="color: #B5E681;">L</span><span style="color: #55C5BF;">L</span><span style="color: #E08E42;">I</span><span style="color: #6C9BDF;">S</span>
</a>
PhD student, working under the supervision of <a href="https://nuriaoliver.com/" target="_blank" rel="noopener noreferrer" class="text-link">Nuria Oliver</a> and <a href="https://thomas-serre.com/" class="text-link">Thomas Serre</a>.
 

I study what makes representations interpretable to humans, how aligning models with human perception reshapes their representations, and what this means for model interpretability.

If any of these questions interest you, feel free to <a href="mailto:{{ site.email }}" class="text-link">reach out</a> for a chat!

<!-- home-full-width -->


<div class="section-card research-section" id="research" markdown="0">
<h3>Research (selected)</h3>

<div class="research-grid home-research">

<div class="research-card">
<div class="research-media">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/fig1_nips26v2.png" class="research-thumb" loading="lazy">
</div>
<div class="research-body">
<h4 class="research-title"><a href="{{ '/publications/' | relative_url }}#colin2026foundations">Capability ≠ Interpretability: Human Interpretability of Vision Foundation Models</a></h4>
<p class="research-authors">Julien Colin, Lore Goetschalckx, Nuria Oliver, and Thomas Serre.</p>
<p class="research-desc">How interpretable are the features of modern vision models? We introduce a human-centric framework for measuring and comparing interpretability through two psychophysics protocols: localizability (can people predict where a feature fires?) and nameability (can people describe what it represents?). Applying it to ~6,000 sparse autoencoders features from six vision transformers, we collect more than 15,000 quality-filtered responses from about about 440 participants and find that foundation models (DINOv2, DINOv3, CLIP, SigLIP) are consistently less interpretable than their supervised counterparts. Crucially, this is not a capability tradeoff: interpretability is uncorrelated with downstream task performance. What predicts it is the locality of the representation and its coarse-grained semantic alignment with humans, establishing interpretability as an independent, measurable dimension of representation quality.</p>
</div>
</div>

<div class="research-card">
<div class="research-media">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/features4_fixed.png" class="research-thumb" loading="lazy">
</div>
<div class="research-body">
<h4 class="research-title"><a href="{{ '/publications/' | relative_url }}#colin2026benefit">Does human-alignment benefit interpretability?</a></h4>
<p class="research-authors">Julien Colin, Nuria Oliver, and Thomas Serre.</p>
<p class="research-desc">How does aligning models with human perception reshape their representations, and does this improve interpretability? This work takes a first empirical step toward answering this question. Across three models from the DINO family, including one aligned with human fine-grained similarity judgments, we find that greater alignment is associated with greater interpretability, though sometimes at the cost of classification performance. More importantly, alignment reshapes not only the structure and functional properties of learned representations, but also the nature of their visual features — in the case of fine-grained similarity, promoting local features.</p>
</div>
</div>

<div class="research-card">
<div class="research-media">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/choosingv2.png" class="research-thumb" loading="lazy">
</div>
<div class="research-body">
<h4 class="research-title"><a href="{{ '/publications/' | relative_url }}#colin2026basis">Choosing the right basis for interpretability: Psychophysical comparison between neuron-based and dictionary-based representations</a></h4>
<p class="research-authors">Julien Colin, Lore Goetschalckx, Thomas Fel, Victor Boutin, Thomas Serre, Nuria Oliver</p>
<p class="research-desc">What is the right "atom" for interpreting vision models? Neurons have long been the default, yet they often mix unrelated patterns—motivating a recent shift toward dictionary learning methods. Across 481 participants and 2 models, we measured how visually coherent features from neurons or dictionary elements are, and find (1) dictionary-based features consistently more interpretable, and (2) that comparing models using neurons alone can mask real differences and  mislead conclusions.</p>
</div>
</div>


<div class="research-card">
<div class="research-media">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/Figures_metapred.png" class="research-thumb" loading="lazy">
</div>
<div class="research-body">
<h4 class="research-title"><a href="{{ '/publications/' | relative_url }}#colin2022cannot">What i cannot predict, i do not understand: A human-centered evaluation framework for explainability methods</a></h4>
<p class="research-authors">Julien Colin*, Thomas Fel*, Rémi Cadène, Thomas Serre.</p>
<p class="research-desc">How useful are explainability methods for actual end-users? Most evaluation metrics for attribution methods have remained theoretical, with little regard for whether they help people understand AI systems. We address this gap with large-scale psychophysics experiments (n = 1,150) testing attribution methods across three real-world scenarios. Usefulness varies widely across scenarios, faithfulness metrics fail to predict practical utility, and high perceptual similarity between class-discriminative regions predicts failure cases — pointing to an intrinsic limitation of methods that show <i>where</i> but not <i>what</i> drives a decision.</p>
</div>
</div>


<div class="research-card">
<div class="research-media">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/figure_craft.png" class="research-thumb"  loading="lazy">
</div>
<div class="research-body">
<h4 class="research-title"><a href="{{ '/publications/' | relative_url }}#fel2023craft">CRAFT: Concept Recursive Activation FacTorization for Explainability</a></h4>
<p class="research-authors">Thomas Fel*, Agustin Picard*, Louis Béthune*, Thibaut Boissin*, David Vigouroux, Julien Colin, Rémi Cadène, Thomas Serre.</p>
<p class="research-desc">Attribution methods reveal <i>where</i> a model looks but not <i>what</i> it sees there. We introduce CRAFT, a concept-based explainability method, that identifies both <i>what</i> and <i>where</i>, built on three ingredients: a recursive procedure that extracts concepts at the right level of granularity, a more faithful concept importance estimator using total Sobol indices, and implicit differentiation through NMF to produce concept attribution maps. Through extensive psychophysics experiments, we validate that CRAFT recovers human-interpretable concepts which help users predict model decisions better than standard attribution methods do.</p>
</div>
</div>

<div class="research-card">
<div class="research-media">
<img src="{{ site.url }}{{ site.baseurl }}/images/research/figure_macov2.png" class="research-thumb" loading="lazy">
</div>
<div class="research-body">
<h4 class="research-title"><a href="{{ '/publications/' | relative_url }}#fel2023maco">Unlocking feature visualization for deeper networks with magnitude constrained optimization</a></h4>
<p class="research-authors">Thomas Fel*, Thibaut Boissin*, Victor Boutin*, Agustin Picard*, Paul Novello*, Julien Colin, Drew Linsley, Tom Rousseau, Rémi Cadène, Laurent Gardes, Thomas Serre.</p>
<p class="research-desc">Feature visualization promises to reveal <i>what</i> a neuron responds to, but existing methods produce noisy images and fail to scale to modern architectures. We introduce MACO, a feature visualization method that optimizes only the phase of the Fourier spectrum while keeping its magnitude fixed — a constraint inspired by human vision, which relies primarily on phase to recognize objects. Through a human experiment, we show that MACO helps participants predict model activations better than prior methods, even on deep networks like ViT where existing approaches fail — unlocking interpretable feature visualizations for state-of-the-art networks without any learned image prior.</p>
</div>
</div>

</div>

</div>
