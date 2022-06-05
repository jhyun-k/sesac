//전역객체(global object) : 자바스크립트에 미리 내장되어 있는 객체, 객체 자체의 범위가 전체 , this 라는 연산자 통해서 접근할 수 있는 객체

console.log(globalThis)

//wrapper 객체 : 원시 타입을 싸고있는 객체 (number, string, boolean 등)

const num = 2022; //원시
const str = '5월 13일' //원시
console.log(num) // 원시
console.log(num.toString()) //객체 toString() : 문자로 인식하게 하는 메서드

