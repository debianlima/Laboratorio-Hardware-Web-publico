# Auditoria de privacidade para publicação

- Histórico público preparado como commit único, sem ancestrais do repositório privado.
- Documentos originais removidos.
- Apenas documentos anonimizados foram mantidos em `Documentos/`.
- Metadados e texto interno de PDF, DOCX, XLSX e ODS foram inspecionados.
- Relatórios auxiliares que continham os nomes substituídos foram removidos.
- O dump do Paperclip foi sanitizado: nomes conhecidos e e-mails foram substituídos; dados de segredos e credenciais foram excluídos.
- O dump sanitizado foi restaurado com sucesso em PostgreSQL temporário.
- Caches e logs transitórios do fórum foram removidos.

## Resultado da validação

- Ocorrências dos nomes conhecidos: 0
- Segredos de formatos conhecidos: 0
- Arquivos acima de 90 MB no conteúdo versionado: 0
- Commits no histórico público: 1
- Tabelas restauradas do Paperclip: 156
- Agentes preservados: 11
- Comentários preservados: 203
- Eventos de execução preservados: 1674
- Registros de segredos preservados: 0
