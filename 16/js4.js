/* let product1 = {item:'book',price:15000}
let product2 = {item:'game',price:25000}
let product3 = {item:'cd',price:2000}

가격 * 0.4로 tax 출력
 */



function Product(item,price){
    this.item = item;
    this.price = price;
    this.getInfo = function () {
            return 'item : '+ this.item + ', price : '+ this.price
        }
}
Product.prototype.getTax = function(){
    return (this.price*0.4)
}

//인스턴스 오브젝트가 값을 직접 소유하게 만들고 싶으면 construct에 만들고, prototype만 가지고 있고 참조해서 사용하고 싶으면 prototype에 만들어서 상속시키기

//인스턴스는 prototype 없고, constructor만 prototype갖는다. 부모에 해당하는 생성자 함수에 프로토타입을 추가할 뿐

const product1 = new Product('book',15000)
const product2 = new Product('game',25000)
const product3 = new Product('cd',6000)

console.log(product1.getInfo(),product1.getTax())
console.log(product2.getInfo(),product2.getTax())
console.log(product3.getInfo(),product3.getTax())

console.log(product3.__proto__); // constructor 생성된 오브젝트는 prototype을 가지고 있지 않음, 부모요소 prototype 을 확인할때 __proto__ 속성을 하용하여 확인.
