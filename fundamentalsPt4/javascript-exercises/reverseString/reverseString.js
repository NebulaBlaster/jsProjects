const reverseString = function(input) {
    let arr = Array.from(input);
    let reverseS = ''
    for(i = arr.length - 1; i >= 0; i--) {
        reverseS += arr[i];
    }
    return reverseS;
}

module.exports = reverseString
