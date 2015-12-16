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
var randomString = fluki.string()

//Random string with a specific length x
var randomString = fluki.string(x)
```
## Generate a random integer
```js
//Default
var randomInteger = fluki.integer()

//Random integer in between two numbers
var randomInteger = fluki.integer(min, max)
```
## License

MIT © [Matthew Pfister]()


[npm-image]: https://badge.fury.io/js/fluki.svg
[npm-url]: https://npmjs.org/package/fluki
[travis-image]: https://travis-ci.org/HerrPfister/fluki.svg?branch=master
[travis-url]: https://travis-ci.org/HerrPfister/fluki
[daviddm-image]: https://david-dm.org/HerrPfister/fluki.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/HerrPfister/fluki
