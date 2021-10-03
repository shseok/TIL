# REST API

- [학술적으로 정확한 의미의 REST API](https://www.youtube.com/watch?v=RP_f5dMoHFc)

- 정보들이 주고받아지는 데 있어서 개발자들 사이에 널리 쓰이는 일종의 **형식**
- API
    - Application Programming Interface
    - 기계(서버)와 기계(서버), 소프트웨어와 소프트웨어 사이에서의 지정된 형식으로 요청, 명령인 소통을 할 수 수단 
    - 네트워크 상에 API가 있는 것 뿐만아니라, 로컬 프로그램인 브라우저는 Web API를 통해 자바스크립트로부터 특정 동작들을 지시받기도 한다.

- 프론트엔드 웹에서 서버에 데이터를 요청하거나 배달 앱에서 서버에 주문을 넣는 서비스들에서 오늘날 널리 사용되는 것
- 각 요청이 어떤 동작이나 정보를 위한 것인지를 요청을 보면 추론 가능
- URI
    - 자원을 구조와 함께 나타내는 형태의 구분자
    - 
- CRUD
    - CREATE : 정보 생성
    - READ : 정보 조회
    - UPDATE : 정보 수정
    - DELETE : 정보 삭제
- HTTP : 서버에 요청(신호 전송)을 보낼때 규약 
    - 메소드
        - 아래 기능이 특정 용도에 제한되어 있지 않지만(읽고, 쓰기 가능), RESTful API를 만들기 위해 목적에 따라 구분해서 사용해야한다.
        - GET : READ(조회)
        - POST : CREAT(추가) | GET, DELETE 보다 body에 정보를 많이, 안전하게 보낸다. 
        - DELETE : DELETE(삭제)
        - PUT : UPDATE(변경) | 모든 정보 변경 | GET, DELETE 보다 body에 정보를 많이, 안전하게 보낸다.
        - PATCH : UPDATE(변경) | 특정 정보 변경 | GET, DELETE 보다 body에 정보를 많이, 안전하게 보낸다.
- 요약 : HTTP 요청을 보낼 때, 어떤 URI에 어떤 메소드를 사용할지 개발자들사이에서 널리 지켜지는 약속

- 용도에 따른 대안: GraphQL

# Ref
- https://www.yalco.kr/23_rest_api/
- URI
- 비동기 프로그래밍