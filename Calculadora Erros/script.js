function calcular() {
    const num1 = parseFloat(document.getElementById('num').value); //o nome num deveria ser num1
    const operador = document.getElementById('operador').value;
    const num2 = parseFloat(document.getElementById('num2')); //falta o .value
    const resultado = document.getElementById('resultado');

    let calculo;
    if (operador === '+') {
        calculo = num1 + num2;
    } else if (operador === '-') {
        calculo = num1 - num2;
    } else if (operador === '*') {
        calculo = num1 * num2;
    } else if (operador === '/') {
        if (num2 !== 0) {
            calculo = num1 / num2;
         else {
            calculo = "Erro: Divisão por zero";
        }
        //falta fechar o if
    }
    resultado.inneText = 'Resultado: ${calculo}';
    //inneText deveria ser innerText
    //ao invés de aspas deveria ser crase
}