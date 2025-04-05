let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


// ! First Part
document.addEventListener("keypress", function(){  
   if(started==false){
       console.log("Started");
       started=true;

       levelUp();  
   }
});

// ! Game Flash 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

// ! User Flash
function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash"); 
    }, 250);
}
// ! Second Step
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

// !      +
    // ! Second Step (2)
    let randIdx = Math.floor(Math.random()* 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

// ! Fifth Step
function checkAns(idx){
    // console.log("curr level: ",level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }

    else {
        h2.innerHTML=`Game over! And your score was <b>${level}<b> <br> press any key to start`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },150)
        reset();
    }
}

// ! Fourth Step
function btnPress(){
    let btn = this;
    // console.log("This is",this);
    // console.log(this);
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}
// ! Third Step

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

// ! Sixth Step
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}