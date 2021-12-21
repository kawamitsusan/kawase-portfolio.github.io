const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

new LuminousGallery(document.querySelectorAll('.grid-gallery-lumi'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

AOS.init();