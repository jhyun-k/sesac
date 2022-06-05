//숫자를 입력 받아서 set get +10 출력

const number = {
    get outputNum() {
        return `출력값은 ${this._num+10}`;
    },
    set inputNum(value) {
        this._num = value;
    }
}

number.inputNum = 29;
console.log(number.outputNum)