//요소 제거

const color = ['red','green','blue','yellow']

color.shift() // 맨앞제거
console.log(color)
color.pop() //맨 뒤 제거
console.log(color)

const familyName = ['철수','영희','순이','길동']

familyName.splice(2,1) // 순이 인덱스 번호 2번에서 1명 제거하는 거니까 순이만 제거됨
console.log(familyName)

const newFamily = familyName.slice(2,3) // 영희에서 잘라서(2) 길동이만 나옴(3) (start, end)
console.log(familyName)
console.log(newFamily) // [길동]


//배열 합치기 

const arr1 = [1,2,3]
const arr2 = [4,5,6,7,8,9] // concat() 배열/문자열 합치기

const arrPlus = arr1.concat(arr2) // const 새로운배열=배열1.concat(합칠 배열2)
console.log(arrPlus)

//배열 거꾸로

const arrReverse = arrPlus.reverse()
console.log(arrReverse)

//배열 중첩

let multiArr = [['a','b','c'],['가','나','다']] // 배열은 중첩 가능 [] 안에 [] 또 쓰면 돼
console.log(multiArr); //flat() 중첩배열 합치기, ()안에는 중첩 depth 넣을 수 있다 2 넣으면 2차 중첩도 평평하게해줌

let flatArr = multiArr.flat()
console.log(flatArr)

//문자열 합치기 
const txtJoin = flatArr.join('-'); //join() : 문자열 합치기 괄호 안에 문자열 넣어주면 사이에 들어감
console.log(txtJoin) // () 안에 '-' 넣어서  a-b-c-가-나-다 로 나옴 안넣으면 그냥 abcd가나다 로 나옴