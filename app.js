/* ----- Functia 01 - Comparare Valori ----- */

var comparaValori   = document.getElementById('submit_01');
var reseteazaValori = document.getElementById('reset_01');

comparaValori.addEventListener("click", function(){
    var numberOne = document.getElementById('numar01').value;
    var numberTwo = document.getElementById('numar02').value;
    var resultOne = document.getElementById('result01');   
     
    if(numberOne === "" || numberTwo === ""){
        resultOne.innerText = "Introduceti valori";
    }else if(numberOne === numberTwo){
        resultOne.innerText = "Valorile sunt egale";
        resultOne.style.backgroundColor = "#2ecc71";
    }else {
        resultOne.innerText = "Valorile NU sunt egale";
        resultOne.style.backgroundColor = "#f62459";
    }
});
reseteazaValori.addEventListener("click", function(){
    document.getElementById('numar01').value = "";
    document.getElementById('numar02').value = "";
    document.getElementById('result01').innerText = "Introduceti valori";
    document.getElementById('result01').style.backgroundColor = "#ECF0F1";
});

/* Functia 02 - Returnare > vs < */

var f2ComparaValori = document.getElementById('f2submit');
var f2ReseteazaValori = document.getElementById('f2reset');

f2ComparaValori.addEventListener("click", function(){
    var f2Numar01 = document.getElementById('f2numar01').value;
    var f2Numar02 = document.getElementById('f2numar02').value;
    var f2Result = document.getElementById('f2result');

    if(f2Numar01 === "" || f2Numar02 === ""){
        f2Result.innerText = "Introduceti valori";
    }else if (isNaN(f2Numar01) && isNaN(f2Numar02)){
        f2Result.innerText = "Nu ati introdus numere, ati introdus caractere!";

    }else if(f2Numar01 < f2Numar02){
        f2Result.innerText = "Rezultat = -1 " + ", numarul " + f2Numar01 + " este mai mic decat " + f2Numar02;
        f2Result.style.backgroundColor = "#f5e653";
    }else if(f2Numar01 === f2Numar02){
        f2Result.innerText = "Rezultat = 0 " + ", numerele " + f2Numar01 + " si " + f2Numar02 + " sunt egale.";
        f2Result.style.backgroundColor = "#00e640";
    }else if(f2Numar01 > f2Numar02){
        f2Result.innerText = "Rezultat = 1 " + ", numarul " + f2Numar01 + " este mai mare decat " + f2Numar02;
        f2Result.style.backgroundColor = "#d2527f";
    }
});
f2ReseteazaValori.addEventListener("click", function(){
    document.getElementById('f2numar01').value = "";
    document.getElementById('f2numar02').value = "";
    document.getElementById('f2result').innerText = "Introduceti valori";
    document.getElementById('f2result').style.backgroundColor = "#ECF0F1";
});