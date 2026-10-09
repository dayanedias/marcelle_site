# Plano — Marcelle Uliano | UX Research & Product Design

## Escopo

Criar um portfólio editorial, responsivo e publicável para Marcelle Uliano, combinando apresentação profissional, abordagem de pesquisa, seleção de cases e uma área reservada para a proprietária manter o conteúdo do portfólio. O conteúdo inicial será baseado nas fontes públicas fornecidas: o Notion da Marcelle e as referências natalialumi.com e aakriti-chugh.in.

## Direção visual

- **Movimento:** editorial minimalista contemporâneo, com influência de portfólios de design independentes e layout assimétrico de revista.
- **Princípios:** clareza antes de decoração; ritmo vertical generoso; contraste tipográfico; conteúdo de pesquisa tratado como evidência, não como vitrine superficial.
- **Filosofia de cor:** base marfim quente e grafite suave para uma sensação humana e sofisticada; azul-petróleo como cor proprietária para sinalizar investigação, confiança e foco; coral discreto para destacar estados de ação sem competir com o conteúdo.
- **Paradigma de layout:** uma coluna editorial larga com navegação fixa/compacta, seções em bandas alternadas e cards de cases com imagens/tipografia em composição assimétrica; evitar uma página centralizada em grade rígida.
- **Elementos assinatura:** marca “MU” em monograma circular; marcador vertical “research / product”; chips de método com borda fina e cantos arredondados.
- **Interação:** navegação por âncoras com scroll suave; cards de trabalho expandem sua hierarquia no hover; filtros de tags atualizam a seleção sem recarregar; área de gestão revela formulário em painel lateral/modal.
- **Animação:** entradas suaves em fade/translate ao rolar, microinterações de 160–220ms, sem parallax excessivo; foco visível e estados reduzidos para usuários com `prefers-reduced-motion`.
- **Tipografia:** Manrope para texto e labels; Fraunces para títulos de impacto, com peso moderado. Hierarquia: display grande na abertura, títulos de seção compactos, corpo de leitura confortável em 18px/1.55.
- **Essência da marca:** Marcelle transforma escuta profunda em decisões de produto mais claras, relevantes e baseadas em evidências. Personalidade: curiosa, precisa, colaborativa.
- **Voz:** direta, calorosa e reflexiva. Exemplos: “Entender antes de decidir.” / “Pesquisa que encontra o que o produto ainda não consegue dizer.”
- **Wordmark/logo:** monograma MU em círculo aberto, com uma barra vertical sugerindo método e continuidade; nome completo ao lado em caixa baixa.
- **Cor proprietária:** azul-petróleo `#0F5B63`.

## Arquitetura de experiência

1. **Home (`/`)** — navegação, hero com proposta de valor, faixa de prova/serviços, trabalhos em destaque, abordagem, sobre curto e contato.
2. **Case (`/work/:slug`)** — leitura editorial de cada projeto, com contexto, papel, métodos, resultados, tags e link externo quando disponível.
3. **Gestão (`/manage`)** — rota protegida por Manus OAuth + `adminProcedure`; listagem de cases, criação, edição e remoção.
4. **Fallback (`/404`)** — página simples de retorno.

## Dados e backend

- Manter autenticação Manus OAuth já fornecida pelo starter, usando `adminProcedure` para a gestão.
- Criar tabela `portfolio_cases` com slug, título, resumo, contexto, papel, métodos, resultados, tags, capa, link, destaque e timestamps.
- Expor procedures tRPC públicas para listar cases e buscar por slug; procedures administrativas para criar, atualizar e remover.
- Adicionar seed idempotente dos dois cases públicos do Notion quando a tabela ainda estiver vazia, sem sobrescrever edições da proprietária.
- Capa inicial usa composição visual gerada em CSS (sem inventar fotos de pessoa); o campo de capa permanece editável para novos cases.

## Estrutura de pastas

- `client/src/pages/` — Home, CaseDetail, Manage, NotFound.
- `client/src/components/` — navegação, cards de case e componentes editoriais reutilizáveis.
- `client/src/lib/` — cliente tRPC existente e helpers de apresentação.
- `server/` — queries, seed e procedures de cases.
- `drizzle/` — schema e migrações.
- `public/` — manifesto de rotas e metadados estáticos.

## Restrições de conteúdo

Não inventar resultados quantitativos, clientes ou credenciais. Apresentar apenas o que está explícito nas fontes fornecidas; quando um campo ainda não estiver disponível, usar microcopy transparente como “Detalhes do case em construção” e deixar o campo editável na gestão.
