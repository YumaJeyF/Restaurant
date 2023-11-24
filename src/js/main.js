import * as flsFunctions from './modules/webp_support.js';

flsFunctions.isWebp();

import './functions.js';

// Изменение размера картинки при наведении (шестая секция)

const members = document.querySelectorAll('.member-inf');

members.forEach(member => {
    member.addEventListener('mouseover', () => member.firstElementChild.lastElementChild.classList.add('scale'));
    member.addEventListener('mouseout', () => member.firstElementChild.lastElementChild.classList.remove('scale'));
});