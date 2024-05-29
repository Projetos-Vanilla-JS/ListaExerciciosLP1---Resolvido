//nome da função no html é mostrarDia e não selecionarDia
function selecionarDia() {
    const diaNumero = parseInt(document.getElementById('diaNumero').value;
    //falta o parenteses no final do value
    const resultado = document.getElementById('resulado');
    //o id correto é resultado e não resulado

        let diaNome;
        switch (diaNumero) {
            case 1:
                diaNome = "Domingo";
                break;
            case :
            //faltou especifícar o valor do case
                diaNome = "Segunda-feira";
                break;
            case 3:
                diaNome = "Terça-feira";
                break;
            case 4:
                diaNome = "Quarta-feira";
                break;
            case 5:
                diaNome = "Quinta-feira";
                break;
            case 6:
                diaNome = "Sexta-feira";
                break;
            case 7:
                diaNome = "Sábado";
                break;
            default:
                diaNome = "Erro: Dia inválido"; 
        }
        resultado.innerText = `O dia correspondente é ${diaNome}`;
}
