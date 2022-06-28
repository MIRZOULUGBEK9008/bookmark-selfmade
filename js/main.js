// Drop/Down FAQ
const elsQuestionButton = document.querySelectorAll('.js-faq__questions-button');
const elsAnswer = document.querySelectorAll('.js-faq__questions-answer');
const elsArrow = document.querySelectorAll('.js-arrow');

// Drop/Down FAQ
elsQuestionButton.forEach(function (elButton, index) {
  elButton.addEventListener('click', function () {
    elsArrow[index].classList.toggle('arrow--open');
    elsAnswer[index].classList.toggle('faq__questions-answer--open');
  });
});



const elsTab = document.querySelectorAll('.js-tabs__link');
const elsTabItem = document.querySelectorAll('.js-tabs__item');
const elsTabPanel = document.querySelectorAll('.js-tab-panel');

function removeItemClass() {
  elsTabItem.forEach(function(item){
    item.classList.remove('tabs__item--active');
  });
}

function removeActiveClass() {
  elsTabPanel.forEach(function(element){
    element.classList.remove('tab-panels__tab-panel--active');
  });
}

elsTab.forEach(function (elTab, index) {

  elTab.addEventListener('click', function (evt) {
    evt.preventDefault();
    // console.log(elTab.href.split('#')[1]);

    removeItemClass();
    elsTabItem[index].classList.add('tabs__item--active');

    removeActiveClass();
    elsTabPanel[index].classList.add('tab-panels__tab-panel--active');

  });
});




















// const elsSitenavItem = document.querySelectorAll('.index-features__item');
// const elsSitenavLink = document.querySelectorAll('.index-features__feature-name');

// elsSitenavLink.forEach(function (elLink) {
//   elLink.addEventListener('click', function (evt) {
//     evt.preventDefault();

//     elsSitenavItem.forEach(function (elItem) {
//       elItem.classList.remove('tabs__item--active');
//     });

//     elLink.parentElement.classList.add('tabs__item--active');

//     updateSitenavActiveLineStyles();

//   });
// });

// // Chiziqchani topamiz
// const elSitenavActiveLine = document.querySelector('.line-slider');

// function updateSitenavActiveLineStyles () {
//   // Faol elementni top
//   const elSitenavItemActive = document.querySelector('.tabs__item--active');

//   // Chiziqchaning chap tomonini faol element chap tomoniga tengla
//   elSitenavActiveLine.style.left = elSitenavItemActive.offsetLeft + 'px';

//   // Chiziqchaning enini faol element eniga tengla
//   elSitenavActiveLine.style.width = elSitenavItemActive.offsetWidth + 'px';
// }