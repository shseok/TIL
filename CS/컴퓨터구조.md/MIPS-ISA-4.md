# MIPS ISA - Branches

- Conditional Operations
    ```
    Beq rs, rt, L1
    ```
    If(rs==rt) jump to L1   L1은 address of target instruction이다. 하지만 binary로 바뀌면 L1은 pc relative value로 바뀐다. 왜냐하면 크기가 부족하기 때문에.

    ```
    Bne rs, rt, L1
    ```
    If(rs!=rt) jump to L1
    ```
    J L1
    ```
    모든 조건 무시하고 일단 L1으로 점프한다.

- Compiling Loop Statements
    - 계산 슬라이드

- Basic Blocks

    Code block은 sequence of instruction이다. 이는 두가지 특징을 가지고 있는데
    1. No embedded branches. 앞서 말한 조건문 branch instruction들이 포함되지 않는다. 그래서 중간에 다른 Exit로 가는 것이 안된다.

    2. No branch targets. 중간에 들어오는 것도 안된다.

    정리하자면 code block에서 시작이 되면 반드시 끝까지 가야한다.

    왜 중요하냐면 a compiler identifies basic blocks for optimization. 이 뜻은 컴파일러는 이 basic block을 optimization할때의 하나의 유닛으로 보기 때문이다.

    An advanced processor can be accelerate execution of basic blocks. 어차피 위의 특성 때문에 쉽게 주어진 코드를 보고 쉽게 결과를 예측할 수 있기에 basic block의 실행을 가속화 시킬 수 있다. 더 자세한 부분은 나중에 다루게 될것이다.

 

- More Conditional Operation

    이번엔 어떠한 조건들을 해당할 때 결과값을 1 또는 0을 내는 operation을 볼 것이다. 1이면 참, 0이면 거짓이다.
    ```
    Slt rd, rs, rt   #if(rs<rt) rd=1, else rd=0
    ```
    set은 값을 1으로하고 clear는 0으로 바꾼다.
    ```
    Slti rt, rs, constant   #if(rs<constant) rt=1; else rt=0
    ```
    Shorter is better, 우리가 branch instruction을 알고 있는데도 이 condition operation을 사용하는 이유이다. 더 자세한건 뒤에서 다룰 예정이다.

    Beq, bne이와 결합하여 이런식으로 사용하기도 한다.
    ```
    Slt $t0, $s1, $s2  #if($s1 <$s2)

    Bne $t0, $zero, L  #branch to L
    ```

- Branch Instruction Design

    근데 왜 저건 하나의 operation이 없을까? 마치 blt, bge이런 operation처럼 더 간편한 operation말이다. 그냥 대소비교 >, <, <=, >=는 같다, 다르다와는 조금 더 복잡하다. 그래서 branch instruction이 조금 복잡하다. 그래서 대소비교 operation은 clock cycle을 조금 느리게 한다. 왜냐하면 <=, >=와 같이 두개의 복잡한 operation를 같은 clock에 동작하게 하여야 한다. Instruction set은 가장 느린 clock speed를 참고하게 되는데 이렇게 되면 느려진 clock speed 때문에 다른 모든 instruction조차 느려지게 된다. 결국 principle4처럼 good design principle이였다는 걸 알 수 있다.

- Signed vs Unsigned

    - Signed comparison: slt, slit

    - Unsigned comparision: sltu, sltui

# Ref
- https://readyfortest.tistory.com/45

>> Compiling Loop Statements
- https://ydeer.tistory.com/140
