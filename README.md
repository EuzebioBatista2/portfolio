# Portfólio — Euzebio Batista

Portfólio pessoal construído com Next.js, React, TypeScript e CSS próprio. A área de comentários usa uma API do Next.js e MongoDB Atlas.

## Desenvolvimento local

1. Use Node.js 16.20.1 ou superior.
2. Copie `.env.example` para `.env.local` e preencha `MONGODB_URI` com a connection string do Atlas.
3. Execute `npm install` e depois `npm run dev`.

O banco usado por padrão chama-se `portfolio`; é possível alterar esse nome com `MONGODB_DB_NAME`. A URI do MongoDB fica apenas no servidor e não deve usar o prefixo `NEXT_PUBLIC_`. Configure a mesma URI nas variáveis de ambiente do Vercel antes de publicar.

Se a rede local não resolver os registros SRV do Atlas, configure `MONGODB_DNS_SERVERS` com resolvedores DNS acessíveis, separados por vírgula, e reinicie o servidor Next.js.

Os nove comentários selecionados do portfólio publicado já foram migrados para a coleção `comments` no banco `portfolio`. A aplicação lê e grava comentários por meio das rotas de API abaixo.

## Rotas

- `/`: página principal, projetos, experiência, formação e comentários.
- `/api/comments`: lista e recebe comentários.
- `/api/comments/:id/avatar`: entrega a imagem de perfil de um comentário.
