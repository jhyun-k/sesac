const parent = {
    name : 'kim',
    age : 50
}

// 1. 생성자 함수로 만든다. 2. constructor로 만든다  3.Object <<모든 오브젝트를 만들 때 쓰는 생성자 함수 object.create()

const child = Object.create(parent) // 나의 부모요소의 프로토타입에 이거 넣어줘
//나는 비어있고, 값은 찍힘

console.log(child.name)
console.log(child.age)

const item={title:'tee',price:5000}
const itemChild = Object.create(item)
itemChild.price=7000

console.log(itemChild.price)
console.log(itemChild)

const itemChildChild = Object.create(itemChild)
console.log(itemChildChild.price)

