# 설치
- 설치하기 앞서 react native를 개발하는데 2가지 방식이 존재한다. ([expo cli 방식vs react native cli 방식](https://velog.io/@wook4506/React-Native-Expo-CLI%EC%99%80-React-Native-CLI))
    - 아래의 내용은 expo 방식 기준이다.
1. [expo](https://reactnative.dev/docs/environment-setup)
2. [android studio](https://developer.android.com/studio)
    - 설치시 SDK Components Setup에서 설치경로에 한글이 있어서 에러
        - 해결: [한글 경로 때문에 설치 안될 때](https://sohees.com/7126/)
            - mklink 사용
                - mklink란? NTFS파일 시스템 기반에서 특정 파일이나 폴더에 대하여 링크를 걸어주는 것 (심볼릭 링크)
    - SDK 설정
    - [에뮬레이터 설치 및 설정 with 공식문서](https://developer.android.com/studio/run/managing-avds?hl=ko)
3. 휴대폰에 expo설치

# 실행
## 시뮬레이터에서 실행
1. 안드로이드 에뮬레이터 실행
2. react native app을 npm start | expo start로 실행
    - localhost:19002에서 Run on Android device/emulator

## 디바이스에서 실행
1. play store에서 expo실행


# 에러
1. vertual device manager에서 device를 만들고 실행할 때, The emulator process was terminated. 에러 발생
    - [환경변수 추가로 해결](https://sohees.com/192/)
        - 단, 환경변수 4개중 sdk 2개 삭제하니까 해결
2. 안드로이드 에뮬레이터 실행 할때, detected ADB 에러화면 발생
    - [해결방법 but, 해결 x](https://tigercoin.tistory.com/121)
3. 시뮬레이터에서 실행할 때, localhost:19002에서 Run on Android device/emulator를 해도 계속 기다리기만하고 안되었다.
    - [해결방법](https://stackoverflow.com/questions/63100356/android-simulator-is-not-loading-on-react-native-application-expo)
        - 실행 순서 변경
4. 디바이스에서 실행할 때, 연결이 안되는 현상
    - 같은 와이파이인지 확인하자(셀룰라되어 있는지 확인)


# React Native 시작하기 전 알아야할 내용
- JSX:
자바스크립트 문법 안의 어떤 구성 요소(ex.Text)를 엘리멘트 형태(HTML, XML)로 쓸 수 있다.
(= 자바스크립트 안에 엘리먼트를 답을 수 있는 문법(TypeScript:TSX)
리액트 쓸데만 쓰임
구성요소 안의 또다른 자바스크립트 식을 쓸때, {}로 사용
- Props(read-only):
리액트 컴포넌트들 간의 어떤 값을 전달하는 매개체
javascript object형태(=props)로 받는다.(ex.props.name)
core components(ex.Image)같은 것들도 props(source={{url: ~~}}를 가져다가 사용한다
- State:
컴포넌트 내부에서 관리하는 값, 개인적인 데이터 저장공간, 시간을 통해 or 네트워크에서 가져온 값을 통해 바뀌는 것들을 관리하기 위한 값
useState의 함수를 가지고 사용될 수 있음  .
사용자의 변화에 따라 변하는 값을 다루기 좋음.