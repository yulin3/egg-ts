<div class="item">
  <span class="index">{{ index }}.</span>
  <p>
    <a class="title" target="_blank" href="{{ item.jump_url }}">{{ helper.shtml(item.title) }}</a>
    <span class="domain">({{ item.jump_url | domain }})</span>
  </p>
  <p class="subtext">
    <span>
      浏览量: {{ item.browse_num }}
    </span>
    <span>
      发布时间: {{ item.time }}
    </span>
  </p>
</div>