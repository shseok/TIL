# React Hooks
React Hooks는 FunctionComponent안에서만 사용할 수 있다.

💡 react component는 2가지가 존재한다.
1. FunctionComponent
2. ClassComponent 
    - [LifeCycle Methods](./LifeCycle.md)

## 1. useState

## 2. useEffect
해당 Hooks를 import해서 Lifecycle처럼 사용할 수 있다.
1. = componentDidMount()
    - 처음 로딩될 때 **한번만** 실행
    - ```
        useEffect(() => {
            // code...
        }, [])
        ```
    - 🧨주의:  useEffect의 두번째 매개변수가 없이 쓰일 때는 reRendering될 때마다 내부의 코드가 작성된다.
2. = componentDidUpdate()
    - 두번째 array의 변수이름이 변화가 있을 때 코드 실행
    - ```
        useEffect(() => {
            // code...
        }, [value])
        ```
3. = componentWillUnmount()
    - component가 해제되기 직전 return 내부 코드 실행
    - 없애기 원하는 청소코드
        - 컴포넌트가 더이상 사용이 안된다고 판단하였을 때
        - ex. API 연결(fetch한 것들) 해제, 네트워크 연결 해제
    - ```
        useEffect(() => {
            // code...

            return () => {
                // code...
            };
        }, [])
        ```
## 3. useMemo

## 4. useCallback
