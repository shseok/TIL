# 이벤트리스너
DOM 객체에서 이벤트가 발생할 경우 해당 이벤트 처리 핸들러를 추가할 수 있는 오브젝트이다. 
- 이벤트 리스너를 이용하면 특정 DOM에 아래의 Javascirpt 이벤트가 발생할 때 특정 함수를 호출한다.

## 💡Event
DOM 구조에서 이벤트
- 포커스 이벤트(focus, blur)
- 폼 이벤트(reset, submit)
- 뷰 이벤트(scroll, resize)
- 키보드 이벤트(keydown, keyup)
- 마우스 이벤트(mouseenter, mouseover, click, dbclick, mouseleave)
- 드래그 앤 드롭 이벤트 (dragstart, drag, dragleave, drop)

## 사용
특정 DOM요소에 이벤트 리스너를 등록할 때는 addEventListener를 사용한다.
```
DOM객체.addEventListener(이벤트명, 실행할 함수명, 옵션)
```
- 이벤트명: Javascript에서 발생할 수 있는 이벤트 명
- 실행할 함수명: 해당 이벤트가 발생할 때 실행할 함수 명(생략가능)
- 옵션: 자식과 부모 요소에서 발생하는 버블링을 제어하기 위한 옵션(생략가능)

## 활용
이벤트 리스너를 등록하면, 사용자 이벤트마다 특정 코드를 실행하는 것이 가능하다.
- 특정 스크롤 이벤트 발생 시 이벤트를 실행
- input 태그에 글자 수를 확인하는 등의 코드로 활용

📌 이벤트 리스너의 경우 웹 애플리케이션 메모리 누수의 원인이 될 수 있다.
- 더 이상 해당 이벤트 리스너가 필요 없다고 하면 반드시 추가된 이벤트 리스너는  반드시 삭제해주어야 한다.
- 특정 페이지에서만 사용하는 이벤트 리스너라면 해당 페이지를 떠날 때 이벤트 리스너를 삭제해준다.

## 삭제
이벤트 리스너를 삭제할 땐 removeEventListener을 이용
```
DOM객체.removeEventListener(이벤트명, 실행했던 함수명);
```


# Ref
https://developer.mozilla.org/ko/docs/Web/Events

https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener

https://ordinary-code.tistory.com/64
