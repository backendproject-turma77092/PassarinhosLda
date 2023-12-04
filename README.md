# Backend do Software de Logística - Passarinhos , Lda

- Cenário
  Com a velocidade requerida pelos negócios dos novos tempos cada vez mais temos assis􀆟do a uma
  digitalização de negócios mais tradicionais como por exemplo a gestão de stocks.
  Propomos-lhe o desafio de desenvolver o backend de um so􀅌ware de logística do armazém Pombo e
  Filhos lda.
  A empresa Pombo e Filhos lda, procede a compra e venda de material eletrónico e de iluminação.
  Os artigos adquiridos são guardados em armazém.
  O software a desenvolver deverá permitir:
- Gestão de fornecedores, tendo a noção de ficha de fornecedor tendo a noção de produtos fornecidos
- Gestão de Clientes, tendo noção de ficha de cliente e produtos adquiridos pelo mesmo
- Gestão de stocks de produtos em armazém
- Consulta de stock de determinado produto
- Datas de envio de encomendas;

## Resolução do Cenário .

1- Implementação da logica de base de dados.
1.1- logica da minha base de dados foi pensada da seguinte forma .
![Diagrama do Banco de Dados](src/imagens/database.png)

## Dificuldades e Melhoramentos.

- O Sequelize, um ORM (Object-Relational Mapper) popular para Node.js, segue uma convenção de nomenclatura que cria automaticamente nomes de tabelas no plural. Esta é uma prática comum em muitos ORMs e frameworks, pois segue a convenção de que uma tabela, que geralmente armazena múltiplos registros, deve ter um nome que reflete seu conteúdo como uma coleção de entidades, que é mais naturalmente expresso no plural.
  Daí muitas das minha tabelas serem no plurar .
- Nome das funções ainda em aprendizagem da minha dificuldade, em Ingles ou Portuges.
- Escolha de ter um uuid tambem foi um dos problemas a implementar.
- Com as dificuladades encontradas viso meu melhoramento em termos de codigo nomes e funções .

## Apresentação do Projecto

Este projecto envolve o desenvolvimento do backend para um software de logística destinado à empresa Passarinhos , Lda, que se dedica à compra e venda de material electrónico e de iluminação. O objectivo é digitalizar e optimizar a gestão de stocks, fornecedores e clientes da empresa.
Autenticação Segura: Utiliza JWT (JSON Web Tokens) e Passport para garantir um processo de login seguro. Cada sessão de login gera um novo tokenIdentifier, aumentando a segurança.
Criptografia de Dados Sensíveis: Os dados sensíveis dos clientes e fornecedores são criptografados para proteger a privacidade e a segurança.
Gestão de Utilizadores: Suporta diferentes tipos de utilizadores como clientes, fornecedores e transportadoras, cada um com as suas próprias funcionalidades e permissões.
Gestão de Artigos e Encomendas: Permite o registo e a consulta de artigos, incluindo informações sobre stock e vendas, além da gestão completa de encomendas, desde a criação até à entrega.

## Funcionalidades

- **Gestão de Fornecedores**: Permite o registo e gestão de fornecedores, incluindo informações sobre os produtos fornecidos.
- **Gestão de Clientes**: Facilita a criação e manutenção de fichas de clientes, assim como o registo de produtos adquiridos por estes.
- **Gestão de Stocks**: Oferece um sistema para a gestão de stocks de produtos no armazém, permitindo uma fácil consulta e controlo dos mesmos.
- **Consulta de Stock de Produtos**: Permite consultar o stock disponível de um determinado produto.
- **Gestão de Encomendas e Transporte**: Monitoriza as datas de envio de encomendas, assegurando um controlo eficaz sobre a logística de distribuição.

## Requisitos

- Tecnologias Usadas :
- faker-js/faker": "^8.2.0
- bcrypt": "^5.1.1
- chart.js": "^4.4.0
- cors": "^2.8.5
- dotenv": "^16.3.1
- ejs": "^3.1.9
- express": "^4.18.2
- jsonschema": "^1.4.1
- jsonwebtoken": "^9.0.2
- mysql": "^2.18.1
- nodemon": "^3.0.1
- passport": "^0.6.0
- passport-jwt": "^4.0.1
- react-chartjs-2": "^5.2.0
- sequelize": "^6.33.0
- sequelize-cli": "^6.6.1
- uuid": "^9.0.1

## Instalação e Configuração

- Instalação :
- npm install

- Migrações devido as necessidades das tabelas ordem é:

- npx sequelize db:migrate --name 20231025003338-create-usertype.js
- npx sequelize db:migrate --name 20231027123807-create-tipopagamento.js
- npx sequelize db:migrate --name 20231027123750-create-status.js
- npx sequelize db:migrate --name 20231106165811-create-fornecedorartigos.js
- npx sequelize db:migrate --name 20231025202920-create-clientes.js
- npx sequelize db:migrate --name 20231025204853-create-transportadora.js
- npx sequelize db:migrate --name 20231106154749-create-artigos.js
- npx sequelize db:migrate --name 20231106154126-create-armazem.js
- npx sequelize db:migrate , migrar o restante das migrações.
- nodemon src/server.js - arrancar servidor

Opção 2 :

- Dump da base de dados mais pratico :)

## Uso da Aplicação

- Versão V.1.
- Versao actual.
- Criação de artigos associados ao armazem e fornecedor .
- Gestão de entregas com data de entrega e relatorio.
- Compra de artigos
- Edição perfil , fornecedor, clientes , transportadora .
- Artigos com stock associados ao armazem.
- Bloquear cliente e fornecedor .

## Documentação da API

- Deixei um ficheiro do postman com toda informação das api, mas deixo aqui uma breve informação.

Clientes :

- end point - http://127.0.0.1:3000/create
- Logica
  {
  "username": "teste",
  "email": "email@gmail.com",
  "morada": "bairro nossa",
  "password":"12345",
  "nif": 999999990,
  "telefone": 0000000000,
  "localidade": "peso da régua",
  "codigoPostal": 5050,
  "userTypeId": 1
  }
  Fornecedores :
- end point - http://127.0.0.1:3000/create
  Logica
  {
  "username": "teste",
  "email": "email@gmail.com",
  "morada": "bairro nossa",
  "password":"12345",
  "nif": 999999990,
  "telefone": 0000000000,
  "localidade": "peso da régua",
  "codigoPostal": 5050,
  "userTypeId": 2
  }
  Transportadora :
- end point - http://127.0.0.1:3000/create
  Logica
  {
  "username": "teste",
  "email": "email@gmail.com",
  "morada": "bairro nossa",
  "password":"12345",
  "nif": 999999990,
  "telefone": 0000000000,
  "localidade": "peso da régua",
  "codigoPostal": 5050,
  "userTypeId": 3
  }

Login :

- end point - http://127.0.0.1:3000/sessao

dados {
"message": "Login bem-sucedido.",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRva2VuSWRlbnRpZmllciI6IjA1Y2Q5YWJjLWY5MWItNGVjMi1iNTMwLTdhNjU0YTM2ZmY2YiIsInVzZXJUeXBlSWQiOiJjbGllbnRlIiwiaWF0IjoxNzAxNzI0MjE2LCJleHAiOjE3MDE3Mjc4MTZ9.ZD7T4taeG3R1Jecvhty8CmMss4vqSQzVpcyLJ5cnl4A",
"userId": 1
}

Mudar Password :

- end point - http://127.0.0.1:3000/mudarpass

{
"oldPassword": "12345",
"newPassword": "123456"

}
Bearer Token
requersitos : Token {
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRva2VuSWRlbnRpZmllciI6IjMxY2FhYzJjLTk3ZDAtNDY0Mi1hNDBmLTU4ZTRjZWU5OTk3ZiIsInVzZXJUeXBlSWQiOiJmb3JuZWNlZG9yIiwiaWF0IjoxNzAxNzE5Nzc2LCJleHAiOjE3MDE3MjMzNzZ9.oyRy8YVbGF39e3zvXmFjD-BIPUjv60jeCQqP0uJ8zM0
}
Aqui o token identifica o user login :)

- Varios - Clientes

- http://127.0.0.1:3000/todosClientes method -Get
- http://127.0.0.1:3000/clientes/3 (id) method -Get
- http://127.0.0.1:3000/updateClientes/5(id) method - Put
- http://127.0.0.1:3000/clientes/7/desativar method - Put
- http://127.0.0.1:3000/clientes/7/activar method - Put

Varios - Fornecedores Optei por fazer diferente atravez do Token .

- http://127.0.0.1:3000/todosFornecedores method - Get
- http://127.0.0.1:3000/fornecedores method -Get atravez do token gerado pelo login :)
- http://127.0.0.1:3000/fornecedoreseditar method -Put atravez do token gerado pelo login :)
  dados {
  "username": "Antonio Mesquita",
  "email": "carretas33@gmail.com",
  "nif": 999999990,
  "telefone": 936637830,
  "password":"12345",
  "localidade": "peso da régua",
  "codigoPostal": 5050,
  "usertype": 2
  }
  4- http://127.0.0.1:3000/fornecedor/3/desativar method - Put
  5- http://127.0.0.1:3000/fornecedor/3/ativar method - Put

- Artigos :

- http://127.0.0.1:3000/artigosF method -Get
- http://127.0.0.1:3000/artigodata method get Desc
- http://127.0.0.1:3000/criarartigo method Post
  Dados {
  "nome": "lampada 99",
  "descricao": "Descrição do Artigo de post",
  "preco": 10.99,
  "armazemId": 1,
  "stock": 100
  }
  Bearer Token
  requersitos : Token {
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRva2VuSWRlbnRpZmllciI6IjMxY2FhYzJjLTk3ZDAtNDY0Mi1hNDBmLTU4ZTRjZWU5OTk3ZiIsInVzZXJUeXBlSWQiOiJmb3JuZWNlZG9yIiwiaWF0IjoxNzAxNzE5Nzc2LCJleHAiOjE3MDE3MjMzNzZ9.oyRy8YVbGF39e3zvXmFjD-BIPUjv60jeCQqP0uJ8zM0
  }

- http://127.0.0.1:3000/artigoarmazemstock/5 method -Get
- http://127.0.0.1:3000/artigomaisvendido method - Get

- Encomendas
- http://127.0.0.1:3000/todasemcomendas - Aqui encomendas Pendentes method - Get
- http://127.0.0.1:3000/documentoencomenda/1 encomendas por cliente ID method - Get
  Bearer Token
  requersitos : Token {
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRva2VuSWRlbnRpZmllciI6IjMxY2FhYzJjLTk3ZDAtNDY0Mi1hNDBmLTU4ZTRjZWU5OTk3ZiIsInVzZXJUeXBlSWQiOiJmb3JuZWNlZG9yIiwiaWF0IjoxNzAxNzE5Nzc2LCJleHAiOjE3MDE3MjMzNzZ9.oyRy8YVbGF39e3zvXmFjD-BIPUjv60jeCQqP0uJ8zM0
  }

- http://127.0.0.1:3000/encomendasentregues encomendas entregues method - Get
  Bearer Token
  requersitos : Token {
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRva2VuSWRlbnRpZmllciI6IjMxY2FhYzJjLTk3ZDAtNDY0Mi1hNDBmLTU4ZTRjZWU5OTk3ZiIsInVzZXJUeXBlSWQiOiJmb3JuZWNlZG9yIiwiaWF0IjoxNzAxNzE5Nzc2LCJleHAiOjE3MDE3MjMzNzZ9.oyRy8YVbGF39e3zvXmFjD-BIPUjv60jeCQqP0uJ8zM0
  }

- http://127.0.0.1:3000/encomenda Criar encomenda method -Post
  Bearer Token
  requersitos : Token {
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRva2VuSWRlbnRpZmllciI6IjMxY2FhYzJjLTk3ZDAtNDY0Mi1hNDBmLTU4ZTRjZWU5OTk3ZiIsInVzZXJUeXBlSWQiOiJmb3JuZWNlZG9yIiwiaWF0IjoxNzAxNzE5Nzc2LCJleHAiOjE3MDE3MjMzNzZ9.oyRy8YVbGF39e3zvXmFjD-BIPUjv60jeCQqP0uJ8zM0
  }
- http://127.0.0.1:3000/documentoencomenda/1 encomenda data por ID cliente :) method -Get
  Bearer Token
  requersitos : Token {
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRva2VuSWRlbnRpZmllciI6IjMxY2FhYzJjLTk3ZDAtNDY0Mi1hNDBmLTU4ZTRjZWU5OTk3ZiIsInVzZXJUeXBlSWQiOiJmb3JuZWNlZG9yIiwiaWF0IjoxNzAxNzE5Nzc2LCJleHAiOjE3MDE3MjMzNzZ9.oyRy8YVbGF39e3zvXmFjD-BIPUjv60jeCQqP0uJ8zM0
  }

## Contribuições / Site Online

https://schedulecreation.com/

Logins
Cliente - carretas2@gmail.com
Pw- 12345

Fornecedor - carretas90@gmail.com
Pw- 12345

Transportadora - carretastrsn@gmail.com
Pw- 12345

https://github.com/PedroSilvaSilva

# Licença

## Condições de Uso e Modificação

Este software é disponibilizado sob os termos desta licença, que permite o uso livre do software tal como está. No entanto, qualquer modificação, adaptação ou alteração do código-fonte requer autorização prévia e expressa do autor ou detentores dos direitos.

### Permissões

- **Uso**:Está autorizado a usar este software para qualquer propósito, incluindo aplicações comerciais, sem qualquer custo.

### Restrições

- **Modificação**: Não é permitido modificar, adaptar ou alterar o código-fonte deste software sem a prévia autorização escrita do autor ou detentores dos direitos.
- **Redistribuição**: Não é permitida a redistribuição de versões modificadas do software sem a autorização expressa do autor.

### Isenção de Responsabilidade

Este software é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. O autor não será responsável por quaisquer danos decorrentes do uso deste software.

---

Ao usar este software, concorda com os termos desta licença.

## Contacto e Suporte

https://github.com/PedroSilvaSilva

## Manutenção e Actualizações

- Versão v.2, Novas Fucnionalidades.
- Possobilidade de gestão de armazens , organização de Administrador.
- Criação de contas com autenticação de dois fatores.
- Criação de resportes personalizados .
- Gestão de produtos entre gestão de numeros serie e familias.
- Criação do Modulo inventarios .
