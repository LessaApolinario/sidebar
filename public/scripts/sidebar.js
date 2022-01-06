const header = document.querySelector('header.open');
const menu = document.querySelector('header > img.toggle');
const ul = document.querySelector('ul');
const lis = document.querySelectorAll('nav ul li');
const img = document.querySelector('header.open > img');
const imgs = document.querySelectorAll('nav ul li img');

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
    <img src="${src}" alt="${alt}" /> ${text}
  </li>
  `;

    return accumulator;
  },
  ''
);

const iconsFromLis = elements.reduce((accumulator, { src, alt, elementClass }) => {
  accumulator += `
  <li class="${elementClass}">
    <img src="${src}" alt="${alt}" />
  </li>
  `;

  return accumulator;
}, '');

menu.addEventListener('click', () => {
  const hasOpenClass = menu.classList.contains('open');

  if (hasOpenClass) {
    menu.classList.remove('open');
    header.classList.add('close');
    ul.innerHTML = ulChilds;
  } else {
    menu.classList.add('open')
    header.classList.remove('close')
    ul.innerHTML = iconsFromLis;
  }
});
