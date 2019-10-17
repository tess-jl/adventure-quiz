// everytime the user changes pages the profile is maintained at the top of the page

import { getUser } from '../data/api/js';
import isDead from './is-dead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const userPresent = getUser();

    if (!userPresent) {
        window.location = './';
    }

    name.textContent = userPresent.name;
    avatar.src = '../assets/avatars/' + userPresent.archetype + '.png';
    gold.textContent = userPresent.gold;

    if (isDead(userPresent)) {
        hp.textContent = 'you\'re dead';
    } else {
        hp.textContent = userPresent.hp;
    }
}

export default loadProfile; 