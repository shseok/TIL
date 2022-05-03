# Error

## Android Studio Start Failed: Internal error. ~~~

- 문제점: 에디터 실행시 internal Error 창이 뜨고 실행 멈춤
- [해결](https://stackoverflow.com/questions/2772701/address-already-in-use-jvm-bind-java/70640950#70640950)
  - windows' NAT Reset
  - JVM, Docker등과 같은 'cannot listen on this port'와 같은 오류에 대해 해결책이 될 수 있다.

# 속도 향상

1. [메모리 설정](https://docko.tistory.com/382)
   - Heap Memory 설정
   - 안드로이드 스튜디오는 기본 heap 메모리가 1GB 정도로 잡혀있다.
   - [동일한 방법1](https://woochan-dev.tistory.com/22)
   - [동일한 방법2](http://sunphiz.me/wp/archives/1559)
