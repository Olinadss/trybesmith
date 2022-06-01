## Descrição

Eu desenvolvi todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) em meu código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜).

Para este projeto, eu desenvolvi um **CRUD** (_Create, Read, Update_ e _Delete_) de itens medievais, no formato de uma _API_, utilizando _Typescript_.

Eu criei alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o **MySQL**.

- Arquitetura REST;
- Autenticações e Permissões com JWT;
- Banco de Dados MySQL;

---

# Habilidades

Neste projeto, você será capaz de:

- Declarar variáveis e funções com tipagens _Typescript_;

- Construir uma _API Node Express_ utilizando o _Typescript_.


# Instruções para entregar seu projeto

## Antes de começar a desenvolver

1. Clone o repositório

- `git clone git@github.com:Olinadss/trybesmith.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd trybesmith`

2. Instale as dependências [**Caso existam**]

- `npm install`

3. Crie, na raíz do projeto, um arquivo .env contendo as seguintes variáveis:
  
  ```sh
  HOSTNAME=seu-host-mysql
  MYSQL_USER=seu-usuario-mysql
  MYSQL_PASSWORD=sua-senha-mysql
  JWT_SECRET=qualquer-string-aleatoria
  PORT=porta-para-iniciar-aplicação(padrão = 3000)
```

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`sd-014-b-project-blogs-api/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'Trybesmith',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'Trybesmith',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'Trybesmith',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

##FEEDBACKS

  -Caso queira dar alguma sugestão entre em contato comigo via linkedin: https://www.linkedin.com/in/danilodossantossouza/

  -Ficarei feliz em receber!

