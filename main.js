$(document).ready(function() {
  var el = $('blockquote');
  $(el[Math.floor(Math.random()*el.length)]).show();
});