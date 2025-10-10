# 🧪 Configuração de Teste - E-mails Facebook

## 🎯 Problema Identificado

O workflow original está configurado para capturar apenas e-mails da **Agenda Edu** (`no-reply@agendaedu.com`), mas você está testando com e-mails do **Facebook** (`security@facebookmail.com`).

## ✅ Solução Criada

Criei uma versão de teste do workflow que funciona com e-mails do Facebook para você testar a funcionalidade.

## 📁 Arquivos Criados

1. **`agenda-edu-whatsapp-workflow-test.json`** - Workflow de teste para Facebook
2. **`test-facebook-emails.js`** - Script de teste com seus e-mails
3. **`CONFIGURACAO_TESTE_FACEBOOK.md`** - Este guia

## 🚀 Como Usar o Workflow de Teste

### 1. Importar Workflow de Teste

1. **Acesse**: Seu n8n
2. **Vá em**: "Workflows" > "Import from File"
3. **Selecione**: `agenda-edu-whatsapp-workflow-test.json`
4. **Clique**: "Import"

### 2. Configurar Credenciais

**Gmail OAuth2** (mesmo processo do workflow original):
- Configure as credenciais Gmail OAuth2
- Use a mesma configuração do workflow principal

**WhatsApp Business API** (mesmo processo do workflow original):
- Configure as credenciais WhatsApp
- Use a mesma configuração do workflow principal

### 3. Ativar Workflow

1. **Abra**: O workflow importado
2. **Ative**: O workflow
3. **Aguarde**: E-mails do Facebook serem capturados

## 🧪 Teste Local

Execute o script de teste para ver como funciona:

```bash
node test-facebook-emails.js
```

**Resultado esperado**:
- ✅ Filtro IF: PASSOU
- ✅ Extração de dados: PASSOU
- ✅ Formatação: PASSOU
- ✅ Links extraídos: 1 encontrado

## 📊 Dados Extraídos dos E-mails

### E-mail 1: Redefinição de Senha
- **Usuário**: Infity Horizons - ihorizons
- **Tipo**: Redefinição de Senha
- **Código**: 119854 (extraído corretamente)
- **Dispositivo**: Edge (Chromium Based), Windows
- **Links**: Checkup de Segurança

### E-mail 2: Senha Alterada
- **Usuário**: Infity Horizons - ihorizons
- **Tipo**: Senha Alterada
- **Dispositivo**: Edge (Chromium Based), Windows
- **Localização**: São Paulo, SP, Brazil

## 🔄 Voltar para Agenda Edu

Quando quiser usar com e-mails da Agenda Edu:

1. **Use**: `agenda-edu-whatsapp-workflow.json` (original)
2. **Configure**: Filtro para `no-reply@agendaedu.com`
3. **Teste**: Com e-mails reais da Agenda Edu

## 📋 Configurações dos Workflows

### Workflow Original (Agenda Edu)
```json
{
  "filters": {
    "fromEmail": "no-reply@agendaedu.com"
  }
}
```

### Workflow de Teste (Facebook)
```json
{
  "filters": {
    "fromEmail": "security@facebookmail.com"
  }
}
```

## 🎯 Próximos Passos

### Para Testar com Facebook
1. ✅ Importe o workflow de teste
2. ✅ Configure as credenciais
3. ✅ Ative o workflow
4. ✅ Aguarde e-mails do Facebook

### Para Usar com Agenda Edu
1. ✅ Use o workflow original
2. ✅ Configure filtro para Agenda Edu
3. ✅ Teste com e-mails reais da Agenda Edu

## 🐛 Troubleshooting

### E-mails não são capturados
- Verifique se o filtro está correto
- Confirme se as credenciais estão funcionando
- Teste com o script local primeiro

### Dados não são extraídos
- Execute o script de teste
- Verifique se o formato do e-mail mudou
- Ajuste as expressões regulares se necessário

### WhatsApp não envia
- Verifique as credenciais do WhatsApp
- Confirme se os números estão corretos
- Teste a conexão do WhatsApp

## 📚 Arquivos de Referência

- **`agenda-edu-whatsapp-workflow.json`** - Workflow original (Agenda Edu)
- **`agenda-edu-whatsapp-workflow-test.json`** - Workflow de teste (Facebook)
- **`test-facebook-emails.js`** - Script de teste
- **`GMAIL_IMAP_SETUP.md`** - Configuração IMAP
- **`GMAIL_OAUTH2_SETUP.md`** - Configuração OAuth2

---

**✅ Agora você pode testar o workflow com e-mails do Facebook!** Quando estiver pronto para usar com a Agenda Edu, volte para o workflow original.