var num1, num2;

function suma() {
    num1=parseInt(document.getElementById("inputnumero1").value);
    num2=parseInt(document.getElementById("inputnumero2").value);
    
    document.getElementById("inputresultado").innerHTML = num1 + num2;
}

function resta() {
    num1=parseInt(document.getElementById("inputnumero1").value);
    num2=parseInt(document.getElementById("inputnumero2").value);
    
    document.getElementById("inputresultado").innerHTML = num1 - num2;
}

function multiplica() {
    num1=parseInt(document.getElementById("inputnumero1").value);
    num2=parseInt(document.getElementById("inputnumero2").value);
    
    document.getElementById("inputresultado").innerHTML = num1 * num2;
}

function divide() {
    num1=parseInt(document.getElementById("inputnumero1").value);
    num2=parseInt(document.getElementById("inputnumero2").value);
    
    document.getElementById("inputresultado").innerHTML = num1 / num2;
}

function borrar() {
    document.getElementById("inputresultado").innerHTML = "Resultado";
}




