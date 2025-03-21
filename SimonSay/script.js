let userSeq = [];
let gameSeq = [];
const btns = ["purple","blue","pink","yellow"]
let started = false;
let level = 0;
const h2 = document.querySelector('h2');


const body = document.querySelector('body')
body.addEventListener("keypress",() =>{
    if(started === false){
        console.log("the game has started!")
        started = true
    }
    levelUp();

    
})

function levelUp(){
    level++;
    userSeq = [];
    
    h2.innerText = `Your level is ${level}.`

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`#${randomColor}`)
    gameSeq.push(randomColor);
    gameFlash(randomBtn);

}

function gameFlash(btn){
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white")
    }, 300);
}
function userFlash(btn){
    btn.classList.add("green");
    setTimeout(() => {
        btn.classList.remove("green")
    }, 300);
}

const allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br/> Press any key to start.`
        body.style.backgroundColor = "red";
        setTimeout(()=>{
            body.style.backgroundColor = "white";
        },200)
        reset();
    }
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}