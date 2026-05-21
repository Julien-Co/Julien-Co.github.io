---
title: "Blog"
layout: gridlay
sitemap: false
permalink: /blogs/
description: "Blog posts by Julien Colin on interpretable AI, machine learning, computer vision, and research."
keywords:
  - Julien Colin blog
  - interpretable AI blog
  - machine learning blog
  - computer vision blog
---

## Blog

{% if site.posts.size > 0 %}
<div class="section-card" markdown="0">
{% for post in site.posts %}
<div class="news-item" style="padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
<span class="news-date">{{ post.date | date: "%b %-d, %Y" }}</span><br>
<a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}" style="font-weight: 600;">{{ post.title }}</a>
</div>
{% endfor %}
</div>
{% else %}
<p class="text-muted">No blog posts yet.</p>
{% endif %}
