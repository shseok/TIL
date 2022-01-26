# webpack
[vanilla JS로 시작해보기](https://velog.io/@huurray/%EC%9B%B9%ED%8C%A9-Webpack-%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-vanilla-js-boilerplate)

💡 [npm init -y](https://juicyjerry.tistory.com/242) 의미

## [webpack 공식문서](https://webpack.js.org/guides/getting-started/)
- npm i -D style-loader후 webpack.config.js의 use에 포함 -> css 번들링 적용 가능
    - [도움](https://www.zerocho.com/category/Webpack/post/58ac2d6f2e437800181c1657)
- 중간에 import './index.css' -> './style.css'
- dev server로 css는 수정하고 저장할 때마다 반영이 되는데 왜 html은 안될까...?