[![npm version](https://img.shields.io/npm/v/@danieldietrich/slugify?logo=npm&style=flat-square)](https://www.npmjs.com/package/@danieldietrich/slugify/)[![build](https://img.shields.io/travis/danieldietrich/slugify?style=flat-square)](https://travis-ci.org/danieldietrich/slugify/)[![coverage](https://img.shields.io/codecov/c/github/danieldietrich/slugify?style=flat-square)](https://codecov.io/gh/danieldietrich/slugify/)[![license](https://img.shields.io/github/license/danieldietrich/slugify?style=flat-square)](https://opensource.org/licenses/MIT/)
&nbsp;
[![patrons](https://img.shields.io/liberapay/patrons/danieldietrich?logo=liberapay&style=flat-square)](https://liberapay.com/danieldietrich/)[![donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](https://paypal.me/danieldietrich)
&nbsp;
[![Follow](https://img.shields.io/twitter/follow/danieldietrich?label=Follow&style=social)](https://twitter.com/danieldietrich/)

# slugify

Turns strings into user-friendly and search engine-friendly [URL slugs](https://en.wikipedia.org/wiki/Clean_URL#Slug).

Slugify transforms a subset of unicode characters to the alphabet `a-z 0-9 -`, which is a subset of valid [URI](http://tools.ietf.org/html/rfc3986) characters. The transformation is based on an opinionated [dictionary](#dictionary) that is tailored to the European region.

## Installation

```bash
npm install --save @danieldietrich/slugify
```

## Usage

```ts
import slugify from 'slugify';

// I-love-it
slugify('I ♥ it!');

// I_love_it
slugify('I ♥ it!', '_');
```

## Dictionary

The dictionary covers subsets of the following [Unicode blocks](https://en.wikipedia.org/wiki/List_of_Unicode_characters):

* [Basic Latin](#Basic-Latin)
* [Latin-1 Supplement](#Latin-1-Supplement)
* [Latin Extended-A](#Latin-Extended-A)
* [Greek](#Greek)
* [General Punctuation](#General-Punctuation)
* [Currency Symbols](#Currency-Symbols)
* [Letterlike Symbols](#Letterlike-Symbols)
* [Mathematical Operators](#Mathematical-Operators)
* [Miscellaneous Symbols](#Miscellaneous-Symbols)
* [Dingbats](#Dingbats)
* [CJK Unified Ideographs](#CJK-Unified-Ideographs)
* [Arabic Representation Forms-A](#Arabic-Representation-Forms-A)

### Basic Latin

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>0024</tt> | <tt>$</tt> | <tt>dollar</tt> |
| <tt>0025</tt> | <tt>%</tt> | <tt>percent</tt> |
| <tt>0026</tt> | <tt>&</tt> | <tt>and</tt> |
| <tt>003c</tt> | <tt><</tt> | <tt>less</tt> |
| <tt>003d</tt> | <tt>=</tt> | <tt>equals</tt> |
| <tt>003e</tt> | <tt>></tt> | <tt>greater</tt> |

### Latin-1 Supplement

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>00a2</tt> | <tt>¢</tt> | <tt>cent</tt> |
| <tt>00a3</tt> | <tt>£</tt> | <tt>pound</tt> |
| <tt>00a4</tt> | <tt>¤</tt> | <tt>currency</tt> |
| <tt>00a5</tt> | <tt>¥</tt> | <tt>yen</tt> |
| <tt>00a9</tt> | <tt>©</tt> | <tt>C</tt> |
| <tt>00ae</tt> | <tt>®</tt> | <tt>RTM</tt> |
| <tt>00b5</tt> | <tt>µ</tt> | <tt>micro</tt> |
| <tt>00c0</tt> | <tt>À</tt> | <tt>A</tt> |
| <tt>00c1</tt> | <tt>Á</tt> | <tt>A</tt> |
| <tt>00c2</tt> | <tt>Â</tt> | <tt>A</tt> |
| <tt>00c3</tt> | <tt>Ã</tt> | <tt>A</tt> |
| <tt>00c4</tt> | <tt>Ä</tt> | <tt>Ae</tt> |
| <tt>00c5</tt> | <tt>Å</tt> | <tt>A</tt> |
| <tt>00c6</tt> | <tt>Æ</tt> | <tt>AE</tt> |
| <tt>00c7</tt> | <tt>Ç</tt> | <tt>C</tt> |
| <tt>00c8</tt> | <tt>È</tt> | <tt>E</tt> |
| <tt>00c9</tt> | <tt>É</tt> | <tt>E</tt> |
| <tt>00ca</tt> | <tt>Ê</tt> | <tt>E</tt> |
| <tt>00cb</tt> | <tt>Ë</tt> | <tt>E</tt> |
| <tt>00cc</tt> | <tt>Ì</tt> | <tt>I</tt> |
| <tt>00cd</tt> | <tt>Í</tt> | <tt>I</tt> |
| <tt>00ce</tt> | <tt>Î</tt> | <tt>I</tt> |
| <tt>00cf</tt> | <tt>Ï</tt> | <tt>I</tt> |
| <tt>00d0</tt> | <tt>Ð</tt> | <tt>D</tt> |
| <tt>00d1</tt> | <tt>Ñ</tt> | <tt>N</tt> |
| <tt>00d2</tt> | <tt>Ò</tt> | <tt>O</tt> |
| <tt>00d3</tt> | <tt>Ó</tt> | <tt>O</tt> |
| <tt>00d4</tt> | <tt>Ô</tt> | <tt>O</tt> |
| <tt>00d5</tt> | <tt>Õ</tt> | <tt>O</tt> |
| <tt>00d6</tt> | <tt>Ö</tt> | <tt>Oe</tt> |
| <tt>00d7</tt> | <tt>×</tt> | <tt>x</tt> |
| <tt>00d8</tt> | <tt>Ø</tt> | <tt>O</tt> |
| <tt>00d9</tt> | <tt>Ù</tt> | <tt>U</tt> |
| <tt>00da</tt> | <tt>Ú</tt> | <tt>U</tt> |
| <tt>00db</tt> | <tt>Û</tt> | <tt>U</tt> |
| <tt>00dc</tt> | <tt>Ü</tt> | <tt>Ue</tt> |
| <tt>00dd</tt> | <tt>Ý</tt> | <tt>Y</tt> |
| <tt>00de</tt> | <tt>Þ</tt> | <tt>TH</tt> |
| <tt>00df</tt> | <tt>ß</tt> | <tt>ss</tt> |
| <tt>00e0</tt> | <tt>à</tt> | <tt>a</tt> |
| <tt>00e1</tt> | <tt>á</tt> | <tt>a</tt> |
| <tt>00e2</tt> | <tt>â</tt> | <tt>a</tt> |
| <tt>00e3</tt> | <tt>ã</tt> | <tt>a</tt> |
| <tt>00e4</tt> | <tt>ä</tt> | <tt>ae</tt> |
| <tt>00e5</tt> | <tt>å</tt> | <tt>a</tt> |
| <tt>00e6</tt> | <tt>æ</tt> | <tt>ae</tt> |
| <tt>00e7</tt> | <tt>ç</tt> | <tt>c</tt> |
| <tt>00e8</tt> | <tt>è</tt> | <tt>e</tt> |
| <tt>00e9</tt> | <tt>é</tt> | <tt>e</tt> |
| <tt>00ea</tt> | <tt>ê</tt> | <tt>e</tt> |
| <tt>00eb</tt> | <tt>ë</tt> | <tt>e</tt> |
| <tt>00ec</tt> | <tt>ì</tt> | <tt>i</tt> |
| <tt>00ed</tt> | <tt>í</tt> | <tt>i</tt> |
| <tt>00ee</tt> | <tt>î</tt> | <tt>i</tt> |
| <tt>00ef</tt> | <tt>ï</tt> | <tt>i</tt> |
| <tt>00f0</tt> | <tt>ð</tt> | <tt>d</tt> |
| <tt>00f1</tt> | <tt>ñ</tt> | <tt>n</tt> |
| <tt>00f2</tt> | <tt>ò</tt> | <tt>o</tt> |
| <tt>00f3</tt> | <tt>ó</tt> | <tt>o</tt> |
| <tt>00f4</tt> | <tt>ô</tt> | <tt>o</tt> |
| <tt>00f5</tt> | <tt>õ</tt> | <tt>o</tt> |
| <tt>00f6</tt> | <tt>ö</tt> | <tt>oe</tt> |
| <tt>00f7</tt> | <tt>÷</tt> | <tt>div</tt> |
| <tt>00f8</tt> | <tt>ø</tt> | <tt>o</tt> |
| <tt>00f9</tt> | <tt>ù</tt> | <tt>u</tt> |
| <tt>00fa</tt> | <tt>ú</tt> | <tt>u</tt> |
| <tt>00fb</tt> | <tt>û</tt> | <tt>u</tt> |
| <tt>00fc</tt> | <tt>ü</tt> | <tt>ue</tt> |
| <tt>00fd</tt> | <tt>ý</tt> | <tt>y</tt> |
| <tt>00fe</tt> | <tt>þ</tt> | <tt>th</tt> |
| <tt>00ff</tt> | <tt>ÿ</tt> | <tt>y</tt> |

### Latin Extended-A

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>0100</tt> | <tt>Ā</tt> | <tt>A</tt> |
| <tt>0101</tt> | <tt>ā</tt> | <tt>a</tt> |
| <tt>0102</tt> | <tt>Ă</tt> | <tt>A</tt> |
| <tt>0103</tt> | <tt>ă</tt> | <tt>a</tt> |
| <tt>0104</tt> | <tt>Ą</tt> | <tt>A</tt> |
| <tt>0105</tt> | <tt>ą</tt> | <tt>a</tt> |
| <tt>0106</tt> | <tt>Ć</tt> | <tt>C</tt> |
| <tt>0107</tt> | <tt>ć</tt> | <tt>c</tt> |
| <tt>0108</tt> | <tt>Ĉ</tt> | <tt>C</tt> |
| <tt>0109</tt> | <tt>ĉ</tt> | <tt>c</tt> |
| <tt>010a</tt> | <tt>Ċ</tt> | <tt>C</tt> |
| <tt>010b</tt> | <tt>ċ</tt> | <tt>c</tt> |
| <tt>010c</tt> | <tt>Č</tt> | <tt>C</tt> |
| <tt>010d</tt> | <tt>č</tt> | <tt>c</tt> |
| <tt>010e</tt> | <tt>Ď</tt> | <tt>D</tt> |
| <tt>010f</tt> | <tt>ď</tt> | <tt>d</tt> |
| <tt>0110</tt> | <tt>Đ</tt> | <tt>D</tt> |
| <tt>0111</tt> | <tt>đ</tt> | <tt>d</tt> |
| <tt>0112</tt> | <tt>Ē</tt> | <tt>E</tt> |
| <tt>0113</tt> | <tt>ē</tt> | <tt>e</tt> |
| <tt>0114</tt> | <tt>Ĕ</tt> | <tt>E</tt> |
| <tt>0115</tt> | <tt>ĕ</tt> | <tt>e</tt> |
| <tt>0116</tt> | <tt>Ė</tt> | <tt>E</tt> |
| <tt>0117</tt> | <tt>ė</tt> | <tt>e</tt> |
| <tt>0118</tt> | <tt>Ę</tt> | <tt>E</tt> |
| <tt>0119</tt> | <tt>ę</tt> | <tt>e</tt> |
| <tt>011a</tt> | <tt>Ě</tt> | <tt>E</tt> |
| <tt>011b</tt> | <tt>ě</tt> | <tt>e</tt> |
| <tt>011c</tt> | <tt>Ĝ</tt> | <tt>G</tt> |
| <tt>011d</tt> | <tt>ĝ</tt> | <tt>g</tt> |
| <tt>011e</tt> | <tt>Ğ</tt> | <tt>G</tt> |
| <tt>011f</tt> | <tt>ğ</tt> | <tt>g</tt> |
| <tt>0120</tt> | <tt>Ġ</tt> | <tt>G</tt> |
| <tt>0121</tt> | <tt>ġ</tt> | <tt>g</tt> |
| <tt>0122</tt> | <tt>Ģ</tt> | <tt>G</tt> |
| <tt>0123</tt> | <tt>ģ</tt> | <tt>g</tt> |
| <tt>0124</tt> | <tt>Ĥ</tt> | <tt>H</tt> |
| <tt>0125</tt> | <tt>ĥ</tt> | <tt>h</tt> |
| <tt>0126</tt> | <tt>Ħ</tt> | <tt>H</tt> |
| <tt>0127</tt> | <tt>ħ</tt> | <tt>h</tt> |
| <tt>0128</tt> | <tt>Ĩ</tt> | <tt>I</tt> |
| <tt>0129</tt> | <tt>ĩ</tt> | <tt>i</tt> |
| <tt>012a</tt> | <tt>Ī</tt> | <tt>I</tt> |
| <tt>012b</tt> | <tt>ī</tt> | <tt>i</tt> |
| <tt>012c</tt> | <tt>Ĭ</tt> | <tt>I</tt> |
| <tt>012d</tt> | <tt>ĭ</tt> | <tt>i</tt> |
| <tt>012e</tt> | <tt>Į</tt> | <tt>I</tt> |
| <tt>012f</tt> | <tt>į</tt> | <tt>i</tt> |
| <tt>0130</tt> | <tt>İ</tt> | <tt>I</tt> |
| <tt>0131</tt> | <tt>ı</tt> | <tt>i</tt> |
| <tt>0132</tt> | <tt>Ĳ</tt> | <tt>IJ</tt> |
| <tt>0133</tt> | <tt>ĳ</tt> | <tt>ij</tt> |
| <tt>0134</tt> | <tt>Ĵ</tt> | <tt>J</tt> |
| <tt>0135</tt> | <tt>ĵ</tt> | <tt>j</tt> |
| <tt>0136</tt> | <tt>Ķ</tt> | <tt>K</tt> |
| <tt>0137</tt> | <tt>ķ</tt> | <tt>k</tt> |
| <tt>0138</tt> | <tt>ĸ</tt> | <tt>k</tt> |
| <tt>0139</tt> | <tt>Ĺ</tt> | <tt>L</tt> |
| <tt>013a</tt> | <tt>ĺ</tt> | <tt>l</tt> |
| <tt>013b</tt> | <tt>Ļ</tt> | <tt>L</tt> |
| <tt>013c</tt> | <tt>ļ</tt> | <tt>l</tt> |
| <tt>013d</tt> | <tt>Ľ</tt> | <tt>L</tt> |
| <tt>013e</tt> | <tt>ľ</tt> | <tt>l</tt> |
| <tt>013f</tt> | <tt>Ŀ</tt> | <tt>L</tt> |
| <tt>0140</tt> | <tt>ŀ</tt> | <tt>l</tt> |
| <tt>0141</tt> | <tt>Ł</tt> | <tt>L</tt> |
| <tt>0142</tt> | <tt>ł</tt> | <tt>l</tt> |
| <tt>0143</tt> | <tt>Ń</tt> | <tt>N</tt> |
| <tt>0144</tt> | <tt>ń</tt> | <tt>n</tt> |
| <tt>0145</tt> | <tt>Ņ</tt> | <tt>N</tt> |
| <tt>0146</tt> | <tt>ņ</tt> | <tt>n</tt> |
| <tt>0147</tt> | <tt>Ň</tt> | <tt>N</tt> |
| <tt>0148</tt> | <tt>ň</tt> | <tt>n</tt> |
| <tt>0149</tt> | <tt>ŉ</tt> | <tt>n</tt> |
| <tt>014a</tt> | <tt>Ŋ</tt> | <tt>N</tt> |
| <tt>014b</tt> | <tt>ŋ</tt> | <tt>n</tt> |
| <tt>014c</tt> | <tt>Ō</tt> | <tt>O</tt> |
| <tt>014d</tt> | <tt>ō</tt> | <tt>o</tt> |
| <tt>014e</tt> | <tt>Ŏ</tt> | <tt>O</tt> |
| <tt>014f</tt> | <tt>ŏ</tt> | <tt>o</tt> |
| <tt>0150</tt> | <tt>Ő</tt> | <tt>O</tt> |
| <tt>0151</tt> | <tt>ő</tt> | <tt>o</tt> |
| <tt>0152</tt> | <tt>Œ</tt> | <tt>OE</tt> |
| <tt>0153</tt> | <tt>œ</tt> | <tt>oe</tt> |
| <tt>0154</tt> | <tt>Ŕ</tt> | <tt>R</tt> |
| <tt>0155</tt> | <tt>ŕ</tt> | <tt>r</tt> |
| <tt>0156</tt> | <tt>Ŗ</tt> | <tt>R</tt> |
| <tt>0157</tt> | <tt>ŗ</tt> | <tt>r</tt> |
| <tt>0158</tt> | <tt>Ř</tt> | <tt>R</tt> |
| <tt>0159</tt> | <tt>ř</tt> | <tt>r</tt> |
| <tt>015a</tt> | <tt>Ś</tt> | <tt>S</tt> |
| <tt>015b</tt> | <tt>ś</tt> | <tt>s</tt> |
| <tt>015c</tt> | <tt>Ŝ</tt> | <tt>S</tt> |
| <tt>015d</tt> | <tt>ŝ</tt> | <tt>s</tt> |
| <tt>015e</tt> | <tt>Ş</tt> | <tt>S</tt> |
| <tt>015f</tt> | <tt>ş</tt> | <tt>s</tt> |
| <tt>0160</tt> | <tt>Š</tt> | <tt>S</tt> |
| <tt>0161</tt> | <tt>š</tt> | <tt>s</tt> |
| <tt>0162</tt> | <tt>Ţ</tt> | <tt>T</tt> |
| <tt>0163</tt> | <tt>ţ</tt> | <tt>t</tt> |
| <tt>0164</tt> | <tt>Ť</tt> | <tt>T</tt> |
| <tt>0165</tt> | <tt>ť</tt> | <tt>t</tt> |
| <tt>0166</tt> | <tt>Ŧ</tt> | <tt>T</tt> |
| <tt>0167</tt> | <tt>ŧ</tt> | <tt>t</tt> |
| <tt>0168</tt> | <tt>Ũ</tt> | <tt>U</tt> |
| <tt>0169</tt> | <tt>ũ</tt> | <tt>u</tt> |
| <tt>016a</tt> | <tt>Ū</tt> | <tt>U</tt> |
| <tt>016b</tt> | <tt>ū</tt> | <tt>u</tt> |
| <tt>016c</tt> | <tt>Ŭ</tt> | <tt>U</tt> |
| <tt>016d</tt> | <tt>ŭ</tt> | <tt>u</tt> |
| <tt>016e</tt> | <tt>Ů</tt> | <tt>U</tt> |
| <tt>016f</tt> | <tt>ů</tt> | <tt>u</tt> |
| <tt>0170</tt> | <tt>Ű</tt> | <tt>U</tt> |
| <tt>0171</tt> | <tt>ű</tt> | <tt>u</tt> |
| <tt>0172</tt> | <tt>Ų</tt> | <tt>U</tt> |
| <tt>0173</tt> | <tt>ų</tt> | <tt>u</tt> |
| <tt>0174</tt> | <tt>Ŵ</tt> | <tt>W</tt> |
| <tt>0175</tt> | <tt>ŵ</tt> | <tt>w</tt> |
| <tt>0176</tt> | <tt>Ŷ</tt> | <tt>Y</tt> |
| <tt>0177</tt> | <tt>ŷ</tt> | <tt>y</tt> |
| <tt>0178</tt> | <tt>Ÿ</tt> | <tt>Y</tt> |
| <tt>0179</tt> | <tt>Ź</tt> | <tt>Z</tt> |
| <tt>017a</tt> | <tt>ź</tt> | <tt>z</tt> |
| <tt>017b</tt> | <tt>Ż</tt> | <tt>Z</tt> |
| <tt>017c</tt> | <tt>ż</tt> | <tt>z</tt> |
| <tt>017d</tt> | <tt>Ž</tt> | <tt>Z</tt> |
| <tt>017e</tt> | <tt>ž</tt> | <tt>z</tt> |
| <tt>017f</tt> | <tt>ſ</tt> | <tt>s</tt> |

### Greek

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>0391</tt> | <tt>Α</tt> | <tt>Alpha</tt> |
| <tt>0392</tt> | <tt>Β</tt> | <tt>Beta</tt> |
| <tt>0393</tt> | <tt>Γ</tt> | <tt>Gamma</tt> |
| <tt>0394</tt> | <tt>Δ</tt> | <tt>Delta</tt> |
| <tt>0395</tt> | <tt>Ε</tt> | <tt>Epsilon</tt> |
| <tt>0396</tt> | <tt>Ζ</tt> | <tt>Zeta</tt> |
| <tt>0397</tt> | <tt>Η</tt> | <tt>Eta</tt> |
| <tt>0398</tt> | <tt>Θ</tt> | <tt>Theta</tt> |
| <tt>0399</tt> | <tt>Ι</tt> | <tt>Iota</tt> |
| <tt>039a</tt> | <tt>Κ</tt> | <tt>Kappa</tt> |
| <tt>039b</tt> | <tt>Λ</tt> | <tt>Lambda</tt> |
| <tt>039c</tt> | <tt>Μ</tt> | <tt>Mu</tt> |
| <tt>039d</tt> | <tt>Ν</tt> | <tt>Nu</tt> |
| <tt>039e</tt> | <tt>Ξ</tt> | <tt>Xi</tt> |
| <tt>039f</tt> | <tt>Ο</tt> | <tt>Omnicron</tt> |
| <tt>03a0</tt> | <tt>Π</tt> | <tt>Pi</tt> |
| <tt>03a1</tt> | <tt>Ρ</tt> | <tt>Rho</tt> |
| <tt>03a3</tt> | <tt>Σ</tt> | <tt>Sigma</tt> |
| <tt>03a4</tt> | <tt>Τ</tt> | <tt>Tau</tt> |
| <tt>03a5</tt> | <tt>Υ</tt> | <tt>Upsilon</tt> |
| <tt>03a6</tt> | <tt>Φ</tt> | <tt>Phi</tt> |
| <tt>03a7</tt> | <tt>Χ</tt> | <tt>Chi</tt> |
| <tt>03a8</tt> | <tt>Ψ</tt> | <tt>Psi</tt> |
| <tt>03a9</tt> | <tt>Ω</tt> | <tt>Omega</tt> |
| <tt>03b1</tt> | <tt>α</tt> | <tt>alpha</tt> |
| <tt>03b2</tt> | <tt>β</tt> | <tt>beta</tt> |
| <tt>03b3</tt> | <tt>γ</tt> | <tt>gamma</tt> |
| <tt>03b4</tt> | <tt>δ</tt> | <tt>delta</tt> |
| <tt>03b5</tt> | <tt>ε</tt> | <tt>epsilon</tt> |
| <tt>03b6</tt> | <tt>ζ</tt> | <tt>zeta</tt> |
| <tt>03b7</tt> | <tt>η</tt> | <tt>eta</tt> |
| <tt>03b8</tt> | <tt>θ</tt> | <tt>theta</tt> |
| <tt>03b9</tt> | <tt>ι</tt> | <tt>iota</tt> |
| <tt>03ba</tt> | <tt>κ</tt> | <tt>kappa</tt> |
| <tt>03bb</tt> | <tt>λ</tt> | <tt>lambda</tt> |
| <tt>03bc</tt> | <tt>μ</tt> | <tt>mu</tt> |
| <tt>03bd</tt> | <tt>ν</tt> | <tt>nu</tt> |
| <tt>03be</tt> | <tt>ξ</tt> | <tt>xi</tt> |
| <tt>03bf</tt> | <tt>ο</tt> | <tt>omnicron</tt> |
| <tt>03c0</tt> | <tt>π</tt> | <tt>pi</tt> |
| <tt>03c1</tt> | <tt>ρ</tt> | <tt>rho</tt> |
| <tt>03c3</tt> | <tt>σ</tt> | <tt>sigma</tt> |
| <tt>03c4</tt> | <tt>τ</tt> | <tt>tau</tt> |
| <tt>03c5</tt> | <tt>υ</tt> | <tt>upsilon</tt> |
| <tt>03c6</tt> | <tt>φ</tt> | <tt>phi</tt> |
| <tt>03c7</tt> | <tt>χ</tt> | <tt>chi</tt> |
| <tt>03c8</tt> | <tt>ψ</tt> | <tt>psi</tt> |
| <tt>03c9</tt> | <tt>ω</tt> | <tt>omega</tt> |

### General Punctuation

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>2030</tt> | <tt>‰</tt> | <tt>permille</tt> |
| <tt>2031</tt> | <tt>‱</tt> | <tt>permyriad</tt> |
| <tt>2052</tt> | <tt>⁒</tt> | <tt>minus</tt> |

### Currency Symbols

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>20a0</tt> | <tt>₠</tt> | <tt>ecu</tt> |
| <tt>20a1</tt> | <tt>₡</tt> | <tt>colon</tt> |
| <tt>20a2</tt> | <tt>₢</tt> | <tt>cruzeiro</tt> |
| <tt>20a3</tt> | <tt>₣</tt> | <tt>french franc</tt> |
| <tt>20a4</tt> | <tt>₤</tt> | <tt>lira</tt> |
| <tt>20a5</tt> | <tt>₥</tt> | <tt>mill</tt> |
| <tt>20a6</tt> | <tt>₦</tt> | <tt>naira</tt> |
| <tt>20a7</tt> | <tt>₧</tt> | <tt>peseta</tt> |
| <tt>20a8</tt> | <tt>₨</tt> | <tt>rupee</tt> |
| <tt>20a9</tt> | <tt>₩</tt> | <tt>won</tt> |
| <tt>20aa</tt> | <tt>₪</tt> | <tt>new shequel</tt> |
| <tt>20ab</tt> | <tt>₫</tt> | <tt>dong</tt> |
| <tt>20ac</tt> | <tt>€</tt> | <tt>euro</tt> |
| <tt>20ad</tt> | <tt>₭</tt> | <tt>kip</tt> |
| <tt>20ae</tt> | <tt>₮</tt> | <tt>tugrik</tt> |
| <tt>20af</tt> | <tt>₯</tt> | <tt>drachma</tt> |
| <tt>20b0</tt> | <tt>₰</tt> | <tt>german penny</tt> |
| <tt>20b1</tt> | <tt>₱</tt> | <tt>peso</tt> |
| <tt>20b2</tt> | <tt>₲</tt> | <tt>guarani</tt> |
| <tt>20b3</tt> | <tt>₳</tt> | <tt>austral</tt> |
| <tt>20b4</tt> | <tt>₴</tt> | <tt>hryvnia</tt> |
| <tt>20b5</tt> | <tt>₵</tt> | <tt>cedi</tt> |
| <tt>20b6</tt> | <tt>₶</tt> | <tt>livre tournois</tt> |
| <tt>20b7</tt> | <tt>₷</tt> | <tt>spesmilo</tt> |
| <tt>20b8</tt> | <tt>₸</tt> | <tt>tenge</tt> |
| <tt>20b9</tt> | <tt>₹</tt> | <tt>indian rupee</tt> |
| <tt>20ba</tt> | <tt>₺</tt> | <tt>turkish lira</tt> |
| <tt>20bb</tt> | <tt>₻</tt> | <tt>nordic mark</tt> |
| <tt>20bc</tt> | <tt>₼</tt> | <tt>manat</tt> |
| <tt>20bd</tt> | <tt>₽</tt> | <tt>ruble</tt> |
| <tt>20be</tt> | <tt>₾</tt> | <tt>lari</tt> |
| <tt>20bf</tt> | <tt>₿</tt> | <tt>bitcoin</tt> |

### Letterlike Symbols

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>2103</tt> | <tt>℃</tt> | <tt>Celsius</tt> |
| <tt>2107</tt> | <tt>ℇ</tt> | <tt>e</tt> |
| <tt>2109</tt> | <tt>℉</tt> | <tt>Fahrenheit</tt> |
| <tt>2117</tt> | <tt>℗</tt> | <tt>P</tt> |
| <tt>2120</tt> | <tt>℠</tt> | <tt>SM</tt> |
| <tt>2122</tt> | <tt>™</tt> | <tt>TM</tt> |

### Mathematical Operators

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>2200</tt> | <tt>∀</tt> | <tt>forall</tt> |
| <tt>2203</tt> | <tt>∃</tt> | <tt>exists</tt> |
| <tt>2205</tt> | <tt>∅</tt> | <tt>emptyset</tt> |
| <tt>2208</tt> | <tt>∈</tt> | <tt>in</tt> |
| <tt>220a</tt> | <tt>∊</tt> | <tt>in</tt> |
| <tt>220b</tt> | <tt>∋</tt> | <tt>contains</tt> |
| <tt>220d</tt> | <tt>∍</tt> | <tt>contains</tt> |
| <tt>221a</tt> | <tt>√</tt> | <tt>sqrt</tt> |
| <tt>221e</tt> | <tt>∞</tt> | <tt>infinity</tt> |
| <tt>2227</tt> | <tt>∧</tt> | <tt>and</tt> |
| <tt>2228</tt> | <tt>∨</tt> | <tt>or</tt> |
| <tt>2229</tt> | <tt>∩</tt> | <tt>intersect</tt> |
| <tt>222a</tt> | <tt>∪</tt> | <tt>union</tt> |
| <tt>226a</tt> | <tt>≪</tt> | <tt>less</tt> |
| <tt>226b</tt> | <tt>≫</tt> | <tt>greater</tt> |
| <tt>2282</tt> | <tt>⊂</tt> | <tt>subset</tt> |
| <tt>2283</tt> | <tt>⊃</tt> | <tt>superset</tt> |
| <tt>2286</tt> | <tt>⊆</tt> | <tt>subset</tt> |
| <tt>2287</tt> | <tt>⊇</tt> | <tt>superset</tt> |
| <tt>22a2</tt> | <tt>⊢</tt> | <tt>implies</tt> |
| <tt>22a4</tt> | <tt>⊤</tt> | <tt>verum</tt> |
| <tt>22a5</tt> | <tt>⊥</tt> | <tt>falsum</tt> |

### Miscellaneous Symbols

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>2661</tt> | <tt>♡</tt> | <tt>love</tt> |
| <tt>2665</tt> | <tt>♥</tt> | <tt>love</tt> |

### Dingbats

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>2764</tt> | <tt>❤</tt> | <tt>love</tt> |

### CJK Unified Ideographs

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>5143</tt> | <tt>元</tt> | <tt>yuan</tt> |
| <tt>5186</tt> | <tt>円</tt> | <tt>yen</tt> |

### Arabic Representation Forms-A

| Code | Glyph | Value |
| :--: | :---: | :---: |
| <tt>fdfc</tt> | <tt>﷼</tt> | <tt>rial</tt> |

---

Copyright &copy; 2019 by [Daniel Dietrich](cafebab3@gmail.com). Released under the [MIT](https://opensource.org/licenses/MIT/) license.