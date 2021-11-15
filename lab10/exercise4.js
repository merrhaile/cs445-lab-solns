function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let fibMemo = (function () {
    let memo = {}
    function fib(n){
        let value
        if (n in memo) {
           value = memo[n]
        } else {
            if (n === 0 || n === 1) {
                value = n;
            }else {
                value = fib(n - 1) + fib(n - 2);
                
            }
            memo[n]= value
        }
        return value
    }
    return fib;
})()


// console.time("Execution Time 1") 
// console.log(fibonacci(40))
// console.timeEnd("Execution Time 1")

console.time("Execution Time 2") 
console.log(fibMemo(50))
console.timeEnd("Execution Time 2")

console.time("Execution Time 3") 
console.log(fibMemo(50))
console.timeEnd("Execution Time 3")
