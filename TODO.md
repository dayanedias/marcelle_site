# Entregas do portfólio Marcelle Uliano

- [x] **Página inicial editorial e responsiva:** o site apresenta Marcelle Uliano, sua proposta de valor em UX Research e Product Design, navegação clara entre início, trabalhos, abordagem/metodologia, sobre e contato, e funciona em desktop e dispositivos móveis.
- [x] **Seleção de trabalhos e leitura de cases:** a home exibe os cases com capa, título, resumo, papel, métodos de pesquisa, resultados e tags; existe acesso detalhado aos dois cases públicos do Notion.
- [x] **Conteúdo inicial fiel às fontes:** o conteúdo inicial reflete a bio pública, os canais profissionais e os dois trabalhos públicos do Notion, organizado sem inventar clientes ou métricas.
- [x] **Abordagem, contato e canais:** o site explica a abordagem de pesquisa contínua, colaboração, síntese de aprendizados e evolução de produto, além de oferecer chamadas claras para contato, LinkedIn, currículo, e-mail e WhatsApp.
- [x] **Área protegida da proprietária:** existe uma área reservada com Manus OAuth, usando a permissão admin para restringir a gestão do portfólio à proprietária.
- [x] **Cadastro, edição e remoção de cases:** a proprietária pode cadastrar, editar e remover cases, com título, resumo, papel, métodos de pesquisa, resultados, tags, capa e link do case, persistidos no banco.
- [x] **Metadados e entrega:** o projeto serve `GET /manus-routes.json`, mantém diagnósticos TypeScript configurados, tem healthcheck e está pronto para checkpoint/publicação no fluxo do Webdev.

# Rodada de ajustes — feedback da cliente (out/2026)

## Abertura e Hero
- [x] Manter o título “Entender antes de decidir” e remover microtextos de apoio (“Research-led, product-minded”, “Florianópolis · Brasil”, “Scroll”).
- [ ] Mover as informações pessoais (foto, nome, cargo e LinkedIn) do final da página para o topo, avaliando o peso visual do link do LinkedIn.
- [ ] Destacar “Ver trabalhos” como CTA principal (rolagem) e adicionar botão secundário “Baixar currículo”.

## Navegação e estrutura global
- [ ] Garantir que o cabeçalho superior permaneça fixo (sticky) durante a rolagem.
- [ ] Incluir acesso/download do currículo no menu superior fixo.

## Faixa de destaque
- [ ] Remover a frase atual (“Pesquisa não é uma etapa isolada. É uma forma de fazer produto”) e preservar a estrutura visual da faixa para o novo conteúdo.
- [ ] ⏳ Aguardando cliente: definir o novo conteúdo da faixa (métricas, valores ou cards de empresas anteriores).

## Trabalhos em foco (cases)
- [ ] Remover os microtextos e o texto de apoio do canto direito da seção.
- [ ] Migrar o conteúdo completo dos cases (textos e imagens) do Notion para dentro do site.
- [ ] Criar navegação interna fluida nas páginas de cada projeto (índice das seções + navegação entre cases).

## Processo de trabalho
- [x] Manter a seção de processo com o layout atual preservado.
- [ ] ⏳ Aguardando cliente: novo texto da seção de processo.

## Apresentação pessoal e fechamento
- [ ] Remover a seção final “Curiosa por natureza” (elementos movidos para a abertura).
- [x] Manter “Vamos conversar sobre o que importa?” como encerramento da página.

## Fluxo de design e cronograma
- [ ] ⏳ Aguardando cliente: exploração de layout, hierarquia e cores no Figma antes das mudanças complexas no código.
- [ ] Organizar as entregas considerando a viagem da cliente ao Rio de Janeiro (22/10 a 04/11/2026) — retomada das validações a partir de 05/11.
