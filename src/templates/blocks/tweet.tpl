<blockquote class='twitter-tweet' align='center'>
  <p><%= text %></p>
  &mdash; <%= user.name %> (@<%= user.screen_name %>)
  <a href='<%= status_url %>' data-datetime='<%= created_at %>'>
    <%= created_at %>
  </a>
</blockquote>
<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>