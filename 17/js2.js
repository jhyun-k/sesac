const user = {
    name: '철수',
    age: '20',
    print: function () {
        console.log(`안녕하세요 ${this.name}입니다.이번 정부부터 ${this.age -1}살이라구`)
    }
}

user.print()



const zzinUser = {
    get nameOut() { //출력
        return this._name //key값이랑 이름 같으면 안되니까 _ 붙여줌
    },
    set nameIn(value) { //입력
        if (value.length < 5) {
            console.log('글자수가 틀렸습니다.');
            return
        }
        this._name = value
    }
}

zzinUser.nameIn = 'jane'
console.log(zzinUser.name)

zzinUser.nameIn = 'janeeee'
console.log(zzinUser._name)