# CRA(Create-React-App)
개발 환경을 설정하고, 최신 JavaScript를 사용하게 해주며, 좋은 개발 경험과 프로덕션 앱 최적화를 해준다.
- Node 14.0.0 혹은 상위 버전 및 npm 5.6 혹은 상위 버전이 필요하다.
- 백 앤드 로직이나 데이터베이스를 제어할 수 없다.
  - [데이터베이스 서버와 연결 프로젝트](../할것.md)

## 사용법

```
npx create-react-app my-app
cd my-app
npm start
```
- npx : npm 5.2+ 버전의 패키지 실행 도구이다.

## 구성
```
> node_modules/
> public/
    index.html
    favicon.ico
> src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
> .git/
> .gitignore
  package-lock.json
  package.json
  README.md
  
```
- node_modules: Package manager를 통해 설치된 모듈들이 모여있는 디렉토리
- public: ReactJS의 html 파일과 favicon 아이콘이 있는 디렉터리로 static 자원이 위치하게 된다.
- src: 대부분의 코딩이 이루어질 디렉터리. ReactJS의 컴포넌트가 모여 있게 된다.
- package.json: Package manager를 통해 설치된 모듈과 스크립트 명령어 등을 담고 있다.

📌public/index.html과 src/index.js는 엔트리 포인트가 되는 소스로, 이름이 변경되면 create-react-app이 작동되지 않는다.


## package.json
```
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

- 초기설치되면 위와같은 형태로 구성됨을 알 수 있다.
- node_modules 폴터를 보면 내부적으로 무수히 많은 dependency가 존재함을 알 수 있지만, package.json을 살펴보면 단순한 dependency가 몇 개 없다.
    - create-react-app의 특징으로 사용자로 하여금 설정을 건들지 못하도록 실제 package.json을 숨긴 것이다. 개발자들이 소스코드에 집중할 수 있도록 배려한 것이라고 한다.
    - scripts의 eject 값을 통해 해제할 수 있다. 
- scripts
    - start는 프로젝트를 실행할 때 사용된다.
        - ex. npm start
        - localhost:3000으로 연결된다.
    - build는 실제로 배포할 파일들을 build 디렉터리 밑에 생성해준다. 

## src, public 코드분석
### src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
```
1. ``import React from 'react';``
    - jsx 문법을 사용하기 위해서 react 모듈을 import 해야하며 모든 react 컴포넌트에 필수적인 코드이다.
2. ``import ReactDOM from 'react-dom';``
    - react 앱을 최초 렌더링 하기위해 **엔트리 포인트에서 사용**되며 브라우저 뿐만 아닐라 서버사이드용 렌더링 메소드를 지원한다
3. ``import App from './App';``
    - App이라는 react 컴포넌트를 가져오는 코드
    - 컴포넌트는 react 웹에서 기본적인 화면을 구성하는 단위로 button, input, textarea와 같은 것들이나 이런 것들로 구성된 화면 자체를 의미한다
    - 이러한 컴포넌트를 만들고 조립하는 것을 용이하게 해줌으로써 개발에 편의성을 제공하는게 react의 장점이다.
4. ``import reportWebVitals from './reportWebVitals';``
    - reportWebVitals란 React의 성능을 측정하기 위한 것이다.
5. ```
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
    ```
    - root란 id를 가진 element에 App 컴포넌트를 렌더링 한다
    - public/index.html에서 root라는 id를 가진 div 태그를 확인할 수 있다.
### public/index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
- 기본 템플릿이 제공된 것이다.
- 필요에 맞게 title을 수정하거나 Bootstrap을 적용할 수 있다.
- body내부의 id가 root인 div 태그에 App.js에서 입력한 내용이 들어가게 된다.

# 참고
- [CRA](https://chaelin1211.github.io/study/2021/03/12/React-start.html)
- [React 공식](https://ko.reactjs.org/docs/create-a-new-react-app.html#create-react-app)