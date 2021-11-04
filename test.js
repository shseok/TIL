function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () { // shooter 함수
            console.log(i); // 몇 번째 shooter인지 출력해줘야 함
        };
        shooters.push(shooter);
    }

    // console.log(shooters);
    return shooters;
}

let army = makeArmy();

// console.log(army[0]);

army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음