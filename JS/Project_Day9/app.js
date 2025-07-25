// we'll access one by one 
//first we access the boxes using there class box as mentioned in the index.html
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");    // . for class selection
let msg = document.querySelector("#msg");   // # for id selection
// to track the next turn should be alternate b/w x and y player
//two player playerX and playerY
let turnO = true;//first we assume player y turn it is

//these are the winning pattern
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// 2nd last(6) : to reset game
const resetGame = () => {
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

//something should happen when we click the box of x or y
//when clicked some action should happen = event -> add event we have to(add event listener)
boxes.forEach((box) => {
    //1
    box.addEventListener("click",() => {
        console.log("Box is clicked");    // in console we can see that a box is clicked
        //box.innerText = "x or y"    //the given string will pop up after the click on the box
        if(turnO==true) {    
            //playerO turn
            box.innerText = "O";
            turnO = false;
        } else {               
            // playerX turn
            box.innerText = "X";
            turnO = true;

        }
        // here problem comes after filling all the box again on tapping a box value switches we have to allow only one tap or value affter that block
         box.disabled = true;

         //check for the winning pattern
        checkWinner();  //function created

    });

});

//7
//when one wins disable the buttons from taking the input
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

//8
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {    //in winner pos1Val goes
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); //fun call from 7
}
const checkWinner = () => {
    for(let pattern of winpatterns) {
        /*
        console.log(pattern);   // all patterns get printed in the same way written in winpatterns with there a[i][j] i indexes
        */

        //for accessing index values
        console.log(pattern[0],pattern[1],pattern[2]);
        
        /*
        //acc to the boxes position 0 to 8
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]); // boxxes k andar [in position pr jao]
        */

        //to print there innerbox value x or o whatever is there
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        //condition for there should not be any empty box
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner",pos1Val);  //can also write for pos2 and 3 cause three all are same
                showWinner(pos1Val);  //to use this for showing who is winner
                
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

