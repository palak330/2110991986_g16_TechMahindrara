// 1st Counter Module using Closures



// function createCounter() {
//     let count = 0;

//     return {
//         increment() {
//             console.log("Counter:", ++count);
//         },
//         decrement() {
//             console.log("Counter:", --count);
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log("Current Count:", counter.getCount());




// 2nd. Memoized Fibonacci Function Using Closures

function memoizedFibonacci() {
    let cache = {};

    return function fib(n) {
        if (n <= 1) return n;
        if (cache[n]) return cache[n];
        
        return cache[n] = fib(n - 1) + fib(n - 2);
    };
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765
console.log(fibonacci(30)); // 832040

