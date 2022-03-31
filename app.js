function askName() {
    var uname = prompt("What is your name?")
    alert(`Hello ${uname} and Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. \n\nYou will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number press 'y'`);
}

function RNG() 
{
        var RNG = Math.floor(Math.random() * 10);
        return RNG
}

function userG() 
{   
    do {
        play = RNG()
        ptotal = ptotal + play;

        alert(`Your new number is '${play}'. \nThe Players total is now '${ptotal}'`);
            
        if (ptotal > 20) {
            alert("Player Lost");
            cwin++
            break;
        }
            
        ans = prompt("Do you want another number? 'y' for yes, 'n' for no.")
        
    }while (ans == "y");
    return ptotal
}

function computerG() 
{
    do {
        comp = RNG()
        ctotal = ctotal + comp;
    
        alert(`The Computer's new number is '${comp}. \nThe Computer's total is now '${ctotal}''`)
        
    }while (ctotal < 16);
    return ctotal
}

function compareCU(uname, cTotal, uTotal) {
    if ((cTotal > uTotal) && (cTotal <= 20))
    {
        alert(`${uname} Lost... You got ${uTotal} and the Computer got ${cTotal}`);
        var cWin = 0;
        cWin++
    }else if ((uTotal > cTotal) && (uTotal <= 20)) 
    {
        alert(`${uname} win! You got ${uTotal} and the computer got ${cTotal}`);
        var uWin = 0;
        uWin++
    }

    
    return cWin, uWin
}




function game() {

    compareCU(askName(), userG(), computerG())
}

game()





