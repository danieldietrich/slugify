/**
 * Slugifies a string.
 *
 * @param str a string
 * @param separator (optional) a separator, default: hyphen '-'
 * @returns a new string, consisting of letters [a-zA-Z], digits [0-9] and the `separator`
 */
export = function slugify(input: string, separator: string = '-'): string {
    if (!input) {
        return input; // also returns unaltered null, undefined, 0 and false
    }
    const res = input.split('')
        .reduce((str, chr) => str + (dict[chr] || chr), '')
        .replace(ignored, separator);
    const from = res.startsWith(separator) ? 1 : 0;
    const back = res.endsWith(separator) ? 1 : 0;
    if (from + back === 0) {
        return res;
    } else {
        return res.substring(from, res.length - back);
    }
};

const ignored = /[^a-z0-9]+/gi;

const dict: Record<string, string> = {'$': 'dollar', '%': 'percent', '&': 'and', '<': 'less', '=': 'equals', '>': 'greater', '¢': 'cent', '£': 'pound', '¤': 'currency', '¥': 'yen', '©': 'C', '®': 'RTM', 'µ': 'micro', 'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'Ae', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'Oe', '×': 'x', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'Ue', 'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss', 'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'ae', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'oe', '÷': 'div', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'ue', 'ý': 'y', 'þ': 'th', 'ÿ': 'y', 'Ā': 'A', 'ā': 'a', 'Ă': 'A', 'ă': 'a', 'Ą': 'A', 'ą': 'a', 'Ć': 'C', 'ć': 'c', 'Ĉ': 'C', 'ĉ': 'c', 'Ċ': 'C', 'ċ': 'c', 'Č': 'C', 'č': 'c', 'Ď': 'D', 'ď': 'd', 'Đ': 'D', 'đ': 'd', 'Ē': 'E', 'ē': 'e', 'Ĕ': 'E', 'ĕ': 'e', 'Ė': 'E', 'ė': 'e', 'Ę': 'E', 'ę': 'e', 'Ě': 'E', 'ě': 'e', 'Ĝ': 'G', 'ĝ': 'g', 'Ğ': 'G', 'ğ': 'g', 'Ġ': 'G', 'ġ': 'g', 'Ģ': 'G', 'ģ': 'g', 'Ĥ': 'H', 'ĥ': 'h', 'Ħ': 'H', 'ħ': 'h', 'Ĩ': 'I', 'ĩ': 'i', 'Ī': 'I', 'ī': 'i', 'Ĭ': 'I', 'ĭ': 'i', 'Į': 'I', 'į': 'i', 'İ': 'I', 'ı': 'i', 'Ĳ': 'IJ', 'ĳ': 'ij', 'Ĵ': 'J', 'ĵ': 'j', 'Ķ': 'K', 'ķ': 'k', 'ĸ': 'k', 'Ĺ': 'L', 'ĺ': 'l', 'Ļ': 'L', 'ļ': 'l', 'Ľ': 'L', 'ľ': 'l', 'Ŀ': 'L', 'ŀ': 'l', 'Ł': 'L', 'ł': 'l', 'Ń': 'N', 'ń': 'n', 'Ņ': 'N', 'ņ': 'n', 'Ň': 'N', 'ň': 'n', 'ŉ': 'n', 'Ŋ': 'N', 'ŋ': 'n', 'Ō': 'O', 'ō': 'o', 'Ŏ': 'O', 'ŏ': 'o', 'Ő': 'O', 'ő': 'o', 'Œ': 'OE', 'œ': 'oe', 'Ŕ': 'R', 'ŕ': 'r', 'Ŗ': 'R', 'ŗ': 'r', 'Ř': 'R', 'ř': 'r', 'Ś': 'S', 'ś': 's', 'Ŝ': 'S', 'ŝ': 's', 'Ş': 'S', 'ş': 's', 'Š': 'S', 'š': 's', 'Ţ': 'T', 'ţ': 't', 'Ť': 'T', 'ť': 't', 'Ŧ': 'T', 'ŧ': 't', 'Ũ': 'U', 'ũ': 'u', 'Ū': 'U', 'ū': 'u', 'Ŭ': 'U', 'ŭ': 'u', 'Ů': 'U', 'ů': 'u', 'Ű': 'U', 'ű': 'u', 'Ų': 'U', 'ų': 'u', 'Ŵ': 'W', 'ŵ': 'w', 'Ŷ': 'Y', 'ŷ': 'y', 'Ÿ': 'Y', 'Ź': 'Z', 'ź': 'z', 'Ż': 'Z', 'ż': 'z', 'Ž': 'Z', 'ž': 'z', 'ſ': 's', 'Α': 'Alpha', 'Β': 'Beta', 'Γ': 'Gamma', 'Δ': 'Delta', 'Ε': 'Epsilon', 'Ζ': 'Zeta', 'Η': 'Eta', 'Θ': 'Theta', 'Ι': 'Iota', 'Κ': 'Kappa', 'Λ': 'Lambda', 'Μ': 'Mu', 'Ν': 'Nu', 'Ξ': 'Xi', 'Ο': 'Omnicron', 'Π': 'Pi', 'Ρ': 'Rho', 'Σ': 'Sigma', 'Τ': 'Tau', 'Υ': 'Upsilon', 'Φ': 'Phi', 'Χ': 'Chi', 'Ψ': 'Psi', 'Ω': 'Omega', 'α': 'alpha', 'β': 'beta', 'γ': 'gamma', 'δ': 'delta', 'ε': 'epsilon', 'ζ': 'zeta', 'η': 'eta', 'θ': 'theta', 'ι': 'iota', 'κ': 'kappa', 'λ': 'lambda', 'μ': 'mu', 'ν': 'nu', 'ξ': 'xi', 'ο': 'omnicron', 'π': 'pi', 'ρ': 'rho', 'σ': 'sigma', 'τ': 'tau', 'υ': 'upsilon', 'φ': 'phi', 'χ': 'chi', 'ψ': 'psi', 'ω': 'omega', '‰': 'permille', '‱': 'permyriad', '⁒': 'minus', '₠': 'ecu', '₡': 'colon', '₢': 'cruzeiro', '₣': 'french franc', '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee', '₩': 'won', '₪': 'new shequel', '₫': 'dong', '€': 'euro', '₭': 'kip', '₮': 'tugrik', '₯': 'drachma', '₰': 'german penny', '₱': 'peso', '₲': 'guarani', '₳': 'austral', '₴': 'hryvnia', '₵': 'cedi', '₶': 'livre tournois', '₷': 'spesmilo', '₸': 'tenge', '₹': 'indian rupee', '₺': 'turkish lira', '₻': 'nordic mark', '₼': 'manat', '₽': 'ruble', '₾': 'lari', '₿': 'bitcoin', '℃': 'Celsius', 'ℇ': 'e', '℉': 'Fahrenheit', '℗': 'P', '℠': 'SM', '™': 'TM', '∀': 'forall', '∃': 'exists', '∅': 'emptyset', '∈': 'in', '∊': 'in', '∋': 'contains', '∍': 'contains', '√': 'sqrt', '∞': 'infinity', '∧': 'and', '∨': 'or', '∩': 'intersect', '∪': 'union', '≪': 'less', '≫': 'greater', '⊂': 'subset', '⊃': 'superset', '⊆': 'subset', '⊇': 'superset', '⊢': 'implies', '⊤': 'verum', '⊥': 'falsum', '♡': 'love', '♥': 'love', '❤': 'love', '元': 'yuan', '円': 'yen', '﷼': 'rial'};