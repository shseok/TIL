- array clone - copy
    - ex) let clone = arr.slice();
    - ex) let clone = [...arr];

- Immediately-invoked function expression(즉시 실행 함수)
    - 즉시 실행 함수의 기본 형태는 아래와 같습니다.
        - ```
            (function () {
                // statements
            })()

            ```
- input 값이 숫자 or 문자인지 판단
    ```
    if (typeof input !== 'number') {
        console.log('string');
    } else {
        console.log('number');
    }
    ```

- 구조분해할당
    ```
        let [command, uid] = "Enter uid1234 Muzi".split(' ');
    ```
    앞에 2개만 차례로 할당되고 남은 Muzi는 할당되지 않는다.


- 객체 배열에서 속성 값을 배열로 추출
    - http://daplus.net/javascript-%EA%B0%9D%EC%B2%B4-%EB%B0%B0%EC%97%B4%EC%97%90%EC%84%9C-%EC%86%8D%EC%84%B1-%EA%B0%92%EC%9D%84-%EB%B0%B0%EC%97%B4%EB%A1%9C-%EC%B6%94%EC%B6%9C/
    - 궁금했던 것
        ```
        objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];

        let result = objArray.map(a => a.foo);
        // 위 아래는 같은 표현이다.
        let result = objArray.map(({ foo }) => foo);
        // let result = objArray.map(({ bar }) => bar); 이렇게 하면 bar의 value만 골라서 배열로 만든다.
        ```
        - 살펴보니 객체 리터럴의 중괄호는 값으로 사용되는 표현식이라고한다. 또한, 프로퍼티 접근과는 별개가 아닌 것으로 보인다. -> 더 자세히 찾아보기

- 배열 내 객체 중복 id 값 제거
    - https://kyounghwan01.github.io/blog/JS/JSbasic/dupulication-property-remove/#lodash

- 맵을 배열로 반환하는 방법
    ```
    let map = new Map();

    map.set("name", "John");

    Array.from(map.keys());
    ```

    - **Array.from**(이터러블 or 유사배열) 사용
        - 이터러블 -> 문자열, 배열 등...
    - 셋을 배열로 반환하는 방법에도 해당