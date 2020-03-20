import createCompletedQuest from '../map/create-completed-quest.js';

const test = QUnit.test;

QUnit.module('create completed quest for map');



test('creates correct html to show completed quest', (assert) => {
    // arrange
    const quest = {
        id: 'hit-deer',
        title: 'Hit a deer during a Nor\'eastah',
        map: {
            top: '70%',
            left: '20%'
        }
    };

    const expected = '<span class="quest completed" style="top: 70%; left: 20%;">Hit a deer during a Nor\'eastah</span>';

    // act
    const dom = createCompletedQuest(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});