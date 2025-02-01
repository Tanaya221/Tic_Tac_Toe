let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGame=document.querySelector("#new-btn");
let msgcantainer=document.querySelector(".msg-cantainer")
let msg=document.querySelector("#msg")
let turn0=true


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let resetGame=()=>{
    turn0=true
    enableboxes();
    msgcantainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log('box was clicked')
        if (turn0){
            box.innerText='o'
            box.style.color="black"
           turn0=false       
        }else{
            box.innerText="x";
            box.style.color="orange"
            
            turn0=true
        }
        box.disabled=true;
        checkwinner();
    });
});

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation , winner is ${winner}`;
    msgcantainer.classList.remove("hide");
    disabledboxes()
    

}

const checkwinner=()=>{
    for(pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);(for understand)
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText
        if(pos1Val!=''&&pos2Val!=''&&pos3Val!=''){
            if(pos1Val===pos2Val && pos1Val===pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val)
            }
        }

        

    }

}



newGame.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)