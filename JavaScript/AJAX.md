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

## [방식](https://chanhuiseok.github.io/posts/js-6/)
최신 JS 방식
1. fetch
    ```
    <script>
        fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then((response) => { // = function(response){ return response.json(); }
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
    -  default로 http 메소드 중 GET으로 동작한다.
- 호출 시 해당 주소에 요청을 보낸 다음, 응답 객체(object Response)를 받는다.
- 첫 번째 then에서 그 응답을 받고 .json() 메서드로 파싱한 json 값을 리턴한다.
    - 그 다음 then에서 리턴받은 json 값을 받고, 원하는 처리를 할 수 있다.
- error 처리를 해주려면 마지막에 catch를 활용하거나 then내부에 if 활용

2. async / await
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
- 서비스 페이지와 다른 IP의 데이터를 호출할 때, 발생
- 하지만, 개인이 개발시 상관 x
    - CORS를 끄고 싶으면 서버에 특정 코드를 추가해놓으면 해결가능

- 상황
    1. 만약 localhost:3000 포트에서 5000 포트로 접근한다고 했을 경우 CORS 이슈가 발생하여 error가 발생한다.
    2. 클라이언트에서 외부 API서버로 바로 요청을 보내서 CORS발생
        - 외부 API를 사용하고 있었기 때문에 서버를 제어할 수 없다. 따라서, HTTP응답 헤더인 Access-Control-Allow-Origin을 설정할 수 없다.
        - 따로, 서버를 구축하기 쉽지 않을 경우

- 해결방법
    1. 클라이언트 측에서 프록시이용
        - 데이터를 가져올 때 해당사이트에서 바로 자신의 PC로 가져오는 게 아니라 임시 저장소를 거쳐서 가져오는 것
        1-1. 남이 만든 프록시 서버 이용
            - [해당 서버](https://cors-anywhere.herokuapp.com)을 사용하게 되면 중간에 요청을 가로채서 HTTP 응답 헤더에 ``Access-Control-Allow-Origin:*`` 를 설정해서 응답해준다.
                - 요청해야하는 URL앞에 프록시 서버 URL을 붙여서 요청하는 방식
        1-2. 직접 프록시 서버 구축
            - 더이상 클라이언트에서 서버로 요청하는 것이 아니라, 서버에서 서버로 요청할 수 있게 된다.
            - CORS는 브라우저에 관련된 정책이기 때문에, 브라우저를 통하지 않고 서버 간 통신을 할 때에는 이 정책이 정용되지 않는다.
            ...
        1-3. [이후 내용은 해당 페이지에서 확인](https://xiubindev.tistory.com/115#recentEntries)
        1-4. Webpack DevServer Proxy
    2. 서버에서 특정 코드 추가

- 도움
    - [첫번째](https://evan-moon.github.io/2020/05/21/about-cors/)
    - [두번째](https://developer-talk.tistory.com/91)
    - [세번째](https://velog.io/@sonwj0915/CORS%EC%99%80-Proxy%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)
    - [네번째](https://react.vlpt.us/redux-middleware/09-cors-and-proxy.html)