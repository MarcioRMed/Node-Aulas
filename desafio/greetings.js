const getFlagValue = require('./flags')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)




// comando terminal
// $ node greetings --name "Maik Brito" --greeting "voce ta de boa"


// Resposta Maik
  // Oi Maik Brito. voce ta de boa