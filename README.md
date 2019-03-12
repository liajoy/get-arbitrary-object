# get-arbitrary-object

Get a arbitrary object.

## Install

Install with npm:
``` sh
$ npm install get-arbitrary-object --save
```

## Usage

``` javascript
const arbitraryObject = getArbitraryObject()
try {
console.log(ArbitraryObject.a)
console.log(ArbitraryObject.a())
console.log(ArbitraryObject.a.b.c())
} catch(err) {} // No error will be throwed

const arbitraryObject = getArbitraryObject({
    a: 1,
    toString: () => 0
})
console.log(ArbitraryObject.a) // 1
console.log(ArbitraryObject + 1) // 1
console.log(ArbitraryObject.b + 1) // 0 + 1
```
