# 1. 기본 위젯이 전부

- 대문자와 소괄호로 이루어져있음
  - 안드로이드 MAterialApp()
    - 디자인과 세팅을 제공해주기 때문에 내부에서 커스터마이징을 해준다.
  - 아이폰 Cupertino~~()
- 예시 코드 : return MaterialApp(home: 위젯코드)
  a. 글자위젯 - Text('안녕')
  b. 이미지위젯 - Image.asset('경로') - 예를들어 경로로 assets 디렉토리에 이미지를 넣었다면 쓰기위해 등록을 해야한다. - pubspec.yaml파일(앱만들기위한 정리자료) 내부 flutter: 하단에 assets: 하단에 - assets/ 작성하여 assets폴더를 쓰겠다고 명시한다.
  c. 아이콘위젯 - Icon(Icons.아이콘이름)
  - 아이콘이름은 flutter 홈페이지 참조
    d. 박스위젯 - Container() | SizedBox() - Container(width: 50, height: 50, color: Colors.blue) - flutter의 사이즈 단위는 LP이다. 50LP == 1.2cm - 위치를 부모위젯(like Center() : 자신의 기준점을 정 중앙으로)을 이용해주어야한다.
  - 웹에서 div와 같이 위젯 내부에 위젯을 넣어서 배치를 해준다

# 2. 레이아웃 연습

1. 예시 디자인 준비(pinterest, dribble, 다른 앱참조)
2. 바로 코드를 짜지않고 네모로 그리기(빈부분 없이)
3. 겉 박스(바깥 박스)부터 하나하나 위젯으로 만들기
   - Container -> Row, Column, ...
4. 디자인 입히기

## 2-1. 레이아웃을 짜다가 이상하게 보일경우

아래를 의심해보자 1. 박스의 사이즈가 잘 되어있는지 확인 (Container 높이 조정 등) - 박스 : Container|SizedBox 2. 박스의 포지션(위치) 지정 확인

- 이래도 안보인다? DevTools를 켜보자
  - console창 (alt+4) 띄우고 open flutter devtools 클릭(파란색 아이콘)

## 2-2. 글자와 아이콘의 간격

    - flutter에서 text, icon들은 자신의 크기만큼 공간을 차지하려고 하기때문에 Row| Column의 mainAxisAlignment와 같은 정렬을 하려고 해도 반응이 없는 것 처럼 보이는 것 -> Container|SizedBox로 감싸서 내부에서 height과 width를 정하여 반응을 시켜준다

## 2-3. 박스에 퍼센트를 주고 싶다면

    - Flexible 위젯 이용
        - 파라미터) flex : 배수
    - Expanded 위젯
        - flex:1 가진 Flexible 박스랑 같다. Row() 안에서 박스하나만 꽉채우고 싶으면 Expanded()
        - Row() 안에 Expanded가 있고 다른 박스가 있다면 기존의 다른 박스를 제외한 모든 크기를 꽉채운다

# 3. 커스텀 위젯

레이아웃 위젯이 길고 복잡해지기 때문에 만들어졌다.

## 3-1. 사용법

`stless` snippet 사용 1. class를 대문자로 작명한다. - class: 변수, 함수 보관함 - extends: 오른쪽의 class를 상속받음(복사) 2. return 옆에 축약할 레이아웃을 넣는다. 3. 작명한 `class명()`으로 사용될 수 있다.

## 3-2. 커스텀 위젯과 용도는 같지만 다른 방법

변수를 사용한다. - var a = 기존커스텀 위젯의 return 옆에 쓰인 내용

- 하지만, 무작정 쓰지말고 변하지 않는 UI(로고, 상단바, 하단바)들은 변수 함수로 축약해도 상관없다.

## 3-3. 단점

아무거나 커스텀위젯화하면 state관리가 힘들어진다. 주로 재사용이 많은 UI들, 큰 페이지들만 커스텀 위젯화를 하자

# 4. 문법

## 함수

- javascript: function키워드를 붙이고 함수를 작명하여 생성한다
- dart: function키워드를 제외하고 위와 같다.
- @override: 상속받은 함수에서 동시에 중복되어 사용될 수 있으므로 내것부터 써달라는 의미(덮어씀)

# 5. 스크롤바

위젯을 세로로 화면 밖을 넘어갈 정도로 많다고 해서 자동으로 스크롤 바가 생기지 않는다. 이때, ListView를 사용한다. - ListView - Column과 사용방법이 동일하다. - 파라미터) controller: 스크롤 위치 감시가 가능하다. - 메모리 절약기능이 있다. - 현재 보고 있는 위치의 위젯을 제외한 이전과 이후의 위젯들을 메모리에서 삭제하는 기능이 있다.

# 6. statelessWidget & statefullWidget

[도움](https://velog.io/@dosilv/Flutter-StatelessWidget-StatefulWidget)

# 7. private 변수, private 메소드(변수명, 메소드명)

다트에서는 private 변수, 메소드가 클래스 안에서 감춰지는게 아니라 **파일단위로** 감춰진다. - 다른 파일에서 private 변수,메소드가 있는 클래스를 불러오면 private 변수,메소드를 가져올 수 없다.

# 8. 앱소셜 로그인 등 flutter 참고 도움 사이트

- [1](https://velog.io/@dosilv)

# 9. 키보드

## 9-1. 키보드 위에 떠있는 버튼 만들기

    - [참고](https://seosh817.tistory.com/144)
        - resizeToAvoidBottomInset
        - MediaQuery.of(context).viewInsets
    - 이는 키보드 웨의 버튼이 그 위의 위젯들과의 공간이 확보되어야한다.

## 9-2. 키보드에 따라 유연하게 스크롤 하는 방법

    - SingleChildScrollView
    - reverse
    - [참고1](https://stackoverflow.com/questions/53586892/flutter-textformfield-hidden-by-keyboard)
    - [참고2](https://srcho.tistory.com/32)

## 9-3. 키보드 이외의 창(빈곳)을 누를 시 키보드 닫는 방법

    - GestureDetector 위젯으로 감싼 후 onTap함수에  ``FocusScope.of(context).unfocus();``를 추가해준다.

## 9-4. 원하는 페이지 한정 키보드 제한하는 방법

## 10. [플러터 프로젝트를 안드로이드 apk 파일로 빌드하기](https://bebesoft.tistory.com/2?category=885335)

## 11. 배경 이미지 적용하는 방법

- [크게 2가지로 나뉜다.](https://terry1213.github.io/flutter/flutter-how-to-set-background-image/)

## 12. [레이아웃 위젯 목록](https://bsscco.github.io/posts/flutter-layout-widgets/)

적절한 예시로 도움이 된다.

1. Row
2. Column
3. Flex
4. Stack
5. IndexedStack
6. GridView
7. ListView
8. Table
9. PageView
10. Wrap
11. LayoutBuilder
12. Expanded
13. Flexible
14. IntrinsicHeight
15. Aligned
16. Positioned
17. Container
18. Padding
19. Center
20. FittedBox
21. Transform
22. RatatedBox
23. FractionalTranslation
24. AspectRatio
25. ConstrainedBox
26. UnconstrainedBox
27. SizedBox

## 13. [뒤로가기 버튼 누를 시 확인 팝업 실행](https://www.kindacode.com/article/flutter-ask-for-confirmation-when-back-button-pressed/)


## 14. [timer vs ticker](https://codewithandrea.com/articles/flutter-timer-vs-ticker/)

## 15. [Dart에서의 future / async & await](https://velog.io/@jintak0401/FlutterDart-%EC%97%90%EC%84%9C%EC%9D%98-Future-asyncawait)