const tabs = document.querySelectorforall('[data-tab-target]');
const tabContents = document.queryselectorforall('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classlist.remove('active');
    });
    target.classlist.add('active');
  })
})