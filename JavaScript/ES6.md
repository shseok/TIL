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
    - [Shallow Copy and Deep Copy2](https://velog.io/@recordboy/JavaScript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%ACShallow-Copy%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%ACDeep-Copy)
    - [Shallow Copy and Deep Copy3](https://helloinyong.tistory.com/267)

    - push와 pop은 빠르지만 shift와 unshift는 느리다
    - 배열에 **for..in**을 사용하면 문제가 발생하므로 되도록 다른 반복문을 사용하자.
    - length 프로퍼티는 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값
    - arr.length = 0;을 사용해 아주 간단하게 배열을 비울 수 있다.
    - 배열엔 toString 메서드가 구현되어 있어 배열을 출력하면 쉼표로 구분한 문자열이 반환된다.
    
    - 배열의 요소 추가·제거 메서드
        - push, pop, shift, unshift
        - splice : 추가, 삭제, 교체가 모두 가능하다
            - deleteCount를 0으로 설정하면 요소를 제거하지 않으면서 새로운 요소를 추가할 수 있다
        - slice
            - arr.slice()는 인수를 하나도 넘기지 않고 호출하여 arr의 **복사본**을 만들 수 있다. 이런 방식은 기존의 배열을 건드리지 않으면서 배열을 조작해 새로운 배열을 만들고자 할 때 자주 사용된다.
            -   ```
                let arr = ["HTML", "JavaScript", "CSS"];
                let n_arr = arr.slice(); | let n_arr = [...arr]; (깊은 복사)               
                vs
                let n_arr = arr; (얕은 복사)
                ```
                - 전개연산자(...)가 객체에서 쓰이면 깊은 복사가 안될 수도 있다
        - concat : 인자에는 배열 or 값, 제한 x
    - 배열 탐색하는 메서드
        - indexOf, lastIndexOf : 요소를 발견 못하면 -1을 반환한다
        - includes : 요소를 발견 못하면 false를 반환한다
        - find : 조건에 해당하는 요소가 없으면 undefined를 반환한다
        - filter : 조건에 충족하는 요소가 하나도 없으면 빈 배열이 **반환**한다 | 해당 배열은 건들지 않는다.
    - 배열 변형하는 메서드
        - map : 함수 호출 결과를 배열로 반환한다
        - sort : 배열 자체가 변경된다
            - 주의 : 모든 요소는 문자형으로 변환된 이후에 재 정렬된다
            - 오름차순 기준으로 정렬 : 인자 -> a-b
            - 내림차순 기준으로 정렬 : 인자 -> b-a
            - 특정 문자열 비교 ex)독일어 : (a, b) => a.localeCompare(b)
        - reverse
        - split, join
            - split : 두 번째 인수로 숫자를 받을 수 있고 이 숫자는 배열의 길이를 제한한다
            - 글자단위로 분리 : split('')
            - 배열 -> 문자열 : join('')
        - reduce
            - 배열을 기반으로 값 하나를 도출할 때 사용된다.
            ```
            let value = arr.reduce(function(accumulator, item, index, array) {
            // ...
            }, [initial]);
            ```
            - accumulator – 이전 함수 호출의 결과. initial은 함수 최초 호출 시 사용되는 초깃값을 나타냄(옵션)
            - item – 현재 배열 요소
            - index – 요소의 위치
            - array – 배열
            - 초깃값 없이 reduce를 사용할 땐 주의 해야한다. 배열이 비어있는 상태면 reduce 호출 시 에러가 발생하기 때문이다.
        - some, every
            - map과 유사하게 모든 요소를 대상으로 함수를 호출한다. some은 함수의 반환 값을 true로 만드는 요소가 하나라도 있는지 여부를 확인하고 every는 모든 요소가 함수의 반환 값을 true로 만드는지 여부를 확인한다. 두 메서드 모두 조건을 충족하면 true를, 그렇지 않으면 false를 반환한다.
        - fill
            - start부터 end까지 value를 채워 넣는다.
        - copyWithin
            - start부터 end까지 요소를 복사하고, 복사한 요소를 target에 붙인다. 기존 요소가 있다면 덮어쓴다.
    - 배열 여부 확인
        - typeof: 배열은 typeof로 확인시 object로 구분할 수 없음
        - isArray
        ```
            Array.isArray({}); // false
            Array.isArray([]); // true
        ```
