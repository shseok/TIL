## MySQL

- Relational Database Management System (RDBMS)

- 데이터 베이스
    - 한 곳에 저장된 정보들을 원하는 어떤 곳에서든 사용할 수 있다. 즉, 특정 소프트웨어 및 프로그램에 종속되지 않고 독립된 정보의 집합(저장소)이다.
    
- DBMS (Database Management System)
    - 정보를 넣고 빼는 각종 기능을 넣어 원하는 것을 기능별로 쓸 수 있는 하나의 소프트웨어이다.
    - 저장하는 방법 - SQL(structed Query Language)
    
- https://www.yalco.kr/lectures/sql/
- 문자열과 숫자를 연산할 경우 문자열은 0 취급
    - 단, 숫자로 구성된 문자열은 숫자로 자동인식

- 명령어
    - GROUP BY
        - 조건에 따라 집계된 값을 가져온다
        - 어떤 테이블의 특정 행을 그 안에 **겹치지 않는** 모든 값들을 골라 뽑는다
        - 쓰는 이유는 MAX MIN COUNT SUM AVG와 같은 그룹 함수를 함께 쓰기 위함
    - WITH ROLLUP
        - 모든 값을 합함
        - ODER BY와 함께 쓰일 수 없다.
    - HAVING
        - 조건문
        - HAVING vs WHERE
            - HAVING은 그룹 후 집계에 사용된다 - GROUP BY아래에 존재
            - WHERE은 그룹하기 전 데이터 - GROUP BY위에 존재 (우선 판단)
    - DISTINCT
        - 중복된 값을 제거
        - GROUP BY 와 달리 집계함수가 사용되지 않습니다.
        - 정렬하지 않기때문에 빠르다 
        - ODER BY로 수정 가능
    - GROUP BY와 DISTINCT 함께 활용하기
        ```
        SELECT
            Country,
            COUNT(DISTINCT CITY)
        FROM Customers
        GROUP BY Country;
        ```
- Practice
    - [SQL Prac](https://www.w3schools.com/mysql/trymysql.asp?filename=trysql_select_all)