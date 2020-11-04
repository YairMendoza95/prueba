const { ordenamiento } = require('../index');

test('Ordenar de mayor a menor los elementos de un arreglo', () => {
    expect(ordenamiento([3, 2, 5, 9, 1, 3])).toEqual([1, 2, 3, 3, 5, 9]);
});
