# React Hooks
React Hooks는 FunctionComponent안에서만 사용할 수 있다.

💡 react component는 2가지가 존재한다.
1. FunctionComponent
2. ClassComponent 
    - [LifeCycle Methods](./LifeCycle.md)

## 1. useState

- 함수형 업데이트
업데이트 하고 싶은 새로운 값을 파라미터로 넣어주는게 아닌, 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.
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

- [useState가 어떻게 상태를 변경 시키는가? + 어떻게 컴포넌트 함수가 변경시킨 값으로 렌더링을 진행하는가?](https://velog.io/@jjunyjjuny/React-useState%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C)

## 2. useEffect
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
## 3. useMemo

## 4. useCallback

## 5. useRef
DOM 을 선택해야 하는 상황이 발생 할 때, React에서 ref라는 것을 사용한다.
- ref를 사용할 때, useRef Hook 함수
### 사용법
1. useRef() 객체 생성
    - ``const nameInput = useRef();``
2. 해당 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정
    - ``<input ref={nameInput}/> ``
3. Ref 객체의 .current 값은 원하는 DOM 을 가르키게 된다.
    - ``nameInput.current.focus()``