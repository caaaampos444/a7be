/****************************************************
* Objetivo: Ajudar uma universidade a calcular a média de seus alunos
* Data: 13/09/23
* Autor: Gustavo Campos
* Versão: 1.0
*****************************************************/
const calcularMedias=function(valorN1,valorN2,valorN3,valorN4){
    let nota1=valorN1
    let nota2=valorN2
    let nota3=valorN3
    let nota4=valorN4
    let status
    if(nota1==''||nota2==''||nota3==''||nota4=='')
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
        return status='APROVADO'
    else if(media<50){
        return status='REPROVADO'
    }
    else if(media>=50&&media<=69){
        console.log('ALUNO DE EXAME')
        calcularMediasExame(media)
    }
}
const calcularMediasExame=function(valorMedia,valorNotaExame,valorNovaMedia){
    var readline=require('readline')
    var input=readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let notaExame=valorNotaExame
    let media=valorMedia
    let novaMedia=valorNovaMedia
    let novoStatus
    input.question('Digite a nota do exame: ',function(notaExameUsuario){
        notaExame=notaExameUsuario
        if(notaExame=='')
            console.log('ERRO: É obrigatório a digitação de todos os valores.')
        else if(isNaN(notaExame))
            console.log('ERRO: É obrigatório somente a digitação de valores numéricos.')
        else if(notaExame<0||notaExame>100)
            console.log('ERRO: Os valores devem estar entre 0 e 100.')
        else{
            novaMedia=(Number(media)+Number(notaExame))/2
            console.log('NOVA MÉDIA: '+`${novaMedia.toFixed(2)}`)
            if(novaMedia>60){
                novoStatus='APROVADO NO EXAME'
                return novoStatus
            }
            else{
                novoStatus='REPROVADO'
                return novoStatus
            }
            
        }
    })
}       
module.exports={calcularMedias,calcularMediasExame}