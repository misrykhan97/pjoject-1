
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnX = true;
let turnO = false;
let box;
 
let positn1;
let newGameBtn = document.querySelector('#newGameBtn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let hidden=document.querySelector('.main');
let showGame=document.querySelector('#showGame')

const EnableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText='';
        msgContainer.classList.add('hide');
        msgContainer.classList.remove('stle')
        hidden.classList.remove('hidden')
    }
}
const resetGame=()=>{
    turnO=true;
    EnableBoxes()
}

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerHTML = "X";
            box.style.color = 'green'
            turnX = false;
        }
        else {
            box.innerText = "O";
            box.style.color = 'purple'
            turnX = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
let showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    msgContainer.classList.add('stle')
    hidden.classList.add('hidden')
  
}
const checkwinner = () => {
    winPatterns.forEach(ptrn => {

        let positn1 = boxes[ptrn[0]].innerText;
        let positn2 = boxes[ptrn[1]].innerText;
        let positn3 = boxes[ptrn[2]].innerText;

        if (positn1 !== "" && positn2 !== "" && positn3 !== "") {
            if (positn1 === positn2 && positn1 === positn3) {

                showWinner(positn1);
                // console.log(positn1, "is winner")
                //    let visible= document.getElementById=("won");
                //    console.log(visible)
                //    visible.style.visibility='visible';

                for (let box of boxes) box.disabled = true;
            }
        }
    });

}
const show=()=>{
    hidden.classList.remove('hidden');
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
showGame.addEventListener('click',show);






// ------------------------------------------------------------------------------------------------------------------------
// console.log(positn1);
// console.log(ptrn[0], ptrn[1], ptrn[2])

// console.log(boxes[ptrn[0]],boxes[ptrn[1]],boxes[ptrn[2]])
// --------------------------------------------------
// let container=document.querySelector(".container");
// let newDiv=document.createElement('div');
// container.prepend(newDiv)
// let H1=document.createElement('h1')
// H1.innerText="player-1: X"
// newDiv.appendChild(H1)
