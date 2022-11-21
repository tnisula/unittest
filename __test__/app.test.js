const calculator = require('../calculator')

test('Funktion tulisi palauttaa sille annetun kahden kokonaisluvun summa', () => {
    expect(calculator.add(4,5)).toBe(9);
    expect(calculator.add(4,-5)).toBe(-1);
  });

  