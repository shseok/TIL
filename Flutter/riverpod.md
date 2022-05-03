# riverpod

- dart언어의 상태관리 패키지 중 하나이다.

## 공부하기 좋은 예제

1. [공식문서 예제 - todo /로컬에서 추가, 삭제, 업데이트하는 방식 ](https://github.com/rrousselGit/riverpod/blob/master/examples/todos/lib/main.dart)
   - 획득 지식
     - StateNotifierProvider, StateProvider, Provider, StateNotifier
     - 모델(클래스) 생성 방법
2. [theflutterfactory - todo / setState -> riverpod 로컬에서의 방식](https://github.com/theflutterfactory/Flutter-Tutorials/tree/riverpod_finished_1)
   - 획득 지식
     - FutureProvider, StreamProvider
3. [devindo - jsonplaceholder / api를 통한 crud](https://github.com/hifiaz/youtube-devindo/tree/crud_jsonplaceholder)
   - 획득 지식
     - api crud
     - directory structure
     - general provider파일에서 repository의 future들을 넘겨주는 방식
4. [Riverpod 사용해보기 #1](https://prod.velog.io/@leeeeeoy/Flutter-Riverpod-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-1)

## 해결 한 고민들

1. StateProvider사용시 read로 state값을 변경 시켜주려 했지만 안되었다.

- ```
  final result = ref.read(categoryIdToCrate.notifier).state;
  result = index;
  print(result);
  ...
  final value = ref.watch(categoryIdToCreate);
  print(value);
  ```
- watch하여 값의 상태가 변경되지 않음을 파악
- `ref.read(categoryIdToCreate.notifier).state = index` 로 바로 넣어줘야했다.
