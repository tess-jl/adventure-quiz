// Goal of this page is to initialize a user object for tracking/scoring. Gather information from the user, like name and other starting choices.

// Testing: write a tested function that takes a FormData instance and pulls relevant information to add to a user object which represents initial state (initialize numbers, objects, and/or arrays). Use a completed: {} property and object to track which quests or quiz question the user has completed.
// Use this function in the submit handler from the form to create your user object
// Save object to local storage
// Redirect to next step in the game

// build a simple JS user out of the weird formdata object
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('archetype'),
        hp: 35,
        gold: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('archetype'),
    hp: 35,
    gold: 0,
    completed: {}
});

export default makeUser;