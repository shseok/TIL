# Dart 기본기
Dart 문법을 내가 몰랐고 자주 까먹을 것만 써놓겠다.
1. 기본 문법
2. 객체지향 프로그래밍
3. 함수형 프로그래밍
4. 비동기 프로그래밍

## 기본 문법
* 코드의 끝에는 무조건 세미콜론을 마지막에 추가해주자
* 변수 타입 : int, double, boolean, String, var(오른쪽 값을 통한 유추), dynamic
  - 변수.runtimeType으로 타입 유추 도움
    - 다른 ex) print(number1 is int); // is로 타입 판단 가능
  - String
    - print('${변수}');
    - print('$변수'); // 변수 한개만
1. var vs dynamic
    - var: 한번 선언시 선언한 타입으로 fix
    - dynamic: 다른 타입으로 중간에 변경 가능

2. nullable vs non-nullable
    - null: 아무런 값도 있지 않다.
    - 기본적으로 String, int, 등...과 같은 타입은 null이 될 수 없음.
    - ? : null이 될 수 있음. ex) String? name = '현석'; name = null;
        - ??
          - ex) double? number = 4; number = 2; number = null; number ??= 3; // number가 null이라면 3으로 바꿔라! 그렇지 않으면 2로 유지
    - ! : null이 될 수 없음. ex) print(name!); 
      - null이 될 수 있는 타입에 !를 붙으면 현재 이 값은 null이 아니라는 의미

3. final vs const
    - 공통점
      - 변수 값을 한번 선언 후 변경 불가 
        - final String name = '현석'; name = '현석이'; (x)
      - var 코드 기능을 해주기때문에 타입 생략가능
        - final name = '현석';
    - 차이점
      - const의 경우 build time에 값을 알고 있어야하고 final의 경우 build time에 값을 알 필요가 없다.
        - DateTime.now() 과 같은 코드는 실행하는 순간마다 다르기 때문에 final로 사용되어야 한다.

4. List
    - generic과 같이 활용되어 쓰인다.
      ```
      void main() { 
        List<String> dummy = ['ㅇ', 'ㄷ', 'ㄴ'];
      }
      ```
      - ``List<String>`` -> List를 String형태로 쓰겠다는 의미
    - {List변수}.add, {List변수}.remove, {List변수}.length, {List변수}.indexOf
5. Map
    - 짝을 이뤄서 값을 넣는다. (key, value)
      ```
      void main() { 
        List<String, String> dictionary = ['ho': '호', 'hu': '후', 'hee': '히'];
      }
      ``` 
    - 위 예시를 활용하여 ``print(dictionary)``를 해보면 객체형태로 출력
      - {'ho': '호', 'hu': '후', 'hee': '히'}
    - {Map변수}.addAll({'ho': '호호'});
    - {Map변수}.remove(key); // 해당 key와 value 모두 삭제
    
6. Set
    - List와 달리 중복 값이 들어가지 않는 장점이 있다.
      ```
      void main() { 
        Set<String> dummy = {'ㅇ', 'ㄷ', 'ㄴ', 'ㅇ'};
      }
      ```
    - 내장 함수는 list와 비슷. contains 도 활용가능
7. Enum
    - type처럼 생각해도 된다.
    - enum을 쓰는 이유
      - 코드의 가독성, 타입 강제(오류 방지)
        ```
        enum Status{
          appoved, // 승인
          pending, // 대기
          rejected, // 거절
        }
        
        void main(){
          Status status = Status.peding;

          if(status == Status.pending){
            ~~~
          }
        }
        ```

8. funtion
  - parameter(argument) 
    - positional parameter : 순서가 중요한 파라미터(default)
      ```
      addNumber(int x, int y, int z){
        ~~
      }
      ```
    - optional parameter : 있어도 되고 없어도 되는 파라미터. 단, 타입이 정해져있을 때, 정해줘서 선언
      ```
      addNumber(int x, [int y = 20, int z = 30]){
        ~~
      }
      ```
    - named prarmeter : 이름이 있는 파라미터 (순서가 중요하지 않다)
       ```
       void main(){
         addNumber(y: 10, x: 20, z: 30); // 순서 중요 x
       }
      addNumber({required int x, required int y, required int z}){ // required를 지우고 기본 값을 넣어주어 optional parameter로 사용 가능 
        ~~
      }
      ```
    - parameter들을 혼용해서 사용할 수 있다.
      - ex) named parameter + positional parameter + optional parameter
        ```
        void main(){
          addNumber(10, y:20);
        }
        addNumber(int x, {required int y, int z = 30}){
          ~~~
        }
        ```
    - arrow function
      - [참고](https://flutterbyexample.com/lesson/arrow-functions)

9. Typedef
    - 함수와 비슷하나 함수의 body가 없는 형태라고 생각하기
    - 함수를 편리하게 사용하기 위한 기능
    - return type과 parameter가 일치해야한다.
      ```
      void mian(){
        int result = calculate(30, 40, 50, add);
      }
      typedef Operation = int Function(int x, int y, int z);

      int add(int x, int y, int z) => x + y + z;
      int subtract(int x, int y, int z) => x - y - z;

      int calculate(int x, int y, int z, Operation op){
        return op(x, y, z);
      }
      ```

## 객체지향프로그래밍
Dart에서 이용하는 OOP! 마찬가지로 내가 까먹을 것만 정리하겠다.
  - Class 정의: 설계도 / Instance: 실제 결과물
  - instance를 만들 때, new를 사용하는건 선택
  - method = function(class 내부에 있는 함수)
1. Constructor
  - basic Constructor
  - ex)
    ```
      void main(){
        Human human = Human('현석', ['원호', '홍중']);
      }
      class Human{
        final String name;
        final List<String> friends;

        Human(String name, List<String> friends) // 변동 될 수 있는 부분을 파라미터로 받는다.
          : this.name = name,
            this.friends = friends;
        
        void sayHello(){
          print('Hi, ${this.name}'); 📌 메소드에 name이 따로 선언이 안되있으면 this 생략 (dart 추천)
        }
      }
    ```
    - ``Human(String name, List<String> friends): this.name = name, this.friends = friends;``
      - = ``Human(this.name, this.friends)``
  - named Constructor
    ```
      void main(){
          Human human = const Human('현석', ['원호', '홍중']);

          Human human2 = Human.fromList(
            [
              ['원호', '홍중'], '현석',
            ]
          )
        }
        class Human{
          final String name;
          final List<String> friends;

          const Human(this.name, this.friends);
          
          Human.fromList(List values)
            : this.friends = values[0],
              this.name = values[1]
        }
    ```
    - 어떤 constructor를 골라도 instance를 생성할 수 있다.
  - final로 변수 선언을 해줘서 immutable programming을 해준다.
  - const를 붙여주면 instance 생성시 const를 붙여줘야한다. 
    - 추가의 instance를 const로 생성시 비교를 해보면 true가 나옴

2. Getter & Setter
  - setter의 parameter에는 무조건 1개의 parameter가 들어간다
  - setter는 현대에 추구하는 값을 바꾸지 못하게 하는 방식에서 어긋나기때문에 안쓰임
3. Private
  - 언더스코어('_')로 이름 앞에 붙여서 사용한다. with 변수, 클래스, 함수...
  - 외부(다른 파일)에서 사용 못한다.
4. Inheritance
  - 상속을 받으면 부모 클래스의 모든 속성을 자식 클래스가 부여받는다.
    - 단, 부모클래스의 constructor처럼 constructor를 선언해줘야함
    - ex)
      ```
        void main(){
          Human human = const Human('현석', ['원호', '홍중']);
          Namga nam = Namga('현석', ['원호', '홍중']);
          name.sayHello();
        }
        class Human{
          final String name;
          final List<String> friends;

          Human({required this.name, required  this.friends}); // named parameter
          
          Human.fromList(List values)
            : this.friends = values[0],
              this.name = values[1];
          
          void sayHello(){
          print('Hi, ${this.name}');
        }
        }

        class Namga extends Human{
          Namga(
            String name, 
            List<String> friends,
          ): super(
            name: name,
            friends: friends
          );
        }
      ```
  - extends 키워드 사용
  - 단, 자식클래스에서 선언한 속성을 부모 클래스의 속성으로 넘겨주지 않아서 부모클래스에서 사용할 수 없다.
    - 자식클래스 사이에서도 속성을 공유하지 않는다.
  - typechecking
    - 부모클래스 is 자식클래스 : false
    - 자식클래스 is 부모클래스 : true
    - 자식클래스 is 다른자식클래스 : false
5. Override
  - 우선시하다.(= 덮어쓰다)
  - 상속한 값에 대해서만 가능
  - 부모 클래스의 속성, 메소드를 가져오고 싶다면 super 키워드를 사용해서 속성, 메소드를 가져올 수 있다.

6. Static
  - class에 귀속된다. (instance에 귀속되지 않는다.)
  - final이 추가로 없다면 직접 class로 선언한 변수로 바로 접근하여 값을 넣어주거나 변경시켜줄 수 있고 바로 접근해주어야한다.

7. Interface
  - 일종의 강제하는 느낌
  - implements 키워드 사용
    - ex)
      ```
      void main(){
          Friends human = Friends('현석', ['원호', '홍중']);
        }

        class HumanInterface{
          final String name;

          Human(this.name);

          void sayName(){};
        }
        
        class Friends implements HumanInterface{
          final String name;

          Human(this.name);

          void sayName(){'안녕하세여'};
        }
      ```
  - 보통 인터페이스는 인스턴스화할 수 있는 class가 아니다.
    - 이때, 인스턴스화를 막기위해 abstract 키워드 사용
      - ex)
        ```
        void main(){
          HumanInterface test = HumanInterface('안녕'); // Error -> abstract의 효과
        }

        abstract class HumanInterface{
          final String name;

          Human(this.name);

          void sayName(); // abstract 키워드를 써줌으로써 함수의 바디를 지울 수 있다.
        }
        ```

8. Generic
  - 타입을 외부에서 받을때 사용
  - 타입을 여러개를 받을 수 있음 ``<T,X ...>``
    - ex)
      ```
      void main(){
        Lecture<String> lecture1 = Lecture('123', 'lectrue1');
      }

      class Lecture<T>{
        final T id;
        final String name;

        Lecture(this.id, this.name);
      }
      ```

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
