// see [ESLint Configuration](https://eslint.org/docs/user-guide/configuring)
module.exports = {
    // libs that run in both envs, browser & node, don't access global variables that are browser or node specific
    "env": {
        "browser": false,    // enables Browser global variables, like localStorage
        "es6": true,         // enables new ES6 global variables, such as Set
        "node": false,       // enables Node global variables, like process
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {              // [typescript-eslint parser configuration](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration)
        "project": "tsconfig.json", // mandatory when using types
        "sourceType": "module"      // needed in order to use import declarations
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {

        // List of [ESLint rules](https://eslint.org/docs/rules/)
        "arrow-parens": ["off", "as-needed"],             // do not force arrow function parentheses
        "constructor-super": "error",                     // checks the correct use of super() in sub-classes
        "curly": "error",                                 // if statement needs curly braces 
        "dot-notation": "error",                          // obj.a instead of obj['a'] when possible
        "eqeqeq": "error",                                // ban '==', don't use 'smart' option!
        "guard-for-in": "error",                          // needs obj.hasOwnProperty(key) checks
        "max-classes-per-file": "error",                  // max 1 class per file
        "new-parens": "error",                            // new Error() instead of new Error
        "no-bitwise": "error",                            // bitwise operators &, | can be confused with &&, ||
        "no-caller": "error",                             // ECMAScript deprecated arguments.caller and arguments.callee
        "no-cond-assign": "error",                        // assignments if (a = '1') are error-prone
        "no-debugger": "error",                           // disallow debugger; statements
        "no-eval": "error",                               // eval is considered unsafe
        "no-labels": "error",                             // GOTO is only used in BASIC ;)
        "no-multiple-empty-lines": ["error", {"max": 1}], // two or more empty lines need to be fused to one
        "no-new-wrappers": "error",                       // there is no reason to wrap primitve values
        "no-throw-literal": "error",                      // only throw Error but no objects {}
        "no-trailing-spaces": "error",                    // trim end of lines
        "no-unsafe-finally": "error",                     // safe try/catch/finally behavior
        "no-var": "error",                                // use const and let instead of var
        "prefer-const": "error",                          // use const when possible
        /*
        "quote-props": ["error", "as-needed", {           // defines how object-keys are quoted
            "keywords": false,
            "unnecessary": true,
            "numbers": false
        }],
        */
        "space-before-function-paren": ["error", {        // space in function decl: f() vs async () => {}
            "anonymous": "never",
            "asyncArrow": "always",
            "named": "never"
        }],
        "use-isnan": "error",                             // isNaN(i) Number.isNaN(i) instead of i === NaN

        // List of [@typescript-eslint rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
        "@typescript-eslint/adjacent-overload-signatures": "error", // grouping same method names
        "@typescript-eslint/array-type": "error",                   // string[] instead of Array<string>
        "@typescript-eslint/ban-types": "error",                    // bans types like String in favor of string
        "@typescript-eslint/class-name-casing": "error",            // classes and interfaces must be PascalCased
        "@typescript-eslint/indent": "error",                       // consistent indentation
        "@typescript-eslint/consistent-type-assertions": "error",   // needed for .tsx, bad = <Foo>bar, good = bar as Foo
        "@typescript-eslint/no-explicit-any": "error",              // don't use :any type
        "@typescript-eslint/no-misused-new": "error",               // no constructors for interfaces or new for classes
        "@typescript-eslint/no-parameter-properties": "error",      // no property definitions in class constructors
        "@typescript-eslint/no-var-requires": "error",              // use import instead of require
        "@typescript-eslint/prefer-for-of": "error",                // prefer for-of loop over arrays
        "@typescript-eslint/prefer-namespace-keyword": "error",     // prefer namespace over module in TypeScript
        "@typescript-eslint/triple-slash-reference": "error",       // ban /// <reference />, prefer imports
        "@typescript-eslint/type-annotation-spacing": "error",      // consistent space around colon ':'
    }
};