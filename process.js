// lista de argumentos que esta rodando no node - que podemos trazer para o nosso programa
// process - é um objeto que fala dos processos que estao sendo rodado no node
// ex. id, versão node, caminho e muito mais informações

// 


// console.log(process.argv)

console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log('seu nome é' ,firstName,lastName)
console.log(`Seu nome é ${firstName} ${lastName}`)


// ex. terminal
// node process Maik Brito

// resposta seu nome é Maik Brito
// coloca cada parte em uma posição do array