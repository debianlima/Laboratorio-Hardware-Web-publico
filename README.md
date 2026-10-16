# Laboratório de Hardware — evolução para Sistema Distribuído Multiagente

Sistema acadêmico para gestão do Laboratório de Hardware do IFF, com foco em inventário, localização de equipamentos, empréstimos, agendamentos e consulta inteligente.

## Histórico acadêmico

Este projeto teve origem em atividades desenvolvidas em **2025** por uma turma do **2º ano do Curso Técnico em Informática**, no contexto de **Análise de Sistemas / Projeto Integrador**. O trabalho inicial concentrou-se no levantamento do problema, modelagem, requisitos, regras de negócio, protótipos, organização do inventário e implementação de uma primeira versão funcional do sistema.

A versão presente neste repositório foi preparada para uso acadêmico posterior **sem identificação nominal dos estudantes**. Materiais de origem foram anonimizados antes da publicação, preservando apenas o conteúdo necessário para continuidade pedagógica e técnica. Consulte também `AUDITORIA_PRIVACIDADE.md`.

A partir da disciplina **Sistemas Distribuídos**, no Bacharelado em Engenharia de Computação, o sistema passa a ser utilizado como laboratório de evolução arquitetural: a aplicação deixa de ser apenas um sistema web centralizado e passa a incorporar serviços distribuídos, agentes de IA, RAG, visão computacional e comunicação **A2A (Agent2Agent)** entre agentes.

## Objetivo da nova etapa

Construir uma versão moderna, funcional e inteligente do sistema em que estudantes e servidores possam:

- cadastrar, editar, consultar e localizar equipamentos;
- consultar disponibilidade, empréstimos e agendamentos;
- fotografar uma placa, componente ou etiqueta para auxiliar sua identificação;
- relacionar a identificação visual ao cadastro patrimonial e à localização física;
- consultar características técnicas por meio de RAG;
- conversar com um orquestrador que delega tarefas a agentes especializados;
- usar comunicação A2A entre agentes independentes;
- manter rastreabilidade, segurança, tratamento de falhas e controle de concorrência.

> Regra de projeto: a visão computacional pode sugerir **tipo/modelo** do equipamento, mas a identificação de uma unidade física específica deve ser confirmada por patrimônio, QR Code, número de série ou outro identificador cadastrado.

## Arquitetura acadêmica de referência

```text
Usuário / Web / Celular / Câmera
              |
        API / Gateway
              |
      Agente Orquestrador
              |
        A2A (Agent2Agent)
   +----------+-----------+-----------+-----------+
   |          |           |           |           |
Visão      Inventário    RAG      Empréstimos  Agendamento
   |          |           |           |           |
   +----------+-----------+-----------+-----------+
              |
        Banco transacional
              |
   Inventário / documentos / histórico
```

### Agentes previstos

- **Orquestrador:** interpreta a solicitação e delega tarefas.
- **Visão:** analisa fotografias, etiquetas e características visuais.
- **Inventário:** consulta cadastro, disponibilidade, estado e localização.
- **RAG:** recupera manuais, documentação, histórico e conhecimento técnico.
- **Empréstimos:** trata solicitação, retirada, devolução e estado do item.
- **Agendamento:** verifica conflitos e reserva recursos.
- **Auditoria:** registra decisões, chamadas e alterações relevantes.

## Organização da disciplina

Carga prevista: **60 aulas**, com **3 aulas por semana**, totalizando **20 semanas**.

Para manter o equilíbrio entre teoria e prática, cada semana segue o padrão:

1. **Aula 1 — teoria + exemplo:** apresentação do conceito e demonstração concreta no projeto.
2. **Aula 2 — laboratório guiado:** metade explicação, metade implementação acompanhada.
3. **Aula 3 — tarefa aplicada:** atividade obrigatória que produz uma entrega no repositório.

Esse formato corresponde, ao longo do semestre, a aproximadamente **30 aulas de conteúdo teórico e 30 aulas de aplicação prática**.

## Plano de 20 semanas

| Semana | Conteúdo teórico | Exemplo em sala | Tarefa aplicada / entrega |
|---|---|---|---|
| 1 | Conceitos de sistemas distribuídos | Comparar aplicação monolítica e serviços independentes | Mapear o sistema atual e produzir diagrama `AS-IS` |
| 2 | Características: heterogeneidade, abertura, escalabilidade, transparência e tolerância a falhas | Simular dois serviços com responsabilidades diferentes | Propor arquitetura `TO-BE` do LabHardware distribuído |
| 3 | Arquitetura cliente-servidor | Cliente consultando API de inventário | Separar frontend e API de inventário |
| 4 | Arquiteturas distribuídas e P2P | Comparar cliente-servidor com comunicação entre pares | Registrar decisão arquitetural e casos de uso distribuídos |
| 5 | Comunicação entre processos | Requisição HTTP com mensagem estruturada | Criar contrato de mensagens entre serviços |
| 6 | Primitivas de comunicação e APIs | Request/response, timeout e códigos de erro | Implementar primeiro serviço remoto consultável |
| 7 | Middleware | Camada intermediária desacoplando cliente e serviço | Criar gateway/orquestrador inicial |
| 8 | A2A — descoberta e capacidades de agentes | Dois agentes publicando capacidades diferentes | Criar Agent Cards e comunicação A2A entre dois agentes |
| 9 | Modelos síncrono e assíncrono | Comparar chamada bloqueante com tarefa assíncrona | Implementar tarefa assíncrona para operação demorada |
| 10 | Eventos, filas e notificações | Evento de empréstimo gerando atualização de inventário | Criar fluxo orientado a eventos para uma ação do sistema |
| 11 | Relógios, ordem de eventos e consistência | Dois serviços registrando eventos em momentos diferentes | Criar correlação, timestamp e rastreamento de uma operação distribuída |
| 12 | Falhas em processos e canais | Derrubar um agente durante uma solicitação | Implementar timeout, retry controlado e resposta degradada |
| 13 | Segurança em sistemas distribuídos | Usuário comum tentando executar ação administrativa | Aplicar autenticação, autorização e auditoria entre serviços |
| 14 | Introdução a RAG | Pergunta técnica respondida a partir de um manual recuperado | Criar base documental e primeira consulta RAG com fonte |
| 15 | RAG aplicado ao laboratório | Consultar compatibilidade ou característica de uma placa | Integrar agente RAG ao orquestrador via A2A |
| 16 | Sistemas multimodais e visão computacional | Fotografar placa e obter hipótese de modelo | Criar fluxo foto → agente de visão → resultado com nível de confiança |
| 17 | Visão + inventário + localização | Reconhecer modelo e cruzar com patrimônio/QR | Integrar visão ao inventário e mostrar localização confirmada |
| 18 | Transações distribuídas e propriedades ACID | Empréstimo atualizando mais de um estado relacionado | Implementar fluxo transacional de empréstimo/devolução |
| 19 | Concorrência, exclusão mútua e impasses | Dois usuários tentando reservar o mesmo item | Criar teste concorrente e impedir reserva duplicada |
| 20 | Integração, tolerância a falhas e demonstração final | Execução ponta a ponta com um agente indisponível | Entregar versão integrada, documentação e demonstração final |

## Entregas acumulativas

Ao final do semestre, o repositório deve conter pelo menos:

- arquitetura `AS-IS` e `TO-BE`;
- contratos de API e mensagens;
- pelo menos dois agentes interoperando por A2A;
- orquestrador de agentes;
- agente de inventário;
- agente RAG com recuperação de fontes;
- agente de visão integrado ao inventário;
- fluxo de localização confirmado por identificador patrimonial;
- tratamento de timeout, retry e indisponibilidade;
- autenticação, autorização e trilha de auditoria;
- fluxo transacional de empréstimo/agendamento;
- teste de concorrência;
- documentação da demonstração final.

## Cenário-alvo de demonstração

1. O usuário entra no sistema pelo celular.
2. Fotografa uma placa ou componente.
3. O agente de visão sugere o modelo e informa confiança.
4. O inventário cruza o resultado com patrimônio, QR Code ou número de série.
5. O sistema informa cadastro, estado e localização física.
6. O usuário pergunta uma característica técnica.
7. O agente RAG consulta a documentação e responde com a fonte utilizada.
8. O usuário pergunta se o item está disponível.
9. O agente de inventário responde com o estado atual.
10. O usuário solicita empréstimo ou agendamento.
11. O agente responsável executa a operação com controle de concorrência.
12. A auditoria registra a cadeia de agentes e o resultado.
13. Se um agente estiver indisponível, o sistema trata a falha sem corromper o estado.

## Tecnologias

A base histórica do projeto utiliza PHP, MySQL, Bootstrap e Docker. A evolução da disciplina poderá introduzir serviços e componentes adicionais conforme as decisões arquiteturais da turma, preservando interoperabilidade por contratos explícitos e A2A.

## Privacidade e uso acadêmico

Este repositório não deve reintroduzir nomes, e-mails pessoais ou qualquer outro identificador dos estudantes que participaram da etapa de 2025. Toda nova documentação acadêmica deve usar identificação de grupos ou papéis, nunca dados pessoais desnecessários.
