const getArbitraryObject = require('./index');

test('getArbitraryObject', () => {
  expect(() => {
    const arbitraryObject = getArbitraryObject();

    arbitraryObject.foo.bar();
    arbitraryObject.foo + 1;
    arbitraryObject.foo * 1;
    arbitraryObject.foo >>> 2;
  }).not.toThrow();
});

test('inject', () => {
  const arbitraryObject = getArbitraryObject({
    foo: 1,
    toString: () => 2,
  });

  expect(arbitraryObject.foo).toBe(1);
  expect(arbitraryObject.foo + 1).toBe(2);
  expect(arbitraryObject + 1).toBe(3);
  expect(arbitraryObject.bar('default') + 1).toBe(3);
  expect(arbitraryObject.bar('default')).not.toBe(0);
});
