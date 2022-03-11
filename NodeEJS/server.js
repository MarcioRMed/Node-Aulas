
const express = require('express'); //importa modulo servidor rotas
const path = require("path"); // importa modulo caminhos arquivos
const app = express(); // instancia app

app.set('view engine', 'ejs'); //local dos arquivos ejs dentro  dapasta view

app.use(express.static(path.join(__dirname, "public"))); //configuração funcionar o css, javascript

app.get('/', function (req, res) {  //rota principal
  res.render('pages/index');
})

app.get('/sobre', function (req, res) { //sub pasta
  res.render('pages/about');
})


// localhost:8080
app.listen(8080, () => console.log('Rodando...'));







//qualquer alteração nos arquivos js precisar inicar o servidor