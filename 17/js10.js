//random 이용해서 5자리 인증번호 출력


// console.log(Math.round(Math.random()*10))

let pass = ''; //''를 통해 문자열로 만들어주고 += 산술대입연산자를 통해 문자열을 옆으로 착착 쌓아줌
for(let i = 1; i<=5 ; i++){
    pass +=  Math.floor(Math.random()*10)
}
console.log(pass)

