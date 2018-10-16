/* Functii Ajutor  */
    /* --- Suma numerelor naturale pozitive */
    function sumaNumerelor(N) {
        var total = 0;
        for(var i = 1; i <= N; i++){
            total += i;
        }
        return total;
    }
    /* --- Suma numerelor naturale pozitive */
    function numarParInpar(number, number_divided) {
        var status = "";
        if(number%number_divided === 1){
            var status = "Impar";
        }else {
            var status = "Par";
        }
        return status;
    }

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


    /* Functia 03 - Returnare valoare mai mare */
    var f3ComparaValori = document.getElementById('f3submit');
    var f3ReseteazaValori = document.getElementById('f3reset');

    f3ComparaValori.addEventListener("click", function(){
        var f3Numar01 = document.getElementById('f3numar01').value;
        var f3Numar02 = document.getElementById('f3numar02').value;
        var f3Result = document.getElementById('f3result');

        if(f3Numar01 === "" || f3Numar02 === ""){
            f3Result.innerText = "Introduceti valori";
        }else if (isNaN(f3Numar01) || isNaN(f3Numar02)){
            f3Result.innerText = "Nu ati introdus numere, ati introdus caractere!";
        }else if(f3Numar01 === f3Numar02){
                f3Result.innerText = "Numerel " + f3Numar01 + " si " + f3Numar02 + " sunt egale!" ;}
        else {
            var numarMaxim = Math.max(f3Numar01, f3Numar02);
            f3Result.innerText = "Numarul cel mai mare dintre " + f3Numar01 + " si numarul "+ f3Numar02 + " este "+ numarMaxim;
        }
        
    });
    f3ReseteazaValori.addEventListener("click", function(){
        document.getElementById('f3numar01').value = "";
        document.getElementById('f3numar02').value = "";
        document.getElementById('f3result').innerText = "Introduceti valori";
        document.getElementById('f3result').style.backgroundColor = "#ECF0F1";
    });

    /* Functia 04 - Returnare valoare mai mare */
    var f4ComparaValori = document.getElementById('f4submit');
    var f4ReseteazaValori = document.getElementById('f4reset');

    f4ComparaValori.addEventListener("click", function(){
        var f4Numar01 = document.getElementById('f4numar01').value;
        var f4Numar02 = document.getElementById('f4numar02').value;
        var f4Result = document.getElementById('f4result');

        if(f4Numar01 === "" || f4Numar02 === ""){
            f4Result.innerText = "Introduceti valori";
        }else if (isNaN(f4Numar01) || isNaN(f4Numar02)){
            f4Result.innerText = "Nu ati introdus numere, ati introdus caractere!";
        }else if(f4Numar01 === f4Numar02){
            f4Result.innerText = "Numerel " + f4Numar01 + " si " + f4Numar02 + " sunt egale!" ;
        }else {
            var numarMinim = Math.min(f4Numar01, f4Numar02);
            f4Result.innerText = "Numarul cel mai mic dintre " + f4Numar01 + " si numarul "+ f4Numar02 + " este "+ numarMinim;
        }
        
    });
    f4ReseteazaValori.addEventListener("click", function(){
        document.getElementById('f4numar01').value = "";
        document.getElementById('f4numar02').value = "";
        document.getElementById('f4result').innerText = "Introduceti valori";
        document.getElementById('f4result').style.backgroundColor = "#ECF0F1";
    });


    /* Functia 05 - Calcul numere pozitive */
    var f5ComparaValori = document.getElementById('f5submit');
    var f5ReseteazaValori = document.getElementById('f5reset');

    f5ComparaValori.addEventListener("click", function(){
        var f5Numar02 = document.getElementById('f5numar02').value;
        var f5Result = document.getElementById('f5result');
        if(isNaN(f5Numar02) || f5Numar02 === "" ){
            f5Result.innerText = "Sintagma " + f5Numar02 + " nu este numar";
        }else {
            f5Result.innerText = "Rezultatul numerelor este " + sumaNumerelor(f5Numar02);
        }
    });
    f5ReseteazaValori.addEventListener("click", function(){
        document.getElementById('f5numar02').value = "";
        document.getElementById('f5result').innerText = "Introduceti valori";
        document.getElementById('f5result').style.backgroundColor = "#ECF0F1";
    });

    /* Functia 06 - Calcul numere pozitive */
    var f6ComparaValori = document.getElementById('f6submit');
    var f6ReseteazaValori = document.getElementById('f6reset');

    f6ComparaValori.addEventListener("click", function(){
        var f6Numar02 = document.getElementById('f6numar02').value;
        var f6Result = document.getElementById('f6result');
        if(isNaN(f6Numar02) || f6Numar02 === "" ){
            f6Result.innerText = "Sintagma " + f6Numar02 + " nu este numar";
        }else {
            f6Result.innerText = "Numarul " + f6Numar02 + " este "+ numarParInpar(f6Numar02, 2);
        }
        
        
    });
    f6ReseteazaValori.addEventListener("click", function(){
        document.getElementById('f6numar02').value = "";
        document.getElementById('f6result').innerText = "Introduceti valori";
        document.getElementById('f6result').style.backgroundColor = "#ECF0F1";
    });