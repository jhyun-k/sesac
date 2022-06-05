//<배열요소 추가>

const color = ['red','green','blue']
console.log(color)

//제일 앞, 제일 뒤에 요소 추가

console.log(color.unshift('yellow')) // 제일 앞에 추가하기 console창에는 length로 출력되지만 
console.log(color) //다시 console log 해보면 yellow 추가된 것 알 수 있다

console.log(color.push('orange')) // 제일 뒤에 추가하기 (얘도 length로 출력 5)
console.log(color) // ['yellow','red','green','blue','orange']

console.log(color.splice(2,0,'skyblue','black')) // splice(시작인덱스, 자를 개수 , 추가할 값) 여기서는 삭제하는 건 없고 추가만 하니까 0으로 해서 삭제는 안되고 값이 추가만 됨
console.log(color)