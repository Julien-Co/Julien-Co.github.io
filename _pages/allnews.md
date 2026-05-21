---
title: "News"
layout: gridlay
sitemap: false
permalink: /allnews.html
description: "News and updates from Julien Colin including publications, talks, awards, and research milestones."
keywords:
  - Julien Colin news
  - research updates
  - publications
  - talks
---

## News

<div class="section-card" markdown="0">
<div class="news-timeline">
{% for article in site.data.news %}
<div class="news-item">
<span class="news-date">{{ article.date | date: "%m/%Y" }}:</span>
<span class="news-headline">
{% if article.url %}
<a href="{{ article.url | relative_url }}{% if article.anchor %}#{{ article.anchor }}{% endif %}">{{ article.headline }}</a>
{% else %}
{{ article.headline }}
{% endif %}
</span>
</div>
{% endfor %}
</div>
</div>
