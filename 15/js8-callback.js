//콜백함수

const plus = (num) => {
    return num +2;
}
const minus = (num) => {
    return num -2;
}

const multi = (num) => {
    return num *2;
}
const devide = (num) => {
    return num /2;
}

const cal = (func , numValue) => {
    return func(numValue)
}

cal(plus, 10)

console.log(cal(plus,10)) //12
console.log(cal(minus,10)) //8
console.log(cal(multi,10)) //20
console.log(cal(devide,10)) //5

