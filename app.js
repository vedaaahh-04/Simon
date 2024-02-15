let gameSeq=[];
let userSeq=[];
let btns=["red","aqua","orange","blue"];

let started=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started==false){
      console.log("game started");
    started=true;

   levelUp();
    }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash")},250);
}

function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function(){
    btn.classList.remove("userFlash")},250);
}

function levelUp(){
     userSeq=[];
     level++;
     h2.innerText=`Level${level}`;

     let randIdx = Math.floor(Math.random()*3);
     let randColor= btns[randIdx];
     let randBtn=document.querySelector(`.${randColor}`);
     gameSeq.push(randColor);
     console.log(gameSeq);


      gameFlash(randBtn);
}



function checkAns(idx){
  if(userSeq[idx]===  gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000);
    }
  }  else{
    h2.innerHTML=`Game over! your score was <b>${level}</b> <br>press any key to start.`;
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector('body').style.backgroundColor="white";
    },150)
    maxScore(level);  
    reset();
  
  
  }
}


function btnPressed(){
  let btn = this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
  btn.addEventListener("click",btnPressed);
}


function reset(){
  started = false;
  gameSeq=[];
  userSeq=[];
  level =0;
}

function maxScore(level){
//  document.createElement('maxsc');
let maxsc=0;
while(started==true){
 let maxsc = level;
}

   if(maxsc<level){
      return level;
   }
   else{
    return maxsc;
   }
  console.log(`your max score is ${maxsc}`);
}


