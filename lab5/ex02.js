
Array.prototype.removeDuplicatesAsync = function() {
    let arr = this;
    new Promise(function(resolve, reject){
        let newArr = arr.reduce(function(preValue, curntValue) {
            if(!preValue.includes(curntValue)){
                preValue.push(curntValue)
            } 
            return preValue
        },[])
        resolve(newArr)
    }).then(console.log)

}


console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);
[1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5].removeDuplicatesAsync();

