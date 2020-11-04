const { duplicidad } = require('../index');

test('Obtener un arreglo con valores únicos', () => {
    expect(duplicidad([3, 2, 5, 9, 1, 3])).toEqual(new Set([3, 2, 5, 9, 1, 3]));
});
