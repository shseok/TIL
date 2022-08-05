# Error

1. Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

   - 문제점
     - 보통 비동기 작업을 처리하는 과정에서 발생하는데, 언마운티드된 컴포넌트에 대해서는 state update를 수행할 수 없다.
   - 해결방법
     - [자세히](https://velog.io/@ohgoodkim/-%EC%97%90%EB%9F%AC%EB%85%B8%ED%8A%B8-Cant-perform-a-React-state-update-on-an-unmounted-component)

2. React Hook useEffect has a missing dependency: 'books'. Either include it or remove the dependency array.

   - 문제점
     - 해당 에러는 useEffect 내부에 state를 넣어줬기 때문이다.
   - 해결방법
     - 이는 state를 배열안에 넣어주거나 함수형 업데이트로 해결할 수 있다.
     - [자세히](https://kyounghwan01.github.io/blog/React/exhaustive-deps-warning/#_1-useeffect%E1%84%82%E1%85%A2-state%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%82%E1%85%A5%E1%87%82%E1%84%8B%E1%85%A5%E1%84%8C%E1%85%AE%E1%86%B7)

3. Cannot read properties of null (reading 'map')
   - 문제점
     - React는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행하기 때문이다. 즉 React는 return에서 BookList.js의 books.map(...)을 반복실행할 때 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다.
   - 해결방법
     - &&을 이용한다. JavaScript에서 true && expression은 항상 expression으로 실행되고 false && expression은 항상 false로 실행된다. 따라서 조건이 참이면 && 바로 뒤의 요소가 출력에 나타난다. 거짓이면 React는 무시하고 건너뛴다.
4. Each child in a list should have a unique "key" prop

   - 문제점
     - React는 key prop을 사용하여 컴포넌트와 DOM 요소 간의 관계를 생성한다. 리액트 라이브러리는 이 관계를 이용해 컴포넌트 리렌더링 여부를 결정한다. 불필요한 리렌더링을 방지하기 위해서는 각 자식 컴포넌트마다 독립적인 key값을 넣어줘야 한다.
   - 해결방법

     - 배열로 map 함수를 사용해 JSX 리스트를 구현할 때 key prop을 자식 컴포넌트마다 넣어줘야 한다.

       - `<div key="uniqueId1" >Item1</div>`

     - 자바스크립트의 배열은 정적이지 않다.즉, 배열의 길이나 원소 등이 변할 수 있다는 의미이다. 따라서 배열의 index를 key prop으로 사용하는 것을 지양해야 한다.
     - [자세히](https://crong-dev.tistory.com/47)

5. react-router-dom 관련 에러

   - 문제점
     - v6 update되고 많이 변했지만, 이를 적용하지 않았기 때문에 발생
   - 변경 사항
     - [자세히](https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC)
     - [추가](https://blog.woolta.com/categories/1/posts/211)

6. firestore 이용 관련 에러

   - Uncaught (in promise) TypeError: \_firebase**WEBPACK_IMPORTED_MODULE_1**.default.collection is not a function
     - 문제점
       - 구버전 이용 문제
     - 해결방법
       - cloud firestore 인스턴스를 초기화하는 부분에서 최신버전 적용. + 업데이트 이후로 node.js로 적용이 안되어 modular로 바꾸는 과정 요구
         - [데이터 추가](https://firebase.google.com/docs/firestore/manage-data/add-data)
         - [데이터 읽기](https://modularfirebase.web.app/common-use-cases/firestore/)

7. Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

   - 문제점
     - input버튼을 눌렀을 때, value에 undefined가 들어갔기 때문에 해당 오류가 발생했다.
   - 해결방법
     - 처음 useState의 기본값을 key, value를 가진 객체로 초기화하였다. input버튼을 누르면 setState 함수가 사용되는데 이때, 기본값으로 설정한 객체의 key를 다룰 때 오타나서 undefined로 들어감을 인지하고 setState내부의 key 오타를 수정하여 해결하였다.

8. React Hook "useState" is called in function "test" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"

   - 문제점
     - component 이름을 소문자로 적고 useState를 사용해서 발생

9. Uncaught Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
   - 문제점
     - onClick 같은 이벤트에서 함수를 부르도록 썼을 때, 발생하였다.
     - ex) `<button onClick={onToggle()}>메뉴</button>`
     - 함수를 부른다 > render를 다시한다 > 또 함수를 부른다 > 반복
   - 해결 방법
     - `<button onClick={onToggle}>메뉴</button>`
     - 매개변수가 필요하다면
       - `<button onClick={() => onToggle(param)}>메뉴</button>`
10. Uncaught TypeError: dispatch is not a function

    - 문제점
      - 외부 파일에서 정의한 useContext를 사용하던 중, 가져오는 과정에서 import방식이 잘못되어 제대로 작동이 못 한것
      - `export const UserDispatch = React.createContext(null);` -> `import UserDispatch from './App';`❌
    - 문제해결
      - `import { UserDispatch } from './App';` 👌
      - [참고](https://ljh86029926.gitbook.io/coding-apple-react/undefined/import-export)

11. JSX expressions must have one parent element

    - JSX 표현식에는 하나의 상위 요소가 있어야 한다
    - 즉, 여러 요소가 있을 땐 부모 요소 하나로 감싸야 한다.

12. Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

    - 문제점
      - 함수를 return값으로 사용하려 시도했을 때, 발생한 에러이다. 기존 버튼을 눌렀을 때, 함수 실행을 목적으로 하였으나 JSX를 쓰지않고 함수 바로 사용하여 반환하였다.
    - 문제해결
      - 함수반환을 JSX표현식으로 소괄호로 닫아 Button을 누르면 함수가 실행되도록 해결해주었다.

13. CORS관련 에러
    - 1. json-server이용시 에러
      - 문제점
        - proxy와 axios URL 요청을 수정후 개발서버를 다시시작했을 때, 데이터를 받지 못하는 현상이 발생하였다.
      - 문제해결
        - [링크](https://stackoverflow.com/questions/48291950/proxy-not-working-for-react-and-node)의 도움을 받아 해결하였는데, 캐쉬문제라고 한다. 따라서 package-lock.json과 node-module을 삭제후 npm install을 해주었더니 해결되었다.
    - 참고
      - [CRA에서 Proxy 설정하기](https://biio-studying.tistory.com/238)

🧨 다른 계정으로 크롬 브라우저를 실행하고 있을 때, 간혹 특정계정에서 개발모드로 진행하고 있을 경우 console.log가 안찍히는 경우가 있음

14. Hooks 함수 components바깥에 사용해서 에러

    - 문제점
      - useCallback으로 감싼 event 함수를 함수 바깥에 빼서 에러발생
    - 문제해결
      - components안에 넣어서 해결

15. Swiper 라이브러리 사용 중 화면의 화면이 900px 기준 다른 effect를 적용하여 다른 component 를 렌더링하도록 적용해줬으나 안먹히는 상황이 발생
    - 문제점
      - 개발자 모드에서 componnets 탭을 이용하여 비교해보고 내부 props만 변경되는 것을 보고 components가 바뀌었다고 혼동했다. 리액트는 상태가 바뀌면 DOM tree를 비교하는데 키가 같다면(= 미적용) 동일한 요소로 판단 후 업데이트를 한다. 이 때문에 900px에 따라 변경되어야 할 Components가 바뀌지 않았음을 알 수 있었다.
    - 개발자모드 비교
      - before <img src="./img/issue_before.png" alt="issue_before" width="1500px" height="500px">
      - 크기를 줄인 상태(<= 900px)에서 크기를 늘려도 해당 컴포넌트에서 props만 바뀌고 실제 components가 바뀌지 않은 것을 알 수 있다.
      - after <img src="./img/issue_after.png" alt="issue_after" width="1500px" height="500px">
      - 크기를 줄인 상태(<= 900px)에서 크기를 늘리면 그 위의 컴포넌트로 선택이 자동으로 변경되고 components가 바뀐 것을 알 수 있다.
    - 렌더링 결과 비교
      - before <img src="./img/render_before.png" alt="render_before" width="1500px" height="500px">
      - 크기를 늘린 상태(> 900px)에서 크기를 줄여도 effect가 그대로 유지된다.
      - after <img src="./img/render_after.png" alt="render_after" width="1500px" height="500px">
      - 크기를 늘린 상태(> 900px)에서 크기를 줄이면 effect가 변경된 것을 볼 수 있다.
    - 코드 비교
      - before <img src="./img/" alt="render_before" width="1500px" height="500px">
      - after <img src="./img/" alt="render_after" width="1500px" height="500px">
