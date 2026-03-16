-- Correção do tamanho de colunas para importar do Excel
ALTER TABLE regional ALTER COLUMN desc_regional TYPE VARCHAR(100);
ALTER TABLE funcoes ALTER COLUMN descricao_funcao TYPE VARCHAR(100);
