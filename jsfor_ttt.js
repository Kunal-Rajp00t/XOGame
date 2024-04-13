let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetgame");
let newgamebtn=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let msgcont=document.querySelector(".win");
let turn=true;



const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

const disablebox=()=>{
for(box of boxes){
    box.disabled=true;
}
}
const enablebox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    // msgcont.classList.add("hide");
}

const resetgame=()=>{
    turn=true;
    enablebox();
   msgcont.classList.add("hide");
}

const showWinner=(val)=>{
msg.innerText=`Congrats!! Winner Is ${val}`; 
msgcont.classList.remove("hide");
disablebox();
}
 
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("clicked");
        if(turn==true){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner= ()=>{
    for(pattern of winpat){
       val1=boxes[pattern[0]].innerText;
       val2=boxes[pattern[1]].innerText;
       val3=boxes[pattern[2]].innerText;
       if(val1!="" && val2!="" && val3!="" && (val1==val2 && val2==val3)){
        console.log(`Winner is ${val1}`);
        document.querySelector("body").classList.remove("hide");
        showWinner(val1);
       }
    }
    //  pos1=boxes[winpat[0]].innerText;
    //  pos2=boxes[winpat[1]].innerText;
    //  pos3=boxes[winpat[2]].innerText;
    //  console.log(pos1);
    //  console.log(pos2);
    //  console.log(pos3);
}

newgamebtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);