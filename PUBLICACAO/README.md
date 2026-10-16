# Preparação para publicação pública

Esta pasta registra as verificações realizadas na cópia local do projeto antes de qualquer publicação.

## Estado atual

O projeto permanece somente como cópia local para revisão. Nenhum repositório público foi criado e nenhuma alteração desta etapa foi enviada ao GitHub.

## Relatórios de verificação

- `pdf_anonymization_report.json`: registra, sem armazenar os identificadores removidos, quais PDFs foram recriados e quantas ocorrências foram anonimizadas.
- `pdf_render_validation.json`: registra a abertura e a renderização de páginas de amostra dos PDFs após a recriação.
- `inventario_serial_anonymization.json`: registra a remoção dos números de série individuais do inventário de HD/SSD, sem preservar os valores removidos.
- `inventario_render_comparison.json`: compara a renderização do inventário antes e depois da anonimização dos números de série e confirma preservação das dimensões da página.
- `auditoria_final_pre_publicacao.json`: resume a busca automatizada por identificadores conhecidos, nomes em arquivos, endereços RFC1918 e padrões de tokens, além de conferir a integridade do artigo.

## Regras desta cópia

A cópia possui histórico Git independente do repositório privado original. Identificadores pessoais de estudantes, endpoints internos e credenciais não necessários à compreensão técnica devem permanecer fora da versão pública. O artigo acadêmico em `../artigo/` preserva sua autoria bibliográfica intencionalmente.

## Limite da automação

As verificações automáticas ajudam a localizar texto e metadados, mas não substituem uma revisão humana final. Em especial, capturas de tela, imagens incorporadas e materiais históricos devem ser inspecionados visualmente antes da publicação.
