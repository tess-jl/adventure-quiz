import makeUser from '../home/make-user.js';
const test = QUnit.test;

QUnit.module('make user test');

test('create user object from form data!', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'Tess'); // no real formData, so have to set manually here to match expected
    formData.set('archetype', 'sal'); // no real formData, so have to set manually here to match expected

    const expected = {
        name: 'Tess',
        archetype: 'sal',
        health: 50,
        localRecognition: 0,
        completed: {}
    };

    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, expected);
});