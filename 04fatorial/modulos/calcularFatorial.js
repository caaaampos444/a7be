/****************************************************
* Objetivo: Calcular o fatorial de um número.
* Data: 17/09/23
* Autor: Gustavo Campos
* Versão: 1.0
*****************************************************/
const calcularFatorial=function(valorFatorial){
    let fatorial=valorFatorial
    let resultado=fatorial
    for(let contador=1;contador<fatorial;contador++)
        resultado=resultado*contador
}
module.exports={calcularFatorial}