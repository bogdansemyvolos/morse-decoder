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
    '**********': ' ',
};

function decode(expr) {
    // write your solution here
    return splitAt(10, expr).map(el => el.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')).map(el => MORSE_TABLE[el]).join('');
}

module.exports = {
    decode
}

function splitAt(n, str){
    let result = [];
    let arr = str.split('');
    while (arr.length > n) {
        result.push(arr.splice(0, n).join(''));
    }
    if (arr.length != 0) {
        result.push(arr.join(''));
    }
    return result;
}