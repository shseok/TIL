# 논리계산법
## && 연산자로 코드 단축
```
    const dog = {
        name: '멍멍이'
    };

    function getName(animal) {
        return animal && animal.name;
    }

    const name = getName(); // <- dog가 전달되면 아래에 멍멍이가 출력된다.
    console.log(name); // undefined
```
### Tip
```
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1
```
## || 연산자로 코드 단축
어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 쓰인다.
```
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```
# array clone - copy
    - ex) let clone = arr.slice();
    - ex) let clone = [...arr];
# 배열 메서드(map, filter, forEach ...)의 매개변수(func) 호출 방법
- 1. arrow function이 아닌 함수 선언문을 이용할 경우 예시
    ```
        function isBigEnough(value) {
            return value >= 10;
        }

        let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
        // filtered 는 [12, 130, 44]
    ```
- 2. a 이상 b 이하 함수를 선언하고 filter에 넘겨 주는 예시
    ```
        function inBetween(a, b) {
            return function(x) {
                return x >= a && x <= b;
            };
        }

        let arr = [1, 2, 3, 4, 5, 6, 7];
        alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
    ```

# Immediately-invoked function expression(즉시 실행 함수)
- 즉시 실행 함수의 기본 형태는 아래와 같다.
    - ```
        (function () {
            // statements
        })()

        ```
- 함수를 감싸주면 표현식으로 인식하도록 속이고 ()를 붙여주면 표현식이 실행되게 해주는 원리이다
- 현대에는 사용하지 않는다.
- 이 함수는 다시 호출할 수 없다.
- 함수만의 유효 범위를 가지게 되는 효과를 볼 수 있으므로, 라이브러리들이 최초 한 번의 실행만 필요로 하는 초기화 코드 등에서, 변수 중복 문제나 임의 접근 문제 등을 피하기 위해 사용된다.
    ```
    (function (name){
        var x = 'hui';
        console.log('Hello ' + name + x)
    })('chan'); // 'Hello chanhui'

    console.log(x); // x is not defined

    ```

# input 값이 숫자 or 문자인지 판단
    ```
    if (typeof input !== 'number') {
        console.log('string');
    } else {
        console.log('number');
    }
    ```

# 구조분해할당
- 앞에 2개만 차례로 할당되고 남은 Muzi는 할당되지 않는다.
    ```
        let [command, uid] = "Enter uid1234 Muzi".split(' ');
    ```
- 우측에 이터러블(iterable)이면 뭐든 할당가능
    ```
        let [a, b, c] = "abc"; // ["a", "b", "c"]
        let [one, two, three] = new Set([1, 2, 3]); // [1,2,3]
    ```
- 변수 교환 트릭
    ```
        let guest = "Jane";
        let admin = "Pete";

        // 변수 guest엔 Pete, 변수 admin엔 Jane이 저장되도록 값을 교환함
        [guest, admin] = [admin, guest]; // guest = "Pete", admin = "Jane"
    ```
- 객체 분해
    ```
        let options = {
        title: "Menu",
        width: 100,
        height: 200
        };

        let {title, width, height} = options; // title = "Menu", width = 100, height: 200 
    ```
    - let {...} 안의 순서가 바뀌어도 동일하게 동작한다👆
    - let 없이 사용시 주의
        ``` 
            let title, width, height;

            // SyntaxError: Unexpected token '='👇
            {title, width, height} = {title: "Menu", width: 200, height: 100};

        ```
        자바스크립트가 코드 블록으로 인식
        - 해결 방법 : 에러를 해결하려면 할당문을 괄호(...)로 감싸 자바스크립트가 {...}를 코드 블록이 아닌 표현식으로 해석하도록 한다
            ```
                let title, width, height;

                // 에러 해결 👇
                ({title, width, height} = {title: "Menu", width: 200, height: 100});

                or another example

                let user = { name: "John", years: 30 };

                ({ name, years: age, isAdmin = false } = user); // name = "John" , age = "30", isAdmin = "false"
            ```
    - 함수 매개변수를 구조 분해할 땐, 반드시 인수가 전달된다고 가정되고 사용된다는 점 주의하자. 모든 인수에 기본값을 할당해 주려면 빈 객체({})를 명시적으로 전달해야 한다.
    - 인수를 전달하지 않을 것이 예상될 경우 아래와 같이 대처를 해야한다
        ```
            function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
                alert( `${title} ${width} ${height}` );
            }

            showMenu(); // Menu 100 200
            showMenu({title: "My menu", items: ["Item1", "Item2"]}); // My Menu 100 200
        ```



# 객체 배열에서 속성 값을 배열로 추출
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

# 맵을 배열로 반환하는 방법
```
let map = new Map();

map.set("name", "John");

Array.from(map.keys());
```

- **Array.from**(이터러블 or 유사배열) 사용
    - 이터러블 -> 문자열, 배열 등...
- 셋을 배열로 반환하는 방법에도 해당

# 코드의 시간차 측정
```
    let start = new Date(); // 측정 시작 | new Date() 보다 Date.now(); 를 쓰는게 성능에 좋음

    // 원하는 작업을 수행 ...

    let end = new Date(); // 측정 종료 | new Date() = Date.now();

    console.log( `원하는 작업을 수행하는데 ${end - start} 밀리초가 걸린다` );
```

# 매개변수 기본값 설정 방법
1. ```
    function showMessage(from, text = anotherFunction()) {
        // anotherFunction()은 text값이 없을 때만 호출됨
        // anotherFunction()의 반환 값이 text의 값이 됨
    }
    ```
2. (2-1)
    ```
        function showMessage(text) {
            if (text === undefined) {
                text = '빈 문자열';
            }

        console.log(text);
        }

        showMessage(); // 빈 문자열
    ```
    - 가끔은 함수 선언부에서 매개변수 기본값을 설정하는 것 대신 함수가 실행되는 도중에 기본값을 설정하는 게 논리에 맞는 경우가 있다.
    - 매개변수를 undefined와 비교하여 함수 호출 시 매개변수가 생략되었는지를 확인한다
3. 논리연산자
    ```
        function showMessage(text) {
            text = text || '빈 문자열';
            ...
        }
    ```
        
    - 매개변수가 생략되었거나 빈 문자열("")이 넘어오면 변수에 '빈 문자열'이 할당됩니다.

4.  null 병합 연산자
    ```
        function showCount(count) {
            console.log(count ?? "unknown");
        }

        showCount(0); // 0
        showCount(null); // unknown
        showCount(); // unknown
    ```
    - 0처럼 falsy로 평가되는 값들을 일반 값처럼 처리할 수 있어서 좋다

# ()와 {} 사용시 주의할 점
[자세히](https://velog.io/@bigbrothershin/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9-%EC%8B%9C-%EC%99%80-%EC%82%AC%EC%9A%A9%EC%83%81-%EC%A3%BC%EC%9D%98%ED%95%A0-%EC%A0%90)

# velopert에게 얻은 팁
1. [switch문 return](https://learnjs.vlpt.us/useful/05-smarter-conditions.html)
    - 추가로 마지막 예제에서 task[animal]의 true false 검사 중 왜 실행되지 않는 의문 -> 함수 그자체를 의미하기 때문 -> task[animal]()을 해야 실행한다
2. [비구조화 할당 실전](https://learnjs.vlpt.us/useful/06-destructuring.html)
    - 비구조화 할당할 이름이 다르다면 :문자를 사용해서 이름을 바꿔준다.
    - 깊은 값 비구조화 할당
