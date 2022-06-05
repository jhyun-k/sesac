let a = 10; //type number
let b = '10'; //type string

let c = a == b;

console.log(c)

let num1 = 100;
let num2 = '100';

let num3 = num1 != num2;
console.log(num3)

console.clear()

let v1 = 10, v2 = 20, v3 = 30, v4 = 40, result;

result = v1>v2 ; // 10>20 false
console.log(result)
result = !(v1>v2) ; // 10>20 false 의 부정이기 때문에 true
console.log(result)
result = v1>v2 && v2<=v3 // 둘 다 참이어야 true 출력, v1>v2가 거짓이므로 false 
console.log(result) 
result = v1>v2 || v2<=v3 // 둘 중 하나 참이라면 true 출력, v2<=v3 이 참이므로 true
console.log(result) 


//삼항연산자 , 조건부연산자

result = v1 > v2 ? 'A' : 'B' ; // v1 > v2 조건이 만족하면(참이면) A 출력, 거짓이면 B 출력
console.log(result) // 거짓이므로 B 출력
