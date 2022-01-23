var value = "value1";

function boo() {
    console.log(value);
}

function foo() {
    console.log(value);
    boo();
}
function bar() {
    var value = "value2";
    console.log(value); // value2
    foo(); // value1
}

bar();