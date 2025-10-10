# 📧 Configuração IMAP Gmail + n8n - Guia Completo

## 🎯 Visão Geral

Este guia explica como configurar IMAP no Gmail e no n8n para o workflow Agenda Edu - WhatsApp.

## 📋 Pré-requisitos

- Conta Gmail ativa
- Verificação em duas etapas habilitada
- n8n instalado e funcionando
- Acesso ao workflow `agenda-edu-whatsapp-workflow-imap.json`

## 🔐 Parte 1: Configurar Gmail para IMAP

### 1.1 Habilitar Verificação em Duas Etapas

1. **Acesse**: [Conta Google](https://myaccount.google.com/)
2. **Vá em**: "Segurança" (lado esquerdo)
3. **Clique**: "Verificação em duas etapas"
4. **Siga**: O processo de configuração
5. **Confirme**: Com seu telefone

### 1.2 Gerar Senha de Aplicativo

1. **Ainda em**: "Segurança" > "Verificação em duas etapas"
2. **Procure**: "Senhas de aplicativo" (no final da página)
3. **Clique**: "Senhas de aplicativo"
4. **Selecione**: "Aplicativo" > "Outro (nome personalizado)"
5. **Digite**: "n8n Agenda Edu"
6. **Clique**: "Gerar"
7. **COPIE**: A senha gerada (16 caracteres)
8. **⚠️ IMPORTANTE**: Salve em local seguro!

**Exemplo de senha gerada**: `abcd efgh ijkl mnop`

### 1.3 Verificar Configurações IMAP

1. **Acesse**: [Gmail](https://mail.google.com/)
2. **Clique**: ⚙️ (Configurações) > "Ver todas as configurações"
3. **Vá em**: "Encaminhamento e POP/IMAP"
4. **Verifique**: "IMAP está habilitado" ✅
5. **Se não estiver**: Clique em "Habilitar IMAP"

### 1.4 Configurações IMAP Recomendadas

**Configurações do Gmail IMAP:**
- **Servidor IMAP**: `imap.gmail.com`
- **Porta**: `993`
- **Segurança**: `SSL/TLS`
- **Autenticação**: `Senha normal` (use a senha de aplicativo)

## 🔧 Parte 2: Configurar n8n

### 2.1 Importar Workflow IMAP

1. **Acesse**: Seu n8n
2. **Vá em**: "Workflows" > "Import from File"
3. **Selecione**: `agenda-edu-whatsapp-workflow-imap.json`
4. **Clique**: "Import"

### 2.2 Criar Credenciais IMAP

1. **No n8n**: Vá em "Credentials" > "Create New"
2. **Selecione**: "IMAP Email Account"
3. **Configure**:
   - **Credential Name**: "Gmail IMAP Agenda Edu"
   - **Host**: `imap.gmail.com`
   - **Port**: `993`
   - **Secure**: `true` (SSL/TLS)
   - **User**: `seu-email@gmail.com`
   - **Password**: `sua-senha-de-aplicativo` (16 caracteres)
4. **Clique**: "Save"

### 2.3 Configurar Nó IMAP Email

1. **Abra**: O workflow importado
2. **Clique**: No nó "IMAP Email"
3. **Configure**:
   - **Credential**: "Gmail IMAP Agenda Edu"
   - **Poll Times**: "Every Minute"
   - **From Email**: `no-reply@agendaedu.com`
4. **Clique**: "Save"

### 2.4 Testar Conexão

1. **No nó IMAP**: Clique em "Test"
2. **Verifique**: Se aparece "Success" ou "Connected"
3. **Se der erro**: Verifique as credenciais

## 🧪 Parte 3: Testar Configuração

### 3.1 Teste Manual

```bash
# Execute o script de teste
node test-agenda-edu-workflow.js
```

### 3.2 Teste no n8n

1. **Ative**: O workflow
2. **Envie**: E-mail de teste da Agenda Edu
3. **Verifique**: Se o workflow executa
4. **Confirme**: Se mensagem é enviada no WhatsApp

## 🐛 Troubleshooting

### Erro: "Authentication failed"

**Causa**: Senha incorreta
**Solução**:
1. Verifique se está usando a senha de aplicativo (16 caracteres)
2. Não use sua senha normal do Gmail
3. Gere uma nova senha de aplicativo

### Erro: "Connection refused"

**Causa**: Configurações de rede
**Solução**:
1. Verifique se IMAP está habilitado no Gmail
2. Verifique se a porta 993 está aberta
3. Teste com outro cliente de e-mail

### Erro: "Invalid credentials"

**Causa**: Usuário ou senha incorretos
**Solução**:
1. Verifique se o e-mail está correto
2. Verifique se a senha de aplicativo está correta
3. Gere uma nova senha de aplicativo

### Erro: "SSL/TLS required"

**Causa**: Conexão não segura
**Solução**:
1. Verifique se "Secure" está marcado como `true`
2. Verifique se a porta é `993`
3. Verifique se o host é `imap.gmail.com`

## 📊 Configurações Detalhadas

### Configurações IMAP Gmail

| Campo | Valor |
|-------|-------|
| **Servidor IMAP** | `imap.gmail.com` |
| **Porta** | `993` |
| **Segurança** | `SSL/TLS` |
| **Autenticação** | `Senha normal` |
| **Usuário** | `seu-email@gmail.com` |
| **Senha** | `senha-de-aplicativo` |

### Configurações n8n

| Campo | Valor |
|-------|-------|
| **Credential Name** | `Gmail IMAP Agenda Edu` |
| **Host** | `imap.gmail.com` |
| **Port** | `993` |
| **Secure** | `true` |
| **User** | `seu-email@gmail.com` |
| **Password** | `senha-de-aplicativo` |

## 🔒 Segurança

### Boas Práticas

1. **Use senha de aplicativo**: Nunca use sua senha normal
2. **Mantenha segura**: Salve a senha em local seguro
3. **Rotacione**: Mude a senha periodicamente
4. **Monitore**: Verifique acessos suspeitos

### Revogar Acesso

Se precisar revogar o acesso:
1. Acesse [Conta Google](https://myaccount.google.com/)
2. Vá em "Segurança" > "Senhas de aplicativo"
3. Revogue a senha "n8n Agenda Edu"

## 📋 Checklist de Configuração

### ✅ Gmail
- [ ] Verificação em duas etapas habilitada
- [ ] Senha de aplicativo gerada
- [ ] IMAP habilitado
- [ ] Configurações verificadas

### ✅ n8n
- [ ] Workflow IMAP importado
- [ ] Credenciais IMAP criadas
- [ ] Nó IMAP configurado
- [ ] Conexão testada
- [ ] Workflow ativado

### ✅ Teste
- [ ] Script de teste executado
- [ ] E-mail de teste enviado
- [ ] Workflow executa
- [ ] Mensagem WhatsApp enviada

## 🆘 Suporte

### Logs Úteis

1. **n8n**: Vá em "Executions" > Ver logs
2. **Gmail**: Verifique atividade da conta
3. **Console**: Verifique erros no navegador

### Comandos de Teste

```bash
# Testar conectividade IMAP
telnet imap.gmail.com 993

# Testar workflow
node test-agenda-edu-workflow.js

# Verificar configurações
node diagnose-railway-oauth2.js
```

---

**✅ Configuração IMAP concluída!** Seu workflow Agenda Edu agora está pronto para usar IMAP Gmail.