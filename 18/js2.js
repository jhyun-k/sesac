//<배열요소 삭제>

const subway = ['1호선','2호선','3호선','4호선','5호선'] 
//length는 길이니까 4 , index는 0부터 시작하니까 3까지 있음

console.log(subway[2]) // index[2]는 3호선 맞음
console.log(subway.length) // 개수 4개 (길이)

console.log(subway[0])
console.log(subway[1])
console.log(subway[2])
console.log(subway[3])


delete subway[2] // delete로 배열요소 삭제하면 자리는 남아있어서 1, 2, 1 empty item, 4, 5 으로 출력, 배열의 인덱스는 수정하지 않는다. 
//반면 splice(시작인덱스,개수) 사용하면 배열 자체를 수정할 수 있다. 

subway.splice(2,1) // 이렇게 하면 1, 2, 4, 5 로 배열 자체 수정됨
console.log(subway)
console.log(subway.length) // 배열 요소 삭제된걸로 쳐서 length 4 됨

//for문으로 만들기 -> i<subway.length로 하면 index값은 length보다 1 작으니까 알맞게 출력 가능

for(let i = 0;i<subway.length ;i++){
    console.log(subway[i])
}