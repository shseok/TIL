# 각종 에러들과 해결책

## 1. 이미지 추가시 "unable to load asset" 에러

[해결](https://security-nanglam.tistory.com/479)

- android studio 작업시 `flutter pub get` 과 `flutter upgrade`를 해주고 에뮬러레이터를 끄고 다시 run해준다.
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

### 5. Flutter package get할 때의 오류

- 내용:

  ```
  Building with plugins requires symlink support.

  Please enable Developer Mode in your system settings. Run
  start ms-settings:developers
  to open settings.
  ```

- 해결: emulator를 끈 후 flutter pub get

### 6. Unhandled Exception: Converting object to an encodable object failed: Instance of 'Todo'

- 문제
  - 데이터 create(post) 할 때, tojson을 주석처리했기때문이다. 객체를 인식할 수 없다는 의미
- 해결
  - tojson을 주석해제하여 해결

### 7. Incorrect use of ParentDataWidget.

- 문제
  - Expanded내부에 Expanded를 또 주었기 때문
- 해결
  - 내부 Expanded를 없앰

### 8. Unhandled Exception: setState() or markNeedsBuild() called during build.

- 문제
  - initState / didChangeDependencides와 같은 lifecycle의 단계에서 provider의 값을 바꿔주었기 때문이다.
- 해결
  - build단계에서 read를 활용하여 값을 바꿔줘야한다.

### 9. Flutter: "RenderFlex children have non-zero flex but incoming height constraints are unbounded"

- [참고](https://stackoverflow.com/questions/57803737/flutter-renderflex-children-have-non-zero-flex-but-incoming-height-constraints)

### 10. Null check operator used on a null value

- 문제

  - ```
    String? foo; // Nullable String

    void main() {
      var len = foo!.length; // Runtime error: Null check operator used on a null value
    }
    ```

- 해결
  - 1. ```
       var f = foo;
       if (f != null) {
         var len = f.length; // Safe
       }
       ```
  - 2. ```
       var len = foo?.length ?? 0; // Provide a default value if foo was null.
       ```
- [도움](https://stackoverflow.com/questions/64278595/null-check-operator-used-on-a-null-value)

### 11. Vertical viewport was given unbounded height

- [Column내 ListView를 사용했을 때 방생했던 에러](Vertical viewport was given unbounded height)

### 12. Text가 Container안에서 render overflow를 발생시키는 에러

- 해결: Container를 Flexible로 감싸주고 해당 Text도 Flexible로 감싸준다.
  - [도움](https://stackoverflow.com/questions/53910087/wrap-text-in-container-without-using-a-fixed-width-in-flutter)
