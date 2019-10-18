import findById from '../common/find-by-id.js';

const test = QUnit.test;

QUnit.module('finding by id');

const array = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' },
];

test('finds item because it exists in the array', function(assert) {
    const found = findById(array, 'one');
    assert.deepEqual(found, { id: 'one' });
});


// when the id searched doesn't exist in the array
test('no item found because item does not exist in the array', function(assert) {
    const found = findById(array, 'seven');
    assert.equal(found, null);
});
