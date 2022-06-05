function Chul(name, age, ) {
    this.name = name;
    this.age = age;
    this.place = 'seoul'

    /* name: '김철수',
    age : 20,
    place : '서울' */

}

const Chul1 = new Chul('김철수', 20)
const Chul2 = new Chul('김영희', 29)
const Chul3 = new Chul('조민경', 33)

console.log(Chul1)
console.log(Chul2)
console.log(Chul3)


//반지름으로 지름 구하는 코드
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return this.radius * 2
    }
}

const circle1 = new Circle(5)
const circle2 = new Circle(10)

console.log(circle2.getDiameter())
console.log(circle1)


// 이름 , 국, 영, 수 , 평균  kim lee park

function Avg(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    this.getInfo = function () {
        return ' name : ' + this.name + ' kor : ' + this.kor + ' eng : ' + this.eng + ' math : ' + this.math
    }
}

Avg.prototype.getAvg = function () {
    return ' avg : ' + (this.kor + this.eng + this.math) / 3
}
const avg1 = new Avg('kim', 90, 98, 87)
const avg2 = new Avg('lee', 80, 78, 67)
const avg3 = new Avg('park', 50, 60, 70)

console.log(avg1.getAvg())

console.log(avg1.getInfo(), avg1.getAvg())
console.log(avg2.getInfo(), avg2.getAvg())
console.log(avg3.getInfo(), avg3.getAvg())

console.log(Avg.prototype) // {} object  { getAvg: [Function (anonymous)] }