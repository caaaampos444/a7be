var calcularMedia=require('./modulos/calcularMedias.js')
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite o nome do aluno: ',function(nomeAlunoUsuario){
    let nomeAluno=nomeAlunoUsuario
    entradaDados.question('Digite a primeira nota: ',function(nota1Usuario){
        let nota1=nota1Usuario
        entradaDados.question('Digite a segunda nota: ',function(nota2Usuario){
            let nota2=nota2Usuario
            entradaDados.question('Digite a terceira nota: ',function(nota3Usuario){
                let nota3=nota3Usuario
                entradaDados.question('Digite a quarta nota: ',function(nota4Usuario){
                    let nota4=nota4Usuario
                    let media=calcularMedia.calcularMedias(nota1,nota2,nota3,nota4)
                    if(media>70){
                        console.log(`APROVADO!\nMédia: ${media}`)
                        entradaDados.close()
                    }
                    else if(media<50){
                        console.log(`REPROVADO!\nMédia: ${media}`)
                        entradaDados.close()
                    }
                    else if(media>=50&&media<=69){
                        entradaDados.question('Digite a nota de exame: ',function(notaExameUsuario){
                        let notaExame=notaExameUsuario
                        let novaMedia=calcularMedia.calcularMediasExame(notaExame,media)
                        if(novaMedia>60)
                            console.log(`APROVADO NO EXAME!\nMédia antiga: ${media}\nNova média: ${novaMedia}`)
                        else
                            console.log(`REPROVADO NO EXAME!\nMédia antiga: ${media}\nNova média: ${novaMedia}`)
                        })
                    }
                })
            })
        })
    })
})