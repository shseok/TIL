# Web Trends

## 역사

1. 1990년 중반까지 Static Sites
    - 서버에 이미 잘 만들어진 HTML문서가 존재 -> 사용자가 브라우저에서 특정 주소에 접속하면 서버에 이미 배포되어있는 HTML문서를 받아와서 보여주는 형식
    - 문제점: 페이지 내에서 다른 링크를 클릭시 다시 서버에서 해당 페이지 HTML을 받아와서 전체를 업데이트


2. 1996년 iframe 태그 도입
    - iframe 태그 : 문서 내에서 또 다른 문서를 담을 수 있는 것
    - 페이지 내에서 부분적으로 문서를 받아와서 업데이트할 수 있다.

3. 1998년 XMLHttpRequest API 개발
    - XMLHttpRequest API : fetch API 기초
    - HTML문서 전체가 아닌 JSON과 같은 포맷으로 서버에서 가볍게 필요한 데이터만 받아 올 수 있다.
        - 그 데이터를 JS를 이용해서 동적으로 HTML 요소를 생성해서 페이지를 업데이트하는 방식

4. 2005년 AJAX
    - 위의 방식이 공식적으로 AJAX로 불림
    - 구글에서 Gmail과 Google Maps과 같은 **웹 어플리케이션**을 만듦
        - 이러한 웹 어플리케이션을 **SPA**(Single Page Application)라고 부른다.
    - 하나의 어플리케이션을 사용하듯 웹사이트에서 사용성이 좋아졌다.


- SPA 트렌드 + 사용자들의 PC 성능이 향상 + JS 표준화
    - Angular / React / Vue 프레임워크 출현
    - CSR 시대 시작

## CSR (Client Side Rendering)
클라이언트 측에서 모두 처리. Application에 필요한 page와 장비를 최초 로드에 다 가져온다.

- 문제점
    1. Initial Loading may take too long
    2. Low SEO(Search Engine Optimizaition)
        - CSR에서 사용되어지는 HTML의 body는 대부분 empty상태이기때문에 검색 엔진들이 CSR로 작성딘 웹페이지를 분석하는데 어려움을 겪는다.

## SSR (Server Side Rendering)
CSR의 과도한 문제점으로 인해 과거 static stites에 영감을 받아 출현
- 클라이언트 측에서 모두 처리하는 것과 달리, 웹사이트 접속시 서버에서 필요한 데이터를 모두 가져와서 HTML파일을 만들고 동적으로 조금 제어할 수 있는 소스 코드와 함께 클라이언트에 보내진다. 이렇게하면 클라이언트 측에서 바로 볼 수 있다.
- 장점
    1. Initial page load is faster
    2. Great SEO
        - 모든 컨텐츠가 HTML에 담겨 있어서 효율적은 SEO 가능
- 문제점 
    1. Blinking issue, Non-rich site interactions
        - 사용자가 클릭시, 전체적인 웹사이트를 다시 서버에서 받아오는 것과 동일
    2. Server side overhead
        - 사용자가 많은 제품일수록, 사용자가 클릭시 처리량 증가
    3. Need to wait before interacting
        - 동적으로 데이터를 처리하는 자바스크립트를 다운로드 받지 못해서 반응 x
            - TTV (Time To View)
            - TTI (Time To Interact)

## TTV와 TTI
웹사이트의 성능을 분석할 때 중요하다.
- CSR은 로딩 후 TTV와 TTI동시에 가능
    - 최종적으로 번들링해서 사용자에게 보내는 JS파일을 어떻게 하면 효율적으로 많이 분할해서 처음 사용자가 보기위해서 필요한 필수적인 것만 보낼 수 있을지 고민
- SSR은 TTV과 TTI 사이의 공백기간이 길다
    - 사용자가 보고 interaction하는 공백기간을 어떻게 줄일 수 있을지 고민

어떻게 개선할 수 있을까?
## SSG (Static Site Generation)
React + Gatsby
- 클라이언트 사이드 렌더링에 특화된 라이브러리인 React와 Gatsby라이브러리와 함께 사용시
    - React로 만든 Web Application을 정적으로 웹페이지를 미리 생성하여 서버에 배포 가능
    - 단, 동적으로 처해야하는 로직(추가적으로 데이터를 받아오는 등...)이 있다면 동적인 요소도 추가가능

## Next.js
Gatsby처럼 React에서 함께 사용된다.
- 과거
    - 강력한 SSR을 지원하는 라이브러리였다.
- 현재
    - SSG 지원
    - CSR과 SSR을 섞어서 사용 지원


## 정답은 없다.
- Our Site is static? dynamic? 서버에서 동적으로 데이터를 받아오는가? 얼마나 자주, 많은 사용자가 있는지?에 따라 TTV와 TTI를 유연히 사용하자