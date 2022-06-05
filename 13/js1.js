let a = 1;
let b = 2;
let c = {
    name: 'lee',
    age: 25,
    adderess: 'busan',
    tel: '01037371237'
};

let d = a;

console.log(d)

let e = c

console.log(e)

a=10;
console.log(a)
console.log(d)

let f = c;

console.log(f)

c.age = 50;

console.log(c)
console.log(f)
