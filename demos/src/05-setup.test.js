describe('Set', () => {
  beforeAll(() => {
    // console.log('Before All');
  });
  afterAll(() => {
    // console.log('After All');
  });
  beforeEach(() => {
    // console.log('Before Each!');
  });
  afterEach(() => {
    // console.log('After Each!');
  });
  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(1 + 3).toBe(4);
  });
  describe('Inner Set', () => {
    test('case 3', () => {
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
