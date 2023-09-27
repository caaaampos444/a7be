var calculoTabuada=require('./modulos/tabuada.js')
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite a tabuada inicial a ser calculada: ',function(valorTabuadaInicial){
    let tabuadaInicial=valorTabuadaInicial
    entradaDados.question('Digite a tabuada final a ser calculada: ',function(valorTabuadaFinal){
        let tabuadaFinal=valorTabuadaFinal
        entradaDados.question('Digite o primeiro valor da contagem da tabuada: ',function(valorInicial){
            let inicial=valorInicial
            entradaDados.question('Digite o último número da contagem: ',function(valorFinal){
                let final=valorFinal
                calculoTabuada.printarTabuada(tabuadaFinal,tabuadaInicial,inicial,final)
            })
        })
    })
})