# VIM

Text Editor - vi compatible

<img src="./img/VIM_img.png" alt="kernel" width="650" height="300">

<img src="./img/VIM2_img.png" alt="kernel" width="800" height="500">
https://www.raddit.com/r/linux4noobs/comments/awjzuo/vim_cheat_sheet/

 - ⬅(R) : H
 - ➡(L) : L
 - ⬆(T) : K
 - ⬇(B) : J
 - s
- i : insert (커서기준 앞)
- a : append (커서기준 뒤)
- I : (공백 제외) 줄 기준 맨 앞
- A : (공백 포함) 줄 기준 맨 뒤
- o : 줄 기준 다음 줄 추가
- o : 줄 기준 이전 줄 추가
- x : Delete
- dd : 한 줄 제거
    - 어떤 명령어가 두개 반복되면 Line에 관하여
- r : 해당 글자 지우고 입력모드 | s와 다른 점 - 글자 입력 후 바로 Normal mode로 빠져나온다
- s : 해당 글자 지우고 입력모드
- cw : 한 단어에 대하여 지우고 입력모드
- cc (=S) : 한 줄에 대하여 지우고 입력모드
- c$ : 한 줄에 대하여 커서 이후 전부 제거
- u : undo (ctrl + z)
- ctrl + r : undo -> undo
- . : 되풀이
    - undo 이후 .을 누르면 이전 명령어인 undo가 되풀이 실행
- / : 찾기
    - enter 후, n을 누르면 같은 다음 단어 위치로 이동
- yy : 한 줄 복사
    - p : 복사 한 줄을 커서 기준 다음 줄에 사이에 붙여넣기
- yw : 한 단어 복사
    - p : 복사 한 단어를 커서 기준 다음에 붙여넣기

Vim Operation
- [operator] + [count] + [motion]   
or
- [count] + [operator] + [motion]
- ex
    - 5 + o + {입력} : 한줄 내려간 후, 입력 * 5 line
    - 5 + x
    - 5 + dd
    - 1000 + dd : 1000 Line이 없어도 가능한 최대한 지운다는 의미
