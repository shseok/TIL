# React Hooks
React Hooks는 **Function Component**안에서만 사용할 수 있다.

## 선학습

💡 react component는 2가지가 존재한다.
1. FunctionComponent
2. ClassComponent 
    - [LifeCycle Methods](./LifeCycle.md)

💡 State의 변화 -> 렌더링 -> 컴포넌트 내부 변수 초기화
- 함수형 컴포넌트는 함수이다. 따라서, 리렌더링시 함수가 다시 불려지므로 내부의 모든 변수가 초기화된다. 

💡 리액트 컴포넌트는 기본적으로 부모컴포넌트가 리렌더링되면 바뀐 내용이 없다 할지라도 자식 컴포넌트 또한 리렌더링이 된다.
- 실제 DOM 에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당하지만, Virtual DOM 에는 모든걸 다 렌더링하고 있다.

💡 불변성을 지키기 위해 spread syntext를 많이 사용한다.
- 리액트 state에서 객체를 수정할 때, ``input[name] = value``처럼 직접 수정하면 안된다.
    - 기존 상태를 직접 수정하면 값을 바꿔도 리렌더링이 안된다.
- 새로운 객체를 만들고 객체에 변화를 주어 state로 사용해주어야한다.
- 사용법
    ```
    setInputs({
        ...inputs, // 기존 객체 복사
        [name]: value
    });
    ```
- 불변성을 지켜주는 작업
    - 불변성을 지킨다 -> 리액트컴포넌트에서 상태 업데이트 감지 -> 리렌더링
    - 불변성을 지킨다 = 컴포넌트 업데이트 성능 최적화 가능
- [도움1](https://react.vlpt.us/basic/09-multiple-inputs.html)
    -  리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 된다.
- [도움2](https://react.vlpt.us/basic/23-immer.html)
- [immer 라이브러리이용](./라이브러리.md)

💡 onClick, onChange에서 함수를 쓸때 [자바스크립트 함수 return 참고](https://ko.javascript.info/function-expressions)
1. 함수가 파라미터를 필요로 하지않을 경우
    ```
        <button onClick={() => funcName()}>👌
        <button onClick={() => funcName}>❌
        <button onClick={funcName}>👌
        <button onClick={funcName()}>❌
        <button onClick={()=>{
            console.log("1234");
        }}>👌
    ```
2. 함수가 파라미터를 필요로 할 경우
    ```
        <input onChange={() => funcName(param)}>👌
    ```    
    - 함수 이름만 쓴다.

# Index
- 1.useState
- 2.useEffect
- 3.useRef
- 4.useCallback
- 5.advanced skill

## 1. useState
state와 setState를 배열형태로 return해준다. state에는 현재 상태값이 들어있고 setState로 state를 변경할 수 있다
### setState
- state 업데이트를 진행한다.
- 즉, 리렌더링이 된다.
- setState함수는 비동기라 실행 한 후 state값을 조회할 때 최신 state값의 반환을 보장하지 않는다.
    - 이전 상태값이 업데이트될 상태값에 영향을 미치는 경우에 setState함수는 prevState를 인자로 받는 콜백을 받아 처리하는것을 권장한다.
- 객체형 업데이트

- 함수형 업데이트
    - 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주는게 아닌, 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.
    - 즉, state를 변경할 때 새로변경될 state값이 이전 state 값과 연관이 되어있다면 setState의 인자로 callback 함수를 넣어주는게 좋다.
    - [불필요한 리렌더링 해결](https://react.vlpt.us/basic/19-React.memo.html)
```
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1); 👈
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1); 👈
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

    - 위 코드를 보면 알 수 있듯이, 그 다음 상태를 파라미터로 넣어준것이 아니라, 값을 업데이트 하는 함수를 파라미터로 넣어주었다. 주로 컴포넌트를 최적화를 하게 될 때 사용하게 된다

### 주의
useState를 사용해서 초기값을 받아올 때, 무거운 일을 해야하는 경우
- useState의 인자로 callback함수를 넣어준다면 초기 rendering될 때만 실행되게 할 수 있다.
- ```
    useState(()=> {
        return heavyWorks();
    })
    ```

- [useState가 어떻게 상태를 변경 시키는가? + 어떻게 컴포넌트 함수가 변경시킨 값으로 렌더링을 진행하는가?](https://velog.io/@jjunyjjuny/React-useState%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C)



## 둘 유즈이펙트
컴포넌트가 Mount, Update, Unmount되었을 때 특정 작업을 처리할 코드를 실행시켜주고 싶을 때 사용된다. 
- ``useEffect(()=> {})``
- 마운트시 작업
    - props 로 받은 값을 컴포넌트의 로컬 상태로 설정
    - 외부 API 요청 (REST API 등)
    - 라이브러리 사용 (D3, Video.js 등...)
    - setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
- 언마운트시 작업
    - setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
    - 라이브러리 인스턴스 제거
### 형태
1. ``useEffect(() => { // work... })``
    - 렌더링 될때 마다 callback 실행
2. ``useEffect(() => { // work... }, [value] )``
    - 화면에 첫 렌더링 될때, value값이 바뀔때 실행
    - [value]는 dependency array(deps)라고 불린다.
        - 만약 useEffect 안에서 사용하는 상태나 props 를 deps 에 넣지 않게 된다면 useEffect 에 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않게 됩니다.
    - value가 비어있으면 첫 렌더링될때만 실행

해당 Hooks를 import해서 Lifecycle처럼 사용할 수 있다.
1. = componentDidMount()
    - 처음 로딩될 때 **한번만** 실행
    - ```
        useEffect(() => {
            // code...
        }, [])
        ```
    - 🧨주의: useEffect의 두번째 매개변수가 없이 쓰일 때는 reRendering될 때마다 내부의 코드가 작성된다.
2. = componentDidUpdate()
    - 두번째 array의 변수이름이 변화가 있을 때 코드 실행
    - ```
        useEffect(() => {
            // code...
        }, [value])
        ```
3. = componentWillUnmount()
    - component가 해제되기 직전 return 내부 코드 실행
    - 없애기 원하는 청소코드
        - 컴포넌트가 더이상 사용이 안된다고 판단하였을 때
        - ex. API 연결(fetch한 것들) 해제, 네트워크 연결 해제
    - ```
        useEffect(() => {
            // code...

            return () => {
                // code...
            };
        }, [])
        ```

### Clean Up
useEffect에서 서비스를 구독하는 코드를 넣었다면 이후의 구독을 해제해주는 정리작업이 필요하다.
- 예시) 타이머가 필요없을 때 초기화시켜주거나 이벤트리스너를 등록했다면, 등록한 이벤트리스너를 제거해주는 정리작업을 시켜줘야한다.
- 해당 컴포넌트가 unmount될 때, 또는 다음 렌더링시 불릴 useEffect가 실행되기 이전에 return 안의 코드가 실행된다.

App.js
```
import React, { useState } from 'react';
import Timer from './component/Timer';

function App() {

    const [showTimer, setShowTimer] = useState(false);

    const handleToggle = () => {
        setShowTimer(!showTimer);
    }

    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={handleToggle}>Toggle Timer</button>
        </div>
    );
}

export default App;
```
Timer.js
```
import React, { useEffect } from 'react';

function Timer() {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 실행중');
        }, 1000)

        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다');
        };
    }, [])

    return (
        <div>
            <span>타이머를 시작합니다, 콘솔을 보세요!</span>
        </div>
    );
}

export default Timer;

```
- 버튼을 누르면 Timer component가 렌더링되고 다시 버튼을 누르면 Timer component가 화면에서 사라지는 즉, unmount되기 때문에 return 안의 clean up 코드가 실행된다.

## 3. useRef
``const ref = useRef(value)``

함수형 컴포넌트에서 useRef를 부르면 ref object를 반환해준다.
- ``{current:value}``
- 반환된 ref는 컴포넌트의 전생의 주기를 통해 유지된다.(=컴포넌트 리렌더링되어도 컴포넌트가 unmount되기 전까지 값을 그대로 유지 = component mount ~ unmount)

🔨사용용도
1. DOM 요소에 접근 (DOM 을 선택해야 하는 상황이 발생 할 때, React에서 ref라는 것을 사용)
    - 사용
        - 주로, input 요소 클릭하지 않아도 focus를 주고 싶을 때 사용된다.
        - ```
            const ref = useRef()
            <input ref={ref}/>
            ```


2. 저장공간 (컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리할 때 사용)
    - 장점
        - useRef 로 관리하는 변수는 값이 바뀐다고(또는, 변경한다고) 해서 컴포넌트가 리렌더링되지 않는다.
            - **state대신 사용하면 불필요한 렌더링을 막을 수 있다. 즉, 변경시 렌더링을 발생시키지말아야하는 값을 다룰 때, 편리하다**
        - 컴포넌트가 아무리 렌더링되어도 ref안에 값을 변화되지 않고 유지된다.
    - 사용
        - useRef() 를 사용 할 때 파라미터를 넣어주면 해당 값이 .current 값의 기본값이다.
        - 설정 후 바로 조회할 수 있다.
    - 궁금증
        - ``const nextId = { current: 4 };``처럼 쓰면 안될까?
            - 컴포넌트는 그 컴포넌트의 state나 props가 변경될 때마다 호출되는데(re-rendering), 함수형 컴포넌트는 일반 자바스크립트 함수와 마찬가지로 호출될 때마다 함수 내부에 정의된 로컬 변수들을 초기화한다. 하지만, useRef로 만들어진 객체는 React가 만든 전역 저장소에 저장되기 때문에 함수를 재 호출하더라도 마지막으로 업데이트한 current 값이 유지된다. 반면, 변수로 만든 값은 리렌더링시 선언된 값으로 초기화된다.

### 사용법
1. useRef() 객체 생성
    - ``const nameInput = useRef();``
2. 해당 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정
    - ``<input ref={nameInput}/> ``
3. Ref 객체의 .current 값은 원하는 DOM 을 가르키게 된다.
    - ``nameInput.current.focus()``

## 4. useMemo
``const value = useMemo(()=> {function name}, [dependency array])``
- 성능을 최적화할 때 사용한다.
- memo는 memorized의 약자이다.
- 첫번째 인수에는 함수, 두번째 인수에는 배열을 넣어주면 된다.
    - 두번째 인수에 넣어준 배열의 값이 바뀔때만 함수가 실행된다. 그렇지 않다면 이전의 값을 재사용한다.
- [연산한 값 재사용하기](https://react.vlpt.us/basic/17-useMemo.html)

## 5. useCallback
``const memoizedCallback = useCallback(()=> {},[dependency array]);``
- useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다.
- 특정함수에 대해 컴포넌트가 리렌더링 될 때마다 새로만들어 지고 한번만든 함수를 필요할 때만 새로 만들고 재사용하고 싶을 때 쓰인다.
    - 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업하기위해, 함수 재사용은 필수

## 6. useReducer
컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다. 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있다.
- 상태를 업데이트 할 때에는 useState 를 사용해서 새로운 상태를 설정해주는데, 상태를 관리하게 될 때 useState 를 사용하는것 말고도 useReducer를 사용할 수 있다.

### reducer
reducer 는 **현재 상태**와 **액션 객체**를 파라미터로 받아와서 **새로운(다음) 상태를 반환**해주는 함수이다.

```
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
}
```
- reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태이다.
- reducer 함수 안에서 const {변수, 변수, ...} = state로 비구조화할당을 할 수 있다.
    - const {변수, 변수, ...} = action 또한, 가능하다. 이때, 받아오지않은 값들은 undefined이다.

### useReducer 의 사용법
``const [state, dispatch] = useReducer(reducer, initialState);``
- state: 앞으로 컴포넌트에서 사용 할 수 있는 state 객체(object)
- dispatch: 액션을 발생시키는 함수
- reducer: reducer 함수
- initialState: 초기 state

### useReducer vs useState
상황에 따라 결정한다
- 컴포넌트에서 관리하는 값이 하나라면 useState
- 컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해진다면 useReducer
- useState의 seState가 자주 사용된다면 useReducer를 고민

## 7. 커스텀 Hook
반복되는 로직을 분리하여 쉽게 재사용하기위해 쓰인다.
- 커스텀 Hooks 를 만들 때에는 보통 use 라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성한다.
- 그 안에서 useState, useEffect, useReducer, useCallback 등 Hooks 를 사용하여 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환해준다.

## 8. Context API + dispatch
특정 함수를 특정 컴포넌트를 거쳐서 원하는 컴포넌트에게 전달하는 작업에서 주로 사용된다.
-  만약 3~4개 이상의 컴포넌트를 거쳐서 전달을 해야 하는 일이 발생하게 되어 불편하다면, 해당 방법을 통해 프로젝트 안에서 **전역적으로 사용 할 수 있는 값**(함수, 외부 라이브러리 인스턴스, DOM)을 관리 할 수 있다.
1. Context 생성
    - ``const UserDispatch = React.createContext(null);``
2. Provider 컴포넌트로 값을 설정하여 **감싸진 컴포넌트 중 어디서든지 조회**
    - ``<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>``
    - 위에 감싸진 컴포넌트는 어디서든지 dispatch를 꺼내 쓸 수 있다.
3. dispatch조회 후 사용
    - ``const dispatch = useContext(UserDispatch);``
    - useContext 라는 Hook 을 사용해서 만든 UserDispatch Context 를 조회 할 수 있다.

## 999. Advanced skill

### React.memo
컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해주는 함수이다.
    - 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해줄수있다.
        - 불필요한 렌더링을 줄여준다.
    - [react dev tools memo test](https://medium.com/wantedjobs/react-profiler%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%84%B1%EB%8A%A5-%EC%B8%A1%EC%A0%95%ED%95%98%EA%B8%B0-5981dfb3d934)

# Ref
https://www.youtube.com/watch?v=VxqZrL4FLz8