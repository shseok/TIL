# 상태관리 라이브러리

# 사용하는 이유
1. props문법이 귀찮을 때,
    - 모든 component가 props없이 state를 직접 꺼낼 수 있다
2. state변경 관리할 때,
    - 상태관리가 용이하다
        - state를 보관하는 파일에 원하는 기능을 만들고 state를 쓰고자하는 component들이 원하는 기능을 요청

# 설치/세팅
1. 
    ```
    # NPM
    npm install @reduxjs/toolkit

    # Yarn
    yarn add @reduxjs/toolkit
    ```

# 사용법
- 자바스크립트 파일(.js)를 만들고 state를 보관하여 모든 컴포넌트들이 직접 state를 꺼내어 사용가능

# 비슷한 라이브러리
1. Mobx
2. Overmind.js
3. Recoil


# 이해하기
1. https://www.youtube.com/watch?v=wSbjROmXTaY&t=71s
2. https://www.youtube.com/watch?v=b5BH7kPboMk&t=8139s (2:15:00)