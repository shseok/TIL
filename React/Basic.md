# Index
1. 리액트가 쓰이는 이유
2. React 프로젝트 생성
3. 초기 생성된 React 프로젝트
4. state 
5. props
6. 이벤트 리스너
7. Component
99. Reference
# 리액트 왜 쓸까?

웹 앱(Web-app)
- 모바일 App처럼 페이지 이동을 해도 부드럽게 동작하는 웹들. 즉, 모바일 앱과 비슷한 사용감 (실제 앱x)
- 기존 (인스타그램,페이스북, 트위터 등..)메이저 SNS들도 새로고침없이 웹탐색이 가능하다

이러한 웹 앱을 만들 때, 유용하게 쓸 수 있는 라이브러리
- React
- Angular
- Vue

웹 앱의 장점
- 기능
    1. 모바일앱으로 발행이 쉽다.
        [PWA](../ETC/PWA.md) / React Native 등..으로 가능

    2. 앱처럼 뛰어난 UX
        - 빠른 느낌
    3. 그냥 웹사이트보다 비즈니스적 강점
        - [구매전환율](https://m.searchad.naver.com/dic/view/50) 상승
- **유지보수**
    1. Reusability
        - ex. 코드의 중복을 없애고 편리하기 위함, 새로운 기능을 없애고 빠르게 추가 시킬 수 있음.
    2. Performance
        - ex. vertual DOM을 통해 가능해지고 자주 바뀌는 기능이 많아지면서 performance가 중요해짐
            - 보통, 브라우저가 DOM트리를 가지고 화면에 뿌려주면 비로소 화면 생성
            - vertual DOM : 요즘 웹들의 특성이 반응성(ex.누르면 변경)이 많다 = DOM트리의 변경이 잦다 = 기존의 웹은 너무 느려서 최적화 시켜야한다(DOM 프로세스를 바꿀 수 없으니 프로세스 횟수를 최소화하자) = vertual DOM이 만들어짐 
    - 📌단, 모든 문제는 거대한 프로세스 과정에서 발생한다.

# React 프로젝트 생성
1. 작업폴더 생성
2. vscode를 통해 작업폴더 open
3. 작업폴더 터미널 경로에 ```npx create-react-app {프로젝트명}``` 입력
    - 리액트 프로젝트가 작업폴더의 하위폴더로 생성
    - npx : 라이브러리 설치를 도와주는 명령어
        - [nodejs 설치 후 이용가능](https://create-react-app.dev/docs/getting-started)
        - nodejs설치하면 **npm** tool 사용가능
    - create-react-app : 리액트 셋팅 다된 boilerplate를 만들기 쉽게 도와주는 라이브러리.
4. 생성된 프로젝트명 폴더를 에디터를 이용해 오픈
    - 기존에서 cd를 통해 이동 | open folder 이용
5. App.js에서 코드 작성
6. Live Server처럼 미리보고 싶으면 ```npm start```

# 초기 생성된 React 프로젝트
App.js : 메인 페이지 like index.html
- 실제 메인페이지가 아닌 메인페이지에 들어갈 HTML을 짜는 장소
- 실제 메인페이지는 public/index.html에 있다.

index.js를 통해 App.js를 index.html에 집어넣었다.

node_modules : 설치한 라이브러리를 전부 모은 폴더

public 폴더 : static 파일의 보관함
- 즉, 동적으로 바뀌지 않는 이미지파일, 텍스트파일, favicon.ico 등을 보관
- 보통 리액트 프로젝트 완성 후 빌드 등을 하는데, 이 후 코드가 압축된다. 단, public폴더에 있는 것들은 압축이 안되어 보관하기 좋다.

src 폴더 : 소스코드 보관함
- 실제 코딩은 거의 App.js에서

package.json : 설치한 라이브러리 목록(이름, 버전)을 모아놓는 파일
- npm으로 라이브러리설치시 목록을 자동 기록

# HTML대신 JSX
JSX 👍
- 리액트 컴포넌트에서 xml 형식의 값을 반환해는 것. 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해준다.
- return (...) 내부에서 활용

## JSX 사용법
1. 태그에 class를 주고 싶다면? className이용
    - ``<div class=""></div>`` 불가능 😅
    - ``<div className="클래스명"></div>``
2. 데이터 바인딩을 쉽게 해준다. 중괄호이용
    - 데이터 바인딩 : 데이터를 HTML에 넣는 행위
        - 리액트, 앵귤러, 뷰가 정통 HTML코딩보다 편리한 이유
    - 보통 서버에서 받아온 데이터를 자바스크립트로 HTML에 넣는다. ``ex) document.getEl..getInner...`` 하지만, 리액트에서 JSX문법으로 서버에서 받아온 데이터를 ``ex) <h4>{ 변수명 }</h4>``으로 해결해줄 수 있다.
    - 함수명으로 함수의 결과를 사용가능 ``ex) <h4>{ 함수명() }</h4>``
    - src, id, href 등의 속성에도 사용가능 ``ex) <img src={ 변수명 }/>``
    - 클래스명에도 사용가능 ``<div className={ 변수명 }></div>``
    - 등..
3. JSX에서 style속성을 작성할 때, object 형식을 이용
    - ``<div style="color : blue; font-size: 16px;"></div>`` 불가능 😅
    - ``style={object자료형으로 만든 스타일}``
        - 스타일의 오른쪽은 항상 텍스트.
        - 스타일의 인쪽은 - 를 사용할 수 없다. 따라서, camelCase 작명 관습에 따라 속성명을 바꿔줘야한다.
        - CSS 인라인 스타일
            - ``<div style={{ color : 'blue', fontSize : '30px'}}></div>``
            - 위의 ``{ color : 'blue', fontSize : '30px'}``을 변수로 만들어서 사용 가능
        - 보통 클래스 만들어서 css를 가져다가 사용
4. JSX 태그안에서 중괄호 "{}"는 자바스크리브를 사용할 수 있도록 한다.
## class와 for 
React와 JSX는 class와 for를 제외하면 표준 HTML 속성을 모두 사용할 수 있다. class와 for는 자바스크립트와 ECMAScript의 예약어고, JSX는 일반 자바스크립트로 변환해서 사용한다. 따라서 class와 for 대신에 각각 className과 htmlFor를 사용한다. 예를 들어 hidden이라는 CSS 클래스를 적용하는 경우 <div>에 다음과 같이 정의할 수 있다.

```<div className=“hidden”>…</div>```
 

- 폼 요소를 위한 label 요소를 생성하는 경우, for 대신에 htmlFor를 사용한다.

```
    <div>
    <input type=“radio” name={this.props.name} id={this.props.id} />
    <label htmlFor={this.props.id}>
        {this.props.label}
    </label>
    </div>
```

5. JSX 배열 반복문 렌더링
- 자바스크립트 반복문을 통해 DOM에 JSX을 렌더링하고 싶을 때, 컴포넌트 return문 안에서 for문은 못 쓴다.
```
function App() {
  const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return
    (
      <div>
        {
          for ( let i = 0; i < weekArr.length; i++) 
            {
              <span>{weekArr(i)}</span>
            }
        }
      </div>
    )
}

```
- 해결방법
    1. return문에서 JSX를 반환하는 함수 호출 (재사용성, return문 깔끔)
    ```
    function App() {
    const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    
    const rendering = () => {
        const result = [];
        for (let i = 0; i < weekArr.length; i++) {
        result.push(<span key={i}>{weekArr[i] + " / "}</span>);
        }
        return result;
    };

    return <div>{rendering()}</div>;
    }
    ```
    2. return문 안에서 map사용 (직관적, 가독성 좋음)
    ```
    function App() {
        const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

        return (
            <div>
            {weekArr.map((week, index) => (
                <span key={index}>
                {week}
                {" / "}
                </span>
            ))}
            </div>
        );
        }
    ```
- [자세히](https://codingbroker.tistory.com/123)

6. 꼭 닫혀야하는 태그
HTML 에서는 input 또는 br 태그를 사용 할 때 닫지 않고 사용하기도 하는데, 리액트에서는 그렇게 하면 안되고 괄호를 닫아줘야한다!

7. 감싸져야하는 태그
두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 한다.
    - [fragment](https://ko.reactjs.org/docs/fragments.html#short-syntax)로 table와 같은 예외상황때문에 주로 쓰인다.
        - 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않는다.

아래는 오류코드
```
function App() {
  return (
    <Hello />
    <div>안녕히계세요.</div>
  );
}

export default App;

```

정상코드
```
function App() {
  return (
    <div>
      <Hello />
      <div>안녕히계세요</div>
    </div>
  );
}

export default App;
```
# 데이터 보관 방법 state
데이터는 변수에 넣거나 state에 넣는 방법이 존재

## state 사용법
1. ``{useState}``를 상단에 첨부
    - 리액트의 데이터 저장공간 state 만드는 법
    - detail: ``import React, {useState} from 'react';``
        - 해석: 리액트에 있는 내장 함수를 사용할 것이다.
2. ``useState(데이터)``를 이용해 만들어야한다 
    - 데이터(state)와 데이터(state)를 수정해주는 함수를 배열로 만들어준다
    - ex) ``let [state,state변경함수] = useState(데이터);`` 
3. 문자,숫자, array, object 모두 저장가능
    - ex) ``useState([데이터1, 데이터2])``

## state에 데이터 저장하는 이유
웹이 App처럼 동작하게 만들기 위해. 즉, 새로고침(reload)없이도 HTML이 **자동으로 재렌더링**되기 위해
- 자주 바뀌는, 중요한 데이터는 변수말고 state에 저장해서 써야 웹 앱처럼 동작 가능하게 만들 수 있다

# props
props 는 properties 의 줄임말이다. 주로, 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용한다.

## props 사용법
1. props로 받음
    - 컴포넌트 태그 사이의 값을 조회 : **props.children**
2. 컴포넌트에 props를 지정하지 않았을 때, defaultprops 설정하여 받음

- [자세히](https://react.vlpt.us/basic/05-props.html)

3. 숫자형태로 받고 싶다면 괄호를 넣어서 전달해준다.  ex) 전달시 price={3000} 

4. defaultProps
    - 컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶을 때 쓰인다.

    ```
        import React from 'react';

        function Hello({ color, name }) {
            return <div style={{ color }}>안녕하세요 {name}</div>
        }

        Hello.defaultProps = {
            name: '이름없음'
        }

        export default Hello;
    ```

5. 조건부 렌더링
특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미한다
- 특정 조건에 따라 보여줘야하는 내용을 달리할 때, 삼항연산자를 사용한다
- 더 좋은 방법으로는 **&&연산자**를 사용해서 처리하는게 좋다.
    - 📌JSX 에서 null, false, undefined 를 렌더링하게 된다면 아무것도 나타나지 않게 된다.
    ```
        import React from 'react';

        function Hello({ color, name, isSpecial }) {
            return (
                <div style={{ color }}>
                {isSpecial && <b>*</b>}  <- false일 때, false / true일 때, <b>*</b>
                안녕하세요 {name}
                </div>
            );
        }

        Hello.defaultProps = {
            name: '이름없음'
        }

        export default Hello;
    ```
6. props 전달할 때, 값 설정을 생략하면 true로 값이 할당된다.
    - ``<Hello name="react" color="red" isSpecial />``
# 이벤트 리스너(핸들러)
1. ``onClick={클릭될때 실행할 JS함수}`` | ``onClick={()=>{실행할 내용}}``
    - onClick={여기에 해당 함수를 따로 만들고 함수 이름만 넣어도 된다.}
    - 📌 onClick={function()} 이런형태로 넣으면 렌더링되는 시점에서 함수가 호출되버리기 때문에 작동하지 않는다. 따라서 함수를 실행시키는게 아니라 함수형태를 넣어주거나 함수타입의 값을 넣어주어야한다.
2. state를 변경하고 싶을 때, ``useState(데이터)``를 이용해 만든 state를 변경시켜 주는 함수 이용
    - state는 그냥 변경이 안되기 때문에
    - ``state변경함수(대체할 데이터)``
    - **유일하게 state 변경함수로 변경해야 재렌더링**이 가능
    - ex) ``<p onClick={() => { heartChange(heartNum + 1) }}>👍</p>``
        - 누를때만 state 변경

# Component
- Html(``<div> ~~~ </div>``)을 뱉는(return) 함수
- Modal창과 같은 상세페이지를 만들 때, Component를 사용하여 분리
- 항상 return ( ) 안에 HTML으로 작성
    - 단, 소괄호안에 항상 하나의 HTML 태크로 시작하고 끝나야한다.
    - 연속된 태크로 사용불가하다. 무조건 하나의 HTML 태그로 묶어서 해결
- html의 많은 태그들은 줄여서 쓸 수 있는 방법
    - HTML을 한 단어로 줄여서 쓸 수있는 방법
- 여러 엘리먼트를 반환. HTML 덩어리
- 장점:
    - 가독성이 좋고 훗날 관리하기 쉽다.
    - 컴포넌트 안에 컴포넌트를 만들 수 있다.
    - 컴포넌트를 만드는 기준
        1. 반복출현하는 HTML 덩어리들
        2. 자주 변경되는 HTML UI들
            - 재 랜더링이 일어나는 묶음으로써 성능적 이점
    - 다른 페이지를 만들때도 컴포넌트로 만들 수 있다.
- 단점:
    - state를 쓸 때 복잡하다
        - 상위 component에서 만든 state를 쓰려면 props문법을 이용해야한다.

## Component 사용법
```
function App(){
    return (
        <Modal/> // = <modal></modal>
    );
}

function Modal(){
    return (
        <> // fragment 문법으로 의미없는 div안쓰고 여러 HTML을 묶어서 한곳에 넣을 수 있다.
            <div className="modal">
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
            <div></div>
        </>
    )
}
```
1. 함수 만들고 이름을 짓는다. 단, 쓰이는 컴포넌트 위칭에 나란히 만든다.
    - 이름은 **대문자**로 시작한다
2. return ()소괄호 안에 있는건 하나의 태그로 묶어야한다

# useEffect
1. dependency array안에 값이 없으면 componentDidMount
```
React.useEffect(effet:()=>{
    console.log('use effect ran');
}, deps[])
```
2. dependency array안에 값이 바뀌면 effect가 실행이 된다.   
componentDidUpdate
```
React.useEffect(effet:()=>{
    console.log('use effect ran'); 
}, deps[counter])
```
3. socket io를 할때, return 함수를 주어 unmount로 닫아주는 로직을 작성
```
React.useEffect(effet:()=>{
    console.log('use effect ran');

    return () => {
        console.log('unmout');
    };
}, deps[counter])
```

# Advanced (심화)
## 여러개의 input 상태 관리하기
단순히 useState 를 여러번 사용하고 onChange 도 여러개 만들어서 구현 할 수 있지만, input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 방법이 있다. 이때, useState에서는 객체 형태의 상태로 관리해준다.
- 리액트 상태에서 객체를 수정해야 할 때, 직접 수정하면 안된다.
    ```
        inputs[name] = value; ❌
    ```
- 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해주어야 한다
    ```
        setInputs({
            ...inputs,  👌 - spread는 앞에 두나 뒤로 두나 상관x, rest는 상관o
            [name]: value
        });
    ```
    - [name] > [계산된 속성명에 대한 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)

## Map을 사용한 배열 렌더링
동적인 배열을 렌더링할 때, map() 을 사용한다. 
    - 보통, 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환하는데 사용된다.
    - 📌리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야한다.
        - key를 설정하지 않을 때 경고 메시지가 뜨는데, 각 고유 원소에 key 가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 될 수 있기 때문이다.
        - key를 설정하지 않을 때: 중간의 값이 바뀐다면, 그 하위 값들이 전부 변해서 비효율.
        - key를 설정 했을 때: 중간의 값이 바뀐다면, key를 이용해 중간의 값을 추가.

## 배열에 항목 추가하기, 제거하기 , 수정하기
- set함수를 사용할 때, spread or concat함수로 state를 set해야한다
# ref
- https://react.vlpt.us/
- https://ko.reactjs.org/docs/hooks-state.html
- http://yoonbumtae.com/?p=3632
- class와 for
    - https://thebook.io/006961/part01/ch03/04/04/
3. 원하는 곳에 <함수명/>