const { EventEmitter } = require('events')

const ev = new EventEmitter()

// ev.on('saySomething', (message)=>{
//   console.log("Eu ouvi voce:", message)
// })

ev.once('saySomething', (message)=>{
  console.log("Eu ouvi voce:", message)
})

ev.emit('saySomething' , "Maik")
ev.emit('saySomething' , "Marcio")


//.once - ouve somente uma vez e ignora as outras chamadas
//.emit - emitindo 
//.on - sempre ouvindo
