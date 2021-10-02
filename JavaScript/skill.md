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