// Goal of this page is to initialize a user object for tracking/scoring. Gather information from the user, like name and other starting choices.


// Use this function in the submit handler from the form to create your user object
// build a simple JS user out of the weird formdata object


const makeUser = (formData) => ({
    name: formData.get('name'),
    archetype: formData.get('archetype'),
    health: 50,
    localRecognition: 0,
    completed: {}
});

export default makeUser;