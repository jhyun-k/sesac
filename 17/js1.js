class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hi() {
        console.log('이름은 ' + this.name + ' 나이는 ' + this.age)
    }
}


/* class 클래스이름 {
    constructor(매개변수) {
        변수할당;
        변수할당;
    }
} */

const user1 = new User('홍길동', 10)
const user2 = new User('김철수', 25)

console.log(user1)
console.log(user2)

user2.hi()

//extend 

class AddUserLocation extends User {
    constructor(name, age, location) {
        super(name, age) //부모 클래스를 상속하는 것, 얘를 안 적어주면 위에 있는 값이 들어오지 않는다.
        this.location = location;
    }

    hi() {
        console.log('유저의 위치는 ' + this.location + '입니다.') // 덮어쓰기 (오버라이딩)
    }
}

const user3 = new AddUserLocation('잭', 22, 'ny')

console.log(user3)

user3.hi()

class AddUser extends User {
    constructor(name, age, location) {
        super(name, age) //부모 클래스를 상속하는 것, 얘를 안 적어주면 위에 있는 값이 들어오지 않는다.
        this.location = location;
    }
    hi() {
        super.hi()
        console.log('유저의 위치는 ' + this.location + '입니다.')
    }

}

const user4 = new AddUser('민경', 33, 'seoul')

user4.hi()

console.clear()

// Dog 클래스 color랑 weight, gender
// Dog 확장 시켜서 Cat만들기 위 속성 다 가지고 있고, 거기에 name 속성도 추가하기

class Dog {
    constructor(color, weight, gender) {
        this.color = color;
        this.weight = weight;
        this.gender = gender;
    }
}

const dog1 = new Dog('white', '2kg', 'girl')
const dog2 = new Dog('black', '5kg', 'boy')

console.log(dog1)
console.log(dog2)

class Cat extends Dog {
    constructor(color, weight, gender, name) {
        super(color, weight, gender);
        this.name = name;
    }
    goyang() {
        console.log('고양고양' + this.color + this.gender + this.weight + this.name)
    }
}

const cat1 = new Cat('cheese', '3kg', 'girl', 'miyu')

cat1.goyang()

