<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="/public/css/news.css" />
    <link rel="icon" href="/public/hot.png" type="image/x-icon">
    <title>{% block title %}egg - 591 News{% endblock %}</title>
  </head>
  <body>
    <div id="wrapper">
      <div id="header">
        <h1><a href="/news">591 News</a></h1>
      </div>
      {% block content %}{% endblock %}
    </div>
  </body>
</html>
