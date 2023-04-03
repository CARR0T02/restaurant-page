import './style.css';
import { clearContent, loadContent } from './content';
import { homeContent } from './home';
import { menuContent } from './menu';
import { contactContent } from './contact';
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
      loadContent(contactContent);
      const contentContainer = document.querySelector('.main');
      contentContainer.innerHTML += `<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1569.2964476188042!2d14.723822231719838!3d38.1264045337131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1316946dc0ebcd67%3A0xcd3099340f32d939!2sVia%20Consolare%20Antica%2C%20722%2C%2098071%20Capo%20d&#39;Orlando%20ME%2C%20Italy!5e0!3m2!1sen!2ssg!4v1680510708481!5m2!1sen!2ssg"
      width="600"
      height="450"
      style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      currentPage = 'Contact';
      break;
  }
}

initialisePage(homeContent);
