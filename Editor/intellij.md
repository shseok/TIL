# Error Catch
## 1. Cannot resolve symbol 'useNavigate'     
intellij에서 react를 사용하던 중, 위와 같은 에러를 직면 했다.  (react-router-dom이 version6로 업그레이드 되고 발생)
- 문제점:  the Jetbrains Product가 node_modules 폴더를 읽고 있는게 아닌 ``<system directory>/jetbrains/intellij/javascript/typings``으로부터 패키지를 읽었기때문이다. 해당 위치는 업데이트이전의 패키지이기 때문에 안읽히는 것
- 문제 해결: 따라서, 권리자 권한을 부여한 cmd창을 이용해 해당 위치에서 react-router-dom폴더를 삭제했다. 이후, node_module안에 설치한 react-router-dome 패키지를 읽게 되었다.
- [도움](https://stackoverflow.com/questions/70031839/cannot-resolve-symbol-routes)

## 2. 404 not found
HTTP 404
- 클라이언트가 서버와 통신할 수는 있지만 서버가 요청한 바를 찾을 수 없다는 것을 가리키는 HTTP 표준 응답 코드이다.
- 문제점: 카카오 map을 사용하기 위해 등록할 도메인에 localhost:5500(5500은 vscode가 사용하는 live server의 port번호)을 추가했다. intellij에서도 live server로 보고 싶어서 등록되지 않은 도메인(intellij default port인 63342)을 추가할 생각을 하지 않고, 기존의 5500 port를 쓰자라고 생각했다. intellij에서 settings -> built in port 검색 -> default port인 63342를 vscode가 사용하는 5500으로 변경하면 된다. live server를 실행하니 404 page가 intellij에서도, vscode에서도 live server를 실행하면 화면에 나타났다. 
    - port 번호가 중복 문제
- 문제 해결: 이는 port가 중복된 곳에서 사용되고 있어서 발생하는 현상이라고 인지했다. 따라서 intellij의 port를 기존 63342로 변경하였고 카카오 map의 등록할 도메인에 http://localhost:63342/를 추가하였다. 이를 통해 vscode 혹은, intellij에서 live server를 열어서 카카오 맵을 사용할 수 있었다.
