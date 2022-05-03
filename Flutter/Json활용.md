# flutter에서 Json 활용하기

도움 받은 사이트를 정리하고자 한다. 따라서, 내용의 도움을 받기위해 참고자료를 들어가서 확인해보자

1. [플러터에서 json 사용하기 - 기본편 | json data in flutter](https://bebesoft.tistory.com/11)
   - fetch 원리 : json 데이터(텍스트) -> json 자료형(`Map<String, dynamic>`) -> json 데이터가 들어갈 객체
   - jsonEncode 함수는 내부에서 객체의 toJson 함수를 호출하여 `Map<String, dynamic>` 자료형을 얻는다.
