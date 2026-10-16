# Laboratório de Hardware — cópia pública em revisão

> **Status:** preparação local para revisão manual. Este diretório ainda não foi publicado como repositório público.

Este repositório reúne código, documentação acadêmica e evidências de experimentos realizados durante o desenvolvimento do Sistema de Gestão do Laboratório de Hardware. A cópia foi preparada para divulgação técnica e educacional com remoção de identificadores pessoais e de informações internas que não são necessárias para compreender o trabalho.

## Como navegar pelo repositório

- `src/`: código principal da aplicação e configurações de execução.
- `app/`, `api/`, `components/`, `assets/`, `lib/` e `login/`: componentes da interface, rotas, integração e autenticação usados no sistema.
- `supabase/`, `docker/` e `docker-compose.yml`: artefatos de banco de dados e ambiente de desenvolvimento. A cópia pública não fornece credenciais de produção.
- `docs/`: documentação técnica produzida ao longo do desenvolvimento, incluindo estudos, decisões, testes, auditorias e materiais de acompanhamento.
- `Documentos/`: relatórios acadêmicos e materiais recebidos dos grupos. Os PDFs destinados à cópia pública foram recriados com identificações pessoais removidas.
- `Modulo_4_relatorios/`: artefatos do módulo de relatórios.
- `Modulo_5_forum/`: experimento de fórum, enquetes e auditoria, incluindo um snapshot histórico de código e relatórios anonimizados.
- `fontes_recebidas/`: materiais históricos recebidos durante o projeto. Devem ser tratados como evidências de origem, não como versão atual da aplicação.
- `Paperclip/`: materiais de preservação do experimento de orquestração, incluindo uma base experimental anonimizada e scripts auxiliares de reconstrução.
- `bkp_config_agentes/`: backup parcial e reconstruído da configuração documental dos agentes. Consulte a nota específica dentro dessa pasta antes de tentar reproduzir o ambiente.
- `artigo/`: versão do artigo acadêmico relacionado ao experimento e uma nota explicando sua relação com este repositório.
- `PUBLICACAO/`: manifestos e relatórios usados para conferir a preparação da cópia pública.

## Experimentos documentados

O repositório preserva diferentes etapas do projeto. A primeira é o desenvolvimento do sistema web de gestão do laboratório, com módulos de cadastro, empréstimos, patrimônio, relatórios, fórum e recursos administrativos. Parte dos materiais surgiu em atividades acadêmicas e foi posteriormente integrada e revisada.

A segunda é o experimento de desenvolvimento supervisionado por agentes de IA. Nesse cenário, a plataforma Paperclip foi usada para organizar agentes especializados, tarefas, pré-estudos, revisões, auditorias e registros de execução. O objetivo não era apenas gerar código, mas observar como uma pessoa coordena e supervisiona processos de desenvolvimento parcialmente autônomos.

A terceira é a preservação das evidências desse processo. Por isso existem documentos de auditoria, decisões, estudos, issues, histórico de alterações, arquivos de governança e materiais de reconstrução. Esses elementos ajudam a compreender a evolução do experimento, mas não constituem uma imagem completa do ambiente original.

## Artigo, evidências e limites de reprodução

O artigo armazenado em `artigo/` descreve o estudo de caso de orquestração humano-agente desenvolvido a partir deste projeto. Ele apresenta a arquitetura com agentes especializados, o uso do Paperclip como interface de orquestração, os mecanismos de governança e a evolução da supervisão humana ao longo do experimento.

A autoria do artigo foi **preservada intencionalmente**, porque nomes de autores fazem parte da atribuição bibliográfica da publicação acadêmica. Essa é uma exceção deliberada à anonimização aplicada aos trabalhos de estudantes e aos artefatos internos do projeto.

### Errata e diferenças da cópia pública

Esta seção registra diferenças entre o ambiente experimental descrito no artigo e o material que pode ser disponibilizado publicamente. Ela não altera o texto científico do artigo.

- identificadores pessoais dos estudantes foram removidos ou substituídos por referências anônimas;
- endereços e nomes de infraestrutura interna foram substituídos por valores de documentação;
- credenciais e configurações sensíveis não fazem parte da cópia pública;
- o estado completo de execução do Paperclip, incluindo toda a base operacional, históricos externos, sessões e estados transitórios, não é reproduzido integralmente neste repositório;
- os artefatos em `bkp_config_agentes/` são uma reconstrução documental parcial e não um dump integral do ambiente em execução;
- versões de dependências e serviços podem exigir atualização para que experimentos antigos sejam executados novamente.

Consequentemente, este repositório deve ser utilizado principalmente para **auditoria, estudo, ensino e reconstrução controlada**. Uma reprodução atual pode não gerar exatamente os mesmos estados intermediários, runs ou resultados registrados durante o experimento original.

## Privacidade e anonimização

Os documentos preparados para publicação foram revisados para retirar nomes de estudantes, identificadores de contas pessoais e metadados de autoria que não precisam ser públicos. Os PDFs permanecem pesquisáveis e tiveram a renderização verificada após a anonimização. O relatório automático da etapa está em `PUBLICACAO/`.

A anonimização automática reduz riscos, mas não substitui inspeção humana. Por isso esta cópia permanece em revisão local antes da criação do repositório público.

## Acessibilidade da documentação

A documentação desta cópia segue uma estrutura simples para facilitar leitura por pessoas e tecnologias assistivas: títulos seguem ordem hierárquica; parágrafos são curtos; caminhos e comandos aparecem como código; listas são usadas no lugar de tabelas largas quando possível; e links devem ter texto descritivo.

Imagens, diagramas e capturas adicionados ao repositório devem ter texto alternativo significativo ou uma descrição textual equivalente. Informação importante não deve depender somente de cor, posição ou aparência visual. Consulte `ACESSIBILIDADE.md` para os critérios adotados nesta preparação.

## Revisão manual antes da publicação

Antes de criar o repositório público, recomenda-se conferir os PDFs visualmente, revisar `fontes_recebidas/` e os snapshots históricos, verificar se os endereços e credenciais presentes são apenas exemplos seguros, confirmar as licenças de dependências de terceiros e revisar os relatórios em `PUBLICACAO/`.

## Nota final sobre o backup dos agentes

`bkp_config_agentes/` é **um backup parcial e reconstruído**. Ele preserva principalmente arquivos Markdown de governança, papéis, histórico, backlog, requisitos e documentação que ajudam a entender a configuração dos agentes. Ele não deve ser apresentado como uma cópia completa da instalação do Paperclip nem como garantia de restauração idêntica do ambiente original.
