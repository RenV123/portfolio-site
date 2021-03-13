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

const downBtn = document.getElementById('btn-down');

const pageable = new Pageable('#container', {
  childSelector: 'section', // CSS3 selector string for the pages
  pips: true, // display the pips
  animation: 400, // the duration in ms of the scroll animation
  freeScroll: false,
  swipeThreshold: 20,
  events: {
    wheel: true, // enable / disable mousewheel scrolling
    mouse: true, // disable mouse drag scrolling
    touch: true, // enable / disable touch / swipe scrolling
    keydown: true, // enable / disable keyboard navigation
  },
  onInit: (data) => {
    if (data.index !== 0) {
      downBtn.style.display = 'none';
    }

    const introText = document.getElementById('intro-text');
    introText.classList.add('fade');

    const person = document.getElementById('person');
    person.classList.add('grow');
  },

  onFinish: (data) => {
    downBtn.style.display = data.index === 0 ? 'flex' : 'none';
  },
});

downBtn.onclick = () => {
  pageable.next();
};

/*Add a hover effect with the color of the image */
Array.from(document.querySelectorAll('.skills-grid a img')).forEach((img) => {
  img.addEventListener('mouseenter', (e) => {
    img.style.filter = `drop-shadow(0 0px 12px #${img.dataset.hoverColor})`;
  });
  img.addEventListener('mouseleave', (e) => {
    img.style.filter = `none`;
  });
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
