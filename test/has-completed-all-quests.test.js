import hasCompletedAllQuests from '../map/has-completed-all-quests.js';
const test = QUnit.test;

QUnit.module('has completed all quests and now ready to be redirected to results');

const quests = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' },
];

test('false', function(assert) { // if user has not completed all quests then should have less than 3 objects in the completed object
    const user = {
        completed: {
            one: true,
            three: true
        }
    };

    const hasCompleted = hasCompletedAllQuests(user, quests);

    assert.equal(hasCompleted, false);
});

test('true', function(assert) { // if user has truly completed all three quests then completed should have 3 key value pairs in the completed object
    const user = {
        completed: {
            one: true,
            two: true,
            three: true
        }
    };

    const hasCompleted = hasCompletedAllQuests(user, quests);

    assert.equal(hasCompleted, true);
});

