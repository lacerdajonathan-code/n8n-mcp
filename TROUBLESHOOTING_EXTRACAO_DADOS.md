# 🔧 Troubleshooting - Extração de Dados do E-mail

## 🚨 Problema: "Extrair dados do e-mail não está recebendo informações"

### 🔍 Diagnóstico Rápido

Execute este comando para diagnosticar:
```bash
node debug-email-extraction.js
```

## 📋 Possíveis Causas e Soluções

### 1. ❌ Dados de Entrada Vazios

**Sintomas:**
- Nó "Extrair Dados" não recebe dados
- Logs mostram `$input` vazio
- Workflow para no nó anterior

**Soluções:**
1. **Verificar nó IMAP/Gmail:**
   - Credenciais estão corretas?
   - Conexão está funcionando?
   - Filtro está correto?

2. **Verificar nó IF:**
   - Condição está correta?
   - E-mail está passando pelo filtro?

3. **Testar conexão:**
   ```bash
   # Testar IMAP
   node test-imap-config.js
   
   # Testar OAuth2
   node diagnose-railway-oauth2.js
   ```

### 2. ❌ Estrutura de Dados Incorreta

**Sintomas:**
- Dados chegam mas em formato diferente
- `$input.first().json` retorna undefined
- Erro ao acessar propriedades

**Soluções:**
1. **Adicionar debug no nó:**
   ```javascript
   console.log('Dados de entrada:', JSON.stringify($input, null, 2));
   ```

2. **Verificar estrutura esperada:**
   ```javascript
   // Estrutura correta:
   $input.first().json.html
   $input.first().json.text
   $input.first().json.from
   $input.first().json.subject
   ```

### 3. ❌ Conteúdo HTML Ausente

**Sintomas:**
- E-mail chega mas sem HTML
- Apenas texto simples
- Extração falha

**Soluções:**
1. **Verificar configuração IMAP/Gmail:**
   - Formato: HTML + Texto
   - Não apenas texto simples

2. **Usar conteúdo de texto como fallback:**
   ```javascript
   const emailContent = $input.first().json.html || $input.first().json.text || '';
   ```

### 4. ❌ Formato do E-mail Mudou

**Sintomas:**
- Dados chegam mas extração falha
- Regex não encontra padrões
- Nome/conteúdo não extraído

**Soluções:**
1. **Verificar padrões no e-mail real:**
   - "Confira a Agenda de" ainda existe?
   - "certo?" ainda existe?
   - "Confirmar Leitura" ainda existe?

2. **Ajustar regex se necessário:**
   ```javascript
   // Padrão original
   /Confira a Agenda de\s+([^\s]+(?:\s+[^\s]+)*?)\s+e continue acompanhando/
   
   // Se mudou, ajustar conforme necessário
   ```

## 🛠️ Código de Debug para n8n

### Substitua o código do nó "Extrair Dados do E-mail" por este:

```javascript
// Cole o conteúdo do arquivo: extrair-dados-debug.js
```

### Ou adicione debug ao código existente:

```javascript
// Adicione no início do nó:
console.log('🔍 DEBUG - Dados de entrada:', JSON.stringify($input, null, 2));

// Seu código existente aqui...

// Adicione no final:
console.log('✅ DEBUG - Resultado:', JSON.stringify(resultado, null, 2));
```

## 🧪 Testes de Validação

### 1. Teste com Dados Simulados
```bash
node test-agenda-edu-workflow.js
```

### 2. Teste de Conectividade
```bash
# IMAP
node test-imap-config.js

# OAuth2
node diagnose-railway-oauth2.js
```

### 3. Teste de Debug
```bash
node debug-email-extraction.js
```

## 📊 Logs Importantes no n8n

### 1. Acessar Logs
1. Vá em "Executions"
2. Clique na execução que falhou
3. Clique no nó "Extrair Dados do E-mail"
4. Verifique os logs

### 2. O que Procurar
- `Dados de entrada:` - Estrutura dos dados
- `Conteúdo do e-mail encontrado:` - Se HTML/texto existe
- `Nome do aluno extraído:` - Se extração funcionou
- `Total de links encontrados:` - Quantos links foram encontrados

## 🔄 Workflow de Debug

### 1. Criar Nó de Debug
1. Adicione um nó "Code" antes do "Extrair Dados"
2. Cole este código:
```javascript
console.log('Dados do nó anterior:', JSON.stringify($input, null, 2));
return $input;
```

### 2. Verificar Cada Nó
- **IMAP/Gmail**: Dados chegam?
- **IF**: E-mail passa pelo filtro?
- **Debug**: Estrutura dos dados?
- **Extrair Dados**: Extração funciona?

## 🆘 Soluções Rápidas

### Se nada funcionar:

1. **Use o workflow de teste:**
   - `agenda-edu-whatsapp-workflow-test.json`
   - Funciona com e-mails do Facebook

2. **Teste com e-mail real da Agenda Edu:**
   - Envie um e-mail de teste
   - Verifique se chega no n8n

3. **Verifique configurações:**
   - Credenciais corretas
   - Filtros corretos
   - Conexões funcionando

## 📞 Suporte Adicional

### Comandos de Diagnóstico
```bash
# Debug completo
node debug-email-extraction.js

# Teste de conectividade
node test-imap-config.js

# Teste do workflow
node test-agenda-edu-workflow.js
```

### Arquivos de Ajuda
- `debug-email-extraction.js` - Script de debug
- `extrair-dados-debug.js` - Código para n8n
- `test-agenda-edu-workflow.js` - Teste do workflow
- `GMAIL_IMAP_SETUP.md` - Configuração IMAP
- `GMAIL_OAUTH2_SETUP.md` - Configuração OAuth2

---

**🎯 Execute o debug primeiro para identificar exatamente onde está o problema!**