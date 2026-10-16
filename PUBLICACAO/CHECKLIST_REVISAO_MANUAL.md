# Checklist de revisão manual antes da publicação

Esta cópia está tecnicamente preparada, mas permanece **local e não publicada**. Antes de criar qualquer repositório público, faça uma revisão humana final.

- [ ] abrir visualmente os PDFs de `Documentos/` e `Modulo_5_forum/`, principalmente capas, assinaturas, imagens e capturas;
- [ ] confirmar visualmente que o inventário de HD/SSD mostra `SERIAL-ANONIMIZADO` e não os números de série originais;
- [ ] confirmar que os nomes de autores do artigo em `artigo/` devem permanecer por serem atribuição bibliográfica formal;
- [ ] revisar `fontes_recebidas/` e snapshots históricos para conteúdo que não precise ser público;
- [ ] revisar `Modulo_5_forum/codigos/flarum/` e confirmar a adequação de licenças e redistribuição das dependências de terceiros;
- [ ] revisar `bkp_config_agentes/` lembrando que ele é parcial e reconstruído, não um dump integral;
- [ ] confirmar que exemplos de configuração continuam usando somente placeholders e endereços reservados para documentação;
- [ ] conferir `PUBLICACAO/pdf_anonymization_report.json` e `PUBLICACAO/pdf_render_validation.json`;
- [ ] decidir o nome e a organização do repositório público;
- [ ] somente depois da aprovação manual, configurar um remoto público e realizar o primeiro push.

## Estado atual

- histórico Git local novo e independente;
- nenhum remoto Git configurado;
- publicação externa ainda não realizada;
- PDFs anonimizados mantêm texto pesquisável e passaram em validação automática de renderização;
- identificadores pessoais conhecidos e endereços internos usados na preparação foram removidos da cópia pública, exceto a autoria bibliográfica preservada do artigo.
