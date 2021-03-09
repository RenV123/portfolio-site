'use strict';

// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./src/service-worker.js', {
      scope: './src/',
    })
    .then(function (reg) {
      if (reg.installing) {
        console.log('Service worker installing');
      } else if (reg.waiting) {
        console.log('Service worker installed');
      } else if (reg.active) {
        console.log('Service worker active');
      }
    })
    .catch(function (error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}

new Pageable('#container', {
  childSelector: '[data-anchor]', // CSS3 selector string for the pages
  anchors: [], // define the page anchors
  pips: true, // display the pips
  animation: 500, // the duration in ms of the scroll animation
  freeScroll: false,
  swipeThreshold: 20,
  events: {
    wheel: true, // enable / disable mousewheel scrolling
    mouse: true, // disable mouse drag scrolling
    touch: true, // enable / disable touch / swipe scrolling
    keydown: true, // enable / disable keyboard navigation
  },
  onInit: function () {
    const introText = document.getElementById('intro-text');
    introText.classList.add('fade');

    const person = document.getElementById('person');
    person.classList.add('grow');
  },
});

var flickity = new Flickity('.cards-container', {
  groupCells: true,
  adaptiveHeight: true,
  pageDots: false,
  cellAlign: 'left',
  percentPosition: false,
  wrapAround: true,
  groupCells: true,
  contain: true,
});
