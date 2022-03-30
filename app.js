var pwin = 0;
var cwin = 0;
function gameInfo() {
    alert(`Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. \nYou will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number press 'y'`);
}    

function computerProg() {
        var ctotal = 0;
        var comp = 0;

        do {
        comp = Math.floor(Math.random() * 10);
        ctotal = ctotal + comp;

        alert(`The Computer's new number is '${comp}. \nThe Computer's total is now '${ctotal}''`);
        
    }while (ctotal < 16);
    return ctotal
}

function playerProg(c) {
    var play = 0;
    var ptotal = 0;
    var ans = "";
    var pwin = 0;
    if (c > 20) {
    alert("Computer Lost")
    pwin++
    }else {
    alert("Players Turn");

    do {
        var cwin = 0;
        play = Math.floor(Math.random() * 10);
        ptotal = ptotal + play;

        alert(`Your new number is '${play}'. \nThe Players total is now '${ptotal}'`);
        
        if (ptotal > 20) {
            alert("Player Lost");
            cwin++
            break;
            
        }
            
        ans = prompt("Do you want another number? 'y' for yes, 'n' for no.")
        
    }while (ans == "y");
    }
    return ptotal, cwin, pwin;
}

function stopReport(a) {
    if (ans == "n") {
    alert(`You stopped at ${a}`)
    return ans
    }
}

function winChecker(a, b, cwin, pwin) {
    if ((a > b) && (a <= 20)){
    alert(`You Lost... You got ${b} and the Computer got ${a}`);
    cwin++
    }else if ((b > a) && (b <= 20)) {
    alert(`You win! You got ${b} and the computer got ${a}`);
    pwin++
    }
    return cwin, pwin;
}

function replay(pwin, cwin) {
    var ans = "";
    ans = prompt(`The current score is Player '${pwin}' : Computer '${cwin}'. \nPlay Again? 'y' for yes, 'n' for no"`);
    return ans
}


do{
stopReport(replay(pwin, cwin, winChecker(, playerProg(computerProg()), computerProg)))
var ans = replay()
}while(ans == "y")