# Configuração Gmail OAuth2 para n8n

Este guia explica como configurar as credenciais Gmail OAuth2 para o workflow Agenda Edu - WhatsApp.

## 📋 Pré-requisitos

- Conta Google (Gmail)
- Acesso ao Google Cloud Console
- n8n instalado e funcionando

## 🚀 Passo a Passo

### 1. Criar Projeto no Google Cloud Console

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Clique em "Selecionar projeto" no topo
3. Clique em "Novo Projeto"
4. Digite um nome (ex: "n8n-agenda-edu")
5. Clique em "Criar"

### 2. Ativar API Gmail

1. No menu lateral, vá em "APIs e Serviços" > "Biblioteca"
2. Procure por "Gmail API"
3. Clique em "Gmail API"
4. Clique em "Ativar"

### 3. Criar Credenciais OAuth2

1. Vá em "APIs e Serviços" > "Credenciais"
2. Clique em "Criar Credenciais" > "ID do cliente OAuth"
3. Se solicitado, configure a tela de consentimento:
   - Tipo de usuário: "Externo"
   - Nome do app: "n8n Agenda Edu"
   - Email de suporte: seu email
   - Domínio autorizado: deixe vazio
   - Clique em "Salvar e Continuar"

### 4. Configurar OAuth2

1. **Tipo de aplicativo**: "Aplicativo da Web"
2. **Nome**: "n8n Agenda Edu"
3. **URIs de redirecionamento autorizados**:
   - Adicione: `http://localhost:5678/rest/oauth2-credential/callback`
   - Se usar n8n em servidor: `https://seu-dominio.com/rest/oauth2-credential/callback`
4. Clique em "Criar"

### 5. Obter Credenciais

Após criar, você verá:
- **Client ID**: `123456789-abcdef.apps.googleusercontent.com`
- **Client Secret**: `GOCSPX-abcdef123456`

**⚠️ IMPORTANTE**: Salve essas informações em local seguro!

### 6. Configurar no n8n

1. Abra o n8n
2. Vá em "Credentials" > "Create New"
3. Selecione "Gmail OAuth2 API"
4. Preencha:
   - **Credential Name**: "Gmail OAuth2 Account"
   - **Client ID**: Cole o Client ID do Google
   - **Client Secret**: Cole o Client Secret do Google
5. Clique em "Connect my account"
6. Autorize o acesso no Google
7. Clique em "Save"

### 7. Testar Conexão

1. No nó "Gmail Trigger" do workflow
2. Selecione a credencial criada
3. Teste a conexão
4. Se funcionar, o workflow está pronto!

## 🔧 Configurações Avançadas

### Escopo de Permissões

O Gmail OAuth2 solicita as seguintes permissões:
- `https://www.googleapis.com/auth/gmail.readonly` - Ler e-mails
- `https://www.googleapis.com/auth/gmail.modify` - Modificar e-mails (se necessário)

### URLs de Redirecionamento

Para diferentes ambientes:

**Desenvolvimento Local:**
```
http://localhost:5678/rest/oauth2-credential/callback
```

**Produção:**
```
https://seu-dominio.com/rest/oauth2-credential/callback
```

**Docker:**
```
http://localhost:5678/rest/oauth2-credential/callback
```

## 🐛 Troubleshooting

### Erro: "redirect_uri_mismatch"

**Problema**: URL de redirecionamento não confere
**Solução**: 
1. Verifique se a URL no Google Cloud Console está correta
2. Deve ser exatamente igual à configurada no n8n
3. Inclua http/https conforme necessário

### Erro: "invalid_client"

**Problema**: Client ID ou Secret incorretos
**Solução**:
1. Verifique se copiou corretamente do Google Cloud Console
2. Não deve haver espaços extras
3. Verifique se está usando o Client ID correto

### Erro: "access_denied"

**Problema**: Usuário negou permissões
**Solução**:
1. Vá em "Credentials" no n8n
2. Clique em "Connect my account" novamente
3. Autorize todas as permissões solicitadas

### Tokens Expirados

**Problema**: Access token expirou
**Solução**:
1. O n8n deve renovar automaticamente usando refresh token
2. Se não funcionar, reconecte a conta
3. Verifique se o refresh token está válido

## 🔒 Segurança

### Boas Práticas

1. **Nunca compartilhe** Client Secret
2. **Use HTTPS** em produção
3. **Monitore** o uso da API
4. **Revogue** credenciais não utilizadas
5. **Rotacione** credenciais periodicamente

### Limites da API

- **Quota diária**: 1 bilhão de unidades
- **Rate limit**: 250 requests/segundo
- **Tamanho máximo**: 25MB por e-mail

## 📊 Monitoramento

### Google Cloud Console

1. Vá em "APIs e Serviços" > "Quotas"
2. Monitore uso da Gmail API
3. Configure alertas se necessário

### n8n

1. Vá em "Executions"
2. Monitore execuções do workflow
3. Verifique logs de erro

## 🆘 Suporte

### Problemas Comuns

1. **API não ativada**: Ative a Gmail API no Google Cloud Console
2. **Credenciais inválidas**: Verifique Client ID e Secret
3. **Permissões negadas**: Reconecte a conta no n8n
4. **URL incorreta**: Verifique URLs de redirecionamento

### Logs Úteis

- Google Cloud Console > Logs
- n8n > Executions > Logs
- Console do navegador (F12)

---

**✅ Configuração concluída!** Seu workflow Agenda Edu agora está pronto para usar Gmail OAuth2.