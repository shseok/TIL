# 리액트 왜 쓸까?

웹 앱(Web-app)
- 모바일 App처럼 페이지 이동을 해도 부드럽게 동작하는 웹들. 즉, 모바일 앱과 비슷한 사용감 (실제 앱x)
- 기존 (인스타그램,페이스북, 트위터 등..)메이저 SNS들도 새로고침없이 웹탐색이 가능하다

이러한 웹 앱을 만들 때, 유용하게 쓸 수 있는 라이브러리
- React
- Angular
- Vue

웹 앱의 장점
- 기능
    1. 모바일앱으로 발행이 쉽다.
        [PWA](../ETC/PWA.md) / React Native 등..으로 가능

    2. 앱처럼 뛰어난 UX
        - 빠른 느낌
    3. 그냥 웹사이트보다 비즈니스적 강점
        - [구매전환율](https://m.searchad.naver.com/dic/view/50) 상승
- **유지보수**
    1. Reusability
        - ex. 코드의 중복을 없애고 편리하기 위함, 새로운 기능을 없애고 빠르게 추가 시킬 수 있음.
    2. Performance
        - ex. vertual DOM을 통해 가능해지고 자주 바뀌는 기능이 많아지면서 performance가 중요해짐
            - 보통, 브라우저가 DOM트리를 가지고 화면에 뿌려주면 비로소 화면 생성
            - vertual DOM : 요즘 웹들의 특성이 반응성(ex.누르면 변경)이 많다 = DOM트리의 변경이 잦다 = 기존의 웹은 너무 느려서 최적화 시켜야한다(DOM 프로세스를 바꿀 수 없으니 프로세스 횟수를 최소화하자) = vertual DOM이 만들어짐 
    - 📌단, 모든 문제는 거대한 프로세스 과정에서 발생한다.

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

# HTML대신 JSX

## JSX 사용법
1. 태그에 class를 주고 싶다면? className이용
    - ``<div class=""></div>`` 불가능 😅
    - ``<div className="클래스명"></div>``
2. 데이터 바인딩을 쉽게 해준다. 중괄호이용
    - 데이터 바인딩 : 데이터를 HTML에 넣는 행위
        - 리액트, 앵귤러, 뷰가 정통 HTML코딩보다 편리한 이유
    - 보통 서버에서 받아온 데이터를 자바스크립트로 HTML에 넣는다. ``ex) document.getEl..getInner...`` 하지만, 리액트에서 JSX문법으로 서버에서 받아온 데이터를 ``ex) <h4>{ 변수명 }</h4>``으로 해결해줄 수 있다.
    - 함수명으로 함수의 결과를 사용가능 ``ex) <h4>{ 함수명() }</h4>``
    - src, id, href 등의 속성에도 사용가능 ``ex) <img src={ 변수명 }/>``
    - 클래스명에도 사용가능 ``<div className={ 변수명 }></div>``
    - 등..
3. JSX에서 style속성을 작성할 때, object 형식을 이용
    - ``<div style="color : blue; font-size: 16px;"></div>`` 불가능 😅
    - ``style={object자료형으로 만든 스타일}``
        - 스타일의 오른쪽은 항상 텍스트.
        - 스타일의 인쪽은 - 를 사용할 수 없다. 따라서, camelCase 작명 관습에 따라 속성명을 바꿔줘야한다.
        - CSS 인라인 스타일
            - ``<div style={{ color : 'blue', fontSize : '30px'}}></div>``
            - 위의 ``{ color : 'blue', fontSize : '30px'}``을 변수로 만들어서 사용 가능
        - 보통 클래스 만들어서 css를 가져다가 사용


# ref
- https://react.vlpt.us/