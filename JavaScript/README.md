# Javascript

- html에 script로 가져다 사용될 수 있다.
    - type을 정할 수 있으며 module 등이 올 수 있다.
    - defer를 설정할 수 있는데, 페이지가 모두로딩 된 후 자바스크립트가 표시된다는 의미
    - ex) ```<script type="module" src="01-basic.js" defer></script>```

## [실행 컨텍스트](https://chanhuiseok.github.io/posts/js-4/)
```
let value = "value1";

function foo(){
	console.log(value);
}
function bar(){
    let value = "value2";
    console.log(value); // value2
    foo(); // value1
}

bar();
```

## [클로저](https://chanhuiseok.github.io/posts/js-5/)
