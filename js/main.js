const modifieries = {
  // Drop/Down Accordion
  accordionActive: 'accordion__button--open',
  toggleActive: 'accordion__content--open',

  // TabPanels
  tabActive: 'tabs__item--active',
  panelActive: 'tab-panels__tab-panel--active'
};

// TabPanels
const elsTab = document.querySelectorAll('.js-tabs__link');
const elsTabItem = document.querySelectorAll('.js-tabs__item');
const elsTabPanel = document.querySelectorAll('.js-tab-panel');

// Drop/Down Accordion
const elsAccordionToggler = document.querySelectorAll('.js-accordion-toggler');
const elsAccordionContent = document.querySelectorAll('.js-accordion-content');


// TabPanels
function removeItemClass() {
  elsTabItem.forEach(function(item){
    item.classList.remove(modifieries.tabActive);
  });
}

function removeActiveClass() {
  elsTabPanel.forEach(function(element){
    element.classList.remove(modifieries.panelActive);
  });
}

elsTab.forEach(function (elTab, index) {

  elTab.addEventListener('click', function (evt) {
    evt.preventDefault();
    // console.log(elTab.href.split('#')[1]);

    removeItemClass();
    elsTabItem[index].classList.add(modifieries.tabActive);

    removeActiveClass();
    elsTabPanel[index].classList.add(modifieries.panelActive);

  });
});


// Drop/Down Accordion
elsAccordionToggler.forEach(function (elToggler, index) {
  elToggler.addEventListener('click', function () {
    elsAccordionToggler[index].classList.toggle(modifieries.accordionActive);
    elsAccordionContent[index].classList.toggle(modifieries.toggleActive);
  });
});