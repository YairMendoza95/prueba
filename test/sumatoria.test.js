const { sumatoria } = require('../index');

test('La sumatoraia de los numeros de m - n', () => {
    expect(sumatoria(6, 2)).toBe(20);
});
