//<배열 (array)>


//배열요소 추가 방법 1 일일이 대입
let array = new Array(3);

array[0] = 'A';
array[1] = 'B';
array[2] = 'C';
console.log(array);

// 추가방법 2 Array 생성자로 생성하기
let array2 = new Array(1,2,3);
console.log(array2)

//추가방법 3 배열리터럴[] 로 추가하기
let array3 = [1,2,3,4,5]
console.log(array3)
console.log(array3[3]) //배열요소의 참조 (인덱스값으로 나오기 때문에 0부터 시작 여기서 array3의 index3번은 4)

//<배열 주의할점>

let array4 = new Array(10) // 배열에 숫자 하나만 넣으면 요소가 아니라 배열 길이로 인식해벌임
console.log(array4) // [<10 empty items>]
console.log(array4.length) // 길이 10으로 나옴
console.log(array4[0]) // 10을 요소로 안쳐서 [0] 구해도 undefined 나옴
let array5 = new Array('go') // 얘는 문자열 하나만 나와도 요소 1개인 배열이 된다.
console.log(array5)
console.log(array5.length) // 문자열 1개니까 길이 1로 나옴
console.log(array5[0])// 1

