[![npm version](https://img.shields.io/npm/v/@danieldietrich/slugify?logo=npm&style=flat-square)](https://www.npmjs.com/package/@danieldietrich/slugify/)[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@danieldietrich/slugify?style=flat-square)](https://snyk.io/test/npm/@danieldietrich/slugify)[![minzipped size](https://img.shields.io/bundlephobia/minzip/@danieldietrich/slugify?style=flat-square)](https://bundlephobia.com/result?p=@danieldietrich/slugify@latest)
&nbsp;
[![build](https://img.shields.io/travis/danieldietrich/slugify?logo=github&style=flat-square)](https://travis-ci.org/danieldietrich/slugify/)[![coverage](https://img.shields.io/codecov/c/github/danieldietrich/slugify?style=flat-square)](https://codecov.io/gh/danieldietrich/slugify/)
&nbsp;
![Platform](https://img.shields.io/badge/platform-Node%20v10%20+%20Browser%20%28ES6%2fES2015%29-decc47?logo=TypeScript&style=flat-square)
&nbsp;
[![Sponsor](https://img.shields.io/badge/GitHub-💖Sponsors-b5b7b9?logo=github&style=flat-square)](https://github.com/sponsors/danieldietrich)[![donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](https://paypal.me/danieldietrich13)[![license](https://img.shields.io/github/license/danieldietrich/slugify?style=flat-square)](https://opensource.org/licenses/MIT/)
&nbsp;
[![Follow](https://img.shields.io/twitter/follow/danieldietrich?label=Follow&style=social)](https://twitter.com/danieldietrich/)

# slugify

Turns strings into user-friendly and search engine-friendly [URL slugs](https://en.wikipedia.org/wiki/Clean_URL#Slug).

Slugify uses a [dictionary](https://github.com/danieldietrich/slugify/wiki/Dictionary) to translate certain glyphs to the alphabet `a-z A-Z 0-9`. Beside whitespace, the characters `!#$%&()*+,-./:;=?@[\]_|~` are considered as space. All other characters are removed, especially single `'` and double `"` quotes. Finally, the words are joined, by default with hyphen '-'.

A highlight of this solution is the readability of slugs. Only words and a single separator type are used.

## Installation

```bash
npm i @danieldietrich/slugify
```

## Usage

The module supports ES6 _import_ and CommonJS _require_ style.

```ts
import slugify from '@danieldietrich/slugify';

// I-love-it
slugify('I ♥ it!');

// I_love_it
slugify('I ♥ it!', '_');

// cafebab3-gmail-com
slugify('cafebab3@gmail.com');

// dos-and-donts
slugify("Do's and Don'ts").toLowerCase();
```

---

Copyright &copy; 2020 by [Daniel Dietrich](cafebab3@gmail.com). Released under the [MIT](https://opensource.org/licenses/MIT/) license.
