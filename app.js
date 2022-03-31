function askName() {
    var uname = prompt("What is your name?")
    alert(`Hello ${uname} and Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. \nYou will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number press 'y'`);
}

function RNG() 
{
        var RNG = Math.floor(Math.random() * 10);
        var nTotal = nTotal + RNG;
}

function userG() 
{
    do 
    {
        RNG()
        var uTotal = nTotal
    }while (uTotal < 16)
}

function computerG() 
{
    do 
    {
        RNG()
        var cTotal = nTotal
    }while (cTotal < 16)
}

function compareCG() {
    if ((cTotal > uTotal) && (cTotal <= 20)){
    alert(`${uname} Lost... You got ${uTotal} and the Computer got ${cTotal}`);
    cWin++
    }else if ((uTotal > cTotal) && (uTotal <= 20)) {
    alert(`${uname} win! You got ${uTotal} and the computer got ${cTotal}`);
    uWin++
    }

    
    return cWin, uWin
}




function game() {

    compareCG(computerG(), userG(askName()))
}
