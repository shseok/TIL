# Number Representation

## Index
- Immediate operands
- Representing numbers
    - Unsigned integers
    - 2’s complement for signed integers
        - Complement and add 1 for negating a positive number
- Endianness

## start

Immediate Operands 

- 즉각 연산(변수가 아닌 상수로 바로)
- instruction에 상수(constant data)를 사용함
    - addi　$s3, $s3, 4
- mmediate instruction에 감산(subtract, 뺄셈)은 지원하지 않음
    - 그러므로 덧셈(add)에 음수(-)값을 사용
    - addi　$s2, $s1, -1
- immediate operand는 load instruction을 줄여줌
- Constant Zero
    - MIPS 레지스터의 0번 레지스터($zero)는 항상 0이다.
    - 값을 변경할 수 없는 고정된 상수. 읽기만 가능한 레지스터.
    - 많은 작업들에 유용함
        - e.g., 레지스터간의 이동
    - add　$t2, $s1, $zero
        - $s1의 값을 그대로(0을 더해봤자) $t2에 임시로 저장. 값 복사.

Number System

- Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    - 7612(10) or 7612
- Binary: 0 or 1
    - 10110101(2)  or 0b10110101 / 0b1011 0101
- Octal: 0, 1, 2, 3, 4, 5, 6, 7
    - 7127(8) or 07127
- Hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f
    - beef(16)= 0xbeef

Representing Integer Value
- **Unsigned** binary integers
    - Range: 0 to 2^𝑛−1
        - Using 32 bits: 0 to +4,294,967,295 (2^32 – 1)
    - Example
        - 0000 0000 0000 0000 0000 0000 0000 1011(2)
            = 0×2^31+…+1×2^3+0×2^2+1×2^1+1×2^0
            = 0+…+8+0+2+1=11_(10)
    - Tip: 2^𝑛+2^(𝑛−1)+…+2^1+2^0=2^(𝑛+1)−1 = 1111 1111(2) = 1 0000 0000(2) - 1

Representing Negative Integer Value
- 2’s-complement **signed** integers
- Range: (−2)^(𝑛−1) to 2^(𝑛−1)−1
    - Using 32 bits: −2,147,483,648 to +2,147,483,647 (-2^31 ~ 2^(31) - 1)
    - MSB가 가장 큰 자리의 음수를 표현할 수 있고, 나머지 비트들이 1로 모두 가득 차봐야 MSB를 상쇄하지 못하고 -1이 됨.　(MSB가 1이면 무조건 음수라고 보면 됨)
    - 그러므로 가장 작은 수는 1000...000 비트인 -2^(n-1)이 되고, 가장 큰 수는 0111...111 비트인 2^(n-1) - 1이 될 것이다.
    - unsigned 표현에서는 MSB도 양수
    - 31비트(MSB)는 부호 비트. 1이면 음수 / 0이면 음수가 아님(0이거나 양수)
    - 음수가 아닌(MSB가 0인) 수는 unsigned 표현과 비트 표현이 동일하다
    - 2^(𝑛−1) cannot be represented

Endianness
- 32bit의 데이터를 32bit 메모리 공간에 어떻게 저장할 것인가라는 것이 endian
- Big Endian: 가장 왼쪽 byte가 word address이다.
    - IBM 360/370, Motorola 68k, MIPS, Sparc, HP PA
- Little Endian: 가장 오른쪽 byte가 word address이다.
    - Intel 80x86, DEC Vax, DEC Alpha (Windows NT)
- Most of modern architectures are little endian (x86)
    - Make pointer type casting obvious
- Some architecture can switch between the endians
- MIPS is big endian

# Ref
- https://ydeer.tistory.com/140