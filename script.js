const menuToggle = document.querySelector('.menu-toggle');
const menuToggleSpan1 = document.querySelector('.menu-toggle span:nth-child(1)');
const menuToggleSpan2 = document.querySelector('.menu-toggle span:nth-child(2)');
const menuToggleSpan3 = document.querySelector('.menu-toggle span:nth-child(3)');

const menuList = document.querySelector('nav ul');
const logoBrand = document.querySelector('nav .logo');
const heroShow = document.querySelector('.hero');

const idList = document.querySelector('#list');
const idTesti = document.querySelector('#testi');


const pageScroll = document.querySelectorAll('.page-scroll');


menuToggle.addEventListener('click', () => {
 menuToggleSpan1.classList.toggle('show');
 menuToggleSpan2.classList.toggle('show');
 menuToggleSpan3.classList.toggle('show');

 menuList.classList.toggle('slide');
 logoBrand.classList.toggle('slide');
 heroShow.classList.toggle('hero-show');
});

menuList.addEventListener('click', () => {
  menuToggleSpan1.classList.toggle('show');
  menuToggleSpan2.classList.toggle('show');
  menuToggleSpan3.classList.toggle('show');
 
  menuList.classList.toggle('slide');
  logoBrand.classList.toggle('slide');
  heroShow.classList.toggle('hero-show');
});

// Scroll Navbar
for (let i = 0; i < pageScroll.length; i++) {
  pageScroll[i].addEventListener('click', (e) => {
    e.preventDefault()
    const getElement = e.target.hash;
    
    if (window.matchMedia( "(max-width: 576px)" )) {
      switch (getElement) {
        case `#${idList.getAttribute('id')}`:
          window.scrollTo({behavior: 'smooth', top: 298})
          break;
        case `#${idTesti.getAttribute('id')}`:
          window.scrollTo({behavior: 'smooth', top: 3376})
          break;
        default:
          window.scrollTo({behavior: 'smooth', top: 0})
          break;
      }
    } else {
      switch (getElement) {
        case `#${idList.getAttribute('id')}`:
          window.scrollTo({behavior: 'smooth', top: 459})
          break;
        case `#${idTesti.getAttribute('id')}`:
          window.scrollTo({behavior: 'smooth', top: 1514})
          break;
        default:
          window.scrollTo({behavior: 'smooth', top: 0})
          break;
      }
    }
    
  });
}

