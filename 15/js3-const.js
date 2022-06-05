/* const num = 10;
const num = 20;  얘네는 값 안바뀌어*/

const kim = {
    age : 30,
    name : '순희'
} 
kim.name = '철수'

console.log(kim.name)
console.log(kim) // 객체 할당시 프로퍼티 생성 삭제 변경 가능

const me = {
    age : 26,
    name : 'jihyun'
}
console.log(me)
me.age=25
console.log(me)