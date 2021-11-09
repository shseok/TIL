# index
1. 바로 잡아야 할 것
2. 변수
3. 객체
4. 문자열
5. 배열
6. new Date()
7. 함수(중첩 함수, 화살표 함수)
8. 클로저
9. js 소괄호 의미
10. 전역객체


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

## 호이스팅

변수가 끌어올려 지는 현상. 선언은 호이스팅 되지만 할당은 호이스팅 되지 않는다.
- var로 선언한 모든 변수는 함수의 최상위로 끌어 올려진(hoisted)다.
# 객체
- 중괄호 {…}를 이용해 만들 수 있다.
- 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용된다.
    ```
        let user = new Object(); // '객체 생성자' 문법
        let user = {};  // '객체 리터럴' 문법 <- 선언시 주로 사용된다
    ```
- delete 연산자를 사용하면 프로퍼티를 삭제가능
    ```
        delete user.age;
    ```
- const로 선언된 객체는 수정될 수 있다.
- 문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환된다.
    - 키에 숫자 0을 넣으면 문자열 "0"으로 자동변환된다.
- for..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있다.
## 계산된 프로퍼티
객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우

## 단축 프로퍼티
프로퍼티 값을 기존 변수에서 받아와 사용하는 경우👇
```
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...등등
    };
}

let user = makeUser("John", 30);
console.log(user.name); // John
```
단축 프로퍼티를 이용하여 코드를 짧게 줄일 수 있다.👇
```
function makeUser(name, age) {
  return {
    name, // name: name 과 같음
    age,  // age: age 와 같음
    // ...
  };
}
```
## ‘in’ 연산자로 프로퍼티 존재 여부 확인
자바스크립트 객체는 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다
```
let user = {};

console.log( user.noSuchProperty === undefined ); // true -> 프로퍼티 존재 x
```
연산자 in을 사용하면 프로퍼티 존재 여부를 확인 가능👇
- in 왼쪽엔 반드시 프로퍼티 이름(key)이 와야 한다
```
let user = { name: "John", age: 30 };

console.log( "age" in user ); // user.age가 존재하므로 true
console.log( "blabla" in user );  // user.blabla는 존재하지 않기 때문에 false
```
## 객체 정렬 방식
객체는 '특별한 방식으로 정렬'된다. 정수 프로퍼티(integer property)는 자동으로 정렬되고, 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬된다.
```
let codes = {
  "49": "독일",
  "41": "스위스",
  "44": "영국",
  // ..,
  "1": "미국"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
```
- 나라 번호(키)가 정수이어서 1, 41, 44, 49 순으로 프로퍼티가 자동 정렬👆
```
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // 프로퍼티를 하나 추가합니다.

// 정수 프로퍼티가 아닌 프로퍼티는 추가된 순서대로 나열됩니다.
for (let prop in user) {
  console.log( prop ); // name, surname, age
}
```
- 키가 정수가 아닌 경우엔 작성된 순서대로 프로퍼티가 나열👆
```
let codes = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  // ..,
  "+1": "미국"
};

for (let code in codes) {
  console.log( +code ); // 49, 41, 44, 1
}
```
- 작성된 순서대로 프로퍼티가 나열되도록 하기 위해서 번호가 정수로 취급되지 않도록 "+"를 앞에 붙여준다

## 참조에 의한 객체 복사
객체는 원시타입과 달리 '참조에 의해(by reference)' 저장되고 복사된다.
- 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소'인 객체에 대한 '참조 값'이 저장된다.
- 따라서, 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않는다.

객체 비교 시 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작한다.
- 비교 시 피연산자인 두 객체가 동일한 객체인 경우에 참을 반환한다

## 객체 복사, 병합과 Object.assign
객체를 복제하고 싶다면 어떻게 해야 할까? (기존에 있던 객체와 똑같으면서 독립적인 객체를 만들고 싶다면?)
- Object.assign을 활용한다
- 목표 객체(user)에 동일한 이름을 가진 프로퍼티가 있는 경우엔 기존 값이 덮어씌운다
```
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2); // permissions1과 permissions2의 프로퍼티를 user로 복사한다.

// now, user = { name: "John", canView: true, canEdit: true }
```
Object.assign을 사용하면 반복문 없이도 간단하게 객체를 복사할 수 있다.
```
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```

## 메서드
객체는 사용자(user), 주문(order) 등과 같이 실제 존재하는 개체(entity)를 표현하고자 할 때 생성된다. 객체의 프로퍼티에 함수를 할당해 객체에게 행동할 수 있는 능력을 부여한다. 이렇게 객체 프로퍼티에 할당된 함수를 **메서드**라고 한다.

### 메서드 단축 구문
- 객체 리터럴 안에 메서드를 선언할 때 사용할 수 있는 단축 문법
- function을 생략해도 메서드를 정의할 수 있다.
```
    user = {
        sayHi: function() {
            console.log("Hello");
        }
    };

    // 단축 구문 👇
    user = {
        sayHi() { // "sayHi: function()"과 동일
            console.log("Hello");
        }
    };
```

## this
- 모든 메서드가 그런 건 아니지만, 대부분의 메서드가 객체 프로퍼티의 값을 활용한다.
메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있고 객체 프롶티 값을 활용할 수 있다.
이때 '점 앞'의 this는 객체를 나타내며, 정확히는 메서드를 호출할 때 사용된 객체를 나타낸다.
```
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this' -> '현재 객체 user'
    console.log(this.name);
  }

};
user.sayHi(); // John
```
- 자바스크립트에선 모든 함수에 this를 사용할 수 있다. **this 값은 런타임에 결정**된다. 컨텍스트에 따라 달라진다. 동일한 함수라도 다른 객체에서 호출했다면 'this'가 참조하는 값이 달라진다. 함수 본문에 this가 사용되었다면, 객체 컨텍스트 내에서 함수를 호출할 것이라고 예상하자
```
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에 this 값이 달라짐
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)
```
- 화살표 함수는 일반 함수와는 달리 '고유한' this를 가지지 않는다. 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져온다. 별개의 this가 만들어지는 건 원하지 않고, 외부 컨텍스트에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용

- 계산기 만들기
```
let calculator = {
    read(a, b) {
        this.a = a; // a를 받으면 object에 a가 생성 됨! 헷갈리면(?) a:0, b:0 을 임의로 선언해줘도 됨
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read(1, 2);
console.log(calculator.sum());
console.log(calculator.mul());
```
- 체이닝
    - 메서드를 호출할 때마다 객체 자신을 반환한다
```
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
  showStep() {
    console.log( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1
```

## new 연산자와 생성자 함수
'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있다.
- 함수 이름의 첫 글자는 대문자로 시작
- 반드시 'new' 연산자를 붙여 실행

다음과 같은 알고리즘으로 동작
1. 빈 객체를 만들어 this에 할당합니다.
2. 함수 본문을 실행합니다. this에 새로운 프로퍼티를 추가해 this를 수정합니다.
3. this를 반환합니다.

```
function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}
```
- 생성자 함수엔 보통 return 문이 없다. 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문에 반환문을 명시적으로 써 줄 필요가 없다.
- class 문법을 사용하면 생성자 함수를 사용하는 것과 마찬가지로 복잡한 객체를 만들 수 있다.

## 옵셔널 체이닝 '?.'
옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 **중첩 객체**를 에러 없이 안전하게 접근할 수 있기때문에 유용하다.
```
let user = {}; // 주소 정보가 없는 사용자

console.log( user && user.address && user.address.street ); // undefined 
👇(같다)
console.log( user?.address?.street ); // undefined 

```
- ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다
- ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없다

즉,
- obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
- obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
- obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함

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
        - [전개문법] vs Array.from
            - Array.from은 유사 배열 객체와 이터러블 객체 둘 다에 사용할 수 있다. 
            - 전개 문법(ex. [...variable])은 이터러블 객체에만 사용할 수 있다.
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
            - 함수 선언문 : 독자적인 구문 형태, 함수 선언문으로 함수를 만들 땐 반드시 함수의 이름이 있어야한다
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
**함수 표현식**보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법
따라서, 함수 선언식과 달리 전역적으로 선언되기 전에 사용될 수 없다
예시
```
    let sum = (a, b) => a + b;

    /* 위 화살표 함수는 아래 함수의 축약 version

    let sum = function(a, b) { // 함수 표현식 + 익명 함수
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

- 화살표 함수는 일반 함수와는 달리 '고유한' this를 가지지 않는다. 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져온다. 별개의 this가 만들어지는 건 원하지 않고, 외부 컨텍스트에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용

```
let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보라
```
# 클로저
- 정의: 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수를 의미한다
- 자바스크립트에선 모든 함수가 자연스럽게 클로저가 된다
    - 왜?: 자바스크립트의 함수는 숨김 프로퍼티인 [[Environment]]를 이용해 자신이 어디서 만들어졌는지를 기억한다. 함수 본문에선 [[Environment]]를 사용해 외부 변수에 접근한다

- 예시
    - https://poiemaweb.com/js-closure

# 전역객체
- 전역 객체를 사용하면 어디서나 사용 가능한 변수나 함수를 만들 수 있다.
- 언어 자체나 호스트 환경에 기본 내장되어 있는 경우가 많다.
- 브라우저 환경에선 전역 객체를 **window**, Node.js 환경에선 **global**라고 부른다.
- 전역 객체엔 Array와 같은 내장 객체, window.innerHeight(뷰포트의 높이를 반환함)같은 브라우저 환경 전용 변수 등이 저장되어 있다.

- 전역 객체의 모든 프로퍼티는 아래와 같이 직접 접근할 수 있다.
    ```
    alert("Hello");
    // 위와 동일하게 동작
    window.alert("Hello"); 👈
    ```
# JS 소괄호 의미
- https://heecheolman.tistory.com/23