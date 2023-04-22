import { authors, seeMoreAuthors, fullAuthorList } from './speakerData.js';

const main = document.querySelector('main');

const hamburger = document.querySelector('[data-menu]');

const menu = () => {
  const modal = document.createElement('section');
  modal.className = 'menu';
  modal.innerHTML = `<ul class="menu-list">
        <div class="close flex">
          <p>X</p>
        </div>
        <li><a class='hyperlink' href="index.html">Home</a></li>
        <li><a class='hyperlink' href="index2.html">About</a></li>
          <li><a class='hyperlink' href="index.html#program-section">Program</a></li>
          <li><a class='hyperlink' href="index.html#speakers-section">Speakers</a></li>
          <li><a class='hyperlink' href="index2.html#partners">Sponsors </a></li>
        </ul>`;
  main.appendChild(modal);

  const hyperlinks = document.querySelectorAll('.hyperlink');
  const menuList = document.querySelector('.menu-list');

  hyperlinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuList.parentNode.remove();
    });
  });

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    menuList.parentNode.remove();
  });
};

hamburger.addEventListener('click', menu);

const cardsContainer = document.querySelector('.cards-container');

const guestSpeakers = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const speakerDetails = arr[i];
    const card = document.createElement('div');
    card.className = 'cards';
    card.classList.add('mobile-cards');
    card.innerHTML = `<div class="image-container">
    <img class="speaker-image" src=${speakerDetails.image.src} alt="Speaker's Image"/>
    <img class="mozaic" src="images/mozaic_thumbnail (1).png" alt="Speaker's Image">
  </div>
    <div class="speaker-details">
      <h3 class="sub-section-header-black">${speakerDetails.name}</h3>
      <p class="sub-section-text-black red-color"><i>${speakerDetails.honours}</i></p>
      <div class="middle-underline flex">
        <div class="line-grey"></div>
      </div>
      <p class="sub-section-text-black">${speakerDetails.books}</p>
    </div>`;
    cardsContainer.appendChild(card);
  }
  return cardsContainer;
};
guestSpeakers(fullAuthorList);

