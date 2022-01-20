let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }

console.log(mergedObj);