const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const newGame = document.getElementById("newGame");
const changeTheme = document.getElementById("changeTheme");
let turn = "user";

function computerTurn() {
    turn = "user";
    if (box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box5.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "") {
            box2.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box4.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box6.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "X" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box3.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box4.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box8.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box7.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box3.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box2.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box6.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box4.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "")(
            box2.textContent = "O"
        )
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "x" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box3.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box2.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box7.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "O" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box2.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box3.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box4.textContent = "O"
        }
    else if(box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box2.textContent = "O"
        }
    else if (box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box5.textContent = "O"
        }
    else if(box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if(box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if(box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box7.textContent = "O"
        }
    else if(box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if(box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if(box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box3.textContent = "O"
        }
    else if(box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box8.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box3.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box4.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box4.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "X" &&
        box3.textContent == "" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "O"){
            box3.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "X" &&
        box3.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            box7.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box7.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box1.textContent = "O"
        }
    else if (box2.textContent == "X" &&
        box1.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box5.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box8.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "O"){
            box2.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box4.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box2.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box4.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box2.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box7.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box2.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            box7.textContent = "O"
        }
    else if (box3.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box5.textContent == "" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box5.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box3.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box7.textContent = "O"
            //show that the game is over
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box8.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "X" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            box3.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box7.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box7.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box1.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "X" &&
        box3.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box2.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "O" &&
        box3.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            box7.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if (box4.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box8.textContent == "X" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box5.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box2.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "O" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box4.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box3.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box3.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box8.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            box1.textContent = "O"
        }
    else if (box6.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box7.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "" &&
        box6.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == ""){
            box5.textContent = "O"
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == ""){
            box9.textContent = "O"
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box4.textContent = "O"
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            box2.textContent = "O"
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "O" &&
        box3.textContent == "X" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box8.textContent == "X" &&
        box9.textContent == "O"){
            //show that the game is over
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box8.textContent == "" &&
        box9.textContent == "X"){
            box8.textContent = "O"
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "X" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            box4.textContent = "O"
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "X" &&
        box3.textContent == "" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            box3.textContent = "O"
        }
    else if (box7.textContent == "X" &&
        box1.textContent == "X" &&
        box2.textContent == "X" &&
        box3.textContent == "O" &&
        box4.textContent == "O" &&
        box5.textContent == "O" &&
        box6.textContent == "X" &&
        box8.textContent == "O" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box8.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box9.textContent == ""){
            box5.textContent = "O"
        }
    else if (box8.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box9.textContent == "X"){
            box7.textContent = "O"
        }
    else if (box8.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "" &&
        box5.textContent == "O" &&
        box6.textContent == "" &&
        box7.textContent == "O" &&
        box9.textContent == "X"){
            box6.textContent = "O"
        }
    else if (box8.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box9.textContent == "X"){
            box1.textContent = "O"
        }
    else if (box8.textContent == "X" &&
        box1.textContent == "O" &&
        box2.textContent == "X" &&
        box3.textContent == "X" &&
        box4.textContent == "X" &&
        box5.textContent == "O" &&
        box6.textContent == "O" &&
        box7.textContent == "O" &&
        box9.textContent == "X"){
            //show that the game is over
        }
    else if (box9.textContent == "X" &&
        box1.textContent == "" &&
        box2.textContent == "" &&
        box3.textContent == "" &&
        box4.textContent == "" &&
        box5.textContent == "" &&
        box6.textContent == "" &&
        box7.textContent == "" &&
        box8.textContent == ""){
            box5.textContent = "O"
        }
}


box1.addEventListener("click", () => {
    if (turn == "user" && box1.textContent == "") {
        box1.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {
        //put in a message to wait your turn
    }
})
box2.addEventListener("click", () => {
    if (turn == "user" && box2.textContent == "") {
        box2.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})
box3.addEventListener("click", () => {
    if (turn == "user" && box3.textContent == "") {
        box3.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})
box4.addEventListener("click", () => {
    if (turn == "user" && box4.textContent == "") {
        box4.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})
box5.addEventListener("click", () => {
    if (turn == "user" && box5.textContent == "") {
        box5.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})
box6.addEventListener("click", () => {
    if (turn == "user" && box6.textContent == "") {
        box6.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})
box7.addEventListener("click", () => {
    if (turn == "user" && box7.textContent == "") {
        box7.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})
box8.addEventListener("click", () => {
    if (turn == "user" && box8.textContent == "") {
        box8.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})
box9.addEventListener("click", () => {
    if (turn == "user" && box9.textContent == "") {
        box9.textContent = "X";
        turn = "computer";
        setTimeout(computerTurn, 500);
    }
    else {

    }
})