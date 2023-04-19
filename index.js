const main = document.querySelector('main');

const hamburger = document.querySelector('[data-menu]');

const menu = () => {
  console.log('clicked');
  const modal = document.createElement('section');
  modal.className = 'menu';
  modal.innerHTML = `<ul class="menu-list">
  <div class="close flex">
    <p>X</p>
  </div>
  <li><a href="index2.html">About <div class="middle-underline flex justify-center">
    <div class="line"></div>
  </div></a></li>
    <li><a href="#program-section">Program <div class="middle-underline flex justify-center">
      <div class="line"></div>
    </div></a></li>
    <li><a href="#speakers-section">Featured Speakers <div class="middle-underline flex justify-center">
      <div class="line"></div>
    </div></a></li>
    <li><a href="#partners">Partners <div class="middle-underline flex justify-center">
      <div class="line"></div>
    </div></a></li>
  </ul>`;
  main.appendChild(modal);

  const close = document.querySelector('.close');
  const menuList = document.querySelector('.menu-list');

  close.addEventListener('click', () => {
    menuList.parentNode.remove();
  })
}

hamburger.addEventListener('click', menu);