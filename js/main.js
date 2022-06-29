// Drop/Down FAQ
const elsAccordionToggler = document.querySelectorAll('.js-accordion-toggler');
const elsAccordionContent = document.querySelectorAll('.js-accordion-content');

// Drop/Down FAQ
elsAccordionToggler.forEach(function (elToggler, index) {
  elToggler.addEventListener('click', function () {
    elsAccordionToggler[index].classList.toggle('accordion__button--open');
    elsAccordionContent[index].classList.toggle('accordion__content--open');
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