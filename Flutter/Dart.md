# Dart 기본기

## 문법
Dart 문법을 내가 몰랐고 자주 까먹을 것만 써놓겠다.

1. nullable vs non-nullable
- [19:08](https://www.youtube.com/watch?v=3Ck42C2ZCb8)
- [31:39 ??의미](https://www.youtube.com/watch?v=3Ck42C2ZCb8)
2. dynamic vs var

3. final vs const
    - var 코드 기능을 해주기때문에 생략가능

4. List
- List를 String형태로 쓰겠다는 의미
```
void main() { 
  List<String> blackPink = ['ㅇ', 'ㄷ', 'ㄴ', 'ㅇ'];
}
```
- {List변수}.add, {List변수}.remove, {List변수}.length, {List변수}.indexOf
5. Map
- Key라는 값을  
6. Set

7. Enum
- [Enum을 사용하는 이유 - 01:08:52](https://www.youtube.com/watch?v=3Ck42C2ZCb8)

8. funtion
- optional parameter 
  - 01:16:35
- named prarmeter
  - 01:19:33
- arrow function
  - 01:26:30

9. Typedef
함수를 편리하게 사용하기 위한 기능

## OOP
Dart에서 이용하는 OOP! 마찬가지로 내가 까먹을 것만 정리하겠다.
- Class 정의: 설계도 / Instance: 실제 결과물

1. Constructor
  - const를 붙여주면 instance 생성시 const를 붙여줘야한다. 추가의 instance를 const로 생성시 비교를 해보면 true가 나옴

2. Getter & Setter
  - setter의 parameter에는 무조건 1개의 parameter가 들어간다
  - setter는 현대에 추구하는 값을 바꾸지 못하게 하는 방식에서 어긋나기때문에 안쓰임
3. Private
  - 언더스코어('_')로 이름 앞에 붙여서 사용한다.
  - 외부에서 사용 못한다.
4. Inheritance
  - 상속을 받으면 부모 클래스의 모든 속성을 자식 클래스가 부여받는다.
    - 단, 부모클래스의 constructor처럼 constructor를 선언해줘야함
  - extends 키워드 사용
  - 단, 자식클래스에서 선언한 속성을 부모 클래스의 속성으로 넘겨주지 않아서 부모클래스에서 사용할 수 없다.
    - 자식클래스 사이에서도 속성을 공유하지 않는다.
  - typechecking
    - 부모클래스 is 자식클래스 : false
    - 자식클래스 is 부모클래스 : true
    - 자식클래스 is 다른자식클래스 : false
5. Override
  - 우선시하다.(= 덮어쓰다.)

6. Static
  - class에 귀속된다.
  - final이 추가로 없다면 직접 class로 선언한 변수로 바로접근하여 값을 넣어주거나 변경시켜줄 수 있고 바로 접근해주어야한다.

7. Interface
  - 일종의 강제하는 느낌
  - implements 키워드 사용
  - 보통 인스턴스화하는 class가 아니다.
    - 이때, 인스턴스화를 막기위해 abstract 키워드 사용

8. Generic
  - 타입을 외부에서 받을때 사용
  