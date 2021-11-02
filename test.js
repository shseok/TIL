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

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        console.log(this.step);
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1

