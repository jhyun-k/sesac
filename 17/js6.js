const num = 123 ;
const num1 = new Number(123);

console.log(typeof num) //number
console.log(typeof num1) //object

/* console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE) */
// console.log(Number.NaN) //숫자 아닌 값 뱉어냄

if(Number.isNaN(num1)){
    console.log('실행')
}/* isNaN : NaN인지 아닌지 검사해줌 */

const num2 =123;
console.log(num2.toFixed(1)) //toFixed : 소수점 절삭해줌
console.log(num2.toPrecision(6)) // toPrecision : 원하는 자릿수대로 표현해줌

