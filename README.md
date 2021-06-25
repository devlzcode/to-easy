# await-to-js

[![NPM version][npm-badge]][npm-url]
[![Downloads][download-badge]][npm-url]
[![License][license-badge]][npm-url]

> Elegant wrapper for error handling both synchronous and asynchronous functions

## Pre-requisites
You need to use Node 7.6 (or later) or an ES7 transpiler in order to use async/await functionality.
You can use babel or typescript for that.

## Install

```sh
#npm
npm install to-easy

# yarn
yarn add to-easy
```

## Usage

```ts
import { asyncTo, syncTo } from 'to-easy'

const isEven = async (n: number) => {
    if (n % 2 === 0) return true
    else throw new Error('Number is not even')
}

const isOdd = (n: number) => {
    if (n % 2 !== 0)  return true
    else throw new Error('Number is not odd')
}

const checkIfNumberIsEven = async (n: number) => {
    const [e, result] = await asyncTo(isEven(n))
    if (!result) console.error(e.message)
    else console.log(`${n} is even!`)
}

const checkIfNumberIsOdd = (n: number) => {
    const [e, result] = syncTo(isOdd, n)
    if (!result) console.error(e.message)
    else console.log(`${n} is odd!`)
}

checkIfNumberIsEven(2) // 2 is even!
checkIfNumberIsOdd(2) // Number is not odd
```

[npm-url]: https://npmjs.org/package/to-easy
[npm-badge]: https://img.shields.io/npm/v/to-easy.svg?style=flat-square
[download-badge]: http://img.shields.io/npm/dm/to-easy.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/tailwindcss.svg?style=flat-square