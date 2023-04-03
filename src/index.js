import './style.css';
import { clearContent, loadContent } from './content';
import { homeContent } from './home';
import { menuContent } from './menu';
// import loadContact from './contact';
let currentPage = 'Home';

function initialisePage(homeContent) {
  loadContent(homeContent);
  const navButtons = document.querySelectorAll('li');
  for (const button of navButtons) {
    button.addEventListener('click', changePage);
  }
}

function changePage(e) {
  if (e.target.textContent === currentPage) {
    return;
  }
  clearContent();
  switch (e.target.textContent) {
    case 'Home':
      loadContent(homeContent);
      const menu = document.querySelector('button');
      menu.addEventListener('click', changePage);
      currentPage = 'Home';
      break;
    case 'Menu':
      loadContent(menuContent);
      currentPage = 'Menu';
      break;
    case 'Contact':
      loadContent(homeContent);
      currentPage = 'Contact';
      break;
  }
}

initialisePage(homeContent);
