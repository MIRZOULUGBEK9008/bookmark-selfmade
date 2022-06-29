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