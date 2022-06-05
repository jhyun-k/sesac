//날짜 시간 date 객체

const now = new Date();

console.log(now.getFullYear()); // 현재 연도
console.log(now.getMonth()+1); // 현재 월 (인덱스번호이기 때문에 0부터 시작.. 현재 찍으려면 +1 해줘야함)
console.log(now.getDate()); // 현재 일(날짜)
console.log(now.getTime()); // 현재 시간 이긴 한데 ms로 나옴
console.log(now.getHours()); // 현재 시각
console.log(now.getMinutes()); // 현재 분
console.log(now.getSeconds()); // 현재 초

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let timebox = `${h} : ${m} : ${s}`

console.log(timebox)
