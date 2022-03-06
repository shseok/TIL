# Error
## Android Studio Start Failed: Internal error. ~~~
- 문제점:  에디터 실행시 internal Error 창이 뜨고 실행 멈춤
- [해결](https://stackoverflow.com/questions/2772701/address-already-in-use-jvm-bind-java/70640950#70640950)
    - windows' NAT Reset
    - JVM, Docker등과 같은 'cannot listen on this port'와 같은 오류에 대해 해결책이 될 수 있다.