/****************************************************
* Objetivo: Calcular a tabuada de um determinado número.
* Data: 13/09/23
* Autor: Gustavo Campos
* Versão: 2.0
*****************************************************/
const gerarTabuada=function(valorTabuada,valorInicial,valorFinal){
   let tabuada=valorTabuada
   let inicial=valorInicial
   let final=valorFinal
   console.log(`Tabuada do: ${tabuada}`)
   while(inicial<=final){
        let resultado=tabuada*inicial
        console.log(`${tabuada} x ${inicial} = ${resultado}`)
        inicial++
   }
}
const printarTabuada=function(valorTabuadaFinal,valorTabuadaInicial,valorFinal,valorInicial){
    let tabuadaInicial=String(valorTabuadaInicial)
    let tabuadaFinal=String(valorTabuadaFinal)
    let inicial=String(valorInicial)
    let final=String(valorFinal)
    let contador=inicial
    if(Number(final) < Number(inicial)){
        final = String(valorInicial)
        inicial = String(valorFinal)
    }
    if(Number(tabuadaFinal) < Number(tabuadaInicial)){
        tabuadaFinal = String(valorTabuadaInicial)
        tabuadaInicial = String(valorTabuadaFinal)
    }
    if(tabuadaInicial==''||tabuadaFinal==''||inicial==''||final=='')
        console.log('ERRO: É obrigatório o preenchimento de todos os valores.')
    else if(isNaN(tabuadaInicial)||isNaN(tabuadaFinal)||isNaN(inicial)||isNaN(final))
        console.log('ERRO: É obrigatório a entrada apenas de valores numéricos.')
    else if (tabuadaInicial<1||tabuadaInicial>100||tabuadaFinal<1||tabuadaFinal>100)
        console.log('ERRO: A tabuada deve estar entre 2 e 100')
    else if (inicial<1||inicial>50||final<1||final>50)
        console.log('ERRO: Os valor inicial e o valor final devem estar entre 1 e 50.')
    while(inicial<final){
        gerarTabuada(tabuadaInicial,contador,final)
        tabuadaInicial++
        inicial++
    }
}
module.exports={printarTabuada,gerarTabuada}