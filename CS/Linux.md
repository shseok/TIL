- 유닉스
    - 파일 시스템으로 구성되어 있고 트리구조로 되어있다

- Shell
    - 리눅스 쉘(터미널에서 실행 됨) => System Utitlites(기본명령어) => System Call => Linux => Hadware
        - OS를 쓸 때, 사용자와 인터페이스하는데 이어져있다. (OS Level의 바깥층)
        - shell 명령어를 통해 커널과 컴퓨터 시스템을 사용할 수 있다
        - 기본적으로 터미널 인터페이스를 사용한다
        - 처음에 터미널에 **동시에** 쉘이 실행된다. => 프롬프트 활성화 => 터미널 ready
        - 리눅스는 루트디렉토리가 슬래쉬이다(/)  +) 윈도우는 백슬래쉬
            - 윈도우에서는 폴더, 유닉스에서는 파일시스템(storage device의 구성)
    - ex) ssh로 로그인 -> ssh서버가 로그인 프로그램(서비스) 실행 -> 로그인 후 서버의 터미널이 shell 실행
    - Shell(BASH)을 쓰기 위한 최소한의 지식
        - https://devhints.io/bash
    - Shell(BASH)을 깊이 있게 사용하기 위한 링크
        - https://github.com/mug896/bash-shell
    - cheetsheet
        - https://devhints.io/bash
    - 중급이상
        - http://mug896.github.io/bash-shell/

- 명령어
    - ctrl + c (Kill Signal) / ctrl + d (End Of File Signal) / ctrl + z (stop)
    - 파일명 앞에 .(점) 이 있다면 hidden file
    - bash shell 명령어는 popd, cd ...  help로 detail확인 / user명령어는 which로 확인가능
        - 이는 소프트웨어에서 가상으로 돌고 있는 느낌 (user명령어 위치가 가상으로 생성됨)
    - &로 stderr도 활용가능
    - chmod
        - 'c' : character device / 'd' : directory / '-' : 일반 / 'b' : block device
        - rwxrwxr-x : 읽기권한, 쓰기권한, 실행권한 / rwx(user)rws(group)r-x(other)
            - 앞에 3개가 user 즉 소유자(owner)의 권한이고,
            - 중간에 3개는 group 에 대한 권한,
            - 마지막 3개가 others 에 대한 권한이 됩니다.
        - 디렉토리에 x가 있다면 cd 가능
        - chmod 700 {dir} : 8진수 3등분하여 계산하므로 user에만 모두 허용, 나머지 허용x

    - redirection
        - stdinput stdoutput, stderr의 방향을 변경
        - 0< 1> 2>
            - 0과 1은 생략가능
        - '>' : 파일명으로 파일이 만들어진다
            - ex) history > {파일}
                - cat {파일} : history 명령 결과 확인가능
                - cat {존재하는 파일} {존재하는 파일} > {파일}
                    - 두개의 파일을 합쳐서 새로운 파일에 생성 
            - 존재하는 파일에 사용할 경우, 덮어쓰임
        - '>>' : 누적시킨다
        - '<' : 입력 값을 정해준다
            - ex) cat < {존재하는 파일} == cat {존재하는 파일}
                - cat < {존재하는 파일} > {파일} : 파일에 존재하는 파일의 내용이 덮어쓰여짐
        - '>&' : stderr도 같이 내보냄
            - ex) python >& result.txt -> stdin -> ctrl+d : stdin과 에러메시지까지 저장
    - pipe
        - 파이프의 왼쪽 명령어 stdoutput이 오른쪽 명령어 stdinput
            - ex) ls -l | wc
        - **|&** : 에러 메시지를 파이프라인에 반드시 넣어줌

    - link
        - 용도 : 똑같은 파일 내용을 다른 파일 이름으로 접근하고 싶을 때
        - ln {가리키는 파일명} {가리킬 파일명}
            - 둘 중에 하나를 바꾸면 나머지 하나가 변경
            - inode가 같음 (ls -ali : inode 확인)
                - inode : 유닉스 파일시스템에서 디스크에 저장될때 inode 번호로 저장된다
            - 가리키는 파일을 지워도 연결되어 있는 파일들이 하나라도 살아있다면 존재
        - ln -s {가리키는 파일} {가리킬 파일명} : symbolic link / 쓰는 이유 - 파일크기 줄어 듦
            - inode가 다름
            - 파일의 크기가 다르고 크기는 이름의 수로 할당
            - 명렁어 앞에 보통 "-" 이거나 디렉토리이면 "d"가 붙는데, 이때는, "l"이 붙는다
            - 가리키는 파일을 지우면 가리킬 파일이 동시에 죽는다
            - window에서 link기능을 못한다
        - window에서 바로가기로 만든건 유닉스에서 link기능을 못한다

        - **link와 symbolic link의 차이 중요**
            - 다른 경로에서 가져와서 link했을 때, mv하여 link파일의 경로를 바꾸면 slink는 사용 불가하고 link는 사용가능하다
            - 기존 파일을 지우면 link는 살아 있고 slink는 죽는다
                - 이때, 죽은 slink에 vi로 작성하면 지워진 기존 파일이 다시 생성된다
 
    - 변수
        - ex) MYNAME = "Hyeonseok shin"
            - echo $MYNAME => Hyeonseok shin 출력

    - ./a.out 1000입력-> echo $? -> 256을 나눈 나머지 252가 출력

    |명령어|설명|옵션|
    |------|---|----|
    |~|Home|
    |pwd|현재경로|
    |ls |-al / -ld {dir} / -al {dir}| -a / -l / -i(inode) |
    |tty|terminal 번호|
    |hostname|서비스를 제공하는 컴퓨터 확인|
    |uname|리눅스 이름|
    |rm|파일 삭제|-r (recursive delete -> 디렉토리 제거 가능) / *(all) / -i (carefully)
    |man|명령어 도움말  or --help |
    |rmdir|비어있는 디렉토리 삭제|
    |grep|파일에서 찾고자 하는 단어를 입력시 해당 줄 출력|
    |od|8진수로 파일을 보여줌|
    |ln|똑같은 파일 내용을 가르키는 두개의 파일 이름을 만들고 싶을 때|-s : symbolic link|
    |wget|httpd service 이용하기 위한 client application|
    |ssh|sshd service 이용하기 위한 client application|
    | 파이프 |pipeline |
    |history|지금까지의 명령어 기록. 단) shell이 끝나고 .bash_history에 저장됨|
    |!|이전에 한 가장 최근 명령| ex) !! : 가장 최근명령 / !{history번호} / !{첫문자} : 첫문자에 해당하는 최신명령|
    |;| 명령어 연결 - 성공여부와 상관없이 다음 명령어 실행|
    |&| 백그라운드로 동작|
    |&&| 성공한 경우에 다음 명령어 실행|
    |source| 실행|  
    |cc or gcc| c언어 컴파일 |
    |./*.out| 현재 디렉토리의 *.out 파일 실행|
    |which | which뒤 명령어의 위치확인|
    |more | 파일 내용 확인 or less(git bash에서 more대신 쓰임)|
    |pushd| 현재 디렉토리 푸쉬|
    |popd| 저장한 디렉토리로 다시 이동|
    |touch| 파일 만듦|
    |!$| 직전 명령어의 가장 오른쪽 명령|
    |$?| 마지막에 실행한 명령어 return값 - 성공하면 0|
    |cp {경로 및 파일} .| 경로 및 파일을 현재 디렉토리에 복사| 디렉토리 간 복사시 -r|
    |file *|모든 파일 표시| 
    |wc| word count|
    |mv| 파일이동 or 파일(or 디렉토리) 이름 변경|
    |du (-h)| 디렉토리, 파일 용량 확인|
    |set -C|파일 덮어쓰기 금지|
    |tar|파일을 zip처럼 묶는다. 보통 백업용도로 쓰임|-tvf : tar file의 내용을 확인 / -cvf : 압축 / -xvf : 압축해제|
    |gzip| tar file 압축|-1 / -9 : best|
    date | 현재시간
    touch | file 생성
    mkdir
    vi
    cat|concatination 단, 아무것도 입력하지 않을 시 표준입력(stdin)을 읽어서 stdout -> 다쓰면 ctrl+d| ex) cat > output.txt 이후 stdin + (ctrl + d) : output.txt에 입력받은 내용이 들어간 후 파일 생성
    head | 맨 앞 이후 10줄 출력
    tail | 맨 뒤 이전 10줄 출력
    strings | 바이너리파일에서 읽을 수 있는 아스키코드만 드러냄
    echo| 입력 그대로 다시 출력
    sleep| 숫자 입력시 초단위로 기다림 | ex) sleep 5 ; echo "5 Seconds" ; ls -l
    fg| 포그라운드
    bg|백그라운드
    jobs| 현재 진행중인 작업
    ps| jobs와 같은 기능
    kill|process kill| -9 : hard|
    alias| 명령어 재명칭 | ex) alias cat=ls|
    unalias| 재명칭된 명령어 복귀| ex) unalias cat|
    tee| 분기해서 보여줌
- [vim 명령어](../ETC/VIM.md)
    

- **Shell Script**
    - '#' - comment
    - 명령어를 스크립트 형태로 저장하여 유용하게 사용 (작업시간 감소, 실수 사전 예방)
    - 실제 리눅스에서 사용
    - 확장자 {이름.sh}
    - script 실행시 1. {source 이름.sh} | 2. chmod 774 이후 a.out 파일 실행 | 3. bash ./{파일명}
    - for i in {1..100} ; do echo "testfile_$i"".cpp"; done
        - sorting이 아스키로 되기 때문에 정렬이 다르게 됨.
    - for i in testfile_7?.c ; do echo $! ${i%.c}.cpp ;done 
        - tesfile_7* : 7뒤에 있든 없든 찾음 / tesfile_7? : 7뒤에 한글자가 있어야함
    - for i in testfile_7?.c ; do mv $! ${i%.c}.cpp ;done 
        - 70단위만 .c 확장자 대신 .cpp확장자로 변경
    - ls > ls.txt ; ls | wc 의 맨 첫 number는? ls 줄 + 1 (ls.txt가 미리 실행되기 때문 )
        - ls | wc의 첫 number가 5라면 위의 명령어의 첫 number는 6
    - source comm1.sh <<<"100 100 100" 으로 한번에 입력받기 가능
    if [[ ls.txt -ef ls2.txt]] ; then echo "T"; else echo "F"; fi
        - ls.txt와 ls2.txt가 같다면 T, 그렇지 않다면 F

- 실습 표현
    - redirection
        - echo Hyeonseok > /dev/pts/31(교수님 디렉토리)
        - 1> stdout.txt 2> stderr.txt ./a.out 이후 10 20 30 stdin
            - stdout.txt에 10/ stderr.txt에 20, 30
        - cat > file1.txt 이후 아무거나 입력 + (ctrl + d)
            - file1.txt에 입력한게 들어감
            - = echo "아무거나입력" > file1.txt
            - = echo "아무거나입력" | cat > file1.txt
        - cat file1.txt file2.txt file3.txt > all.txt
            - all.txt에 앞에 세 파일이 저장됨.

    - cp
        - 현재 lab04에 있을 때, lab03의 .c 파일을 갖고 오기
            - cp ../lab03/*.c .
    - chmod
        - chmode 777 {경로+디렉토리}
            - 수정가능

    - pipe
        - echo "Hyeonseok" | cat
            - 결과: Hyeonseok -> stdout
        - ls -l | wc
        - ls -l hello.c |& wc
            - stdout 뿐만아니라 stderr도 내보냄
         
    - pushd .
        - 현재 디렉토리를 저장
    - popd
        - 돌아감

    - link
        - ln file1.txt link1
        - ln -s file1.txt slink1

    - mkdir tmp ; cd tmp
        - tmp를 만들고 바로 들어감 (+ tmp가 있어도 들어감)
    - mkdir tmp && cd tmp
        - tmp가 있다면 만들지 않고 cd까지 안들어감  

    - &?
        - echo $? : 직전 명령어가 성공시 0 혹은 return 값 / 직전 명령어가 실패시 2
        - 이전 return 값이 256을 넘어갈경우 256을 나눈 나머지가 반환 -> main이 int여도 unsigned가 return 됨.
        - void 라고 선언하면 return 값은 0 (true)
    
    - MYNAME="HYOENSEOK"
        - echo $MYNAME -> HYOENSEOK stdout
        - echo myname $MYNAME -> myname HYOENSEOK
        - echo 'name $MYNAME' -> name $MYNAME
        - echo "My name is $MYNAME" -> My name is HYOENSEOK 

    - 숫자 계산(floating 불가능)
        - a=200 ; b=300
            - echo $(($a+$b)) -> 500
    - 조건문
        - true가 0 / false는 나머지
        - if a.out ; then echo "True" ; else echo "False"; fi
        - for ((i = 0 ; i < 100 ; i++)); do sum=$(($sum+$i)) ; done
        - 모든 c파일을 java파일로 바꾸기
            - echo *.c -> for fname in *.c; do echo $fname ${fname%c}java; done
                - 잘 작동되면 for fname in *.c; do mv $fname ${fname%c}java; done

    