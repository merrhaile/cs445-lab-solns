

const isPrime = num => { 
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) reject({prime: false})
            resolve({prime: num > 1})
        }, 500)
    })
}
console.log('start');
isPrime(8)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');