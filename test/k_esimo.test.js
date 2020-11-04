const { k_esimo } = require('../index');

test('El k-esímo número más grande', () => {
    expect(k_esimo([7, 2, 5, 9, 8, 3], 2)).toBe(8);
});
