import makeUser from './make-user.js';
import { saveUser } from '../data/api.js';

const userSignUp = document.getElementById('user-sign-up');

// using form data when user submits
userSignUp.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

    saveUser(user);

    window.location = 'map';
});