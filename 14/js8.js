/* for (let i = 1; i<= 10; i++){
    console.log(i)
}
*/
for(let i = 1; i<=9;i++){
    if (i%2===0) {
        continue;
    }
    console.log(`2x${i}=${i*2}`)
   
} 

for (let dan = 2; dan < 5; dan++) {
    console.log(`${dan}단 출력`)
    for (let num = 1; num < 10; num++) {
        console.log(`\t${dan}x${num}=${num*dan}`)
    } //inner for
} //out for