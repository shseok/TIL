- ref
    - https://learnjs.vlpt.us/

- 구조분해할당
    - 정확히 알아보기 -> map함수 적용시에도 가능한가?

- 변수선언시
    - const response = (sdfjsklfj); 처럼 괄호 덮기가 가능한가? react의 JSX에서 적용되는 것이 아닌가?

- default parameter
    - 함수에서 매개변수를 호출할 때 넣어주는 데이터가 없으면, 함수에서는 해당 매개변수가 undefined가 된다.   
    그런데 ES6 문법에서는 매개변수가 선언이 되었는데, 호출 시 값이 들어오지 않으면 초기화 해줄 수 있다.

        ```
        function testFunc(argu1, argu2 = 2){
            console.log(argu1); // 1
            console.log(argu2); // 2
        }

        testFunc(1);
        ```