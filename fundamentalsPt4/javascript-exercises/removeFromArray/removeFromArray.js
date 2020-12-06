const removeFromArray = function(newArray, ...valuesRemoved) {
// newArray will be the user entered array that need to be modified. 
// ...valuesRemoved will be a array of the values that need to be removed from newArray
console.log(newArray);
console.log(valuesRemoved);
// have to loop through valesRemoved.length to access the values that need to be removed from newArray, in that loop we should be modifying newArray to be what it nees to be. 
for(i = 0; valuesRemoved.length > i; i++ ){
    let index = newArray.indexOf(valuesRemoved[i]);

    if (index != -1){
        newArray.splice(index,1);
        console.log(newArray)
    }
}
return newArray;
}

module.exports = removeFromArray
