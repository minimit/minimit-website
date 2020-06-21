/**
 * favicon
 */

var favicon = document.querySelector('#favicon');
var faviconDark = document.querySelector('#favicon-dark');

var colorSchemeMq = window.matchMedia('(prefers-color-scheme: dark)');

var changeMq = function(e) {
  if (colorSchemeMq.matches) {
    favicon.remove();
    document.head.append(faviconDark);
  } else {
    document.head.append(favicon);
    faviconDark.remove();
  }
};

colorSchemeMq.addListener(changeMq);
changeMq();

/**
 * link
 */

// vars

var link = document.querySelector('.link')
var hotspot = link.querySelector('.hotspot')

// enter

var eventEnter = function () {
  link.classList.add('hover')
};

hotspot.addEventListener('mouseenter', eventEnter);
hotspot.addEventListener('touchstart', eventEnter);

// leave

var eventLeave = function () {
  link.classList.remove('hover')
};

hotspot.addEventListener('mouseleave', eventLeave);
hotspot.addEventListener('touchend', eventEnter);
