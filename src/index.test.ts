import slugify from '.';
import fs from 'fs';

test('Should have strict monotonic unicode symbol order', () => {
    let prevGlyph = "\x00";
    Object.values(unicode).forEach(block => {
        Object.keys(block).forEach(glyph => {
            try {
                expect(glyph.charCodeAt(0)).toBeGreaterThan(prevGlyph.charCodeAt(0));
            } catch (err) {
                console.error(`'${glyph}' ${glyph.charCodeAt(0).toString(16)} must appear before '${prevGlyph}' ${prevGlyph.charCodeAt(0).toString(16)}`);
                throw err;
            }
            prevGlyph = glyph;
        });
    });
});

test('Should contain one-character glyphs only', () => {
    Object.values(unicode).forEach(block => {
        Object.keys(block).forEach(glyph => {
            try {
                expect(glyph.length).toBe(1);
            } catch (err) {
                console.log(`Glyphs must consist of one character: '${glyph}'`);
                throw err;
            }
        });
    });
});

test('Should match alphabet complement for all glyphs', () => {
    Object.values(unicode).forEach(block => {
        Object.keys(block).forEach(glyph => {
            try {
                expect(alphabet.test(glyph)).toBeFalsy();
            } catch (err) {
                console.log(`Glyph '${glyph}' must not be in ${alphabet}`);
                throw err;
            }
        });
    });
});

test('Should match alphabet for all translations', () => {
    Object.values(unicode).every(block => {
        Object.entries(block).every(([glyph, value]) => {
            try {
                expect(alphabet.test(value)).toBeTruthy();
            } catch (err) {
                console.log(`Translation {'${glyph}': '${value}'} does not match alphabet ${alphabet}`);
                throw err;
            }
        });
    });
});

test('Should contain no empty translations', () => {
    Object.values(unicode).every(block => {
        Object.entries(block).every(([glyph, value]) => {
            try {
                expect(value.trim().length).toBeGreaterThan(0);
            } catch (err) {
                console.log(`Translation {'${glyph}': '${value}'} must not be empty`);
                throw err;
            }
        });
    });
});

test('Should use the generated dictionary', () => {
    const minified = flatten(
        Object.values(unicode).map(block => {
            return Object.entries(block).map(([char, translation]) => `'${char}': '${translation}'`);
        }),
    ).join(', ');
    const program = fs.readFileSync('./src/index.ts').toString('utf-8');
    try {
        expect(program).toContain(minified);
    } catch (err) {
        console.log(`THERE HAVE BEEN CHANGES DETECTED.
PLEASE SYNC './index.ts' BY COPY/PASTING THIS:
[---8<---*snip*---8<---*snap*--->
${minified}
<---8<---*snip*---8<---*snap*---]`);
        throw err;
    }
});

test('Should find generated unicode table in README.md', () => {
    const table = `## Dictionary

The dictionary covers subsets of the following [Unicode blocks](https://en.wikipedia.org/wiki/List_of_Unicode_characters):

${Object.keys(unicode).map(name => `* [${name}](#${slugify(name)})`).join('\n')}

${Object.entries(unicode).map(([name, block]) => {
        return `### ${name}

| Code | Glyph | Value |
| :--: | :---: | :---: |
${Object.entries(block).map(([char, translation]) => {
    return `| <tt>${padLeft(char.charCodeAt(0).toString(16), 4, '0')}</tt> | <tt>${char}</tt> | <tt>${translation}</tt> |`;
}).join('\n')}`;
    }).join('\n\n')
}`;
    const readme = fs.readFileSync('./README.md').toString('utf-8');
    try {
        expect(readme).toContain(table);
    } catch (err) {
        console.log(`THERE HAVE BEEN CHANGES DETECTED.
PLEASE SYNC './README.md' BY COPY/PASTING THIS:
[---8<---*snip*---8<---*snap*--->
${table}
<---8<---*snip*---8<---*snap*---]`);
        throw err;
    }
});

test('Should slugify empty string', () => {
    expect(slugify("")).toBe("");
});

test('Should slugify the alphabet', () => {
    expect(slugify("The quick brown fox jumps over the lazy dog"))
        .toBe("The-quick-brown-fox-jumps-over-the-lazy-dog");
});

test('Should slugify multiline string using + separator', () => {
    expect(slugify(" -Foo! \nBar+Baz - Quux_QuuuxQuuuux---.\n", "+"))
        .toBe("Foo+Bar+Baz+Quux+QuuuxQuuuux");
});

test('Should slugify multiline string using + separator', () => {
    expect(slugify("👉*Ähäm*, gestatten, Erwin Lottemann :) *düdeldö*"))
        .toBe("Aehaem-gestatten-Erwin-Lottemann-duedeldoe");
});

test('Should slugify copyright sign', () => {
    expect(slugify("© 2019 by Daniel Dietrich"))
        .toBe("C-2019-by-Daniel-Dietrich");
});

test('Should translate heart glyph', () => {
    expect(slugify("I ♥ it!")).toBe("I-love-it");
});

function flatten<T>(array: T[][]): T[] {
    return ([] as T[]).concat.apply([], array);
}

function padLeft(str: string, length: number, char: string = ' '): string {
    let res = str;
    while (res.length < length) {
        res = char + res;
    }
    return res;
}

const alphabet = /^[a-zA-Z0-9\-]+$/;

const unicode: Record<string, Record<string, string>> = {
    "Basic Latin": {
        // ASCII Punctuation & Symbols
        '$': 'dollar',
        '%': 'percent',
        '&': 'and',
        // ASCII Punctuation & Symbols
        '<': 'less',
        '=': 'equals',
        '>': 'greater',
    },
    "Latin-1 Supplement": {
        // Latin-1 Punctuation & Symbols
        '¢': 'cent',
        '£': 'pound',
        '¤': 'currency',
        '¥': 'yen',
        '©': 'C',
        '®': 'RTM',
        'µ': 'micro',
        // Letters: Uppercase
        'À': 'A',
        'Á': 'A',
        'Â': 'A',
        'Ã': 'A',
        'Ä': 'Ae', // german umlaut
        'Å': 'A',
        'Æ': 'AE',
        'Ç': 'C',
        'È': 'E',
        'É': 'E',
        'Ê': 'E',
        'Ë': 'E',
        'Ì': 'I',
        'Í': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ð': 'D',
        'Ñ': 'N',
        'Ò': 'O',
        'Ó': 'O',
        'Ô': 'O',
        'Õ': 'O',
        'Ö': 'Oe', // german umlaut
        // Math
        '×': 'x', // not times
        // Letters: Uppercase
        'Ø': 'O',
        'Ù': 'U',
        'Ú': 'U',
        'Û': 'U',
        'Ü': 'Ue', // german umlaut
        'Ý': 'Y',
        'Þ': 'TH',
        // Letters: Lowercase
        'ß': 'ss',
        'à': 'a',
        'á': 'a',
        'â': 'a',
        'ã': 'a',
        'ä': 'ae', // german umlaut
        'å': 'a',
        'æ': 'ae',
        'ç': 'c',
        'è': 'e',
        'é': 'e',
        'ê': 'e',
        'ë': 'e',
        'ì': 'i',
        'í': 'i',
        'î': 'i',
        'ï': 'i',
        'ð': 'd',
        'ñ': 'n',
        'ò': 'o',
        'ó': 'o',
        'ô': 'o',
        'õ': 'o',
        'ö': 'oe', // german umlaut
        // Math
        '÷': 'div', // not division
        // Letters: Lowercase
        'ø': 'o',
        'ù': 'u',
        'ú': 'u',
        'û': 'u',
        'ü': 'ue', // german umlaut
        'ý': 'y',
        'þ': 'th',
        'ÿ': 'y',
    },
    "Latin Extended-A": {
        'Ā': 'A',
        'ā': 'a',
        'Ă': 'A',
        'ă': 'a',
        'Ą': 'A',
        'ą': 'a',
        'Ć': 'C',
        'ć': 'c',
        'Ĉ': 'C',
        'ĉ': 'c',
        'Ċ': 'C',
        'ċ': 'c',
        'Č': 'C',
        'č': 'c',
        'Ď': 'D',
        'ď': 'd',
        'Đ': 'D',
        'đ': 'd',
        'Ē': 'E',
        'ē': 'e',
        'Ĕ': 'E',
        'ĕ': 'e',
        'Ė': 'E',
        'ė': 'e',
        'Ę': 'E',
        'ę': 'e',
        'Ě': 'E',
        'ě': 'e',
        'Ĝ': 'G',
        'ĝ': 'g',
        'Ğ': 'G',
        'ğ': 'g',
        'Ġ': 'G',
        'ġ': 'g',
        'Ģ': 'G',
        'ģ': 'g',
        'Ĥ': 'H',
        'ĥ': 'h',
        'Ħ': 'H',
        'ħ': 'h',
        'Ĩ': 'I',
        'ĩ': 'i',
        'Ī': 'I',
        'ī': 'i',
        'Ĭ': 'I',
        'ĭ': 'i',
        'Į': 'I',
        'į': 'i',
        'İ': 'I',
        'ı': 'i',
        'Ĳ': 'IJ',
        'ĳ': 'ij',
        'Ĵ': 'J',
        'ĵ': 'j',
        'Ķ': 'K',
        'ķ': 'k',
        'ĸ': 'k',
        'Ĺ': 'L',
        'ĺ': 'l',
        'Ļ': 'L',
        'ļ': 'l',
        'Ľ': 'L',
        'ľ': 'l',
        'Ŀ': 'L',
        'ŀ': 'l',
        'Ł': 'L',
        'ł': 'l',
        'Ń': 'N',
        'ń': 'n',
        'Ņ': 'N',
        'ņ': 'n',
        'Ň': 'N',
        'ň': 'n',
        'ŉ': 'n',
        'Ŋ': 'N',
        'ŋ': 'n',
        'Ō': 'O',
        'ō': 'o',
        'Ŏ': 'O',
        'ŏ': 'o',
        'Ő': 'O',
        'ő': 'o',
        'Œ': 'OE',
        'œ': 'oe',
        'Ŕ': 'R',
        'ŕ': 'r',
        'Ŗ': 'R',
        'ŗ': 'r',
        'Ř': 'R',
        'ř': 'r',
        'Ś': 'S',
        'ś': 's',
        'Ŝ': 'S',
        'ŝ': 's',
        'Ş': 'S',
        'ş': 's',
        'Š': 'S',
        'š': 's',
        'Ţ': 'T',
        'ţ': 't',
        'Ť': 'T',
        'ť': 't',
        'Ŧ': 'T',
        'ŧ': 't',
        'Ũ': 'U',
        'ũ': 'u',
        'Ū': 'U',
        'ū': 'u',
        'Ŭ': 'U',
        'ŭ': 'u',
        'Ů': 'U',
        'ů': 'u',
        'Ű': 'U',
        'ű': 'u',
        'Ų': 'U',
        'ų': 'u',
        'Ŵ': 'W',
        'ŵ': 'w',
        'Ŷ': 'Y',
        'ŷ': 'y',
        'Ÿ': 'Y',
        'Ź': 'Z',
        'ź': 'z',
        'Ż': 'Z',
        'ż': 'z',
        'Ž': 'Z',
        'ž': 'z',
        'ſ': 's',
    },
    "Greek": {
        'Α': 'Alpha',
        'Β': 'Beta',
        'Γ': 'Gamma',
        'Δ': 'Delta',
        'Ε': 'Epsilon',
        'Ζ': 'Zeta',
        'Η': 'Eta',
        'Θ': 'Theta',
        'Ι': 'Iota',
        'Κ': 'Kappa',
        'Λ': 'Lambda',
        'Μ': 'Mu',
        'Ν': 'Nu',
        'Ξ': 'Xi',
        'Ο': 'Omnicron',
        'Π': 'Pi',
        'Ρ': 'Rho',
        'Σ': 'Sigma',
        'Τ': 'Tau',
        'Υ': 'Upsilon',
        'Φ': 'Phi',
        'Χ': 'Chi',
        'Ψ': 'Psi',
        'Ω': 'Omega',
        'α': 'alpha',
        'β': 'beta',
        'γ': 'gamma',
        'δ': 'delta',
        'ε': 'epsilon',
        'ζ': 'zeta',
        'η': 'eta',
        'θ': 'theta',
        'ι': 'iota',
        'κ': 'kappa',
        'λ': 'lambda',
        'μ': 'mu',
        'ν': 'nu',
        'ξ': 'xi',
        'ο': 'omnicron',
        'π': 'pi',
        'ρ': 'rho',
        'σ': 'sigma',
        'τ': 'tau',
        'υ': 'upsilon',
        'φ': 'phi',
        'χ': 'chi',
        'ψ': 'psi',
        'ω': 'omega',
    },
    "General Punctuation": {
        '‰': 'permille',
        '‱': 'permyriad',
        '⁒': 'minus', // commercial minus
    },
    "Currency Symbols": {
        '₠': 'ecu',
        '₡': 'colon',
        '₢': 'cruzeiro',
        '₣': 'french franc',
        '₤': 'lira',
        '₥': 'mill',
        '₦': 'naira',
        '₧': 'peseta',
        '₨': 'rupee',
        '₩': 'won',
        '₪': 'new shequel',
        '₫': 'dong',
        '€': 'euro',
        '₭': 'kip',
        '₮': 'tugrik',
        '₯': 'drachma',
        '₰': 'german penny',
        '₱': 'peso',
        '₲': 'guarani',
        '₳': 'austral',
        '₴': 'hryvnia',
        '₵': 'cedi',
        '₶': 'livre tournois',
        '₷': 'spesmilo',
        '₸': 'tenge',
        '₹': 'indian rupee',
        '₺': 'turkish lira',
        '₻': 'nordic mark',
        '₼': 'manat',
        '₽': 'ruble',
        '₾': 'lari',
        '₿': 'bitcoin',
    },
    "Letterlike Symbols": {
        '℃': 'Celsius',
        'ℇ': 'e', // euler constant
        '℉': 'Fahrenheit',
        '℗': 'P',
        '℠': 'SM',
        '™': 'TM',
    },
    "Mathematical Operators": {
        '∀': 'forall',
        '∃': 'exists',
        '∅': 'emptyset',
        '∈': 'in',
        '∊': 'in',
        '∋': 'contains',
        '∍': 'contains',
        '√': 'sqrt', // square root
        '∞': 'infinity',
        // Logical and set operators
        '∧': 'and',
        '∨': 'or',
        '∩': 'intersect',
        '∪': 'union',
        '≪': 'less',
        '≫': 'greater',
        '⊂': 'subset',
        '⊃': 'superset',
        '⊆': 'subset',
        '⊇': 'superset',
        '⊢': 'implies',
        '⊤': 'verum',
        '⊥': 'falsum',
    },
    "Miscellaneous Symbols": {
        '♡': 'love',
        '♥': 'love',
    },
    "Dingbats": {
        '❤': 'love',
    },
    "CJK Unified Ideographs": {
        '元': 'yuan',
        '円': 'yen',
    },
    "Arabic Representation Forms-A": {
        '﷼': 'rial',
    },
};