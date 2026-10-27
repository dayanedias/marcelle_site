// Conteúdo completo dos cases, migrado das páginas públicas do Notion da Marcelle.
// Imagens ficam em client/public/cases/<slug>/. Negrito usa **texto**.
export type CaseBlock =
  | { type: "p" | "h3" | "quote"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "image"; src: string; alt: string }
  | { type: "gallery"; images: { src: string; alt: string }[] };

export type CaseSection = { id: string; title: string; blocks: CaseBlock[] };
export type CaseContent = { title: string; kicker: string; sections: CaseSection[] };

export const caseContent: Record<string, Record<"pt" | "en", CaseContent>> = {
  "protest-strategy-management": {
    "en": {
      "title": "Protest Strategy Management",
      "kicker": "An Evolution Driven by Continuous Discovery",
      "sections": [
        {
          "id": "overview",
          "title": "Overview",
          "blocks": [
            {
              "type": "p",
              "text": "**Product:** B2G (business-to-government) system for **active debt management and recovery,** used by state government legal offices."
            },
            {
              "type": "p",
              "text": "**Objectives:** Understand how government legal offices **collected debts through protest.** Based on this mapping, design and validate a **new protest experience** in the product."
            },
            {
              "type": "p",
              "text": "**My role:** End-to-end Product Designer, working on **research, solution design, validation, and evolution of the experience across** **multiple continuous discovery cycles.**"
            },
            {
              "type": "p",
              "text": "**Result:** The initial research mapped the protest journey and revealed a **highly manual process.** The learning accumulated over the years resulted in a proposal for a **new way of managing protest strategies.**"
            },
            {
              "type": "p",
              "text": "**Impact:** In usability tests, the new solution achieved an average **SUS score of 78.7**. **70% of debts were sent to protest through the new flow** after three months in production."
            }
          ]
        },
        {
          "id": "context",
          "title": "Context",
          "blocks": [
            {
              "type": "p",
              "text": "State and municipal government legal offices are responsible for recovering amounts owed and registered as Active Debt, through extrajudicial or judicial collection instruments, including the **protest of debts.**"
            },
            {
              "type": "p",
              "text": "In this project, I followed the evolution of the protest experience in the product: from the **initial investigation of users' work in legal offices**, to the **pilot usage monitoring** of a first solution, to the **evolution of protest strategy management** into a new experience."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/Linha_do_tempo_do_projeto-eng.png",
              "alt": "Linha do tempo do projeto"
            },
            {
              "type": "p",
              "text": "More than a one-time discovery effort, the project became a **continuous cycle of research, design, validation, and learning**, in which real-world use of the solution and frequent contact with users made it possible to identify **many improvement opportunities.**"
            }
          ]
        },
        {
          "id": "2022-initial-mapping",
          "title": "2022: Initial mapping",
          "blocks": [
            {
              "type": "p",
              "text": "The initial discovery aimed to map **how protest was actually carried out in practice**, what were the differences between government legal offices, and where the product could **best support users' work.**"
            },
            {
              "type": "h3",
              "text": "Methods used"
            },
            {
              "type": "ul",
              "items": [
                "**In-depth interviews** with users in different roles: managers, staff members, and interns;",
                "**Observations of users' work**, through on-site visits to legal offices;",
                "**Analysis of product usage** in controlled staging environments."
              ]
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/image.png",
              "alt": "Journey mapping overview of sending debts to protest at a State legal office."
            },
            {
              "type": "h3",
              "text": "Key findings"
            },
            {
              "type": "p",
              "text": "**1. There was no single way of working with protest.**"
            },
            {
              "type": "p",
              "text": "How debt protest was handled varied widely across legal offices. Team size, the monthly volume of debts sent to protest, and how teams worked with the system were all different."
            },
            {
              "type": "p",
              "text": "**2. Much of the work happened outside the product.**"
            },
            {
              "type": "p",
              "text": "The protest operation was **highly manual**, involving **several different tools.** Spreadsheets, emails, and other controls were used to segment, analyze, and send debts for protest."
            },
            {
              "type": "p",
              "text": "**3. The complexity was mainly in the decisions.**"
            },
            {
              "type": "p",
              "text": "The process involved several decision points before and after sending debts to protest: defining segmentation criteria, checking for impediments, analyzing debts, tracking returns, and deciding on follow-up actions."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/Jornada_do_protesto-eng.png",
              "alt": "Jornada do protesto"
            },
            {
              "type": "quote",
              "text": "**The product needed to go beyond simply sending debts for protest: it needed to support both the reasoning behind and the management of protest strategies.**"
            }
          ]
        },
        {
          "id": "2023-first-solution-and-pilot-launch",
          "title": "2023: First solution and pilot launch",
          "blocks": [
            {
              "type": "p",
              "text": "Based on the mapping of the protest journey, I translated the main problems identified into **solution hypotheses** to bring the product closer to the reality observed in legal offices."
            },
            {
              "type": "p",
              "text": "The goal was to **reduce manual activities** and provide more support for the **different decisions involved in the protest workflow**, from selecting which debts to send, to monitoring the results."
            },
            {
              "type": "p",
              "text": "The first proposals involved **reworking the sidebar**, using debts **groupings**, and monitoring results through **dashboards**."
            },
            {
              "type": "p",
              "text": "These hypotheses were tested with users through prototypes, guiding the development of the first solution."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/primeira_solucao-eng.png",
              "alt": "primeira solucao"
            },
            {
              "type": "p",
              "text": "Months later, the product began its first pilot focused on the protest functionality at a state legal office."
            },
            {
              "type": "p",
              "text": "Weekly follow-up sessions in the staging environment made it possible to observe the solution being used within the team's routine and to identify what still needed to evolve before going into production."
            },
            {
              "type": "quote",
              "text": "**Delivering the first solution expanded discovery, generating new questions.**"
            },
            {
              "type": "p",
              "text": "By following the product in use, we began to identify needs that could not have been fully anticipated during the initial research."
            }
          ]
        },
        {
          "id": "2024-supporting-collaboration-in-the-protest-workflow",
          "title": "2024: Supporting collaboration in the protest workflow",
          "blocks": [
            {
              "type": "p",
              "text": "One of these needs was related to **collaboration**. The protest workflow involved different team members in the segmentation and analysis of debts, but part of this work was still happening in a **shared spreadsheet**."
            },
            {
              "type": "p",
              "text": "This revealed a gap in the first solution: **the product also needed to represent the collaborative work behind the protest strategy.**"
            },
            {
              "type": "p",
              "text": "As a result, **shared tags** were developed and validated, allowing the team to organize and split debt analysis within the system."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etiquetas-eng.png",
              "alt": "etiquetas"
            },
            {
              "type": "p",
              "text": "The next evolution would not be just about improving how protests were sent, but about rethinking how the product helped legal offices **build, track, and reuse their debt protest strategies**."
            }
          ]
        },
        {
          "id": "2025-a-new-user-need-emerges",
          "title": "2025: A new user need emerges",
          "blocks": [
            {
              "type": "p",
              "text": "Years later, a meeting with the legal office that had taken part in the pilot brought the protest experience back into discussion. Users were still struggling to **create and manage their protest strategies.**"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/Estrategia-eng.png",
              "alt": "Estrategia"
            },
            {
              "type": "p",
              "text": "The problem, therefore, was no longer simply about executing the protest, but about helping users **build, review, and manage the strategies behind it**."
            },
            {
              "type": "p",
              "text": "The new discovery sought to understand the **needs related to creating and managing protest strategies**, considering both operational and managerial users."
            },
            {
              "type": "p",
              "text": "We also needed to define which improvements should be part of the new experience, balancing **user impact and implementation effort**."
            }
          ]
        },
        {
          "id": "new-solution-protest-strategy-management",
          "title": "New solution: Protest strategy management",
          "blocks": [
            {
              "type": "p",
              "text": "Based on this understanding, we structured a new experience proposal. We proposed a **new area to centralize the management of protest strategies**."
            },
            {
              "type": "p",
              "text": "The main interaction decision was to organize strategy creation into **wizard steps**, allowing users to move gradually through definition, analysis, and review."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etapa1-eng.png",
              "alt": "etapa1"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etapa2-eng.png",
              "alt": "etapa2"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etapa3-eng.png",
              "alt": "etapa3"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/reuso-eng.png",
              "alt": "reuso"
            }
          ]
        },
        {
          "id": "validation",
          "title": "Validation",
          "blocks": [
            {
              "type": "p",
              "text": "The solution was prototyped in **high fidelity in Figma** and validated with different user profiles through **usability testing.**"
            },
            {
              "type": "p",
              "text": "The main hypothesis was that the new experience would allow users to build protest strategies in a more **intuitive and assertive** way."
            },
            {
              "type": "p",
              "text": "The prototype validations showed that some details of the experience were fundamental for users to **trust the results presented by the system**."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/validacao-eng.png",
              "alt": "validacao"
            }
          ]
        },
        {
          "id": "2026-results",
          "title": "2026: Results",
          "blocks": [
            {
              "type": "p",
              "text": "We launched the new protest strategy management in **January 2026 as an MVP** for the pilot client."
            },
            {
              "type": "p",
              "text": "We monitored adoption through **Mixpanel**, comparing **debts sent to protest through the new experience** with the **previous feature,** which remained available: users could choose which path to use."
            },
            {
              "type": "ul",
              "items": [
                "In January, the **previous feature** still accounted for most of the sends **(orange)**.",
                "In March, the **new flow** accounted for most of the volume **(purple)**."
              ]
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/mixpanel-eng.png",
              "alt": "mixpanel"
            }
          ]
        },
        {
          "id": "conclusions",
          "title": "Conclusions",
          "blocks": [
            {
              "type": "p",
              "text": "This project started with a question about how government legal offices actually worked and ended with the redesign of a **complex experience within the product**."
            },
            {
              "type": "p",
              "text": "The first solution generated **new questions** when it met real-world use. Those questions led to **new research,** which in turn guided a **new experience.**"
            },
            {
              "type": "p",
              "text": "Therefore, the protest strategy management solution designed in 2025 was only possible because of the **2022 mapping, the 2023 first pilot, and the 2024 shared tags**. Each cycle reduced the uncertainty of the next."
            },
            {
              "type": "p",
              "text": "For me, this was the biggest learning from this project: **continuous discovery is not just about researching before building. The product evolves because users' reality keeps teaching us.**"
            }
          ]
        }
      ]
    },
    "pt": {
      "title": "Protesto da dívida ativa em procuradorias",
      "kicker": "Uma evolução orientada pelo discovery contínuo",
      "sections": [
        {
          "id": "resumo",
          "title": "Resumo",
          "blocks": [
            {
              "type": "p",
              "text": "**Produto:** Sistema B2G (business-to-government) **de gestão e recuperação da Dívida Ativa**, utilizado por procuradorias estaduais e municipais."
            },
            {
              "type": "p",
              "text": "**Objetivos:** Entender **como as procuradorias estaduais realizavam a cobrança de CDAs** (certidões de dívida ativa) **por meio do protesto.** A partir desse mapeamento, **projetar e validar uma nova experiência** de protesto no produto."
            },
            {
              "type": "p",
              "text": "**Meu papel:** Product Designer de **ponta a ponta,** atuando em pesquisa, design de soluções, validação e evolução da experiência em diversos ciclos de discovery contínuo."
            },
            {
              "type": "p",
              "text": "**Resultado:** A pesquisa inicial mapeou a jornada de protesto e revelou um processo altamente manual. O aprendizado acumulado ao longo dos anos resultou na proposta de uma **nova forma de gerenciar as estratégias de protesto.**"
            },
            {
              "type": "p",
              "text": "**Impacto:** Em testes de usabilidade, a nova solução obteve média SUS **78,7**. **70% das CDAs foram enviadas a protesto pelo novo fluxo** após três meses em produção."
            }
          ]
        },
        {
          "id": "contexto",
          "title": "Contexto",
          "blocks": [
            {
              "type": "p",
              "text": "Judicialmente, é responsabilidade das Procuradorias Estaduais e Municipais recuperar valores devidos inscritos em Dívida Ativa do Estado ou Município, através de **instrumentos de cobrança** extrajudiciais ou judiciais - dentre eles, o **protesto das CDAs** (certidões de dívida ativa)."
            },
            {
              "type": "p",
              "text": "Neste projeto, acompanhei a evolução da experiência de protesto no produto: desde a **investigação inicial do trabalho dos usuários** nas Procuradorias, o **acompanhamento de uso em piloto** de uma primeira solução, e a **evolução da gestão de estratégias** de protesto em uma nova experiência."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/Linha_do_tempo_do_projeto.png",
              "alt": "Linha do tempo do projeto"
            },
            {
              "type": "p",
              "text": "Mais do que um discovery pontual, o projeto se tornou um **ciclo contínuo de pesquisa, design, validação e aprendizado**, no qual o uso real da solução e o contato frequente com os usuários permitiu identificar **diversas oportunidades de melhoria.**"
            }
          ]
        },
        {
          "id": "2022-mapeamento-inicial",
          "title": "2022: Mapeamento inicial",
          "blocks": [
            {
              "type": "p",
              "text": "O discovery inicial buscou mapear **como o protesto era realizado na prática,** quais eram as **diferenças entre procuradorias** e onde o produto poderia **apoiar o trabalho dos usuários.**"
            },
            {
              "type": "h3",
              "text": "Métodos utilizados"
            },
            {
              "type": "ul",
              "items": [
                "**Entrevistas em profundidade** com usuários de diversos papéis: Gestores, servidores e estagiários;",
                "**Observações do trabalho dos usuários**, com visitas presenciais às Procuradorias;",
                "**Análises da utilização do produto** em ambientes controlados de homologação."
              ]
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/image.png",
              "alt": "Visão geral do mapeamento da jornada de envio de CDAs a protesto de uma Procuradoria Estadual."
            },
            {
              "type": "h3",
              "text": "Principais descobertas"
            },
            {
              "type": "p",
              "text": "**1. Não existia um único jeito de trabalhar com protesto.**"
            },
            {
              "type": "p",
              "text": "A forma de trabalhar com o protesto das dívidas variava bastante entre as procuradorias. O **tamanho das equipes,** o **volume de CDAs enviadas a protesto mensalmente**, e a **forma de trabalhar com o sistema** eram diferentes."
            },
            {
              "type": "p",
              "text": "**2. Grande parte do trabalho acontecia fora do produto.**"
            },
            {
              "type": "p",
              "text": "A operação de protesto era **bastante manual,** envolvendo o controle de **diversas ferramentas. Planilhas, e-mails** e outros controles eram usados para segmentar, analisar e enviar as CDAs a protesto."
            },
            {
              "type": "p",
              "text": "**3. A complexidade estava principalmente nas decisões.**"
            },
            {
              "type": "p",
              "text": "O processo tinha várias etapas de decisão **antes e depois do envio:** definir critérios de segmentação, verificar impedimentos, analisar as CDAs, acompanhar retornos e decidir ações posteriores."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/Jornada_do_protesto.png",
              "alt": "Jornada do protesto"
            },
            {
              "type": "quote",
              "text": "**O produto precisava ir além de apenas automatizar o envio das CDAs a cobrança: ele devia apoiar o raciocínio e a gestão das estratégias de protesto.**"
            }
          ]
        },
        {
          "id": "2023-primeira-solucao-e-inicio-do-piloto",
          "title": "2023: Primeira solução e início do piloto",
          "blocks": [
            {
              "type": "p",
              "text": "A partir do mapeamento da jornada de protesto, traduzi os principais problemas identificados em hipóteses de soluções para **aproximar o produto da realidade observada nas procuradorias.**"
            },
            {
              "type": "p",
              "text": "O objetivo era **reduzir atividades manuais** e dar mais suporte às **diferentes decisões envolvidas no protesto,** desde a seleção das CDAs para envio até o acompanhamento dos resultados."
            },
            {
              "type": "p",
              "text": "As primeiras propostas envolveram a **reformulação da sidebar,** o uso de **agrupamentos de CDAs** e o acompanhamento através de **dashboards.**"
            },
            {
              "type": "p",
              "text": "Essas hipóteses foram testadas com os usuários por meio de protótipos, orientando o desenvolvimento da primeira solução."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/primeira_solucao.png",
              "alt": "primeira solucao"
            },
            {
              "type": "p",
              "text": "Meses depois, o produto iniciou o seu primeiro piloto focado na funcionalidade de protesto em uma Procuradoria Estadual."
            },
            {
              "type": "p",
              "text": "Acompanhamentos semanais em homologação permitiram observar a solução sendo usada dentro da rotina da equipe e identificar o que ainda precisava evoluir antes da entrada em produção."
            },
            {
              "type": "quote",
              "text": "**A entrega da primeira solução expandiu o discovery, gerando novas perguntas.**"
            },
            {
              "type": "p",
              "text": "Ao acompanhar o produto em uso, passamos a identificar necessidades que não poderiam ser completamente antecipadas durante a pesquisa inicial."
            }
          ]
        },
        {
          "id": "2024-suportando-a-colaboracao-no-protesto",
          "title": "2024: Suportando a colaboração no protesto",
          "blocks": [
            {
              "type": "p",
              "text": "Uma dessas necessidades estava relacionada à **colaboração**. O protesto envolvia diferentes membros da equipe na triagem e análise das CDAs, mas parte desse trabalho ainda acontecia em uma **planilha compartilhada**."
            },
            {
              "type": "p",
              "text": "Isso revelou uma lacuna nas primeiras soluções: **o produto precisava representar também o trabalho colaborativo por trás da estratégia de protesto.**"
            },
            {
              "type": "p",
              "text": "A partir disso, foram desenvolvidas e validadas as **etiquetas compartilhadas**, permitindo que a equipe organizasse e dividisse a análise das CDAs dentro do próprio sistema."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etiquetas.png",
              "alt": "etiquetas"
            },
            {
              "type": "p",
              "text": "A próxima evolução não seria apenas melhorar o envio de protestos, mas repensar como o produto ajudava as procuradorias a construir, acompanhar e reutilizar suas estratégias de cobrança."
            }
          ]
        },
        {
          "id": "2025-uma-necessidade-vem-a-tona",
          "title": "2025: Uma necessidade vem à tona",
          "blocks": [
            {
              "type": "p",
              "text": "Anos depois, uma reunião com a procuradoria que havia participado do piloto trouxe novamente a experiência de protesto para discussão. Os usuários continuavam tendo dificuldades para **criar e gerenciar suas estratégias de protesto.**"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/Estrategia.png",
              "alt": "Estrategia"
            },
            {
              "type": "p",
              "text": "O problema, portanto, não se tratava mais apenas de **executar o protesto**, mas de ajudar os usuários a **construir, revisar e gerenciar as estratégias por trás dele**."
            },
            {
              "type": "p",
              "text": "O novo discovery buscou entender as **necessidades relacionadas à criação e gestão das estratégias de protesto,** considerando tanto usuários operacionais quanto gerenciais."
            },
            {
              "type": "p",
              "text": "Também precisávamos definir quais **melhorias** deveriam fazer parte da nova experiência, equilibrando **impacto para os usuários e esforço de implementação.**"
            }
          ]
        },
        {
          "id": "nova-solucao-gestao-das-estrategias-de-protesto",
          "title": "Nova solução: Gestão das estratégias de protesto",
          "blocks": [
            {
              "type": "p",
              "text": "A partir desse entendimento, estruturamos uma **nova proposta de experiência.** Foi proposta uma **nova área para centralizar a gestão das estratégias de cobrança.**"
            },
            {
              "type": "p",
              "text": "A principal decisão de interação foi organizar a criação da estratégia em **etapas**, permitindo que o usuário avançasse progressivamente entre definição, análise e revisão."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etapa1.png",
              "alt": "etapa1"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etapa2.png",
              "alt": "etapa2"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/etapa3.png",
              "alt": "etapa3"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/reuso.png",
              "alt": "reuso"
            }
          ]
        },
        {
          "id": "validacoes",
          "title": "Validações",
          "blocks": [
            {
              "type": "p",
              "text": "A solução foi **prototipada em alta fidelidade** no Figma e **validada** com diferentes perfis de usuários, através de **testes de usabilidade.**"
            },
            {
              "type": "p",
              "text": "A hipótese principal era que **a nova experiência permitiria construir estratégias de protesto de forma mais intuitiva e assertiva.**"
            },
            {
              "type": "p",
              "text": "As validações do protótipo mostraram que alguns detalhes da experiência eram **fundamentais** para que os usuários **confiassem no resultado** apresentado pelo sistema:"
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/validacao.png",
              "alt": "validacao"
            }
          ]
        },
        {
          "id": "2026-resultados",
          "title": "2026: Resultados",
          "blocks": [
            {
              "type": "p",
              "text": "Lançamos a nova gestão de estratégias em **janeiro de 2026, como MVP**, para o cliente piloto."
            },
            {
              "type": "p",
              "text": "Acompanhamos a adoção através da ferramenta Mixpanel, comparando com os envios a protesto pelo **painel antigo, que** **continuou disponível**: os usuários podiam escolher o caminho."
            },
            {
              "type": "image",
              "src": "cases/protest-strategy-management/mixpanel.png",
              "alt": "mixpanel"
            },
            {
              "type": "ul",
              "items": [
                "Em janeiro, o painel antigo ainda concentrava a maior parte dos envios (linha laranja).",
                "Em março, o **novo fluxo** passou a concentrar a maior parte do volume (linha roxa)."
              ]
            }
          ]
        },
        {
          "id": "conclusoes",
          "title": "Conclusões",
          "blocks": [
            {
              "type": "p",
              "text": "Esse projeto começou com uma pergunta sobre o trabalho real das procuradorias e terminou com o **redesenho de uma experiência complexa** dentro do produto."
            },
            {
              "type": "p",
              "text": "A primeira solução **gerou novas perguntas** quando encontrou o uso real. Essas perguntas deram origem a **novas pesquisas,** que por sua vez orientaram uma **nova experiência.**"
            },
            {
              "type": "p",
              "text": "Desta forma, a solução da gestão de estratégias de protesto desenhada em 2025 só foi possível por causa do mapeamento de 2022, do piloto de 2023 e das etiquetas compartilhadas de 2024. **Cada ciclo foi reduzindo a incerteza do ciclo seguinte.**"
            },
            {
              "type": "p",
              "text": "Para mim, esse foi o maior aprendizado desse projeto: **O discovery contínuo não se resume apenas a pesquisar antes de construir.** **O produto evolui porque a realidade dos usuários continua nos ensinando.**"
            }
          ]
        }
      ]
    }
  },
  "attorney-assistant-collaboration": {
    "en": {
      "title": "Between the System and Real-World Use",
      "kicker": "Redesigning Attorney-Assistant Collaboration in Government Legal Offices",
      "sections": [
        {
          "id": "overview",
          "title": "Overview",
          "blocks": [
            {
              "type": "p",
              "text": "**Product:** B2G (business-to-government) **judicial case management system** used by state and municipal government legal offices. Legacy software undergoing migration to the web."
            },
            {
              "type": "p",
              "text": "**Objectives:** Lead an end-to-end discovery process to understand **how government attorneys and legal assistants collaborated within the system.** Identify gaps where the product failed to support real-world work, generating clear inputs to guide the redesign of the new web version based on usage evidence."
            },
            {
              "type": "p",
              "text": "**My role:** Led the discovery process and research activities, from defining research questions and conducting interviews to synthesizing findings, triangulating qualitative and quantitative data, and validating the solution with users."
            },
            {
              "type": "p",
              "text": "**Result:** The research identified **three distinct collaboration models** and uncovered critical limitations in the legacy system, reshaping the team's understanding of the problem."
            },
            {
              "type": "p",
              "text": "**Impact:** The findings informed roadmap prioritization, supported the redesign of the attorney-assistant workflow through user validation, and established a **strategic knowledge base** that was reused in later product cycles, reducing rework and guiding the evolution of the solution."
            }
          ]
        },
        {
          "id": "context",
          "title": "Context",
          "blocks": [
            {
              "type": "p",
              "text": "Government attorneys working in municipal or state legal offices handle a **large volume of cases and tasks** in which they represent the state or municipality in legal cases."
            },
            {
              "type": "p",
              "text": "In many cases, legal offices provide **legal assistants** to support attorneys with the analysis, prioritization, and resolution of these tasks."
            },
            {
              "type": "p",
              "text": "The tasks assigned to assistants are often **repetitive** and low-complexity, freeing up more time for attorneys to focus on more critical tasks that require greater effort."
            }
          ]
        },
        {
          "id": "exploring-the-problem",
          "title": "Exploring the problem",
          "blocks": [
            {
              "type": "p",
              "text": "Before going into the field, I organized the research questions into two complementary perspectives:"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-1-eng.png",
              "alt": "case assessoria 1"
            }
          ]
        },
        {
          "id": "methods",
          "title": "Methods",
          "blocks": [
            {
              "type": "ol",
              "items": [
                "**Business rules mapping** with Product team members, to build sufficient context before conducting interviews.",
                "**Interviews and observations of users working with the legacy system,** with more than 10 government attorneys and legal assistants from 5 municipal and state legal offices.",
                "**Quantitative data extraction** from the legacy system, in partnership with the Product Manager, to identify the actual incidence of each collaboration model across the client base.",
                "**Usability testing** with high-fidelity, interactive prototypes of the new web product, to validate solution hypotheses for both government attorneys and legal assistants’ experiences."
              ]
            }
          ]
        },
        {
          "id": "key-findings",
          "title": "Key findings",
          "blocks": [
            {
              "type": "p",
              "text": "During discovery, I identified **three distinct collaboration models**, each with different ways in which government attorneys and legal assistants interacted:"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-2-eng.png",
              "alt": "case assessoria 2"
            },
            {
              "type": "h3",
              "text": "Assistant team"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/fluxo-equipe-eng.jpg",
              "alt": "fluxo equipe"
            },
            {
              "type": "p",
              "text": "In this model, **a group of legal assistants supports multiple government attorneys**. These teams are commonly used to handle large volumes of repetitive work."
            },
            {
              "type": "p",
              "text": "A **team lead** may be responsible for distributing tasks among team members in order to balance the workload."
            },
            {
              "type": "p",
              "text": "In the legacy system, this model was **poorly supported**. Work had to be distributed manually, overloading legal assistants with unnecessary tasks."
            },
            {
              "type": "h3",
              "text": "Individual assistant model"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/fluxo-individual-eng.jpg",
              "alt": "fluxo individual"
            },
            {
              "type": "p",
              "text": "In this model, each assistant has their own login and **individual task dashboard**. An assistant may work exclusively with one attorney or support multiple attorneys."
            },
            {
              "type": "p",
              "text": "Tasks requiring an assistant's work are **assigned individually by government attorneys**. This was the most controlled model and the one the legacy system officially supported best."
            },
            {
              "type": "p",
              "text": "However, although the workflow was technically functional, it had become an **obstacle in practice**. The accumulated friction of extra clicks, separate work queues, outdated lists, and unpredictable system behavior had **eroded users' trust** to the point where many simply stopped using the feature, as the next model shows."
            },
            {
              "type": "h3",
              "text": "Shared account"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/fluxo-compartilhada-eng.jpg",
              "alt": "fluxo compartilhada"
            },
            {
              "type": "p",
              "text": "The most revealing insight was not what the system offered, but **how users adapted to its limitations**."
            },
            {
              "type": "p",
              "text": "Across multiple legal offices, government attorneys and assistants had independently developed the same workaround: **sharing the attorney's login credentials with the assistant**, allowing the assistant to work directly on the attorney's tasks."
            },
            {
              "type": "p",
              "text": "One attorney explained the logic precisely: “For every case the assistant needs to work on, I have to take an action, one extra click, to send it to them.” Each individual assignment required a sequence of bureaucratic actions and clicks that interrupted the workflow."
            },
            {
              "type": "p",
              "text": "An intern working with an attorney confirmed the other side of the experience: they did not use the assistant profile because “the large number of queues makes it difficult to keep track of judicial deadlines.”"
            },
            {
              "type": "p",
              "text": "One assistant reported that their assistant account had literally “fallen into disuse” and that they worked exclusively through the attorney's login."
            },
            {
              "type": "p",
              "text": "Another assistant reported hearing from colleagues that “assistants are doing everything through the attorney's login”, confirming that the behavior was not isolated to a single office."
            },
            {
              "type": "p",
              "text": "Therefore, the shared account was a **workaround driven by the system’s limitations**, a clear signal that the product was not adequately supporting the users' actual way of working."
            }
          ]
        },
        {
          "id": "strategic-decisions",
          "title": "Strategic Decisions",
          "blocks": [
            {
              "type": "p",
              "text": "After the interviews and observations stage, a central question emerged: **Which collaboration model should be prioritized for the first pilot of the new product version?**"
            },
            {
              "type": "p",
              "text": "To answer it, I compared the three models across three criteria:"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-3-eng.png",
              "alt": "case assessoria 3"
            },
            {
              "type": "p",
              "text": "Triangulating qualitative findings with quantitative data was essential to understand which collaboration models had the greatest **representativeness across the customer base**."
            },
            {
              "type": "p",
              "text": "While field research revealed the diversity of ways attorneys and assistants collaborated, data extraction allowed us to quantify the **relative significance of each model in actual system usage**."
            },
            {
              "type": "gallery",
              "images": [
                {
                  "src": "cases/attorney-assistant-collaboration/case-assessoria-4-eng.png",
                  "alt": "case assessoria 4"
                },
                {
                  "src": "cases/attorney-assistant-collaboration/case-assessoria-extracao.png",
                  "alt": "Usage data extracted from the assistant functionality in the legacy system, in partnership with the Product team."
                }
              ]
            },
            {
              "type": "p",
              "text": "**The data had a blind spot.** The most unexpected behavior revealed through field research, **the use of shared accounts,** was precisely the one the product **could not measure**, since the legacy system did not record when assistants worked directly through attorneys' accounts."
            },
            {
              "type": "p",
              "text": "This gap reinforced the need to **combine quantitative and qualitative evidence**, rather than relying exclusively on data recorded by the product, revealing practices that could otherwise go unnoticed."
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-5-eng.png",
              "alt": "case assessoria 5"
            },
            {
              "type": "p",
              "text": "Based on this combined analysis, the **individual assistant model** was prioritized for the first release."
            },
            {
              "type": "p",
              "text": "Besides being the most frequent model, it also presented **lower implementation complexity** compared to the others. This decision **reduced risk, aligned expectations** with the team’s delivery capacity, and allowed us to **move forward with clarity**, without ignoring the diversity of the other mapped contexts."
            }
          ]
        },
        {
          "id": "solution",
          "title": "Solution",
          "blocks": [
            {
              "type": "p",
              "text": "With the **individual assistant model** defined as the first focus, I worked in partnership with the UI Designer to translate the discovery findings into an experience that would make the **attorney-assistant collaboration more explicit, traceable, and intuitive**."
            },
            {
              "type": "p",
              "text": "My role was to guide experience decisions based on the research findings and to **conduct usability testing** with government attorneys and legal assistants."
            },
            {
              "type": "p",
              "text": "The solution formalized steps that, in the legacy system, depended on manual processes or user workarounds: **assign tasks, set deadlines, provide instructions, monitor the assistant’s work, and return drafts for review.**"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-6-eng.png",
              "alt": "case assessoria 6"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-7-eng.png",
              "alt": "case assessoria 7"
            },
            {
              "type": "p",
              "text": "On the legal assistant side, the experience was structured to make clearer **what needed to be done, to whom the task should be returned, and when it should be returned.**"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-8-eng.png",
              "alt": "case assessoria 8"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-9-eng.png",
              "alt": "case assessoria 9"
            }
          ]
        },
        {
          "id": "validation",
          "title": "Validation",
          "blocks": [
            {
              "type": "p",
              "text": "I conducted usability tests with government attorneys and legal assistants using **high-fidelity, interactive prototypes**."
            },
            {
              "type": "p",
              "text": "The tests **validated the overall direction of the solution** for the individual assistant model, while also **identifying friction points** that could compromise adoption of the new workflow."
            },
            {
              "type": "p",
              "text": "**1. The solution made sense, but the workflow still caused confusion**"
            },
            {
              "type": "p",
              "text": "Some users understood the new collaboration logic but still had **difficulty interpreting certain states and actions in the workflow.** As some of these difficulties could have been related to adapting to the new version of the system, this behavior should be **monitored after go-live**, to verify whether the initial friction would be overcome with continued use."
            },
            {
              "type": "p",
              "text": "**2. The individual model did not eliminate the need for shared accounts**"
            },
            {
              "type": "p",
              "text": "One assistant stated that they **would continue using the shared account** because they needed broad access to the attorney’s tasks, even though they considered the new experience more promising."
            },
            {
              "type": "p",
              "text": "**Ultimately, validation confirmed the direction of the solution while also revealing its limits.** The individual assistant model was **appropriate as a first step, but it did not support the full complexity of the collaborative work** observed during discovery. Therefore, it was essential that **the other collaboration scenarios would be prioritized in future product iterations.**"
            }
          ]
        },
        {
          "id": "conclusions",
          "title": "Conclusions",
          "blocks": [
            {
              "type": "h3",
              "text": "Real-world use reveals needs the product cannot observe"
            },
            {
              "type": "p",
              "text": "The main learning from this project was realizing that **user behavior can reveal needs the product cannot directly observe**."
            },
            {
              "type": "p",
              "text": "The **shared account model** did not appear in the system data and was not part of the official workflow. Yet it had become a **recurring solution** to enable users to get their work done."
            },
            {
              "type": "p",
              "text": "This changed how I interpreted the problem: instead of treating workarounds as exceptions, I began to see them as **evidence of unmet user needs.**"
            },
            {
              "type": "h3",
              "text": "Data shows scale; research reveals context"
            },
            {
              "type": "p",
              "text": "Qualitative research showed **how and why** users collaborated in different ways. Quantitative data showed **the scale of each model**, but failed to capture the most revealing behavior."
            },
            {
              "type": "p",
              "text": "Combining both perspectives allowed a **more informed prioritization decision**, without confusing what was most visible in the data with what was most relevant to users' actual work."
            },
            {
              "type": "h3",
              "text": "Discovery does not end at delivery"
            },
            {
              "type": "p",
              "text": "Prioritizing the individual assistant model did not mean disregarding the other collaboration models. It meant **choosing a viable first scope**, while preserving the knowledge built about the different collaboration contexts."
            },
            {
              "type": "p",
              "text": "By documenting the other contexts, **the discovery remained useful** beyond the first release. Years later, when the assistant team model was prioritized, this knowledge served as a **starting point** for a new product cycle."
            }
          ]
        }
      ]
    },
    "pt": {
      "title": "Entre o sistema e o uso real",
      "kicker": "Redesenhando o fluxo de assessoria em procuradorias",
      "sections": [
        {
          "id": "resumo",
          "title": "Resumo",
          "blocks": [
            {
              "type": "p",
              "text": "**Produto:** Sistema de **gestão de processos judiciais B2G** (business-to-government), utilizado por procuradorias estaduais e municipais. Software legado, no contexto de sua **migração para a web.**"
            },
            {
              "type": "p",
              "text": "**Objetivos:** Conduzir um discovery de ponta a ponta, visando entender **como procuradores e assessores atuavam colaborativamente no sistema.** **Identificar lacunas** onde o sistema **não suportava o trabalho real,** gerando insumos claros para orientar o redesign da nova versão com base em evidências de uso."
            },
            {
              "type": "p",
              "text": "**Meu papel: Liderei o processo de discovery e as atividades de pesquisa,** desde a definição das perguntas e condução das entrevistas até a síntese de achados, triangulação entre dados qualitativos e quantitativos e validação da solução com usuários."
            },
            {
              "type": "p",
              "text": "**Resultado:** O mapeamento identificou **três cenários distintos de assessoria,** além de revelar **limitações críticas do sistema,** o que realinhou o entendimento sobre o problema dentro do time."
            },
            {
              "type": "p",
              "text": "**Impacto:** Os achados **orientaram a priorização do roadmap,** sustentaram o redesign do fluxo de assessoria com base em validações com usuários, e estabeleceram uma **base de conhecimento estratégica** reaproveitada em ciclos posteriores, reduzindo retrabalho e guiando a evolução da solução."
            }
          ]
        },
        {
          "id": "contexto",
          "title": "Contexto",
          "blocks": [
            {
              "type": "p",
              "text": "Procuradores que atuam em Procuradorias Municipais ou Estaduais recebem um **volume grande de tarefas,** nas quais devem representar o Estado ou Município em processos judiciais."
            },
            {
              "type": "p",
              "text": "Em muitos casos, a procuradoria disponibiliza **assessores** para auxiliá-los na análise, priorização e resolução das tarefas."
            },
            {
              "type": "p",
              "text": "**A natureza das tarefas direcionadas aos assessores costuma ser de teor repetitivo e de baixa complexidade,** restando maior disponibilidade para o procurador atuar em tarefas mais críticas e que demandam maior esforço."
            }
          ]
        },
        {
          "id": "explorando-o-problema",
          "title": "Explorando o problema",
          "blocks": [
            {
              "type": "p",
              "text": "Antes de ir a campo, organizei as **perguntas de pesquisa** em dois eixos complementares:"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-1-Recovered.png",
              "alt": "case assessoria 1 Recovered"
            }
          ]
        },
        {
          "id": "metodos-utilizados",
          "title": "Métodos utilizados",
          "blocks": [
            {
              "type": "ol",
              "items": [
                "**Mapeamento das regras de negócio** com membros do time de Produto, buscando maior contextualização prévia para a condução das entrevistas.",
                "**Entrevistas e observações de uso do sistema legado,** com mais de 10 procuradores e assessores, que atuavam em 5 procuradorias municipais e estaduais.",
                "**Extração de dados quantitativos** do sistema legado, em parceria com o Product Manager, para identificar a incidência real de cada cenário de assessoria na base de clientes.",
                "**Testes de usabilidade** com protótipos navegáveis em alta fidelidade do novo produto web, visando validar hipóteses de solução para a experiência do procurador e do assessor."
              ]
            }
          ]
        },
        {
          "id": "principais-descobertas",
          "title": "Principais descobertas",
          "blocks": [
            {
              "type": "p",
              "text": "Durante o discovery, foram identificados **três cenários distintos de assessoria,** com particularidades na **forma de interação entre o procurador e seus assessores:**"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-2.png",
              "alt": "case assessoria 2"
            },
            {
              "type": "h3",
              "text": "Equipe de assessoria"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/fluxo-equipe.jpg",
              "alt": "fluxo equipe"
            },
            {
              "type": "p",
              "text": "Neste cenário, **um grupo de assessores atende vários procuradores.** Essas equipes são comumente utilizadas no atendimento de demandas massivas e repetitivas."
            },
            {
              "type": "p",
              "text": "Pode haver a persona de um **assessor distribuidor,** que fica responsável por distribuir as tarefas entre os membros da equipe, visando equilibrar a carga de trabalho."
            },
            {
              "type": "p",
              "text": "No sistema legado, esse cenário era **precariamente suportado.** A distribuição do trabalho precisava ser feita **manualmente**, sobrecarregando os assessores com tarefas desnecessárias."
            },
            {
              "type": "h3",
              "text": "Perfil do assessor individual"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/fluxo-individual.jpg",
              "alt": "fluxo individual"
            },
            {
              "type": "p",
              "text": "Neste cenário, cada assessor tem seu próprio login e **painel de tarefas individual.** O assessor pode atender apenas um procurador, em atuação exclusiva, ou vários procuradores, em atuação compartilhada."
            },
            {
              "type": "p",
              "text": "As tarefas nas quais o assessor deverá atuar são **designadas nominalmente** pelos procuradores. Este era o cenário **mais controlado,** e o que o sistema legado **melhor suportava oficialmente.**"
            },
            {
              "type": "p",
              "text": "Porém, apesar deste fluxo ser tecnicamente funcional, na prática, ele havia se tornado um **obstáculo.** A **fricção acumulada** de cliques, filas de trabalho separadas, listas desatualizadas e comportamentos imprevisíveis do sistema havia **corroído a confiança dos usuários** ao ponto de muitos simplesmente abandonarem o recurso, conforme demonstra o próximo cenário."
            },
            {
              "type": "h3",
              "text": "Visão compartilhada"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/fluxo-compartilhada.jpg",
              "alt": "fluxo compartilhada"
            },
            {
              "type": "p",
              "text": "A descoberta mais reveladora do discovery não estava no que o sistema oferecia, mas sim, em como os usuários **se adaptavam às suas limitações.**"
            },
            {
              "type": "p",
              "text": "Em múltiplas procuradorias, procuradores e assessores haviam desenvolvido, de forma independente, a mesma solução: **compartilhar o login e a senha do procurador com o assessor,** para que ele pudesse atuar livremente em suas tarefas."
            },
            {
              "type": "p",
              "text": "Um procurador explicou a lógica com precisão: “Todo processo que o assessor for atuar, eu vou precisar fazer um movimento, um clique a mais, para enviar para ele.” Cada designação individual exigia uma sequência de ações e cliques burocráticos, que interrompia o fluxo de trabalho."
            },
            {
              "type": "p",
              "text": "O estagiário que trabalhava com o procurador confirmou a perspectiva do outro lado: não usavam o perfil de assessor porque “a grande quantidade de filas atrapalha o acompanhamento dos prazos judiciais.”"
            },
            {
              "type": "p",
              "text": "Uma das assessoras entrevistadas relatou que sua conta de assessora havia literalmente “entrado em desuso”, e que trabalhava exclusivamente pelo login da procuradora."
            },
            {
              "type": "p",
              "text": "Outra assessora relatou que havia ouvido de colegas que “os assessores estão fazendo tudo pelo login do procurador”, confirmando que o comportamento não era apenas local, mas sistêmico."
            },
            {
              "type": "p",
              "text": "Portanto, a visão compartilhada era um **desvio de uso forçado pelas limitações do sistema,** o que diagnosticava um problema de design que o produto não havia resolvido."
            }
          ]
        },
        {
          "id": "decisoes-estrategicas",
          "title": "Decisões estratégicas",
          "blocks": [
            {
              "type": "p",
              "text": "Após a etapa de entrevistas e observações de uso, uma questão central surgiu no discovery: Qual cenário de assessoria deveria ser **priorizado para um primeiro piloto** da nova versão do produto?"
            },
            {
              "type": "p",
              "text": "Para respondê-la, avaliei os três cenários mapeados através destes critérios:"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-3.png",
              "alt": "case assessoria 3"
            },
            {
              "type": "p",
              "text": "A decisão de **triangular os achados qualitativos com dados quantitativos** foi essencial para entender quais cenários de assessoria tinham maior **representatividade** na base de clientes."
            },
            {
              "type": "p",
              "text": "Enquanto a pesquisa em campo revelava a **diversidade** de formas de colaboração entre procuradores e assessores, a extração de dados permitiu dimensionar o **peso** de cada uma delas no uso real do sistema."
            },
            {
              "type": "gallery",
              "images": [
                {
                  "src": "cases/attorney-assistant-collaboration/case-assessoria-4.png",
                  "alt": "case assessoria 4"
                },
                {
                  "src": "cases/attorney-assistant-collaboration/case-assessoria-extracao.png",
                  "alt": "Extração de dados de uso da funcionalidade de assessoria do sistema legado, realizada em parceria com o time de Produto."
                }
              ]
            },
            {
              "type": "p",
              "text": "**Os dados tinham um ponto cego.** O comportamento mais inesperado revelado pela **pesquisa em campo,** o uso da **visão compartilhada**, era justamente aquele que o produto **não conseguia mensurar,** já que o sistema legado não registrava quando assessores atuavam diretamente na conta dos procuradores."
            },
            {
              "type": "p",
              "text": "Essa lacuna reforçou a necessidade de **combinar evidências quantitativas e qualitativas,** em vez de depender exclusivamente dos dados registrados pelo sistema, revelando práticas que poderiam passar despercebidas."
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-5.png",
              "alt": "case assessoria 5"
            },
            {
              "type": "p",
              "text": "Com base nessa análise conjunta, o cenário de **perfil individual** foi priorizado para a primeira entrega."
            },
            {
              "type": "p",
              "text": "Além de ser o **cenário mais frequente,** ele também apresentava **menor complexidade de implementação** em comparação aos demais. Essa decisão **reduziu riscos, alinhou expectativas** com a capacidade de entrega do time e permitiu **avançar com clareza,** sem ignorar a diversidade dos outros contextos mapeados."
            }
          ]
        },
        {
          "id": "solucao",
          "title": "Solução",
          "blocks": [
            {
              "type": "p",
              "text": "Com o cenário de **perfil individual** definido como primeiro foco, trabalhei em parceria com o UI Designer para transformar os achados do discovery em uma experiência que tornasse a colaboração entre procurador e assessor **mais explícita, rastreável e intuitiva.**"
            },
            {
              "type": "p",
              "text": "Meu papel foi direcionar as decisões de experiência a partir dos achados da pesquisa e **conduzir os testes de usabilidade** com procuradores e assessores."
            },
            {
              "type": "p",
              "text": "A solução formalizou etapas que, no sistema legado, dependiam de processos manuais ou de adaptações dos usuários: **designar tarefas, definir prazos, fornecer instruções, acompanhar o trabalho do assessor e devolver minutas para revisão.**"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-6.png",
              "alt": "case assessoria 6"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-7.png",
              "alt": "case assessoria 7"
            },
            {
              "type": "p",
              "text": "No lado do assessor, a experiência foi estruturada para deixar mais claro **o que precisava ser feito, para quem a tarefa deveria retornar e quando ela deveria ser devolvida.**"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-8.png",
              "alt": "case assessoria 8"
            },
            {
              "type": "image",
              "src": "cases/attorney-assistant-collaboration/case-assessoria-9.png",
              "alt": "case assessoria 9"
            }
          ]
        },
        {
          "id": "validacao",
          "title": "Validação",
          "blocks": [
            {
              "type": "p",
              "text": "Realizei **testes de usabilidade com procuradores e assessores,** utilizando protótipos navegáveis de alta fidelidade."
            },
            {
              "type": "p",
              "text": "Os testes **validaram a direção da solução** para o cenário de assessoria individual, porém, também **identificaram pontos de fricção** que poderiam comprometer a adoção do novo fluxo."
            },
            {
              "type": "p",
              "text": "**1. A solução fazia sentido, mas o fluxo ainda gerava dúvidas**"
            },
            {
              "type": "p",
              "text": "Alguns usuários compreenderam a nova lógica de colaboração, mas ainda demonstraram **dificuldades em interpretar determinados estados e ações do fluxo.** Como parte dessas dificuldades poderia estar relacionada à adaptação à nova versão do sistema, esse comportamento deveria ser **acompanhado após a entrada em produção,** para verificar se as fricções iniciais seriam superadas com o uso recorrente."
            },
            {
              "type": "p",
              "text": "**2. O cenário individual não eliminava a necessidade da visão compartilhada**"
            },
            {
              "type": "p",
              "text": "Uma assessora afirmou que **continuaria utilizando a conta compartilhada** porque precisava de acesso amplo às tarefas do procurador, mesmo considerando a nova experiência mais interessante."
            },
            {
              "type": "p",
              "text": "**Ao final, a validação confirmou a direção da solução, mas também revelou seus limites.** O cenário de perfil individual era **adequado como primeiro passo, mas não suportava toda a complexidade do trabalho colaborativo** observada no discovery. Portanto, era imprescindível que **os demais cenários de colaboração fossem priorizados em evoluções futuras.**"
            }
          ]
        },
        {
          "id": "conclusoes",
          "title": "Conclusões",
          "blocks": [
            {
              "type": "h3",
              "text": "O uso real revela necessidades que o produto não consegue observar"
            },
            {
              "type": "p",
              "text": "O principal aprendizado deste projeto foi perceber que **o comportamento dos usuários pode revelar necessidades que o produto não consegue observar diretamente**."
            },
            {
              "type": "p",
              "text": "A **visão compartilhada** não aparecia nos dados do sistema e tampouco fazia parte do fluxo oficial. Ainda assim, havia se tornado uma **solução recorrente** para viabilizar o trabalho dos usuários."
            },
            {
              "type": "p",
              "text": "Isso mudou a forma como interpretei o problema: em vez de tratar os desvios como exceções, passei a enxergá-los como **evidências de necessidades não atendidas pelo produto**."
            },
            {
              "type": "h3",
              "text": "Dados mostram escala; Pesquisa revela contexto"
            },
            {
              "type": "p",
              "text": "A pesquisa qualitativa mostrou **como e por que** os usuários colaboravam de maneiras diferentes. Os dados quantitativos mostraram **a escala de cada cenário,** mas não capturaram justamente o comportamento mais revelador."
            },
            {
              "type": "p",
              "text": "A combinação das duas perspectivas permitiu **tomar uma decisão de priorização mais consciente,** sem confundir aquilo que era mais visível nos dados com aquilo que era mais relevante no trabalho real."
            },
            {
              "type": "h3",
              "text": "O discovery não termina na entrega"
            },
            {
              "type": "p",
              "text": "Priorizar o perfil individual não significava desconsiderar os demais cenários. Significava **escolher um primeiro recorte viável,** mantendo o conhecimento construído sobre os diferentes contextos de colaboração."
            },
            {
              "type": "p",
              "text": "Ao documentar os demais contextos, **o discovery continuou sendo útil** mesmo depois da primeira entrega. Anos mais tarde, quando o cenário de equipes de assessoria foi priorizado, esse conhecimento serviu como **ponto de partida** para o novo ciclo do produto."
            }
          ]
        }
      ]
    }
  }
};
