# 리액트 컴포넌트 스타일링 방법

1. Sass
    - [설치 및 안내](../CSS/SASS.md)
2. Css module
    - CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있다. 즉, CSS 파일에 선언한 클래스 이름들이 모두 고유해진다.
        - 클래스 이름에 hash값이 붙어 고유한 값으로 인식된다. 따라서 클래스명이 같더라도 덮어씌워지지 않는다.
    - CSS 파일 확장자
        - ``*.module.css``
        
    - 별도 설치해야 할 라이브러리는 없다. webpack에서 사용하는 css-loader에서 지원되는데, CRA로 만든 프로젝트에는 적용되어 있어 즉시 사용가능하다.
3. styled-component
    - 전역적으로 선언해줄 수 있는데 ``ThemeProvider``로 가능하다. 이때 ThemeProvider 내부는 하나의 리액트 엘리먼트로 감싸져 있어야한다.
    - 또한, 글로벌 스타일을 추가하고 싶을 땐 ``createGlobalStyle`` 을 사용한다.
    - 커서를 올릴때 컴포넌트를 보여주는 방식을 사용하고 싶을 땐,  [Component Selector](https://styled-components.com/docs/advanced#referring-to-other-components)
# 참고
[도움](https://www.daleseo.com/react-styled-components/)

