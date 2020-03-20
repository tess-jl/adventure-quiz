import createQuestLink from '../map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link on map');

test('creates correct html', (assert) => {
    // arrange
    const quest = {
        id: 'hit-deer',
        title: 'Hit a deer during a Nor\'eastah',
        map: {
            top: '70%',
            left: '20%'
        }
    };

    const expected = '<a class="quest" href="../quest/?id=hit-deer" style="top: 70%; left: 20%;">Hit a deer during a Nor\'eastah</a>';

    // act
    const dom = createQuestLink(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});