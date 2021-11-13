# 리액트 왜 쓸까?

웹 앱(Web-app)
- 모바일 App처럼 페이지 이동을 해도 부드럽게 동작하는 웹들. 즉, 모바일 앱과 비슷한 사용감 (실제 앱x)
- 기존 (인스타그램,페이스북, 트위터 등..)메이저 SNS들도 새로고침없이 웹탐색이 가능하다

이러한 웹 앱을 만들 때, 유용하게 쓸 수 있는 라이브러리
- React
- Angular
- Vue

웹 앱의 장점
1. 모바일앱으로 발행이 쉽다.
    [PWA](../ETC/PWA.md) / React Native 등..으로 가능

2. 앱처럼 뛰어난 UX
    - 빠른 느낌
3. 그냥 웹사이트보다 비즈니스적 강점
    - [구매전환율](https://m.searchad.naver.com/dic/view/50) 상승

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

# HTML대신 JSX?

## JSX 사용법

# ref
- https://react.vlpt.us/