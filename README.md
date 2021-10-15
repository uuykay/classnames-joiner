# Classnames Joiner

A fast, even simpler utility for conditionally joining class names together in Javascript and Typescript.

Inspired by [classnames](https://github.com/JedWatson/classnames), this package was created as a simpler Javascript/Typescript alternative that supports only the array of string|null|undefined syntax. This was by design, and to slim down the API surface.

## Features

- 😊 Simple API
- 📜 Typescript / Javascript
- ⚡ Fast. The whole operation only loops once, and relies on string concatenation. This is faster than pushing into an array, and then joining the array, which is actually 2 loops. Will look into adding some benchmark comparisons.
- 🧘 Flexible. Use it in any Javascript framework, for any CSS-in-JS solution. I use it to join CSS Modules and utility classes.

## Limitations

- Does not support the object notation for input for simplicity.
- Does not do de-duplication of class names for speed reasons.

## Usage

```js
import { classnames } from "classnames-joiner";

const a = "someClass";
const b = null;
const c = "someOtherClass";
const d = undefined;

const result = classnames([a, b, c, d]);

console.log(result);
// "someClass someOtherClass"
```
