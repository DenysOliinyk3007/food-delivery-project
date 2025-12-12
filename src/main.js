//! Задум такий: при скролінгу,щоб підсвічувалось пункт меню навігації

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header-list-item');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('current');
        if (link.getAttribute('href').slice(1) === section.id) {
          link.classList.add('current');
        }
      });
    }
  });
});

//? Задум такий: при натисканні на бургер іконку відкриваеться селект мобайл-меню, потім при натисканні на хрестик менюшка закривається

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

//! Задум такий: при натисканні на пункт меню мобайл-меню, цей пункт підсвічується зеленим фоном, а інші пункти стають прозорими
const menuLinks = mobileMenu.querySelectorAll('.header-list-item');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    menuLinks.forEach(l => {
      l.style.background = 'transparent';
    });

    this.style.background = '#bbf330';
  });
});
