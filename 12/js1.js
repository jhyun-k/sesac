let user = 50 ;
let userTelnumber ;
let userAdress ;

let num = 50 ; /* <숫자데이터 */
let str = 'javascript 자바스크립트' ; /* <문자데이터 */
let num1 = '2021'; /* <문자데이터 */

let value2 = 123 + '123' //얘는 + 가 더하기가 아니라 결합연산자인거 그래서 문자.
let value1 = 2021/'2023' // 숫자는 문자로 못나누니까 NaN. NaN 는 숫자(NOT A NUMBER지만 숫자)
console.log(typeof value1);
console.log(typeof value2);

let str1 = 2022;
let str2 = '안녕'+ str1 +'년'
/* 템플릿 리터럴  벡틱 ` 줄바꿈 하고싶으면 \n 하면 개행문자 쓸 수 있음*/
let str3 = `안녕하세요 올해는 ${str1} 년입니다.`

console.log(str3)

// boolean 블리언
let isOn = true
let isOff = false

console.log(typeof isOff)


let js1 = null
console.log(js1)