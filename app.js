var cWin = 0;
var uWin = 0;
var ans = "";
var uTotal = 0;
function askName() {
    var uname = prompt("What is your name?")
    alert(`Hello ${uname} and Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. \n\nYou will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number press 'y'`);
    return uname
}


function userG() 
{   
    var utotal = 0;
    do {
        var user = Math.floor(Math.random() * 10);
        
        utotal = utotal + user;

        alert(`Your new number is '${user}'. \nThe Players total is now '${utotal}'`);
            
        if (utotal > 20) {
            alert("Player Lost");
            cWin++
            break;
        }
            
        ques = prompt("Do you want another number? 'y' for yes, 'n' for no.")
        
    }while (ques == "y");
    return utotal
}

function computerG(a) 
{
    var ctotal = 0;
    do {
        if (a > 20) {
            cWin++
            break;
        }
        var comp = Math.floor(Math.random() * 10);
        ctotal = ctotal + comp;
    
        alert(`The Computer's new number is '${comp}. \nThe Computer's total is now '${ctotal}'`)

        if (ctotal > 20) {
            alert("Computer Lost");
            uWin++
            break;
        }
        
    }while (ctotal < 16);
    return ctotal
}

function compareCU(a, cTotal) 
{
    if ((cTotal > uTotal) && (cTotal <= 20))
    {
        alert(`${a} Lost... You got ${uTotal} and the Computer got ${cTotal}`);
        cWin++
    }else if ((uTotal > cTotal) && (uTotal <= 20)) 
    {
        alert(`${a} won! You got ${uTotal} and the computer got ${cTotal}`);
        uWin++
    }

    
    ans = prompt(`The current score is '${a}' '${uWin}' : 'Computer' '${cWin}' Do you want to play again? \n\n ('y' for yes) ('n' for no)`)
    return ans
}




function gm() 
{
    do {
    compareCU(askName(), computerG(userG()), )
    }while (ans == "y")
}



gm()