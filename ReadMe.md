Estudo de Node.js - Maik Brito -

Esse material foi construido apartir das aulas que estou estudando. São minhas anotações.

Obs.
        Se houver algum erro de ortografia me perdoe, ainda não parei para revisar o português.
        Não trabalhe a formatação com Markdown ainda...


Notion - pelo Notion consegue visualizar as imagens, e cores do documento

https://decorous-roarer-e8d.notion.site/Node-introdu-o-Maik-Brito-9b8d6426235c47b5a4dcb785e3a0169f



# Node -introdução- Maik Brito

Rocketseat - estudo

Material complementar

Prática C:\Users\Márcio\Desktop\DADOS\DEV_Programação\CURSOS\PROFESSORES\NODE_JS\MAIK BRITO\Node-Aulas

### TERMINAL Comandos

node - entra 

ex. 

node arquivo.js - carrega o arquivo

ou

node arquivo - somente

pwd - mostra o caminho das pastas

clear - limpa o terminal

### NPM - node Package Manager

        dependencies, Pakages, Modules

npm -v  - mostra se esta instalado com a versão

criando o projeto - package.json

npm init    -   inicia o própio pacote fazendo  perguntas sobre o projejo

npm init - y   - cria o proprio pacote sem fazer perguntas   

-y  - sim para tudo 

package.json

npm install cfonts - instalar modulos  cfonts

ou 

npm i cfonts

npm i cfonts -D     - instalar com dependencia de desenvolvedor - somente quando estiver desenvolvendo o projeto

npm t cfonts inquire opn    - instalando varios pacotes de uma só vez

npm update - remapei alterações para package-lock.json

usada quando for fazer alterações no packge.json

ignorar a pasta nodules para o github

.gitignore

node_modules/ 

npm install - instala tudo apartir da package.json

vai instalar todas as dependencias nescessaraias para o projeto

pode apagar 

node_modules

obs. não apagar package-lock.json

### criar scripts

package.json - modificar

“scripts”: {

“test”: “echo \”Error: no test secified\” && exit 1”

“start”: “node index.js”

{,

npm run test   - executa  outros scripts com outros nomes

npm start - comando especial do scritp não precisa do run

node index.js -   rodar o index.js

### Instalar pacote de maneira global

npm i  cfonts -g  - instala de maneira global

npm root -g - mostar onde esta instalado os pacotes globais

resultado

C:\Users\Márcio\AppData\Roaming\npm\node_modules

npm uninstall cfonts -g  desinstala o pacote da máquina

### mudar de versão dos pacotes

recomendado  não mexer no package.json manualmente muito perigoso

“moment”:  “ ^2.29.1 ”

2           29          1

major.minor.patch

major - versão do projeto. podera até quebrar aplicação

minor - vai haver alterações mas nao  vai quebra aplicação

patch - resolvendo um bug dentro do pacote

“moment”:  “ ^2.29.1 ”

^ - atualiza o “minor.patch” -  29.1

“moment”:  “ ~2.29.1 ”

~ - atualiza somente o “patch”  - 1   

“moment”:  “2.29.1 ”

mantem a mesma versão

“moment”:  “*”

vai mudar todas a versões

npm i moment@1.5.1  - alterar para uma versão específica


1high severity vulnerabilty - problemas de vunabilidade

npm outdated - verifica versões


Current - atual

Wanted - vesão mais desejada

Latest - ultima versão

npm upgrade - vai atualiza como mais desejada

npm i moment@latest  - atualiza a ultima versão

### Desinstalar pacotes

npm uninstall moment - remove o pacote  - package.json e node_modules
