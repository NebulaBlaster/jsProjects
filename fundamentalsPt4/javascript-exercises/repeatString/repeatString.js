const repeatString = function(phrase, repetiton) {

if (repetiton < 0) return 'ERROR';

let words = '';

for(i = 0; i < repetiton; i++){
    words += phrase;
}
return words;
}

module.exports = repeatString
