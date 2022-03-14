
const express = require('express'); //importa modulo servidor rotas
const path = require("path"); // importa modulo caminhos arquivos
const app = express(); // instancia app

app.set('view engine', 'ejs'); //local dos arquivos ejs dentro  dapasta view

app.use(express.static(path.join(__dirname, "public"))); //configuração funcionar o css, javascript

app.get('/', function (req, res) {  //rota principal

  //esse array de objetos deve sair daqui
  const items = [
    {
      title: "D",
      message: "Desenvolver aplicações/serviçõs de forma fácil"
    },
    {
      title: "E",
      message: "EJS usa JavaScript para renderizar HTML"
    },
    {
      title: "M",
      message: "Muito fácil de usar"
    },
    {
      title: "A",
      message: "Avanço no desenvolvimento"
    },
    {
      title: "I",
      message: "Instalall ejs"
    },
    {
      title: "S",
      message: "Sintaxe simples"
    },    
  ];
 
  const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML'

  res.render('pages/index', {
      qualitys: items,
      subtitle: subtitle,
  });
})

app.get('/sobre', function (req, res) { //sub pasta
  res.render('pages/about');
})

app.get('/contatos', function (req, res) {
  res.render('pages/contact');
})


// localhost:8080
app.listen(8080, () => console.log('Servidor Rodando...'));







//qualquer alteração nos arquivos js precisar inicar o servidor