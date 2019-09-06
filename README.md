[![npm version](https://img.shields.io/npm/v/@danieldietrich/slugify?logo=npm&style=flat-square)](https://www.npmjs.com/package/@danieldietrich/slugify/)[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@danieldietrich/slugify?style=flat-square)](https://snyk.io/test/npm/@danieldietrich/slugify)[![minzipped size](https://img.shields.io/bundlephobia/minzip/@danieldietrich/slugify?style=flat-square)](https://bundlephobia.com/result?p=@danieldietrich/slugify@latest)![types](https://img.shields.io/npm/types/typescript?style=flat-square)[![license](https://img.shields.io/github/license/danieldietrich/slugify?style=flat-square)](https://opensource.org/licenses/MIT/)
&nbsp;
[![build](https://img.shields.io/travis/danieldietrich/slugify?logo=github&style=flat-square)](https://travis-ci.org/danieldietrich/slugify/)[![coverage](https://img.shields.io/codecov/c/github/danieldietrich/slugify?style=flat-square)](https://codecov.io/gh/danieldietrich/slugify/)
&nbsp;
[![donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?logo=paypal&style=flat-square)](https://paypal.me/danieldietrich)[![patrons](https://img.shields.io/liberapay/patrons/danieldietrich?style=flat-square)](https://liberapay.com/danieldietrich/)
&nbsp;
[![Follow](https://img.shields.io/twitter/follow/danieldietrich?label=Follow&style=social)](https://twitter.com/danieldietrich/)

# slugify

Turns strings into user-friendly and search engine-friendly [URL slugs](https://en.wikipedia.org/wiki/Clean_URL#Slug).

Slugify uses a [dictionary](https://github.com/danieldietrich/slugify/wiki/Dictionary) to translate certain glyphs to the alphabet `[a-zA-Z0-9]`. The words are joined with hyphen '-' by default.

A highlight of this solution is the readability of slugs. Only words and a single separator type are used.

## Installation

```bash
npm i @danieldietrich/slugify
```

## Usage

The module supports ES6 _import_ and CommonJS _require_ style.

```ts
import slugify from 'slugify';

// I-love-it
slugify('I ♥ it!');

// I_love_it
slugify('I ♥ it!', '_');

// cafebab3-gmail-com
slugify('cafebab3@gmail.com');
```

---

Copyright &copy; 2019 by [Daniel Dietrich](cafebab3@gmail.com). Released under the [MIT](https://opensource.org/licenses/MIT/) license.