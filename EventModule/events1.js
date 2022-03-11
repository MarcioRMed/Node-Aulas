const {inherits} = require('util')
const {EventEmitter} = require('events')

//function construtora
function Character(name){
  this.name = name
}
//herda para o Character todas as funcoes EventEmitter
inherits(Character, EventEmitter)

// cria o personagem
const chapolin = new Character('Chapolin');

//houve o pedido
chapolin.on('help', ()=> console.log(`Eu o ${chapolin.name} colorado!`))

//mostra na tela a msg
console.log("Oh! e agora, quem poderá me defender?")

//emite o pedido
chapolin.emit('help')

co


// inherits - herdar
// on - escutando
// emit - emitindo