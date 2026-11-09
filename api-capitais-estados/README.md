# API de Capitais dos Estados Brasileiros

API desenvolvida com **Node.js, TypeScript e Express** para consultar a capital de uma unidade federativa brasileira por meio da sigla.

## Requisitos

- Node.js instalado
- npm (instalado junto com o Node.js)

## Instalação

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

## Executar em modo de desenvolvimento

```bash
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Endpoint

```http
GET /estados/:sigla
```

Substitua `:sigla` pela sigla de uma unidade federativa. A consulta não diferencia letras maiúsculas e minúsculas.

### Exemplos de sucesso

**Requisição:**

```http
GET http://localhost:3000/estados/SP
```

**Resposta HTTP 200:**

```json
{
  "estado": "SP",
  "capital": "São Paulo"
}
```

Também funciona com letras minúsculas:

```http
GET http://localhost:3000/estados/df
```

**Resposta HTTP 200:**

```json
{
  "estado": "DF",
  "capital": "Brasília"
}
```

### Exemplo de sigla inexistente

**Requisição:**

```http
GET http://localhost:3000/estados/XX
```

**Resposta HTTP 404:**

```json
{
  "erro": "Estado não encontrado",
  "sigla": "XX"
}
```

## Testes solicitados na atividade

Com o servidor em execução, abra estas URLs no navegador ou faça as requisições em uma ferramenta como Postman:

| Sigla | Resultado esperado | Status |
|---|---|---:|
| SP | São Paulo | 200 |
| RJ | Rio de Janeiro | 200 |
| MG | Belo Horizonte | 200 |
| BA | Salvador | 200 |
| AM | Manaus | 200 |
| df | Brasília | 200 |
| XX | Estado não encontrado | 404 |

## Compilar e executar a versão compilada

```bash
npm run build
npm start
```

## Estrutura do projeto

```text
api-capitais-estados/
├── docs/
│   └── testes/
│       └── README.md
├── src/
│   └── server.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

O arquivo `package-lock.json` será criado automaticamente ao executar `npm install`.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
