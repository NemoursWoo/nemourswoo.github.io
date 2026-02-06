---
layout: page
title: About
permalink: /about/
---

I'm Wu Chenghan (武承翰). I enjoy building software and exploring new ideas.

## Projects

<div class="project-grid">
{% for project in site.data.projects %}
<div class="project-card">
  <h3>{{ project.name }}</h3>
  <p>{{ project.description }}</p>
  {% if project.tags %}
  <div class="project-tags">
    {% for tag in project.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% endif %}
  {% if project.url %}
  <a href="{{ project.url }}" class="project-link">View project &rarr;</a>
  {% endif %}
</div>
{% endfor %}
</div>
