# npm
[생활코딩](https://opentutorials.org/module/4044)

### npm install 5
- [npm install --save가 이제는 필요없다](https://xtring-dev.tistory.com/11)


### -g, —global 플래그를 사용할 때
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