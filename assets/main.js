const tabItems = document.querySelectorAll('.tab_item');
const tabContents = document.querySelectorAll('.tab_content');
tabItems.forEach((tab, i) => {
  const content = tabContents[i];
  tab.onclick = function () {
    document.querySelector('.tab_item.active').classList.remove('active');
    document.querySelector('.tab_content.active').classList.remove('active');
    this.classList.add('active');
    content.classList.add('active');
  };
});
const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');
const menuList = document.querySelector('.header_main-list');
iconMenu.onclick = () => {
  iconClose.style.display = 'block';
  menuList.style.display = 'block';
  iconMenu.style.display = 'none';
};
iconClose.onclick = () => {
  iconClose.style.display = 'none';
  menuList.style.display = 'none';
  iconMenu.style.display = 'block';
};
const mediaQuery = window.matchMedia('(min-width: 768px)');
