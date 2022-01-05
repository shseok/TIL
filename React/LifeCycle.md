# LifeCycle API

<img src="./img/lifeCycle.png" width="780px" height="450px">

- Mounting
    - 컴포넌트가 브라우저 상에 나타날 때
- Updating
    - 컴포넌트의 props, status가 바뀌었을 때, 업데이트
- Unmounting
    - 컴포넌트가 브라우저 상에서 사라질 때

# LifeCycle Method
- [componentDidMount()](https://ko.reactjs.org/docs/react-component.html#componentdidmount)
    - 컴포넌트가 처음 장착되었을 때, 컴포넌트가 처음 로딩될 때 내부의 코드를 실행해라 
- componentDidUpdate()
    - 컴포넌트 안에 무언가가 update되었을 때(ex. data 변경) 내부의 코드를 실행해라
- componentWillUnmount()
    - 컴포넌트에 장착한 것이 해체되기 바로 전에 코드를 실행해라
# Ref
- https://twitter.com/dan_abramov/status/981712092611989509
- 