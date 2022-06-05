//forEach구문 

var array = [1,2,3,4,5]

function arrList(arraylist){
    arraylist.forEach((data,index,arr)=>{
    console.log(`데이터 : ${data}`)
    console.log(`인덱스:${index}`)
    console.log(`arr:${arr}`)
})
}

arrList(array)
