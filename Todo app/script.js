const ul = document.querySelector('ul');
const input = document.querySelector('input');
const btnAdd = document.querySelector('.add');
const deleteAll = document.querySelector('.delete-all')
btnAdd.addEventListener("click",()=>{
    const task = input.value;
    const list = document.createElement('li');
    const btn = document.createElement('button');
    const br = document.createElement('br');
    btn.innerText = "delete";
    btn.classList.add('delete');
    list.innerText = task;
    list.appendChild(br);
    list.appendChild(btn);
    ul.appendChild(list);
    input.value = "";
})

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON"){
        const deleteList = event.target.parentElement;
        deleteList.remove();
    }
})
deleteAll.addEventListener('click',()=>{
    const allList = document.querySelectorAll('li');
    for(list of allList){
        list.remove();
    }
})