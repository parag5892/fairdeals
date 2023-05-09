document.addEventListener('DOMContentLoaded', function() {
    var el = document.querySelector('.js-number');
    animateCountTo(el);
  });
  
  function animateCountTo(el) {
     var from = el.dataset.countFrom;
     var to = el.dataset.countTo;
     var range = to - from;
     var stepTime = Math.abs(Math.floor(1000 / range));
    
     var timer = setInterval(function() {
       el.textContent = from;
       if (from == to) {
         clearInterval(timer);
       }
       from++;
     }, stepTime);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var el = document.querySelector('.js-numberr');
    animateCountTo(el);
  });
  
  function animateCountTo(el) {
     var from = el.dataset.countFrom;
     var to = el.dataset.countTo;
     var range = to - from;
     var stepTime = Math.abs(Math.floor(1000 / range));
    
     var timer = setInterval(function() {
       el.textContent = from;
       if (from == to) {
         clearInterval(timer);
       }
       from++;
     }, stepTime);
  }