const cat = {
    name: 'momo',
    gender: 'Male',
    family: '러시안블루',
    age : 5,
    sayHello : function(){
        console.log('안녕하세요'+this.name+'입니다.')
    }
}

cat.sayHello()
console.log(cat.name) //점 표기법
console.log(cat['family']) //대괄호 표기법

//나이 20살 이름 김철수 사는곳은 서울

const chul = {
    name: '김철수',
    age : 20,
    place : '서울',
    hello : function(){
        console.log('안녕 내 이름은'+this.name+'나이는'+this.age+this.place+'살아')
    }
}

chul.gender = 'male'//점 표기법
// chul[gender] = 'male'//대괄호

console.log(chul);