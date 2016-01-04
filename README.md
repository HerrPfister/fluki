# fluki [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Library for generating random variables of all types for testing.

## Installation

```sh
$ npm install --save fluki
```

## Include in project

```js
var fluki = require('fluki');
```

## Generate a random string
```js
//Default
fluki.string()

//Random string with a specific length x
fluki.string(x)
```
## Generate a random integer
```js
//Default
fluki.integer()

//Random integer between min and max
fluki.integer(min, max)
```

## Generate a random array
```js
//Default
fluki.array()

//Random array of x strings, integers, or objects
fluki.array(x, "strings|integers|objects")
```

## Generate a random object

```js
//Default
fluki.object()

//Random object with x random key-value pairs
fluki.object(x)
```

## License

MIT © [Matthew Pfister]()


[npm-image]: https://badge.fury.io/js/fluki.svg
[npm-url]: https://npmjs.org/package/fluki
[travis-image]: https://travis-ci.org/HerrPfister/fluki.svg?branch=master
[travis-url]: https://travis-ci.org/HerrPfister/fluki
[daviddm-image]: https://david-dm.org/HerrPfister/fluki.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/HerrPfister/fluki
