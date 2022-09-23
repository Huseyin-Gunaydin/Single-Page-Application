const prozess = prompt(`eine Zahl zwischen 1-4:-1-Addiere,   2-subtrahieren, 3-multiplizieren, 4-dividiere`);

function addiere(){
    let num1 = prompt("erste Zahl eingeben");
    let num2 = prompt("zweite Zahl eingeben");
    var sum= parseInt(num1) + parseInt(num2);
    alert(sum)
}

function subtrahieren(){
    let num1 = prompt("erste Zahl eingeben");
    let num2 = prompt("zweite Zahl eingeben");
    var sum= parseInt(num1) - parseInt(num2);
    alert(sum)
}

function multiplizieren(){
    let num1 = prompt("erste Zahl eingeben");
    let num2 = prompt("zweite Zahl eingeben");
    var sum= parseInt(num1) * parseInt(num2);
    alert(sum)
}

function dividiere(){
    let num1 = prompt("erste Zahl eingeben");
    let num2 = prompt("zweite Zahl eingeben");
    var sum= parseInt(num1) / parseInt(num2);
    alert(sum)
}
    
switch(prozess){
    case "1" :addiere(); break;
    case "2":subtrahieren(); break;
    case "3":multiplizieren(); break;
    case "4":dividiere(); break;
    default:
        alert("Sie haben eine ungültige Nummer eingegeben. Bitte geben Sie eine Zahl zwischen 1 und 4 ein.");
    }