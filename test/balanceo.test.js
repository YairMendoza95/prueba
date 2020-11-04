const { balanceo } = require('../index');

test('Balanceo de parentesis', () => {
    expect(balanceo('({[]})')).toBe(true);
});
