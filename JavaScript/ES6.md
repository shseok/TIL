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
- 자바스크립트 엔진은 도달 가능한 (그리고 추후 사용될 가능성이 있는) 값을 메모리에 유지한다
# 변수
자바스크립트는 여덟 가지 기본 자료형을 지원한다.

- 정수와 부동 소수점을 저장하는 데 쓰이는 숫자형
- 아주 큰 숫자를 저장할 수 있는 BigInt형
- 문자열을 저장하는 데 쓰이는 문자형
- 논리값 true/false을 저장하는 데 쓰이는 불린형
- ‘비어있음’, '존재하지 않음’을 나타내는 null 값만을 위한 독립 자료형 null
- 값이 할당되지 않은 상태를 나타내는 undefined 값만을 위한 독립 자료형 - undefined
- 복잡한 자료구조를 저장하는 데 쓰이는 객체형과 고유한 식별자를 만들 때 사용되는 심볼형

typeof 연산자는 값의 자료형을 반환해준다. 그런데 두 가지 예외 사항이 있다.

```
typeof null == "object" // 언어 자체의 오류
typeof function(){} == "function" // 함수는 특별하게 취급
```
# 문자열       
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

        console.log( str ); // hi
        ```
- 문자열 비교
    - 소문자는 대문자보다 항상 크다
# 배열
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

# new Date()
- Date 객체엔 '날짜만' 혹은 '시간만' 저장하는 것은 불가능하고, 항상 날짜와 시간이 함께 저장된다
- Date 객체 중 연도를 반환해주는 메서드를 사용할 때, getFullYear()를 사용해야한다. (getYear() X )
- Date 객체엔 자동 고침(autocorrection) 이라는 유용한 기능이 존재 -> 윤년을 생각하기에 도움 | 월/일/시간을 쉽게 날짜에 추가하거나 뺄 수 있다
- 자바스크립트의 타임스탬프는 초가 아닌 밀리초 기준
# "..."
- 전개문법 vs 나머지 매개변수

    - 전개문법(spread syntax)
        - 배열 요소를 나열하는 방법
        - 이터러블 객체 여러 개를 전달하는 것도 가능
        - 평범한 값과 혼합해 사용하는 것도 가능
        - 배열을 합칠 때 전개 문법을 활용
        - 문자열을 문자 배열로 변환할때 활용
        - 전개문법 vs Array.from
            - Array.from은 유사 배열 객체와 이터러블 객체 둘 다에 사용할 수 있다. 
            - 전개 문법은 이터러블 객체에만 사용할 수 있다.
            - 무언가를 배열로 바꿀 때는 전개 문법보다 Array.from이 보편적으로 사용
        - **Object.assign() 처럼 깊은 복사가 가능하다!**
    - 나머지 매개변수 (...)
        - "나머지 매개변수들을 한데 모아 배열에 집어넣어라"
        - 함수에 넘겨주는 인수의 개수를 배열로 묶을 때 쓰인다
# 함수
- 자바스크립트는 함수를 특별한 종류의 값으로 취급한다
- 함수생성 (3가지)
    - 함수선언
        ```
            function showMessage() {
                console.log( 'hello!' );
            }
        ```
    - 함수표현식
       ```
            let sayHi = function() { // anonymous function
                console.log( "Hello" );
            }; // 세미콜론은 구문의 끝임을 의미
        ``` 
    - 화살표 함수
        ```
            // 화살표(=>) 우측엔 표현식이 있음
            let sum = (a, b) => a + b;

            // 대괄호{ ... }를 사용하면 본문에 여러 줄의 코드를 작성할 수 있음. return문이 꼭 있어야 함.
            let sum = (a, b) => {
                // ...
                return a + b;
            }

            // 인수가 없는 경우
            let sayHi = () => alert("Hello");

            // 인수가 하나인 경우
            let double = n => n * 2;
        ```
        - 화살표 함수는 함수 표현식과 같은 방법으로 사용할 수 있다
    - 함수 선언문 vs 함수 표현식
        1. 문법
            - 함수 선언문 : 독자적인 구문 형태
            - 함수 표현식 : “할당 표현식” 우측에 생성
        2. 언제 함수를 생성하는지
            - 함수 선언문 : 함수 선언문이 정의되기 전에도 호출
            - 함수 표현식 : 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용
        3. 스코프
            - 함수 선언문 : 블록 밖에서는 함수에 접근하지 못한다
            - 함수 표현식 : 블록 밖에 변수를 만들어서 접근가능
        - 뭐가 더 좋은가?
            - **함수 선언문**으로 함수를 정의하면, 함수가 선언되기 전에 호출할 수 있어서 코드 구성을 좀 더 자유롭게 할 수 있다. 단, 함수 표현식을 사용할 경우도 있다
- 함수복사
    ```
        function sayHi() {   // (1) 함수 생성
            console.log( "Hello" );
        }

        let func = sayHi;    // (2) 함수 복사

        func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행)
        sayHi(); // Hello    //     본래 함수도 정상적으로 실행.
    ```
    (2): 괄호가 있었다면 func = sayHi() 가 되어 sayHi 함수 그 자체가 아니라, 함수 호출 결과(함수의 반환 값) 가 func에 저장되었을 것이다
- 외부변수
    - 함수 내부에서 함수 외부의 변수인 외부 변수(outer variable)에 접근할 수 있다
    - 함수에선 외부 변수에 접근하는 것뿐만 아니라, 수정도 할 수 있다
    - 외부 변수는 지역 변수가 없는 경우에만 사용할 수 있다
        - 함수 내부에 외부 변수와 동일한 이름을 가진 변수가 선언되었다면, 내부 변수는 외부 변수를 가린다
            ```
                let userName = 'John';

                function showMessage() {
                    let userName = "Bob"; // 같은 이름을 가진 지역 변수를 선언

                    let message = 'Hello, ' + userName; // Bob
                    console.log(message);
                }

                showMessage();// 함수는 내부 변수인 userName만 사용

                console.log( userName ); // 함수는 외부 변수에 접근하지 않기때문에 값이 변경되지 않고 John이 출력
            ```
- 매개변수
    - 함수에 전달된 인자는 지역변수 from과 text에 **복사**된다. 함수는 지역변수에 **복사된 값**을 사용한다
    - 📌이는 매개변수로 전달된 변수들의 값이 함수안에서 변경되어도 함수에서 돌아온 후 초기 전달된 변수의 상태를 유지함을 알 수 있다.
        - 정리: 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않는다
        ```
            function showMessage(from, text) { // 인수: from, text
                from = '*' + from + '*'; // "from"을 변경
                console.log(from + ': ' + text);
            }

            let from = "Ann";

            showMessage(from, 'Hello!');

            console.log(from); // "Ahn"
        ```
- 기본값
    - 📌매개변수에 값을 전달하지 않으면 그 값은 undefined
    - 매개변수에 값을 전달하지 않아도 그 값이 undefined가 되지 않게 하려면 '기본값(default value)'을 설정해주면 된다.
        ```
            function showMessage(from, text = "no text given") {
                console.log( from + ": " + text );
            }

            showMessage("Ann");
        ```

- 반환값
    - return문이 없거나 return 지시자만 있는 함수는 **undefined를 반환**한다

- 함수 이름
    - 어떤 동작을 수행하기 위한 코드를 모아놓은 것이다. 따라서 함수의 이름은 대개 **동사**이다
    - create…, show…, get…, check… 등의 잘 알려진 접두어를 사용해 이름을 지을 수 있다.
    - 예시
        ```
            showMessage(..)     // 메시지를 보여줌
            getAge(..)          // 나이를 나타내는 값을 얻고 그 값을 반환함
            calcSum(..)         // 합계를 계산하고 그 결과를 반환함
            createForm(..)      // form을 생성하고 만들어진 form을 반환함
            checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환함
        ```
- 콜백함수
    - 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것
        ```
            function ask(question, yes, no) {
                if (confirm(question)) yes()
                else no();
            }

            ask(
            "동의하십니까?",
            function() { console.log("동의하셨습니다."); }, // anonymous function
            function() { console.log("취소 버튼을 누르셨습니다."); } // anonymous function
            );
        ```
# 중첩 함수
- 함수 내부에서 선언한 함수
- 새로운 객체의 프로퍼티 형태나 중첩 함수 그 자체로 반환될 수 있다
- 이렇게 반환된 중첩 함수는 어디서든 호출해 사용할 수 있다
    ```
        function makeCounter() {
        let count = 0;

            return function() { // 중첩함수
                return count++;
            };
        }

        let counter = makeCounter();

        console.log( counter() ); // 0
        console.log( counter() ); // 1
        console.log( counter() ); // 2
    ```

# 화살표 함수
예시
```
    let sum = (a, b) => a + b;

    /* 위 화살표 함수는 아래 함수의 축약 version

    let sum = function(a, b) {
        return a + b;
    };
    */

    console.log( sum(1, 2) ); // 3
```
- 함수 func는 화살표(=>) 우측의 표현식(expression)을 평가하고, 평가 결과를 반환한다
- 인수가 하나도 없을 땐 괄호를 비워놓으면 된다. 다만, 이 때 괄호는 생략할 수 없다.
- 본문이 여러 줄인 화살표 함수 
    ```
        let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려준다
            let result = a + b;
            return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 한다
        };

        alert( sum(1, 2) ); // 3
    ```
- 화살표 함수는 함수 표현식과 같은 방법으로 사용할 수 있다.

# 클로저
- 정의: 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수를 의미한다
- 자바스크립트에선 모든 함수가 자연스럽게 클로저가 된다
    - 왜?: 자바스크립트의 함수는 숨김 프로퍼티인 [[Environment]]를 이용해 자신이 어디서 만들어졌는지를 기억한다. 함수 본문에선 [[Environment]]를 사용해 외부 변수에 접근한다