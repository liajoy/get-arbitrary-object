const isUndefined = val => typeof val === 'undefined';
const isPrimitive = val => Object(val) !== val;
const isToString = val => val === Symbol.toPrimitive;
const primitiveTypes = ['default', 'string', 'number'];

module.exports = function getArbitraryObject(inject = {}) {
  let lastPickedProp = '';
  const arbitraryObject = new Proxy(() => {}, {
    get(target, prop) {
      lastPickedProp = prop;

      if (!isUndefined(inject[prop])) {
        return inject[prop];
      }

      return arbitraryObject;
    },
    apply(target, self, args) {
      if (
        isToString(lastPickedProp)
          && args
          && primitiveTypes.indexOf(args[0]) > -1
      ) {
        const toString = inject.toString || (() => 0);
        const val = toString();

        if (isPrimitive(val)) {
          return val;
        }

        return 0;
      }

      return arbitraryObject;
    },
  });

  return arbitraryObject;
};
