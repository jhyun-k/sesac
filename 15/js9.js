//논리합 or || 논리곱 and && 연산자를 이용한 단축평가
//좌항 우항 평가가 된다. 2개의 피연산자 중 어느 하나의 값으로 평가된다. 
//평가된 값은 형변환 하지 않고 현재 값을 반환한다. 

//논리합 ||

console.log(true || true) // true
console.log(false || true) // true
console.log(false || false) // false
console.log(60 || 50) // 60  --> 평가는 좌항부터 하니까 좌항이 true면 거기서 평가 끝 true나 false로 return하는게 아닌, 그 값을 출력 true true 면 좌항 나와~!~!
console.log(0 || 100) //100 0이면 false로 침
console.log('' || 100) //100 빈문자열 false로 침
console.log('' || 0) // false false 면 뒤에 있는 false가 나온다 (우항)
console.log(0 || null) //false false 면 뒤에 있는 false가 나온다 (우항)
console.log(0 || '') //false false 면 뒤에 있는 false가 나온다 (우항)


//논리곱 &&

console.log(true&&true) // true
console.log(true&&false) // false
console.log(300&&500) // true true 면 &&는 뒤에 있는 항까지 평가를 해야 판단할 수 있으므로 뒤에 있는 값 출력
console.log(0&&500) // 이미 0에서 false이기 때문에 평가 끝, 그냥 0 출력
console.log(undefined&&0) // 이미 undefined에서 false이기 때문에 평가 끝, 그냥 undefined 출력
console.log(1&&null) // null
console.log(''&&null) // ''(빈문자열)

//부정연산 
console.log(!10)//false (!true) => false  (값이 있기만 하면 true여 그 true의 부정이니까 false)
console.log(!!10)//true (!!true) => true
console.log(!'hello')//false
console.log(!!'hello')//true 






