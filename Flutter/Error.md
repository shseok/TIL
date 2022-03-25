# 각종 에러들과 해결책
## 1. 이미지 추가시 "unable to load asset" 에러
[해결](https://security-nanglam.tistory.com/479)
- android studio 작업시 ``flutter pub get`` 과 ``flutter upgrade``를 해주고 에뮬러레이터를 끄고 다시 run해준다.
- vscode에서는 위의 명령어를 자동으로 해준다고 한다.
## 2. vertual device manager에서 device를 만들고 실행할 때, The emulator process was terminated. 에러 발생
    - [환경변수 추가로 해결](https://sohees.com/192/)
        - 단, 환경변수 4개중 sdk 2개 삭제하니까 해결
        - 아직 해결 x 


## 실행 중
### 3. Error: Cannot run with sound null safety
in vscode Debug console
```
Error: Cannot run with sound null safety, because the following dependencies
don't support null safety:

 - package:english_words

```
- 문제: null safety 가 없는 기존 package 들을 최신 flutter, dart 개발 환경에서 사용할때 방생
- 해결: [1](https://calvinjmkim.tistory.com/66), [2](https://jeremyko.blogspot.com/2021/04/flutter-using-mixed-null-safety-for.html)
    - 빌드명령시에도.. 

### 4. Flutter 1.9: D/skia (16355): Shader compilation error
- 문제: ? 에뮬레이터와 플루터 버전이 달라서?
- 해결: [1](https://stackoverflow.com/questions/58380329/flutter-1-9-d-skia-5106-shader-compilation-error)
