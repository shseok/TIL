# 바로 잡아야 할 것
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
- 문자열        
    -  UTF-16을 사용해 문자열을 인코딩

    - 특정 글자에 접근
        - string[인덱스] | string.charAt(인덱스)
        - 두 접근 방식의 차이는 반환할 글자가 없을 때 드러난다. 접근하려는 위치에 글자가 없는 경우 []는 undefined를, charAt은 빈 문자열('')을 반환한다.
    - 문자열의 불변성
        - 문자열은 수정할 수 없다. 따라서 문자열의 중간 글자 하나를 바꾸려고 하면 에러가 발생
        - 이런 문제를 피하려면 완전히 새로운 문자열을 하나 만든 다음, 이 문자열을 str에 할당
            ```
            let str = 'Hi';

            str = 'h' + str[1]; // 문자열 전체를 교체함

            alert( str ); // hi
            ```
    - 문자열 비교
        - 소문자는 대문자보다 항상 크다
- 배열
    - 배열은 특수한 형태의 객체로, 순서가 있는 자료를 저장하고 관리하는 용도에 최적화된 자료구조
    - 배열은 객체와 마찬가지로 참조를 통해 복사된다. (얕은)
    - [Shallow Copy and Deep Copy](https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)

    - push와 pop은 빠르지만 shift와 unshift는 느리다
    - 배열에 **for..in**을 사용하면 문제가 발생하므로 되도록 다른 반복문을 사용하자.
    - length 프로퍼티는 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값
    - arr.length = 0;을 사용해 아주 간단하게 배열을 비울 수 있다.
    - 배열엔 toString 메서드가 구현되어 있어 배열을 출력하면 쉼표로 구분한 문자열이 반환된다.