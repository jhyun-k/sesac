const gnbList = document.querySelectorAll('.gnb li')
const gnb = document.querySelector('.gnb')
const arrow = document.querySelector('.arrow')
const title = document.querySelector('.title')
const txt = document.querySelector('.txt')
const txtList = document.querySelectorAll('.txt li')

//txt ul의 초기 높이값
console.log(txtList[0].offsetHeight);
txt.style.height=txtList[0].offsetHeight+'px'

gnb.addEventListener('click',(e)=>{
    const selected = e.target;
    gnbList.forEach((li)=>{
        li.classList.remove('over')
    })
    selected.classList.add('over')
    updateContents(selected.dataset.index);
})

function updateContents(index){
    const posArrow = index*200/* gnbList.offsetWidth 도 가능 */;
    const posTitle = -(80*index)
    arrow.style.left = posArrow+'px'
    title.style.top = posTitle+'px  '
    txtList.forEach((li)=>{
        li.style.display = 'none'
    })
    txtList[index].style.display = 'block'
    txt.style.height=txtList[index].offsetHeight+'px'
}
