const container = document.querySelector('.container');

const header = document.querySelector('header.open');
const logo = document.querySelector('header > img');
const menu = document.querySelector('header  img.toggle');

const sidebar = document.querySelector('aside.sidebar');

const ul = document.querySelector('ul');
const lis = document.querySelectorAll('nav ul li');
const imgs = document.querySelectorAll('nav ul li img');

const footer = document.querySelector('footer');
const personImg = document.querySelector('img.person');
const p = document.querySelector('img.person + p');

let listItensImages = Array.from(imgs);

const elements = [
  {
    src: './public/images/search.svg',
    alt: 'Buscar',
    text: 'Buscar',
    elementClass: 'selected',
  },
  {
    src: './public/images/grid.svg',
    alt: 'Dashboard',
    text: 'Dashboard',
    elementClass: '',
  },
  {
    src: './public/images/pet.svg',
    alt: 'Pet',
    text: 'Pets',
    elementClass: '',
  },
  {
    src: './public/images/user.svg',
    alt: 'Usuário',
    text: 'Clientes',
    elementClass: '',
  },
  {
    src: './public/images/vet.svg',
    alt: 'Vets',
    text: 'Vets',
    elementClass: '',
  },
  {
    src: './public/images/settings.svg',
    alt: 'Ajustes',
    text: 'Ajustes',
    elementClass: '',
  },
];

const ulChilds = elements.reduce(
  (accumulator, { src, alt, text, elementClass }) => {
    accumulator += `
  <li class="${elementClass}">
    <img src="${src}" alt="${alt}" /> <span>${text}</span>
  </li>
  `;

    return accumulator;
  },
  ''
);

const iconsFromLis = elements.reduce(
  (accumulator, { src, alt, elementClass }) => {
    accumulator += `
  <li class="${elementClass}">
    <img src="${src}" alt="${alt}" />
  </li>
  `;

    return accumulator;
  },
  ''
);

const addHiddenClass = () => {
  logo.classList.add('hidden');
  personImg.classList.add('hidden');
  p.classList.add('hidden');
};

const removeHiddenClass = () => {
  logo.classList.remove('hidden');
  personImg.classList.remove('hidden');
  p.classList.remove('hidden');
};

const closeMenu = () => {
  menu.classList.remove('open');
  menu.classList.add('close');
  sidebar.classList.remove('open');
  sidebar.classList.add('close');
  container.classList.remove('open');
  container.classList.add('close');
  footer.classList.remove('open');
  footer.classList.add('close');
  addHiddenClass();
};

const openMenu = () => {
  menu.classList.add('open');
  menu.classList.remove('close');
  sidebar.classList.add('open');
  sidebar.classList.remove('close');
  container.classList.add('open');
  container.classList.remove('close');
  footer.classList.add('open');
  footer.classList.remove('close');
  removeHiddenClass();
};

menu.addEventListener('click', () => {
  const hasOpenClass = menu.classList.contains('open');

  if (hasOpenClass) {
    closeMenu();
    ul.innerHTML = iconsFromLis;
  } else {
    openMenu();
    ul.innerHTML = ulChilds;
  }
});
