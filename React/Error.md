# Error

1. Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

    - 문제점
        - 보통 비동기 작업을 처리하는 과정에서 발생하는데, 언마운티드된 컴포넌트에 대해서는 state update를 수행할 수 없다.
    - 해결방법
        - [자세히](https://velog.io/@ohgoodkim/-%EC%97%90%EB%9F%AC%EB%85%B8%ED%8A%B8-Cant-perform-a-React-state-update-on-an-unmounted-component)

2. React Hook useEffect has a missing dependency: 'books'. Either include it or remove the dependency array.

    - 발생 이유
        - 해당 에러는 useEffect 내부에 state를 넣어줬기 때문이다.
    - 해결방법
        - 이는 state를 배열안에 넣어주거나 함수형 업데이트로 해결할 수 있다.
        - [자세히](https://kyounghwan01.github.io/blog/React/exhaustive-deps-warning/#_1-useeffect%E1%84%82%E1%85%A2-state%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%82%E1%85%A5%E1%87%82%E1%84%8B%E1%85%A5%E1%84%8C%E1%85%AE%E1%86%B7)

3. Cannot read properties of null (reading 'map')
    - 발생 이유
        - React는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행하기 때문이다. 즉 React는 return에서 BookList.js의 books.map(...)을 반복실행할 때 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다.
    - 해결방법
        - &&을 이용한다. JavaScript에서 true && expression은 항상 expression으로 실행되고 false && expression은 항상 false로 실행된다. 따라서 조건이 참이면 && 바로 뒤의 요소가 출력에 나타난다. 거짓이면 React는 무시하고 건너뛴다. 
4. Each child in a list should have a unique "key" prop

    - 발생 이유
        - React는 key prop을 사용하여 컴포넌트와 DOM 요소 간의 관계를 생성한다. 리액트 라이브러리는 이 관계를 이용해 컴포넌트 리렌더링 여부를 결정한다. 불필요한 리렌더링을 방지하기 위해서는 각 자식 컴포넌트마다 독립적인 key값을 넣어줘야 한다.
    - 해결방법
        - [자세히]()

5. react-router-dom 관련 에러
    - 발생 이유
        - v6 update되고 많이 변했지만, 이를 적용하지 않았기 때문에 발생
    - 변경 사항
        - [자세히](https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC)

6. firestore 이용 관련 에러
    - Uncaught (in promise) TypeError: _firebase__WEBPACK_IMPORTED_MODULE_1__.default.collection is not a function
        - 문제점
            - 구버전 이용 문제
        - 해결방법
            - cloud firestore 인스턴스를 초기화하는 부분에서 최신버전 적용. + 업데이트 이후로 node.js로 적용이 안되어 modular로 바꾸는 과정 요구
                - [데이터 추가](https://firebase.google.com/docs/firestore/manage-data/add-data)
                - [데이터 읽기](https://modularfirebase.web.app/common-use-cases/firestore/)
