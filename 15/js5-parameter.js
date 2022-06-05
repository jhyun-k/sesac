 function numAdd(a,b,c){
    console.log(arguments.length) //함수의 길이(여기서는 변수 3개니까 3)
    console.log(arguments[0]) // 첫번째 값
    console.log(arguments[1]) // 두번째 값
    console.log(arguments[2]) // 세번째 값
    return a+b+c ;
}

console.log(numAdd(10,20,30)) //60
console.log(numAdd(10,20)) //NaN C라는 값에 전달받은 인수가 없기 때문에


function numAdd2(a=0,b=0,c=0)/*초기값 주는 방법*/{ 
  console.log(arguments)
    return a+b+c;
}

console.log(numAdd2(10))

function numAdd3(...num){  //reset 파라미터 ES6
    console.log(num.length)
    console.log(num)
    return;
}
console.log(numAdd3(10,20,30,40));

//for문 이용해서 전달받은 매개변수의 총합을 구하기

function sum(add){
    var sum = 0;
    for(var i = 0; i < add[i] ; i++){
        sum += add[i];
    }
    return sum;
}

var add = [10,20,30,40]
console.log(sum(add))

function numsum(...num) {
    console.log(num.length)
    console.log(num[0])
    console.log(num[1])
    console.log(num[2])
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return sum;
}

console.log(numsum(10, 20, 30, 40, 50))