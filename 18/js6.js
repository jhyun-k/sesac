//Date객체 이용해서 
//년월일요일 -> 2022년 5월 26일 목요일 처럼 오늘 날짜 나오게 하기


const now = new Date()  // new Date() 로 Date객체 생성해줘야함


const year = now.getFullYear()
const month = now.getMonth()+1
const date = now.getDate()
const dayArr = ['일','월','화','수','목','금','토']
const today = `오늘은 ${year}년 ${month}월 ${date}일 ${dayArr[now.getDay()]}요일`

console.log(today)