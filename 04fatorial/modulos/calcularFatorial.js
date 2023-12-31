/****************************************************
* Objetivo: Calcular o fatorial de um número.
* Data: 17/09/23
* Autor: Gustavo Campos
* Versão: 1.0
*****************************************************/
const calcularFatorial=function(valorFatorial){
    let fatorial=Number(valorFatorial)
    if(fatorial==0)
        console.log('ERRO: Não existe fatorial de 0.') 
    else if(fatorial==1)
        console.log('ERRO: O valor precisa ser maior que 1.')
    else if(isNaN(fatorial))
        console.log('ERRO: É obrigatório a entrada apenas de valores numéricos.')
    else if(fatorial=='')
        console.log('ERRO: É obrigatório a digitação do valoor.')
    else{
        let resultado=1
        var fatorialStr=`Fatorial de ${fatorial} é ${fatorial}`
        for(let contador=fatorial;contador>=2;contador--){
            resultado=resultado*contador
            fatorialStr+=`x${contador-1}`
        }
        fatorialStr+=` = ${resultado}`
        
    }
    return fatorialStr
}
const printarResultado=function(valorFatorial){
    console.log(calcularFatorial(valorFatorial))
}
module.exports={printarResultado}