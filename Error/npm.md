# npm 관련 에러

1. node.js LTS 버전 설치 후 에디터에서 npm이 안먹히는 현상 
    - "npm 내부 또는 외부 명령 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다"라는 에러가 뜰 경우
- 해결 방법: window의 경우 고급 시스템 설정 -> 환경변수 -> 시스템 변수의 Path에 ``C:\Users\username\AppData\Roaming\npm``추가
    - username은 자신의 것으로 정정
    - 위의 방법으로 해결이 안되면 재부팅 실행

2. 배포를 위해 npm run build 시도 중, 만난 에러
- 해결 방법: [google에 npm run build This is probably not a problem with npm 검색](https://stackoverflow.com/questions/57605441/error-this-is-probably-not-a-problem-with-npm-there-is-likely-additional-loggi)
    1. package.json 과 node-modules(dir) 삭제
    2. npm cache를 삭제한다. ``npm cahe clean --force``
        - [npm cache 해결](https://icerabbit.tistory.com/78)
    3. npm install (package.json과 node-modules 설치)
    4. npm run build 성공
