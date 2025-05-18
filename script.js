function somar() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let resultado = num1 + num2;
    document.getElementById('resultado').textContent = resultado;

}

function subtracao() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let resultado = num1 - num2;
    document.getElementById('resultado').textContent = resultado;

}
    
function multiplicacao() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let resultado = num1 * num2;
    document.getElementById('resultado').textContent = resultado;

}

function divisao() {

    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    if (num1 == 0 || num2 == 0) {
        document.getElementById('resultado').textContent = "inexistente";
    }else {
            var resultado = num1 / num2;
        document.getElementById('resultado').textContent = resultado;

    }
        

}