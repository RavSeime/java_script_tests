
//Simple rock paper scisors script. We'll use a dictionary
// codes: 0: Rock, 1: Paper, 2: Scissors. THis approach isn't great. But 
// For such a small scale it will do the trick.


let something = NaN

let dict = {};
dict["rock"] = 0;
dict["paper"] = 1;
dict["scissor"] = 2;

function getComputerChoice() {
    let retNr = Math.floor(Math.random()*3)
    return retNr
}

function userretrn_to_nr(user_val) {
    let nr = dict[user_val]
    return nr
}


let userretrn = window.prompt("rock, paper, scissors!")

let computerChoice = getComputerChoice()
userretrn = userretrn_to_nr(userretrn)

if(+computerChoice > +userretrn) {
    something = "You lose"
} else{ something = "You win :) "}
console.log(something)

