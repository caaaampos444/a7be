var calculo=require('./modulos/parOuImpar')
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite o valor inical: ',function(valorInicialUsuario){
    valorInicial=valorInicialUsuario
    entradaDados.question('Digite o valor final: ',function(valorFinalUsuario){
        valorFinal=valorFinalUsuario
        console.log(calculo.calcularParesOuImpares(valorInicial,valorFinal))
        entradaDados.close()
    })
})