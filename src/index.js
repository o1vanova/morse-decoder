const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const SPACE = "**********";

function decode(expr) {
    let count = expr.length/10;
    let result = "";
    let i = 0;
    while(i < count) {
        let word = expr.substr(10*i, 10);
        result += word === SPACE ? " " : getLetter(word);

        i++;
    }
    return result;
}

function getLetter(expr) {
    let result = "";
    let i = 0;
    while(i < 5) {
        let item = expr.substr(2*i, 2);
        result += item === "00" ? '' : item === "10" ? '.' : '-';

        i++;
    }
    return MORSE_TABLE[result];
}

module.exports = {
    decode
}