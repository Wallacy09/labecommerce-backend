const escolherNumero = (parOuImpar, numero) => {
    const computador = Math.floor(Math.random() * (5 - 0 + 1))
    const soma = Number(numero) + computador
    const resultado = soma % 2 === 0

    if(resultado && parOuImpar === "par") {
        console.log(`Você escolheu par e o computador escolheu ímpar. O resultado foi ${soma}. Você ganhou!`);

    }
    if(!resultado && parOuImpar === "par") {
        console.log(`Você escolheu par e o computador escolheu ímpar. O resultado foi ${soma}. Você perdeu!`);
        
    }

    if(!resultado && parOuImpar === "impar") {
        console.log(`Você escolheu ímpar e o computador escolheu par. O resultado foi ${soma}. Você ganhou!`);
        
    }

    if(resultado && parOuImpar === "impar") {
        console.log(`Você escolheu ímpar e o computador escolheu par. O resultado foi ${soma}. Você ganhou!`);
        
    }
}

escolherNumero(process.argv[2], process.argv[3])