const menuNavbar = document.querySelector('.navbar');
const menuInner = menuNavbar.querySelector('.menu-inner');
const menuArrow = menuNavbar.querySelector('.menu-arrow');
const menuBurger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
  menuNavbar.classList.toggle('active');
  overlay.classList.toggle('active');
};

const hideSubmenu = () => {
  subMenu.style.animation = 'slideRight 0.5s ease forwards';
   setTimeout(() => {
     subMenu.classList.remove('active');

   }, 300);
   menuNavbar.querySelector('.menu-title').textContent = '';
   menuNavbar.querySelector('.menu-header').classList.remove('active');

};

const showSubmenu = (children) => {
  subMenu = children.querySelector('.submenu');
  subMenu.classList.add('active');
  subMenu.style.animation = 'slideLeft 0.5s ease forwards';
  const menuTitle = children.querySelector('i').parentNode.childNodes[0].textContent;
  menuNavbar.querySelector('.menu-title').textContent = menuTitle;
  menuNavbar.querySelector('.menu-header').classList.add('active');
};

const toggleSubMenu = (e) => {
  if (!menuNavbar.classList.contains('active')) {
    return;
  } 
   if (e.target.closest('.menu-dropdown')){
     const children = e.target.closest('.menu-dropdown');
     showSubmenu(children);
  }
};

const resizeWindow = () => {
  if (window.innerWidth > 991) {
    if (menuNavbar.classList.contains('active')) {
      toggleMenu();
    }
  }
};

menuBurger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
menuArrow.addEventListener('click', hideSubmenu);
menuInner.addEventListener('click', toggleSubMenu);
window.addEventListener('resize', resizeWindow);
