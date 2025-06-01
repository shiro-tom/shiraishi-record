---
layout: home
title: "Shiraishi Record"
---

初めまして白石です

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}