// // 중첩함수

// function makeCounter() {
//     let count = 0;
//     console.log(count);

//     return () => count++;
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

let user = {     // 객체
    name: "John",  // 키: "name",  값: "John"
    age: 30        // 키: "age", 값: 30
};

delete user.age;

console.log(user);

