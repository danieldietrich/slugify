# Contribution Guidelines

The characters are modified in [index.test.ts](./src/index.test.ts). The unit tests generate the readme table and the dictionary (see [index.ts](./src/index.ts)).

## Prerequisites

* List global installations: `npm ls -g --depth=0`
* Globally install [npm-check-updates](https://github.com/tjunnone/npm-check-updates): `npm i -g npm-check-updates`
* Globally install [release-it](https://github.com/release-it/release-it): `npm i -g release-it`
* Locally install project dependencies: `npm i`

## Scripts

Development:

* Upgrade dependencies: `ncu -u` (might require a `npm i` afterwards)
* Run tests: `npm test` (see [coverage/](./coverage/lcov-report/index.ts.html))
* Build project: `npm run build` (see [dist/](./dist/))

Release (patch, minor or major):

* Remove `"private": true` from `package.json`.
* Double-check package contents before release: `npm pack` (see .tgz file)
* Release (dry run): `release-it minor --dry-run`
* Release: `release-it minor` (tag and publish)

## Rules

General:

* We create symbolic representations instead of providing 100% correct translations
* Translations must not be unique (read: the dictionary must not be injective)
* We do not perform further transformations, like to lower case.

Conventions:

* We allow only glyphs consisting of one character
* Upper case glyphs are translated first upper (Ä → Ae)
* Upper case glyphs that consist of two letters are translated ALL UPPER CASE (Æ → AE)
* Lower case glyphs are translated to all lower (ä → ae)
* Constants are translated to letters (ℇ → e)
* Copyright symbols are translated to UPPER CASE abbreviations (™ → TM)
* Math symbols (including the Greek alphabet) are translated to names (𝜋 → pi)
* Units are translated to names (℃ → Celsius)
* Currencies are translated to all lower names (€ → euro)
