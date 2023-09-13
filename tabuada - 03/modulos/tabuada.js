/****************************************************
* Objetivo: Calcular a tabuada de um determinado número.
* Data: 13/09/23
* Autor: Gustavo Campos
* Versão: 2.0
*****************************************************/
const gerarTabuada=function(valorTabuada,valorInicial,valorFinal){
    let tabuada=valorTabuada
    let contadorInicial=valorInicial
    let contadorFinal=valorFinal
    let resultado
    let status=false
    if(tabuada==''||contadorInicial==''||contadorFinal=='')
        console.log('ERRO: É obrigatório a digitação de todos os valores.')
    else if(isNaN(tabuada)||isNaN(contadorFinal)||isNaN(contadorInicial))
        console.log('ERRO: É obrigatório somente a digitação de valores numéricos.')
    
    else{
        contadorInicial=Number(contadorInicial)
        contadorFinal=Number(contadorFinal)
        tabuada=Number(tabuada)
        if(contadorInicial>contadorFinal){
            contadorInicial=valorInicial
            contadorFinal=valorFinal
        }
        while(contadorInicial<=contadorFinal){
            resultado=tabuada*contadorInicial
            console.log(`${tabuada} x ${contadorInicial} = ${resultado}`)
            contadorInicial++
            status=true
        }
    }
    return status
}
//console.log(gerarTabuada('4','2','40'))
module.exports={gerarTabuada}