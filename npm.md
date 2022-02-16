# npm
Node Package Manager의 약자로 nodejs의 모듈 관리를 하기 위해 사용된다.
- nodejs설치시 자동으로 설치된다.
- package.json 파일은 npm을 통해 설치된 패키지 목록을 관리하고 프로젝트의 정보 및 기타 실행 스크립트를 작성하는 파일이다.
- package-lock.json 파일은 node_modules에 있는 모듈들에 대한 버전 정보들을 가지고 있다. 해당 버전 정보들은 설치되는 모듈 간의 의존성 처리에 사용된다.
    - npm install 명령어를 이용해 모듈들을 설치할 때마다 package-lock.json 파일은 업데이트된다.
- [생활코딩](https://opentutorials.org/module/4044)

## npm init
- 패키지(애플리케이션)를 생성(초기화) 해주는 명령어이다.
- 패키지(애플리케이션)의 이름과 버전 같은 몇 가지 정보에 대해 prompt(프롬프트)한다.
### npm init -y
- -y : yes
- 보통 npm init만 입력하면 npm project에 대한 기본 양식을 일일이 정해줘야 하는데, '-y'라는 속성을 이용하면 default값으로 설정된 package.json을 만들겠다라는 의미다.

## npm install 5
- [npm install --save가 이제는 필요없다](https://xtring-dev.tistory.com/11)


## -g, —global 플래그를 사용할 때
- -g 또는 --global 플래그는 약간 다른 동작을 수행한다.
- `` $ npm install (패키지명)`` 은 프로젝트 폴더에 패키지를 설치했지만, -g 플래그를 통해 패키지를 설치하면 시스템 폴더에 패키지를 설치하게 된다.

## yarn


# node.js
[node.js](https://www.opentutorials.org/course/3332)

# express
[express](https://opentutorials.org/course/3370)

# package.js
[참고](https://velog.io/@skyepodium/package.json)
## devdependencies vs dependencies
배포할 때 어떤 라이브러리가 포함되냐 차이
- dependencies 에 설치된 라이브러리는 배포할 때 포함되지만 devDependencies 에 설치된 라이브러리는 개발할 때 필요한 라이브러리기 때문에 배포할 때 포함되지는 않는다. 이렇게 잘 구분을 해서 설치해줘야 빌드시간도 줄이고, 배포할 때 불필요한 라이브러리를 포함시키지 않아도 된다.