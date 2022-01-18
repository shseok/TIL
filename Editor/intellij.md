# Error Catch
1. Cannot resolve symbol 'useNavigate'     
intellij에서 react를 사용하던 중, 위와 같은 에러를 직면 했다.  (react-router-dom이 version6로 업그레이드 되고 발생)
- 문제점:  the Jetbrains Product가 node_modules 폴더를 읽고 있는게 아닌 ``<system directory>/jetbrains/intellij/javascript/typings``으로부터 패키지를 읽었기때문이다. 해당 위치는 업데이트이전의 패키지이기 때문에 안읽히는 것
- 문제 해결: 따라서, 권리자 권한을 부여한 cmd창을 이용해 해당 위치에서 react-router-dom폴더를 삭제했다. 이후, node_module안에 설치한 react-router-dome 패키지를 읽게 되었다.
