# npm 에러

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

3. update for windows
- 해결방법 : [짜잔](https://binit.tistory.com/8)


# yarn 에러
1. info There appears to be trouble with your network connection. Retrying... 
    - 원인: 
        1. yarn config proxy 문제
        2. 네트워크가 느리거나 해당 패키지 파일이 너무 큰 경우
        3. yarn 캐시 문제(+버전문제)
    - 문제 해결:
        [도움](https://enhjh.tistory.com/m/25)

2. warning: package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
    - npm을 사용하다가 yarn install을 사용했을 때 발생한 에러
    - 원인: npm install에서는  package-lock.json을 사용하는데, yarn에서는  yarn.lock을 사용하기 때문에 둘 줄 하나만 선택하도록 지향하라는 말 같다.
3. error eslint@8.7.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "14.15.4"
error Found incompatible module.
    - yarn install 중 발생한 에러
    - 원인: node의 버전이 호환되지 않음.
    - 미해결: node를 업데이트해야하는데 오류발생. 재설치 진행하려고 했지만, 폴더경로에 한글이 있기 때문에 중단.
        - [도움](https://question0.tistory.com/41)
        - [도움](https://manition.tistory.com/31)

# npm update
[]()
