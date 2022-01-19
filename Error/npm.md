# npm 관련 에러

1. 배포를 위해 npm run build 시도 중, 만난 에러
- 해결 방법: [google에 npm run build This is probably not a problem with npm 검색](https://stackoverflow.com/questions/57605441/error-this-is-probably-not-a-problem-with-npm-there-is-likely-additional-loggi)
    1. package.json 과 node-modules(dir) 삭제
    2. npm cache를 삭제한다. ``npm cahe clean --force``
        - [npm cache 해결](https://icerabbit.tistory.com/78)
    3. npm install (package.json과 node-modules 설치)
    4. npm run build 성공

