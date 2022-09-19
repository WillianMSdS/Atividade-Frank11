function Confirmar() {
    let saida = document.getElementById("saida");
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);

    let resultado = peso / (altura * altura)

    if (resultado <= 18.5) {
        saida.innerHTML += `<p>Seu valor ${resultado}. É abaixo da média</p>`

    } else if (resultado >= 18.6 && resultado <= 24.9) {
        saida.innerHTML += `<p>Seu valor ${resultado}. É o peso ideal <strong>Parabéns</strong></p>`

    } else if (resultado >= 25.0 && resultado <= 29.9) {
        saida.innerHTML += `<p>Seu valor ${resultado}. Seu peso está levemente acima do peso</p>`

    } else if (resultado >= 30.0 && resultado <= 34.9) {
        saida.innerHTML += `<p>Seu valor ${resultado}. Você está na Obesidade de 1° grau</p>`

    } else if (resultado >= 35.0 && resultado <= 39.9) {
        saida.innerHTML += `<p>Seu valor ${resultado}. Você está na Obesidade de 2° grau <strong>Severa</strong></p>`
    
    }else {
        saida.innerHTML += `<p>Seu valor ${resultado}. Você está na Obesidade de 3° grau <strong>Mórbida</strong></p>`
    }
}