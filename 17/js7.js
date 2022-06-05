console.log(Math.PI) // 원주율
//toFixed(자리수) << 얘는 Number 객체에 있는거
console.log(Math.ceil(10.54))//올림 11
console.log(Math.floor(10.54))//내림 10 
console.log(Math.round(10.54))//반올림 11

console.log(Math.min(122,29,39)) //최솟값
console.log(Math.max(9,1,288)) // 최댓값

console.log(Math.random()) // 0~1 사이 아무 수나 나옴
console.log(Math.random()*10) //*10 *100 등등으로 값 범위 조절 가능 , 0 나오게 하기 싫으면 +1 해주기
console.log(Math.round(Math.random()*100)) // 소수점 절삭 하고 싶으면 round 등의 함수로 한 번 더 싸주기
