var calculoTabuada=require('./modulos/tabuada.js')
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite a tabuada a ser calculada: ',function(valorTabuada){
    let tabuada=valorTabuada
    entradaDados.question('Digite o valor do contador inicial: ',function(valorContador){
        let contador=valorContador
        entradaDados.question('Digite o valor do contador final: ',function(valorContadorFinal){
            let contadorFinal=valorContadorFinal
            console.log(calculoTabuada.gerarTabuada(tabuada,contador,contadorFinal))
            entradaDados.close()
        })
    })
})