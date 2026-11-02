const { test } = require('node:test');
const assert = require('node:assert');
const topla = require('./math');

test('Toplama işlemi', () => {
    assert.equal(topla(5, 3), 8);
});
