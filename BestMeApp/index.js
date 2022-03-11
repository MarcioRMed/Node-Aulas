const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

console.log(
  
  `\n 
  +++ Bem vindo! +++
  
  # Encontre sua melhor versão!
  # Use o App ao final de cada dia para refletir sobre sua jornada.
  # Respondas as perguntas`
  
  )

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " => ")
}

ask()

const answers = []

process.stdin.on("data", data => {
  answers.push( data.toString().trim())
  if(answers.length < questions.length){
    ask(answers.length)
  }else{
    // console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log( `
  Bacana Márcio!
  
  O que você aprendeu hoje foi:
  ${answers[0]}  
  
  O que te aborreceu e você poderia melhorar foi:
  ${answers[1]}

  O que te deixou feliz:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoas!

  Volte amanhã para novas reflexôes!!!
   
  `)
})



//process.on("exit") - fica escutando  quando aparecer exit

// process.stdout.write( data.toString().trim() + '\n')
// toString - transforma e string
// trim - aparar
//stdin.on - escuta a entrada do teclado - o que esta digitando

// process.exit() - desliga o processo





// ======== Explicações ========================
// process.stdout.write("alguma coisa \n \n \n")
// escrever na saida do processo no terminal
// /n - nova linha

// console.log usa por baixo dos panos esse processo

// 