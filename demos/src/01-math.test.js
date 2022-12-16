const {
  sum, sustraction, product, divide, average,
} = require('./02-math');

describe('Test for math', () => {
  describe('Test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const expected = sum(1, 3);
      expect(expected).toBe(4);
    });
  });

  describe('Test for sustraction', () => {
    test('sustract 8 - 4 should be 4', () => {
      const expected = sustraction(8, 4);
      expect(expected).toBe(4);
    });
  });

  describe('Test for products', () => {
    test('product 1 * 5 should be 5', () => {
      const expected = product(1, 5);
      expect(expected).toBe(5);
    });
  });

  describe('Test for divide', () => {
    test('divide 20 / 5 should be 4', () => {
      const expected = divide(20, 5);
      expect(expected).toBe(4);
      const expectedB = divide(5, 2);
      expect(expectedB).toBe(2.5);
    });

    test('divide 20 / 0 should be ...', () => {
      const expected = divide(20, 0);
      expect(expected).toBeNull();
      const expectedB = divide(5, 0);
      expect(expectedB).toBeNull();
    });
  });

  describe('Test for average', () => {
    test('average between 20 and 4 should be 12', () => {
      const isExpected = average(20, 4);
      expect(isExpected).toBe(12);
    });
  });
});
