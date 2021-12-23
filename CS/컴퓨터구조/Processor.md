크게 2가지의 MIPS 프로세서의 구현에 대해 볼 것이다.
1. 간단한 version
- 성능이 좋지 않지만, 이해하기 쉬운 버젼
2. more realistic **pipelined** version
- 파이프라인이 무엇이고, 어떻게 파이프라인으로 성능이 개선되는지를 알 수 있다.

# Instruction Execution

1. instruction을 가져온다.(Fetch)
    - PC(Program Counter)로 instruction memory값을 가져옴
2. instruction을 컴퓨터가 이해 (decode)
3. register를 읽음
4. instruction class에 따라
    - 계산하기위해 ALU사용
    - load/ store라면 메모리에 접근
    - PC : PC + 4 주소값으로 바꿈
5. 다시 1번 -> ... -> 4번 -> 1번 ... -> ... 무한 반복


# A Big Picture

PC / Memory / Storage 그림 순

<img src="../img/big-picture.png" width="600px" height="400px">

1. storage안에 실행할 수 있는 (컴파일된) a.out 프로그램이 있다.
2. 이를 실행시키기 위해 로더에 의해 메모리에 올라간다.
    - code는 text영역 / data는 static data영역
3. 프로세서 입장에서 32개의 레지스터가 있는데 (+ PC/HI/LO) PC가 가르키는 위치의 instruction을 Fetch를 해온다. 
4. 가져온 instruction을 decoding을 해온다.
...

## Multiplexers
입력이 여러개인데, 그 입력 중 어떤 입력을 취할건지를 선택해줄 수 있는 하드웨어 로직

## Control
- decoding하여 하드웨어에 전달
- multiplexers 로직을 결정 

## Combinational Elements
- AND-gate
- Adder
- Multiplexer
- Arithmetic/Logic Unit

## Datapath
- 데이터가 왔다갔다하는 통로 
- Registers, ALUs, memories... 통해서 왔다간다

### Instruction Fetch
- 가져오고 PC + 4
### decoding

#### R-Format Instructions
- register와 ALU를 이용한다.
#### Load/Store Instructions

#### Branch Instructions

...

## Performance Issues
- functional하게 동작하는 건 성능상 좋지 않다.
- pilpelining에 의해 성능향상이 가능하다.