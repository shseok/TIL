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


# 참고
[도움](https://www.daleseo.com/react-styled-components/)
