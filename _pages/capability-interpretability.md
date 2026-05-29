---
title: "Capability != Interpretability: Human Interpretability of Vision Foundation Models"
layout: page
permalink: /research/capability-interpretability/
sitemap: true
schema_type: ScholarlyArticle
description: "Paper page for Capability != Interpretability: Human Interpretability of Vision Foundation Models by Julien Colin, Lore Goetschalckx, Nuria Oliver, and Thomas Serre."
keywords:
  - human interpretability of foundation models
  - human interpretability of vision foundation models
  - capability interpretability
  - Julien Colin paper
  - model interpretability paper
image: "research/fig1_nips26v2.png"
citation_title: "Capability != Interpretability: Human Interpretability of Vision Foundation Models"
citation_authors:
  - "Julien Colin"
  - "Lore Goetschalckx"
  - "Nuria Oliver"
  - "Thomas Serre"
citation_publication_date: "2026/05/19"
citation_journal_title: "arXiv preprint"
citation_pdf_url: "/papers/colin2026foundations.pdf"
citation_arxiv_id: "2605.20337"
citation_venue_url: "https://arxiv.org/abs/2605.20337"
citation_summary: "We introduce a human-centric framework for measuring and comparing interpretability through two psychophysics protocols: localizability and nameability. Across approximately 6,000 sparse autoencoder features from six vision transformers, foundation models are consistently less interpretable than supervised counterparts, and interpretability is not explained by downstream capability."
---

# Capability != Interpretability: Human Interpretability of Vision Foundation Models

This page is the main landing page for the paper often searched as "human interpretability of foundation models" or "human interpretability of vision foundation models."

[Paper PDF]({{ "/papers/colin2026foundations.pdf" | relative_url }}) | [arXiv]({{ page.citation_venue_url }})

![Figure from Capability != Interpretability]({{ "/images/research/fig1_nips26v2.png" | relative_url }})

## Authors

Julien Colin, Lore Goetschalckx, Nuria Oliver, and Thomas Serre

## Abstract

Which modern vision models learn the most interpretable features? We introduce a human-centric framework for measuring and comparing interpretability through two psychophysics protocols: localizability, which asks whether people can predict where a feature fires, and nameability, which asks whether people can describe what it represents.

Applying this framework to roughly 6,000 sparse autoencoder features from six vision transformers, we collect more than 15,000 quality-filtered responses from about 440 participants. We find that foundation models such as DINOv2, DINOv3, CLIP, and SigLIP are consistently less interpretable than supervised counterparts.

Crucially, this is not a capability tradeoff: interpretability is uncorrelated with downstream task performance. Instead, interpretability is better predicted by the locality of the representation and its coarse semantic alignment with humans, which suggests that interpretability is its own measurable dimension of representation quality.

## Citation

```bibtex
@unpublished{colin2026foundations,
  title={Capability != Interpretability: Human Interpretability of Vision Foundation Models},
  author={Colin, Julien and Goetschalckx, Lore and Oliver, Nuria and Serre, Thomas},
  year={2026},
  journal={arXiv preprint},
  arxiv={2605.20337}
}
```
