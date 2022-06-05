let hello = '안녕하세요' ; //전역변수

if(true){
    let hello = 'hello' ; //지역변수 << 이 블록 안에서만 활용 가능한 변수 (재선언이 아님)
    console.log(hello)
}

console.log(hello)

/* let hello = '반갑습니다'; */

hello = '반갑습니다';
console.log(hello)