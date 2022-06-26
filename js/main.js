const elsSitenavItem = document.querySelectorAll('.index-features__item');
const elsSitenavLink = document.querySelectorAll('.index-features__feature-name');

// Drop/Down FAQ
const elQuestionButton = document.querySelectorAll('.js-faq__questions-button');
const elAnswer = document.querySelectorAll('.js-faq__questions-answer');
const elArrow = document.querySelectorAll('.js-arrow');


// Drop/Down FAQ
elQuestionButton.forEach(function (elButton) {
  elButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    elArrow.forEach(function (elArrow) {
      elArrow.classList.toggle('arrow--open');
    });

    elAnswer.forEach(function (elAnswer) {
      elAnswer.classList.toggle('faq__questions-answer--open');
    });
  });
});

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
