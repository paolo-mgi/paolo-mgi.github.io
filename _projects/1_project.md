---
layout: page
title: Seminars 
description: Some seminaries I gave.
img: assets/img/seminar.jpg
importance: 1
category: work
years: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003]
---

<div class="info">
<strong> In some cases the web site of the event contains a video recording of the seminar </strong>
</div>

<div class="publications">


{%- for y in page.years %}
  {% bibliography -f muratore-ginanneschi_seminars -q @*[year={{y}}]* --template bib_seminars %}
{% endfor %}

</div>

