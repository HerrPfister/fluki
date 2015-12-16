# fluky [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Library for generating random variables of all types for testing.

## Installation

```sh
$ npm install --save fluky
```

## Include in project

```js
var fluky = require('fluky');
```

## Generate a random string
```js
//Default
var randomString = fluky.string()

//Random string with a specific length x
var randomString = fluky.string(x)
```
## Generate a random integer
```js
//Default
var randomInteger = fluky.integer()

//Random integer in between two numbers
var randomInteger = fluky.integer(min, max)
```
## License

MIT © [Matthew Pfister]()


[npm-image]: https://badge.fury.io/js/fluky.svg
[npm-url]: https://npmjs.org/package/fluky
[travis-image]: https://travis-ci.org/HerrPfister/fluky.svg?branch=master
[travis-url]: https://travis-ci.org/HerrPfister/fluky
[daviddm-image]: https://david-dm.org/HerrPfister/fluky.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/HerrPfister/fluky
