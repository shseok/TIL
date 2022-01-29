# VS Code 자동완성, 단축키

## <HTML, CSS>Emmet Abbreviation
- div tag   
    HTML 문서에서 '.class_name' 또는 '#ID_name' 작성 후 Enter     
    div tag 로 둘러싸인 class 또는 ID를 하나 만들어준다.

    >'.class_name(또는 #ID_name) * 숫자' : '숫자'에 해당하는 갯수만큼 div class, ID를 만들어준다.

- Link   
    link:link할 요소로 작성할 수 있다.
    대표적으로 많이 사용하는 css stlyesheet의 경우, 'link:style' 이라고 입력하면 된다.

- tag, class와 id를 쓰기
    - "tag.class_name#ID_name" 이라고 작성하면 된다.
    - ex) i.box#navi-box
- class name을 여러 개 넣기
    - "tag.class_name.class_name2" 라고 작성하면 된다.

- parent와 child element를 동시에 만들기
    - 사이에 ">"를 입력해주면 된다.
    - ex) i.box#navi-box>.child-box#navi-controller

- parent-child가 아닌 대등관계의 element를 추가로 만들기
    - 사이에 "+"를 입력해주면 된다.
    - ex) i.box#navi-box+.child-box#navi-controller
## Cursor, Line Control
- Cursor
    - "Alt+Shift+화살표 방향키" 를 눌러 Multi-Cursor형태로 만들어줄 수 있다.
- Line Control
    - "Alt+화살표 방향키"를 눌러 Line Swap이 가능하다. 아래쪽에 있는 elements를 닫는 tag(ex.</div>) 쪽으로 올리면 해당 tag의 child element로 변경해줄 수 있다.
- Multi-Select
    - 떨어져있지만 똑같은 형태인 것 선택
    - "Ctrl+D"를 통해 multi-select가 가능하다.
        - 같은 이름 one by one search 후 선택

# 파일 선택, 디렉토리 오픈
1.파일 선택
- 현재작업중인 디렉토리의 파일 선택단축키
    - Ctrl+p
2.디렉토리 오픈
- vscode에서 진행한 프로젝트들을 볼 수 있고 선택하면 현재 창을 해당 창으로 오픈


## 화면 close up / down
- Close Up
    - Ctrl + '+'
- Close Down
    - Ctrl + '-'
# Snippet
코딩할 때, 단축어처럼 특정키를 입력하면 자동완성해주는 기능
- 비쥬얼 스튜디오의 extension에서 snippet을 다운받아 사용할 수 있다.

### rafce
리액트에서 함수형 component 을 만들 때 기본코드가 제공된다.

# VSCODE에서 카카오 맵을 사용

카카오에 도메인 등록을 해야하는데, 이때 127.0.0.1:5500 을 추가해줘야한다. 
- VSCODE의 go live port인 5500이다.
- localhost:5500도 추가해주면 좋다.
- [자세히](https://injekim97.tistory.com/114)
