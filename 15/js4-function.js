function hello(){
    console.log('hello world')
}

hello();
hello();
hello();

function num(a,b){
    return a + b;
    
}

const result = num(10,20)
console.log(result)

function userInfo(name, age){
    console.log(`이름은 ${name} 나이는${age}`);
}

userInfo('지현',26)

const profile = userInfo('홍길동',20)
console.log(profile)

//두개의 매개변수를 받아서 두 값을 곱해서 출력하는 함수

function cross(a,b){
    console.log(a*b);
}

cross(10,20)
cross(5,7) // console.log 를 실행하는 함수로 만들기

function cross2(a,b){
    return a*b;
}

const answer = cross2(19,19)
console.log(answer) // 값을 저장하고 출력은 따로 하는 함수
//얘는 함수를 호출해서 결과값을 출력

const answer2 = cross
console.log(answer2)
//얘는 그냥 함수일뿐