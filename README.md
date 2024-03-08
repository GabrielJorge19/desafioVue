# DesafioVue

Trata-se de um desafio de programação, cujo objetivo é desenvolver uma aplicação para gerenciar clientes e produtos com a opção de atribuir produtos especificos a clientes especificos. E para isso deve ser utilizado o Framework Vue.js.

#### Observação
Todos os dados são mocados e disponibilizados através do servidor `json-server` que extrai os dados do arquivo `./src/stores/db.json`.

## Requisitos

* Responsividade `mobile first`.
* Metodologia e estrutura do framework.
* Utilização de dependency managers `npm, webpack`.
* HTML semântico.
* Legibilidade e manutenibilidade do código.
* Alcance dos objetivos propostos.
* Componentização e extensibilidade dos componentes Javascript.


## Setup

```sh
git clone "https://github.com/GabrielJorge19/desafioVue"
cd desafioVue
npm install
npm run start
```

Depois abra no seu navelador *[http://localhost:3050/](http://localhost:3050/)*.

## Telas

A tela `Clientes` alem de possui as funcionalidades de `ativar`, `desativar`, `adicionar`, `editar` e `remover` clientes, tambem é responsavel por atribuir produtos a clientes.

A tela `Produtos` possui as funcionalidades de `ativar`, `desativar`, `criar`, `editar` e `remover` produtos.

`Observação:` Não é possivel desativar um produto que está sendo utilizado por um cliente ativo.

## Configuração rede local

Por padrão os servidores de dados e o vite apenas estarão disponivel no computador local, mas seguindo os passos a seguir é possivel disponibilizá-los na rede local.

* Altere o script `"api"` no arquivo package.json com seu ip para ficar da seguinte forma.

```sh
"api": "npm json-server --host [seu ip] --port 3050 ./src/stores/db.json"
```

Pronto agora basta rodar o comando na pasta desafioVue.
```sh
    npm run start
```


## Comandos

* `start` - Faz o build e inicia o servidor api.
* `dev` - Inicia o servidor api e inicia o servidor de desenvolvimento.
* `api` - Inicia o servidor api na porta `3050` que tambem serve os arquivos staticos da pasta `./public/` gerado pelo build.
* `server` - Inicia o servidor de desenvolvimento.
* `build` - Faz o build.