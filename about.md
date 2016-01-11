---
layout: default
title: About
permalink: /about/
---

This conference is part of the <a href="http://www.datascienceafrica.org/">Data Science Africa network</a>.

In 2015 we held the conference in Kenya at Dedan Kimathi University, Kenya. This year we're back in Uganda at Makerere University, Kampala.

This conference is organised by {% for person in site.conference.organizers %}[{{ person.name }}]({{ person.url }}){% if site.conference.organizers | size > 1 %}, {% endif %}{% endfor %}.