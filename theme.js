// vars

var link = document.querySelector('.link')
var hotspot = link.querySelector('.hotspot')

// enter

var eventEnter = function () {
  link.classList.add('hover')
}

hotspot.addEventListener('mouseenter', eventEnter);

// leave

var eventLeave = function () {
  link.classList.remove('hover')
}

hotspot.addEventListener('mouseleave', eventLeave);
