# Preparação para publicação pública

Esta pasta registra as verificações realizadas na cópia do projeto antes de sua publicação pública.

## Estado atual

O projeto foi publicado em 16/10/2026 no repositório público https://github.com/debianlima/Laboratorio-Hardware-Web-publico. A pasta `Documentos/Trabalhos 2026 Lab Hard/` foi excluída antes da publicação por corresponder a uma tarefa nova.

## Relatórios de verificação

- `pdf_anonymization_report.json`: registra, sem armazenar os identificadores removidos, quais PDFs foram recriados e quantas ocorrências foram anonimizadas.
- `pdf_render_validation.json`: registra a abertura e a renderização de páginas de amostra dos PDFs após a recriação.
- `auditoria_final_pre_publicacao.json`: resume a busca automatizada por identificadores conhecidos, nomes em arquivos, endereços RFC1918 e padrões de tokens, além de conferir a integridade do artigo.

## Regras desta cópia

A cópia possui histórico Git independente do repositório privado original. Identificadores pessoais de estudantes, endpoints internos e credenciais não necessários à compreensão técnica devem permanecer fora da versão pública. O artigo acadêmico em `../artigo/` preserva sua autoria bibliográfica intencionalmente.

## Limite da automação

As verificações automáticas ajudam a localizar texto e metadados, mas não substituem uma revisão humana final. Em especial, capturas de tela, imagens incorporadas e materiais históricos devem continuar sendo inspecionados visualmente durante a manutenção da publicação.
