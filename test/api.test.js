import { getUser, saveUser } from '../data/api.js';

const test = QUnit.test;

QUnit.module('user api');

QUnit.testStart(() => {
    window.localStorage.clear();
});

test('saveUser sets user and returns on getUser', (assert) => {
    // arrange
    const user = { 
        name: 'Tess',
        archetype: 'sal',
        health: 35,
        localRecognition: 100
    };

    // act
    saveUser(user);
    const result = getUser();

    // assert
    assert.deepEqual(result, user);
});