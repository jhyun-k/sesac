world() // 함수 선언문으로 정의한 함수는 호출문이 그보다 앞에 위치해도 호출할 수 있다. 자바스크립트 엔진이 함수 선언문을 프로그램의 첫머리 또는 함수의 첫머리로 끌어올리기 때문이다. 호이스팅 되어서 함수 선언 하기 전임에도 아래 문장을 다 읽고, 위로 끌어올려져서 호출했을 때 호출된 값을 출력할 수 있는것이다.

hello(); // 표현식으로 만든 함수는 호이스팅이 안됨, 할당 전이기 때문에 에러가 뜸
//선언적 함수들만 호이스팅이 된다~

const goodbye = () => {
    console.log('goodbye')
}

const hello = function(){
    console.log('hello world')   
}
const hi = function hiFnc(){
    console.log(`world`)
}

function world(){
    console.log(`mario-world`)
}
world();
hi();