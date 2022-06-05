const text = 'Hello World!';

console.log(text.length) //12 

console.log(text.charAt(0))
console.log(text.charAt(6))
console.log(text.indexOf('d')) // 같은 문자열이 있으면 해당 인덱스 번호 반환 / 같은 문자열 있으면 맨 처음 만나는 번호 반환
console.log(text.indexOf('k')) // 같은 문자열이 없으면 -1 반환
console.log(text.lastIndexOf('l')) // 뒤에서부터 검사하고 가장 먼저 만나는 인덱스 번호 반환 (인덱스번호의 순서가 바뀌는 건 아님)
console.log(text.includes('d')) // 해당 문자열으 포함하는지 판별한 논리값 (true/false로 나옴)
console.log(text.substring(-2,6)) // 해당 문자열의 m번째 이후 n번째 미만의 부분 문자열 반환
console.log(text.slice(-8)) //해당 문자열의 m번째 이후 n번째 미만의 부분 문자열 반환 (음수면 문자열 끝이 시작 위치가 됨) 

const spacetxt1 = "          aaa          bbbb          "
console.log(spacetxt1.trim()) // 앞뒤 공백 제거 (중간에 있는 공백은 못지움)

const spacetxt2 = "aaa bbbb ccc ddddd"
console.log(spacetxt2.split(' ')) // 구분자 사용하여 문자열을 나눔 (이 경우에는 공백을 구분자로 사용 , / -  등 다 가넝)
console.log(spacetxt2.split(' ',1)) // 구분자 사용하여 문자열을 나눔, 문자열의 개수 제한도 가능

const textSample = '가나다라마바사 ABCDEFG 123456 가나다라마바사'

console.log(textSample.slice(5,-10)) 
// slice(n) n번째 인덱스부터 끝까지   slice(n,m) n번째 부터 m-1 까지 출력 //바사 AB
// slice(n) 음수면 뒤부터 계산 (5,-10)이면 5번째 수인 바 부터 시작해서 뒤에서 10번째인 4까지 출력. -> 바사 ABCDEFG 1234
console.log(textSample.substring(5,-10))
console.log(textSample.substring(5,10))
//substring(n) n번째 인덱스부터 끝까지 substring(n,m) n번째 부터 m-1 까지 출력 
//substring 은 음수가 오면 0