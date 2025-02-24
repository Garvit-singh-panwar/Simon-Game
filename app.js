let gameSeq = [];
let userSeq = [];

let level = 0;
let gameStarted = false ;

let btns = ["red" , "orange" , "green" , "blue"];
let h3 = document.querySelector("h3");

document.addEventListener("keypress" ,()=>
{
    if(gameStarted == false){
        setTimeout(()=>{ 
            gameStarted = true;
            // console.log("gamestarted")
            levelUp();
        },500);
       
    }
   
} );


function gameFlash(randColor){

    randColor.classList.add("flash");
    setTimeout(()=>{
        randColor.classList.remove("flash");
    },200);

}

function userflesh(btn){
    // console.log("userflesh")
    let userpressed = btn;
    btn.classList.add("userFlesh");

    setTimeout(()=>{
        userpressed.classList.remove("userFlesh");
    },200);

}


function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    let randIndx = Math.floor(Math.random()*4);
    let randBtn = btns[randIndx];
    let randColor = document.querySelector("."+randBtn);
    // console.log(randIndx);
    // console.log(randBtn);
    // console.log(randColor);

    gameSeq.push(randBtn);
    // console.log(gameSeq);
    gameFlash(randColor);
    

}

function checkUserSeq(indx){
    
    if(gameSeq[indx] == userSeq[indx] ){
        // console.log("sameValue");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML = `Game over your current score is <strong>${level}</strong> \n Press any key to start the game`;
        
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "";
        },200);


        gameReset();
    }
}


function btnPress(){
    let btn = this;
    userflesh(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(`${userColor}`);
    // console.log(userColor);

    checkUserSeq(userSeq.length -1);

}


let gamebtns = document.querySelectorAll(".btn");
for(gamebtn of gamebtns){
    gamebtn.addEventListener("click" , btnPress);
}

function gameReset(){
    gameStarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
