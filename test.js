// function makeCounter() {

//     function counter() {
//         return ++counter.count;
//     };

//     counter.set = function (value) {
//         counter.count = value;
//     }

//     counter.decrease = function () {
//         --counter.count;
//     }

//     counter.count = 0;

//     return counter; // counter()
// }

// let counter = makeCounter();

// counter.set(5);
// counter.decrease(); // 4

// console.log(counter()); // 5
// console.log(counter()); // 6


function makeCounter() {

    function counter() {
        return count++;
    }

    counter.set = function (value) {
        count = value;
    }

    counter.decrease = function () {
        --count;
    }

    let count = 0;

    return counter;
}

let counter = makeCounter();
counter.set(5);
counter.decrease(); // 4

console.log(counter());

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

function sum(a) {

    let cur_a = a;

    function f(b) {
        cur_a += b;
        return f;
    }

    f.toString = function () {
        return cur_a;
    };

    return f;
}

// function sum(a) {
//     function f(b) {
//         return a + b; // 'a'는 외부 렉시컬 환경에서 가져옵니다.
//     };
//     return f;
// }

console.log(sum(1)(2));
// console.log(sum(5)(-1)(2)); // 6
// console.log(sum(6)(-1)(-2)(-3)); // 0
// console.log(sum(0)(1)(2)(3)(4)(5)); // 15