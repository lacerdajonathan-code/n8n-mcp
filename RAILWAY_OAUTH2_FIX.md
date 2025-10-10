# 🔧 Correção OAuth2 Gmail no Railway

## 🚨 Problema Identificado

A URL `https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback` não está funcionando.

## 🔍 Diagnóstico

### Possíveis Causas

1. **URL incorreta** - Railway pode ter mudado a URL
2. **Configuração OAuth2** - URLs não configuradas corretamente
3. **HTTPS/HTTP** - Problema de protocolo
4. **CORS** - Configuração de CORS no Railway
5. **n8n config** - Configuração incorreta no n8n

## 🛠️ Soluções

### 1. Verificar URL Atual do Railway

```bash
# Verificar se a URL está correta
curl -I https://primary-production-8b618.up.railway.app

# Deve retornar 200 OK
```

### 2. Configuração Correta no Google Cloud Console

**URLs de Redirecionamento Autorizadas:**
```
https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback
```

**⚠️ IMPORTANTE**: 
- Use HTTPS (não HTTP)
- URL deve terminar com `/rest/oauth2-credential/callback`
- Sem barra no final

### 3. Configuração no n8n (Railway)

1. **Acesse o n8n no Railway**
2. **Vá em Credentials > Create New**
3. **Selecione "Gmail OAuth2 API"**
4. **Configure**:
   - **Credential Name**: "Gmail OAuth2 Railway"
   - **Client ID**: Seu Client ID do Google
   - **Client Secret**: Seu Client Secret do Google
5. **Clique em "Connect my account"**

### 4. URLs Alternativas para Teste

Se a URL principal não funcionar, tente:

```
# URL principal
https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback

# URL alternativa (se Railway mudou)
https://primary-production-8b618.up.railway.app/oauth/callback

# URL com porta (se necessário)
https://primary-production-8b618.up.railway.app:443/rest/oauth2-credential/callback
```

## 🔧 Configuração Avançada

### 1. Verificar Configuração do Railway

```bash
# Verificar variáveis de ambiente
railway variables

# Deveria ter:
# N8N_HOST=0.0.0.0
# N8N_PORT=3000
# N8N_PROTOCOL=https
# N8N_EDITOR_BASE_URL=https://primary-production-8b618.up.railway.app
```

### 2. Configuração n8n para Railway

Crie arquivo `.env` no Railway:

```env
# Configurações básicas
N8N_HOST=0.0.0.0
N8N_PORT=3000
N8N_PROTOCOL=https

# URL base (importante para OAuth2)
N8N_EDITOR_BASE_URL=https://primary-production-8b618.up.railway.app

# Configurações OAuth2
N8N_OAUTH2_CALLBACK_URL=https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback

# Configurações de segurança
N8N_SECURE_COOKIE=true
N8N_COOKIE_SAME_SITE=lax
```

### 3. Configuração no Google Cloud Console

1. **Acesse**: [Google Cloud Console](https://console.cloud.google.com/)
2. **Vá em**: APIs e Serviços > Credenciais
3. **Selecione**: Sua credencial OAuth2
4. **Adicione URLs**:
   ```
   https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback
   https://primary-production-8b618.up.railway.app/oauth/callback
   ```

## 🧪 Teste de Conectividade

### 1. Teste Manual

```bash
# Testar se a URL responde
curl -v https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback

# Deve retornar algo como:
# HTTP/2 200
# Content-Type: text/html
```

### 2. Teste no n8n

1. **Acesse**: `https://primary-production-8b618.up.railway.app`
2. **Vá em**: Credentials
3. **Crie**: Nova credencial Gmail OAuth2
4. **Teste**: Conexão

## 🐛 Troubleshooting Específico

### Erro: "redirect_uri_mismatch"

**Causa**: URL no Google não confere com n8n
**Solução**:
1. Verifique URL exata no Google Cloud Console
2. Deve ser exatamente: `https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback`
3. Sem barra no final

### Erro: "Connection refused"

**Causa**: Railway não está respondendo
**Solução**:
1. Verifique se o Railway está rodando
2. Acesse a URL principal do n8n
3. Verifique logs do Railway

### Erro: "Invalid client"

**Causa**: Client ID ou Secret incorretos
**Solução**:
1. Verifique se copiou corretamente do Google
2. Não deve haver espaços extras
3. Verifique se está usando o Client ID correto

### Erro: "CORS error"

**Causa**: Configuração de CORS no Railway
**Solução**:
1. Adicione variável de ambiente:
   ```env
   N8N_CORS_ORIGIN=https://primary-production-8b618.up.railway.app
   ```
2. Reinicie o Railway

## 🔄 Configuração Alternativa

### Se OAuth2 não funcionar, use IMAP

1. **Reverter para IMAP**:
   ```bash
   # Usar versão IMAP do workflow
   cp agenda-edu-whatsapp-workflow-imap.json agenda-edu-whatsapp-workflow.json
   ```

2. **Configurar credenciais IMAP**:
   - Host: `imap.gmail.com`
   - Porta: `993`
   - SSL: `true`
   - Usuário: `seu-email@gmail.com`
   - Senha: `senha-de-aplicativo`

## 📋 Checklist de Verificação

### ✅ Google Cloud Console
- [ ] Projeto criado
- [ ] Gmail API ativada
- [ ] Credenciais OAuth2 criadas
- [ ] URL de redirecionamento configurada
- [ ] Client ID e Secret copiados

### ✅ Railway
- [ ] n8n rodando
- [ ] URL acessível
- [ ] Variáveis de ambiente configuradas
- [ ] HTTPS funcionando

### ✅ n8n
- [ ] Credenciais Gmail OAuth2 criadas
- [ ] Conexão testada
- [ ] Workflow importado
- [ ] Teste executado

## 🆘 Suporte Adicional

### Logs do Railway
```bash
# Ver logs em tempo real
railway logs

# Procurar por erros OAuth2
railway logs | grep -i oauth
```

### Logs do n8n
1. Acesse n8n
2. Vá em "Executions"
3. Verifique logs de erro
4. Procure por erros OAuth2

### Teste de Conectividade
```bash
# Testar URL principal
curl -I https://primary-production-8b618.up.railway.app

# Testar endpoint OAuth2
curl -I https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback
```

---

**🎯 Próximos Passos:**
1. Verifique a URL exata do Railway
2. Configure corretamente no Google Cloud Console
3. Teste a conexão no n8n
4. Se não funcionar, use a versão IMAP como alternativa