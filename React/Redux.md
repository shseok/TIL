# 상태관리 라이브러리
[트랜드 동향](https://www.npmtrends.com/react-vs-react-redux-vs-redux-vs-mobx)

# 사용하는 이유
1. props문법이 귀찮을 때,
    - 모든 component가 props없이 state를 직접 꺼낼 수 있다
2. state변경 관리할 때,
    - 상태관리가 용이하다
        - state를 보관하는 파일에 원하는 기능을 만들고 state를 쓰고자하는 component들이 원하는 기능을 요청

# Redux vs Context API
기존 Context API 를 사용해도 글로벌 상태 관리를 할 수 있고 상태 관리 로직을 분리 할 수 있으며, Context API 와 useReducer Hook 을 사용해서 개발하는 흐름과 비슷하다.
## 차이점
1. 미들웨어
    - 리덕스에서 사용되는 개념으로 주로 비동기 작업을 처리할 때 사용된다.
2. 함수, hooks
    - connect함수 :  리덕스의 상태 또는 액션 생성 함수를 컴포넌트의 props 로 받아올 수 있다.
    - useSelector / useDispatch / useStore hooks : 상태를 조회하거나 액션을 디스패치 할 수 있다.
    - 위 함수와 hooks는 실제 상태가 바뀔때만 컴포넌트가 리렌더링한다. 단, Context API는 Context의 상태가 바뀌면 Privider 내부 컴포넌트들이 모두 리렌더링된다.
3. 커다란 상태
    - Context API에서 글로벌 상태 관리시 기능별로 Context를 만들지만, 리덕스에서는 하나의 상태 객체를 사용하여 편리하다.

## 사용 조건
1. 프로젝트 규모
    - 크다 : redux
    - 작다 : Context API
2. 비동기 작업의 빈번함
    - 그렇다 : redux
    - 아니다 : Context API
3. 리덕스 사용성
    - 편하다 : redux
    - 불편하다 : Context API | MobX

# 리덕스 주요 개념
1. 액션 : 상태의 변화가 필요시 하나의 객체로 표현된다.
2. 리듀서 : 변화를 일으키는 함수로 현재의 상태와 액션을 참고하여 새로운 상태를 반환한다
3. 스토어 : 현재의 상태, 리듀서 등이 있다.
4. 디스패치 : 액션을 발생시킨다.
5. 구독 : 구독함수에 함수 파라미터를 전달해주면, 액션이 디스패치되었을 때마다 전달해준 함수가 호출된다

# 설치/세팅
1. [redux](https://ko.redux.js.org/introduction/installation)
2. [react-redux](https://react-redux.js.org/introduction/getting-started)
    - [react-redux는 왜 사용될까](https://velog.io/@mokyoungg/Redux-react-redux-react-redux)
# 사용법
- 자바스크립트 파일(.js)를 만들고 state를 보관하여 모든 컴포넌트들이 직접 state를 꺼내어 사용가능

# 유용한 리덕스 확장 프로그램
1. [크롬에 설치](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
2. [프로젝트에 설치 및 설정](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)

# 비슷한 라이브러리
1. Mobx
2. Overmind.js
3. Recoil


# 이해하기
1. https://www.youtube.com/watch?v=wSbjROmXTaY&t=71s
2. https://www.youtube.com/watch?v=b5BH7kPboMk&t=8139s (2:15:00)