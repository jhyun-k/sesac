/* var a;
console.log(a) */

var num = 1; //전역변수
if(true){
    var num = 100; //전역변수 함수안x <재선언으로 읽힘 
}

console.log(num);