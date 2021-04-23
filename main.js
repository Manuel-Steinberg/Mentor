document.addEventListener('DOMContentLoaded', function () {
  
  let quotes = document.getElementsByTagName('blockquote');
  let quote = document.getElementsByTagName('blockquote')[Math.floor(Math.random()*quotes.length)];
  quote.style.display = 'block';

}, false);