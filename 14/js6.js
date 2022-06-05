//홀짝 구분 ( % 2 해서 0이 나오면 짝수 %는 나머지 연산자)
let num = 100;

if(num % 2 === 0){
    console.log('짝수')
}else{
    console.log('홀수')
}

//삼항연산자로 쓰면
num%2 === 0 ? console.log('짝수') : console.log('홀수')