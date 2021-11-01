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

let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);
clone["surname"] = "hyeonseok";
console.log(user);
console.log(clone);