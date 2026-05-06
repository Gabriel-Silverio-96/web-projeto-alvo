<p align="center">
<img alt="Background projeto alvo" src="https://github-production-user-asset-6210df.s3.amazonaws.com/53228013/588197386-2d82c31f-bd7a-47e3-bcc2-959504204aea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260506T095155Z&X-Amz-Expires=300&X-Amz-Signature=8576466be31194570ddb796c21dbfd207fe633245f0fb68dbf33481240a61dbb&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng"/>
</p>

<h1 align="center">
    Projeto Alvo
</h1>

Site institucional do Projeto Alvo, uma iniciativa que promove propósito de vida, valores e habilidades socioemocionais em estudantes do ensino médio de escolas públicas de Curitiba.

## Tecnologias

- Next.js
- React
- TypeScript
- ESLint
- lucide-react

## Requisitos

Use Node.js 20.9 ou superior. Esta versão mínima vem da documentação local do Next.js incluída em `node_modules/next/dist/docs/`.

Para conferir sua versão instalada:

```bash
node -v
```

Se você usa `nvm`, pode instalar e selecionar uma versão compatível:

```bash
nvm install 20
nvm use 20
```

## Instalação

Instale as dependências com npm:

```bash
npm install
```

O repositório inclui `package-lock.json`, então em ambientes de CI ou quando quiser uma instalação exatamente reproduzível, prefira:

```bash
npm ci
```

## Rodando em desenvolvimento

Inicie o servidor local:

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Build de produção

Gere a versão otimizada:

```bash
npm run build
```

Depois, execute o servidor de produção:

```bash
npm run start
```

## Lint

Rode a verificação de lint:

```bash
npm run lint
```

## Estrutura do projeto

- `app/`: arquivos do App Router, layout global, página inicial e estilos globais.
- `components/`: componentes reutilizáveis das seções do site.
- `public/`: arquivos estáticos, incluindo o logo.
- `next.config.ts`: configuração do Next.js.
- `tsconfig.json`: configuração do TypeScript.
- `eslint.config.mjs`: configuração do ESLint.
