const year = ['2022','2023','2024','2024']

console.log(year.indexOf('2024')) // indexOf는 찾는 문자열의 위치를 알려준다. 이 경우는 첫번째 2024의 index 번호인 2를 반환한다.
console.log(year.includes('2024')) // includes 는 포함하는 값이 있는지 없는지에 대한 논리값을 반환한다. true/false
console.log(Array.isArray(year)) // isArray 는 해당 값이 Array 인지 아닌지에 대한 논리값을 반환한다.

//값이 있는지 유무 따라 다르게 출력
//year.indexOf('2026') 로 하면 값이 없다 뜬다 year에 2026 없으니까. indexOf 해서 값이 없으면 -1 출력함. 
const value=year.indexOf('2024'); // value가 -1과 같지 않으면 값이 있음
if(value!==-1){
    console.log('값이 있다')
}else{
    console.log('값이 없다')
}