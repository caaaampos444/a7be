/****************************************************
* Objetivo: Ajudar uma universidade a calcular a média de seus alunos
* Data: 13/09/23
* Autor: Gustavo Campos
* Versão: 1.0
*****************************************************/
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const calcularMedias=function(valorN1,valorN2,valorN3,valorN4){
    let nomeAluno
    let nomeProf
    let sexoAluno
    let sexoProf
    let curso
    let nota1=valorN1
    let nota2=valorN2
    let nota3=valorN3
    let nota4=valorN4
    let status
    if(nota1==''||nota2==''||nota3==''||nota4==''||nomeAluno==''||nomeProf==''||sexoAluno==''||sexoProf==''||curso=='')
        console.log('ERRO: É obrigatório a digitação de todos os valores.')
    else if(isNaN(nota1)||isNaN(nota2)|| isNaN(nota3)||isNaN (nota4))
        console.log('ERRO: É obrigatório somente a digitação de valores numéricos.')
    else if(nota1<0||nota1>100||nota2<0||nota2>100||nota3<0||nota3>100||nota4<0||nota4>100)
        console.log('ERRO: Os valores devem estar entre 0 e 100.')
    else{
        media=(Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4
        console.log('MÉDIA: '+`${media.toFixed(2)}`)
    }
    if(media>70)
        status='APROVADO'
    else if(media<50){
        status='REPROVADO'
    }
    return status
    /*else if(media>=50&&media<=69){
         entradaDados.question('Aluno em exame. Digite a quinta nota: ',function(nota5Usuario){
            nota5=nota5Usuario
         })
    }*/
}
module.exports={calcularMedias}