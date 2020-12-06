const sumAll = function(first, second) {
    // if second is smaller than first loop with secon first, else if |abs| is not true return error if typeof(!number) return error
    let sum = 0; 
    if (typeof(first) !== "number"){
        return "ERROR";
    }
    else if (typeof(second) !== "number"){
        return "ERROR";
    }
    else if ( (first < 0) || (second < 0) ){
        return "ERROR";
    }
    else if (first == second){
        return first;
    }
    else if (first < second) {
        for(i = first; i <= second; i++){
            sum += i;
        }
        return sum; 
    }
    else if (second < first){
        for(i = second; i <= first; i++){
            sum += i;
        }
        return sum; 
    }
}

module.exports = sumAll
