const campoNumero = document.getElementById("numero");
const botaoVerificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botaoVerificar.addEventListener("click", function () {
    const valor = campoNumero.value;

    if (valor === "") {
        resultado.textContent = "Informe um número.";
        return;
    }

    const numero = Number(valor);

    if (!Number.isInteger(numero)) {
        resultado.textContent = "Digite um número inteiro.";
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = `${numero} é um número par.`;
    } else {
        resultado.textContent = `${numero} é um número ímpar.`;
    }
});
