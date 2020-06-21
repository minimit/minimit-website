/**
 * favicon
 */

var favicon = document.querySelector('#favicon');
var faviconDark = document.querySelector('#favicon-dark');

const colorSchemeMq = window.matchMedia('(prefers-color-scheme: dark)');

var changeMq = function(e) {
  console.log(colorSchemeMq.matches)
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

// leave

var eventLeave = function () {
  link.classList.remove('hover')
};

hotspot.addEventListener('mouseleave', eventLeave);
