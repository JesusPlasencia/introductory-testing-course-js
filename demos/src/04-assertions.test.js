test('testing object', () => {
  const data = { name: 'Jesus' };
  data.lastname = 'Plasencia';
  expect(data).toEqual({ name: 'Jesus', lastname: 'Plasencia' });
});

test('null object', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  const data = true;
  expect(data).toEqual(true);
  expect(!data).toEqual(false);
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  const data = 'Jesus';
  expect(data).toMatch(/sus/);
});

test('list / arrays', () => {
  const data = [1, 2, 3, 4, 5, 6];
  expect(data).toContain(3);
});
