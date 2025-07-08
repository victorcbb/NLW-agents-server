# NLW Agents

Projeto desenvolvido durante o evento da Rocketseat.

## Descrição

API para gerenciamento de salas, utilizando Fastify, Drizzle ORM e PostgreSQL com extensão pgvector.

---

## Tecnologias e Bibliotecas Principais

- **[Fastify](https://fastify.dev/):** Framework web para Node.js, focado em performance.
- **[Drizzle ORM](https://orm.drizzle.team/):** ORM para TypeScript, utilizado para modelagem e manipulação do banco de dados.
- **[PostgreSQL + pgvector](https://github.com/pgvector/pgvector):** Banco de dados relacional com suporte a vetores.
- **[Zod](https://zod.dev/):** Validação de esquemas e variáveis de ambiente.
- **[drizzle-seed](https://github.com/drizzle-team/drizzle-seed):** Utilitário para popular o banco de dados com dados fake.
- **[fastify-type-provider-zod](https://github.com/fastify/fastify-type-provider-zod):** Integração de validação de tipos Zod com Fastify.
- **[@fastify/cors](https://github.com/fastify/fastify-cors):** Middleware CORS para Fastify.

---

## Padrões de Projeto

- **Modularização:** Separação clara entre rotas, conexão com banco, schemas e seeds.
- **Validação de ambiente:** Uso de Zod para garantir variáveis obrigatórias.
- **Type-safe:** Uso extensivo de TypeScript e validação de tipos nas rotas.

---

## Setup e Configuração

### 1. Clonar o repositório

```bash
git clone <repo-url>
cd server
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
ORIGIN=<Cliente HTTP>
PORT=<Porta do servidor>
DATABASE_URL=<URL do banco de dados>
```

### 4. Subir o banco de dados (PostgreSQL + pgvector)

```bash
docker-compose up -d
```

### 5. Rodar as migrations e seed

```bash
npm run db:generate
```

Gera SQL migrations baseadas no drizzle schema.

```bash
npm run db:migrate
```

Aplica no banco de dados as SQL migrations geradas.

```bash
npm run db:seed
```

Popula o banco de dados com informações fictícias.

### 6. Iniciar o servidor

```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`.

---

## Scripts principais

- `npm run dev` — Inicia o servidor em modo desenvolvimento.
- `npm run start` — Inicia o servidor em modo produção.
- `npm run db:seed` — Reseta e popula o banco de dados com dados fake.

---

## Endpoints

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista salas

---

## Observações

- O projeto utiliza Drizzle ORM com PostgreSQL e a extensão pgvector.
- O seed do banco cria 20 salas fictícias para testes.
