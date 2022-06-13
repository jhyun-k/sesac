const fnc1 = function (data,fnc){
    const result3 = data * data; //100
    return result3
}
const fnc2 = function (data,fnc){//20
    const result2 = data /2;
    return fnc(result2) //fnc1(10)
}
const fnc3 = function (data,fnc){
    const result1 = data*5; //20
    return fnc(result1,fnc1)
}

let finalResult = fnc3(4,fnc2)

console.log(finalResult)

// fnc3 실행시켜라 그 뒤에 fnc2호출, fnc1 호출