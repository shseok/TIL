# Dart 기본기

## 문법
Dart 문법을 내가 몰랐고 자주 까먹을 것만 써놓겠다.

1. nullable vs non-nullable
- [19:08](https://www.youtube.com/watch?v=3Ck42C2ZCb8)
- [31:39 ??의미](https://www.youtube.com/watch?v=3Ck42C2ZCb8)
  - ? : null이 될 수 있음. ex) String? name = '현석'
  - ! : null이 될 수 없음. ex) print(name!);
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

## functional programming
- List.map((x) => ~~~);
- List.where((x) => ~~~);
  - map과 마찬가지로 기존의 배열에 영향을 주지않고 새로운 배열 생성
- List.reduce((prev, next) => ~~~);
  - 📌reduce를 실행하는 List의 타입으로 같은 타입을 리턴을 해주어야한다
- List.fold()
  - reduce와 같음
  - ```
    void main(){
      List<int> numbers = [1,3,4,6,7];
      final sum = numbers.fold<int>(0, (prev, next) => prev + next);
      print(sum);
    }
    ```
- cascading operator
  - javascript의 spread와 같다

- ### 기존에 서버에서 데이터(JSON)를 받아오는 것을 Map으로 관리한다면 높은 자유도때문에 작업이 힘들다. 따라서 class를 만들어서 설정을 해주고 사용해야한다.
  - 어떤 기능들을 해야하고 어떤 값이 있어야하고 없어야하고 null값이 될 수 있는지?를 데이터 구조로 미리 정해놓는 과정. 이렇게한다면 데이터를 신뢰할 수 있는 상황을 만들 수 있다.

- ### 예시
```
void main(){
  List <Map<String, String>> people = [
    {
      'name': '로제',
      'group': '블랙핑크'
    },{
      'name': '로제',
      'group': '블랙핑크'
    },{
      'name': 'r',
      'group': 'BTS'
    },{
      'name': 'q',
      'group': 'BTS'
    },
  ];  
  
  print(people);
  
  final parsedPeople = people.map(
    (x) => Person(
      name: x['name']!,
      group: x['group']!,
    )
  ).toList();
  
  print(parsedPeople);
  
  final result = people.map(
    (x) => Person(
      name: x['name']!,
      group: x['group']!,
    ),
    )
    .where((x) => x.group == 'BTS')
    .fold<int>(
      0,
      (prev, next) => prev + next.name.length,
    );
  print(result);
}

class Person{
  final String name;
  final String group;
  
  Person({
    required this.name,
    required this.group,
  });
  
  @override
  String toString(){
    return 'Person(name:$name, group:$group)';
  }
  
}

```

## 비동기 프로그래밍
- 서버요청은 CPU를 사용하지 않지만, synchronous 프로그래밍을 하면 CPU를 막아버린다. CPU가 놀기때문에 비효율적이다.
- asyn를 사용하면 서버요청시 CPU가 풀려버린다.
  - CPU가 사용되지 않기때문에, 그 기간동안 CPU를 쓸 수 있다.

### Future
Future를 사용해서 미래 받아올 값을 저장할 수 있다.
- ex
```
Future<String> name = Future.value('안녕');
```
- Future.delayed()
  - 1번 파라미터: 지연할 기간
  - 2번 파라미터: 지연시간이 지난 후 실행할 함수
  - ex
  ```
  Future.delayed(Duration(seconds:2), (){print('Delay끝')});
  ```

### await
사용하고자 하는 함수의 파라미터와 바디사이에 async를 넣고 사용될 수 있다.
- Future 앞에 await
- async내부 await 다음 내용은 await이 끝나고 실행된다.
  - 단, await 함수 외의 로직은 이때 실행됨. (놀지않음) 

### Stream
stream을 사용할 수 있는 패키지를 가져와야한다. stream은 다트언어에서 기본적으로 제공하지 않는 것이기때문
