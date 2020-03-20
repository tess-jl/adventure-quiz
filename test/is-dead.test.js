import isDead from '../common/is-dead.js';
const test = QUnit.test;

QUnit.module('user is dead');

test('true, user really is dead', function(assert) {
    const user = {
        health: 0
    };

    const dead = isDead(user);

    assert.equal(dead, true);
});

test('false, user is not actually dead', function(assert) {
    const user = {
        health: 10
    };

    const dead = isDead(user);

    assert.equal(dead, false);
});