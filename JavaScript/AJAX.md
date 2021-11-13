# AJAX
Asynchronous JavaScript And XML
- 서버와 비동기적으로 데이터를 주고받는 자바스크립트 기술

## 사전개념
- 서버
    - 필요한 이유: AJAX는 서버와 통신하는 기술이기 때문이다.
    - 정의: 데이터를 요구하면 데이터를 보내주는 프로그램
    - [링크의 마지막 부분 참고](../CS/Basic.md)

## ajax
서버에게 데이터를 요구. 
- 단, 정해진 방법에 맞게 요청을 보내줘야한다.
    1. 원하는 데이터 URL을 알아야한다.
        - 서버 개발자가 알고 있다.(서버개발자가 만든 API를 보자)
    2. 그 URL로 GET요청을 해야한다.
        1. 브라우저 주소에 URL 입력 <- 진짜 GET요청....;
        2. 버튼으로 GET요청
            - ex) 
                ```
                    <form action="{URL}" moethod="get">
                        <button type="submit">
                    </form>
                ```
            - [도움1](http://tcpschool.com/html-tag-attrs/button-formmethod)
            - [도움2](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=pjs990417&logNo=221358485714)
        3. **AJAX로 GET요청** (위 2,3번은 모두 새로고침 발생)
            - 새로고침 없이 서버에게 GET요청하는 JS코드(like 함수)
            - 장점: 웹페이지 전환이 부드러워진다. (like 웹 앱 )
    - 위 2가지 약속을 지킨다면 데이터를 준다.

## 방식
최신 JS 방식
1. 단순 fetch
    ```
    <script>
        fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then((response) => {
                if(!response.ok){
                    throw new Error('400 or 500 error');
                }
                return response.json();
            })
            .then((결과) => {
                console.log(결과);
            })
            .catch(() => {
                console.log('에러발생');
            })
    </script>
    ```
- fetch 기본 함수에 URL을 적으면 자동으로 GET요청을 날려줌
- then으로 파싱한 결과를 출력할 수 있음.
- error 처리를 해주려면 마지막에 catch를 활용하거나 then내부에 if 활용

2. async - await
    ```
    <script>
        async function 데이터가져오는함수() {
            var response = await fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            if(!response.ok){
                    throw new Error('400 or 500 error');
            }
            var result = await response.json();
            console.log(result);
        }

        데이터가져오는함수().catch(() => {
            console.log('에러발생');
        });
    </script>
    ```

3. 외부라이브러리 방식
- 제이쿼리방식인 $.ajax()
- 리액트 | 뷰환경에서 axios 라이브러리 설치하여 사용
    ```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"></script>

    <script>
        axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then((result) => {
                console.log(result.success) // 서버에서 받아온 데이터
            }).catch(() =>{
                console.log('에러 발생')
            })
    </script>
    ```

## CORS 관련 에러
AJAX요청 사용시 자주보게 되는 에러
- 이유: 만약 naver.com에서 개발 진행 중, kakao.com으로 ajax 요청 불가능 (보안이슈)
- 하지만, 개인이 개발시 상관 x
    - CORS를 끄고 싶으면 서버에 특정 코드를 추가해놓으면 해결가능
