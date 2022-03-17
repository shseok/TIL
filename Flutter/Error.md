# 각종 에러들과 해결책
## 1. 이미지 추가시 "unable to load asset" 에러
[해결](https://security-nanglam.tistory.com/479)
- android studio 작업시 ``flutter pub get`` 과 ``flutter upgrade``를 해주고 에뮬러레이터를 끄고 다시 run해준다.
- vscode에서는 위의 명령어를 자동으로 해준다고 한다.
## 2. vertual device manager에서 device를 만들고 실행할 때, The emulator process was terminated. 에러 발생
    - [환경변수 추가로 해결](https://sohees.com/192/)
        - 단, 환경변수 4개중 sdk 2개 삭제하니까 해결
        - 아직 해결 x 