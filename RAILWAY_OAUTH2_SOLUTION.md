# ✅ Solução OAuth2 Gmail no Railway

## 🎯 Diagnóstico Concluído

**✅ BOA NOTÍCIA**: A URL está funcionando perfeitamente!
- URL principal: ✅ Acessível
- Callback OAuth2: ✅ Acessível

## 🔧 Solução Passo a Passo

### 1. Configuração no Google Cloud Console

**URL de Redirecionamento Correto:**
```
https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback
```

**Passos:**
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Vá em "APIs e Serviços" > "Credenciais"
3. Selecione sua credencial OAuth2
4. Em "URIs de redirecionamento autorizados", adicione:
   ```
   https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback
   ```
5. Clique em "Salvar"

### 2. Configuração no n8n (Railway)

1. **Acesse**: `https://primary-production-8b618.up.railway.app`
2. **Vá em**: Credentials > Create New
3. **Selecione**: "Gmail OAuth2 API"
4. **Configure**:
   - **Credential Name**: "Gmail OAuth2 Railway"
   - **Client ID**: Cole do Google Cloud Console
   - **Client Secret**: Cole do Google Cloud Console
5. **Clique**: "Connect my account"
6. **Autorize**: No Google
7. **Salve**: A credencial

### 3. Teste da Conexão

1. **No n8n**: Vá em Credentials
2. **Selecione**: Sua credencial Gmail OAuth2
3. **Clique**: "Test" ou "Connect my account"
4. **Verifique**: Se aparece "Connected" ou "Success"

## 🐛 Se Ainda Não Funcionar

### Problema: "redirect_uri_mismatch"

**Causa**: URL no Google não confere
**Solução**:
1. Verifique se a URL está EXATAMENTE igual:
   ```
   https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback
   ```
2. Sem barra no final
3. Com HTTPS (não HTTP)

### Problema: "Invalid client"

**Causa**: Client ID ou Secret incorretos
**Solução**:
1. Copie novamente do Google Cloud Console
2. Verifique se não há espaços extras
3. Use o Client ID correto (não o Client Secret)

### Problema: "Access denied"

**Causa**: Usuário negou permissões
**Solução**:
1. Vá em Credentials no n8n
2. Clique em "Connect my account" novamente
3. Autorize TODAS as permissões solicitadas

## 🔄 Alternativa: Usar IMAP

Se OAuth2 continuar com problemas, use a versão IMAP:

### 1. Importar Workflow IMAP
```bash
# Use este arquivo em vez do principal
agenda-edu-whatsapp-workflow-imap.json
```

### 2. Configurar Credenciais IMAP
- **Host**: `imap.gmail.com`
- **Porta**: `993`
- **SSL**: `true`
- **Usuário**: `seu-email@gmail.com`
- **Senha**: `senha-de-aplicativo` (não sua senha normal)

### 3. Obter Senha de Aplicativo
1. Acesse [Conta Google](https://myaccount.google.com/)
2. Vá em "Segurança" > "Verificação em duas etapas"
3. Vá em "Senhas de aplicativo"
4. Crie uma senha para "n8n"
5. Use essa senha no n8n

## 📋 Checklist de Verificação

### ✅ Google Cloud Console
- [ ] Projeto criado
- [ ] Gmail API ativada
- [ ] Credenciais OAuth2 criadas
- [ ] URL de redirecionamento: `https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback`
- [ ] Client ID e Secret copiados

### ✅ n8n Railway
- [ ] Acessível em: `https://primary-production-8b618.up.railway.app`
- [ ] Credenciais Gmail OAuth2 criadas
- [ ] Conexão testada com sucesso
- [ ] Workflow importado
- [ ] Workflow ativado

### ✅ Teste Final
- [ ] Enviar e-mail de teste da Agenda Edu
- [ ] Verificar se workflow executa
- [ ] Verificar se mensagem é enviada no WhatsApp

## 🆘 Suporte Adicional

### Logs do n8n
1. Acesse n8n
2. Vá em "Executions"
3. Verifique logs de erro
4. Procure por erros OAuth2

### Teste Manual
```bash
# Testar URL do callback
curl -I https://primary-production-8b618.up.railway.app/rest/oauth2-credential/callback

# Deve retornar 200 OK
```

### Verificar Credenciais
1. No n8n, vá em Credentials
2. Selecione sua credencial Gmail OAuth2
3. Verifique se está "Connected"
4. Se não, clique em "Connect my account"

## 🎉 Próximos Passos

1. **Configure OAuth2** seguindo os passos acima
2. **Teste a conexão** no n8n
3. **Importe o workflow** principal
4. **Ative o workflow**
5. **Teste com e-mail real**

---

**✅ A URL está funcionando!** O problema provavelmente está na configuração do Google Cloud Console ou nas credenciais. Siga os passos acima e deve funcionar.