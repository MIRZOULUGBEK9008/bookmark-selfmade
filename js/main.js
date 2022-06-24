const elsSitenavItem = document.querySelectorAll('.index-features__item');
const elsSitenavLink = document.querySelectorAll('.index-features__feature-name');

elsSitenavLink.forEach(function (elLink) {
  elLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    elsSitenavItem.forEach(function (elItem) {
      elItem.classList.remove('index-features__item--active');
    });

    elLink.parentElement.classList.add('index-features__item--active');

    updateSitenavActiveLineStyles();

  });
});

// Chiziqchani topamiz
const elSitenavActiveLine = document.querySelector('.line-slider');

function updateSitenavActiveLineStyles () {
  // Faol elementni top
  const elSitenavItemActive = document.querySelector('.index-features__item--active');

  // Chiziqchaning chap tomonini faol element chap tomoniga tengla
  elSitenavActiveLine.style.left = elSitenavItemActive.offsetLeft + 'px';

  // Chiziqchaning enini faol element eniga tengla
  elSitenavActiveLine.style.width = elSitenavItemActive.offsetWidth + 'px';
}