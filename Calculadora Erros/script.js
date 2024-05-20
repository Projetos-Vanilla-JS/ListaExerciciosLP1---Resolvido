function calcular() {
    const num1 = parseFloat(document.getElementById('num').value);
    const operador = document.getElementById('operador').value;
    const num2 = parseFloat(document.getElementById('num2'));
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
    }
    resultado.inneText = 'Resultado: ${calculo}';
}
