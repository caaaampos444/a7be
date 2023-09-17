var calculoMedias=require('./modulos/calcularMedias')
var readline=require('readline')
var entradaDados=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite a primeira nota: ',function(nota1Usuario){
    let nota1=nota1Usuario
    entradaDados.question('Digite a segunda nota: ',function(nota2Usuario){
        let nota2=nota2Usuario
        entradaDados.question('Digite a terceira nota: ',function(nota3Usuario){
            let nota3=nota3Usuario
            entradaDados.question('Digite a quarta nota: ',function(nota4Usuario){
                let nota4=nota4Usuario
                console.log(calculoMedias.calcularMedias(nota1,nota2,nota3,nota4))
                entradaDados.close()
            })
        })
    })
})