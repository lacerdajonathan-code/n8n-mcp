# 📧 Configuração IMAP Gmail + n8n - Passo a Passo Visual

## 🎯 Resumo Rápido

**✅ BOA NOTÍCIA**: A conectividade IMAP está funcionando perfeitamente!
- Gmail IMAP: ✅ Acessível
- SSL/TLS: ✅ Funcionando
- Porta 993: ✅ Aberta

## 📋 Checklist de Configuração

### ✅ Passo 1: Gmail (5 minutos)

#### 1.1 Habilitar Verificação em Duas Etapas
```
1. Acesse: https://myaccount.google.com/
2. Clique: "Segurança" (menu lateral)
3. Clique: "Verificação em duas etapas"
4. Siga: O processo de configuração
5. Confirme: Com seu telefone
```

#### 1.2 Gerar Senha de Aplicativo
```
1. Ainda em: "Segurança" > "Verificação em duas etapas"
2. Procure: "Senhas de aplicativo" (final da página)
3. Clique: "Senhas de aplicativo"
4. Selecione: "Aplicativo" > "Outro (nome personalizado)"
5. Digite: "n8n Agenda Edu"
6. Clique: "Gerar"
7. COPIE: A senha (16 caracteres)
8. SALVE: Em local seguro!
```

**Exemplo de senha gerada**: `abcd efgh ijkl mnop`

#### 1.3 Verificar IMAP
```
1. Acesse: https://mail.google.com/
2. Clique: ⚙️ > "Ver todas as configurações"
3. Vá em: "Encaminhamento e POP/IMAP"
4. Verifique: "IMAP está habilitado" ✅
5. Se não: Clique "Habilitar IMAP"
```

### ✅ Passo 2: n8n (5 minutos)

#### 2.1 Importar Workflow
```
1. Acesse: Seu n8n
2. Vá em: "Workflows" > "Import from File"
3. Selecione: agenda-edu-whatsapp-workflow-imap.json
4. Clique: "Import"
```

#### 2.2 Criar Credenciais IMAP
```
1. No n8n: "Credentials" > "Create New"
2. Selecione: "IMAP Email Account"
3. Configure:
   - Credential Name: "Gmail IMAP Agenda Edu"
   - Host: imap.gmail.com
   - Port: 993
   - Secure: true
   - User: seu-email@gmail.com
   - Password: senha-de-aplicativo
4. Clique: "Save"
```

#### 2.3 Configurar Nó IMAP
```
1. Abra: O workflow importado
2. Clique: No nó "IMAP Email"
3. Configure:
   - Credential: "Gmail IMAP Agenda Edu"
   - Poll Times: "Every Minute"
   - From Email: no-reply@agendaedu.com
4. Clique: "Save"
```

### ✅ Passo 3: Teste (2 minutos)

#### 3.1 Testar Conexão
```
1. No nó IMAP: Clique "Test"
2. Verifique: "Success" ou "Connected"
3. Se erro: Verifique credenciais
```

#### 3.2 Testar Workflow
```bash
# Execute o teste
node test-agenda-edu-workflow.js

# Deve mostrar:
# ✅ Filtro IF: PASSOU
# ✅ Extração de dados: PASSOU
# ✅ Formatação: PASSOU
```

## 🔧 Configurações Detalhadas

### Gmail IMAP
| Campo | Valor |
|-------|-------|
| **Servidor** | `imap.gmail.com` |
| **Porta** | `993` |
| **Segurança** | `SSL/TLS` |
| **Usuário** | `seu-email@gmail.com` |
| **Senha** | `senha-de-aplicativo` |

### n8n Credentials
| Campo | Valor |
|-------|-------|
| **Name** | `Gmail IMAP Agenda Edu` |
| **Host** | `imap.gmail.com` |
| **Port** | `993` |
| **Secure** | `true` |
| **User** | `seu-email@gmail.com` |
| **Password** | `senha-de-aplicativo` |

## 🐛 Problemas Comuns

### ❌ "Authentication failed"
**Causa**: Senha incorreta
**Solução**: Use senha de aplicativo (16 caracteres)

### ❌ "Connection refused"
**Causa**: IMAP desabilitado
**Solução**: Habilite IMAP no Gmail

### ❌ "Invalid credentials"
**Causa**: Usuário ou senha incorretos
**Solução**: Verifique e-mail e senha de aplicativo

### ❌ "SSL/TLS required"
**Causa**: Conexão não segura
**Solução**: Marque "Secure: true" no n8n

## 🧪 Testes de Validação

### Teste 1: Conectividade
```bash
# Testar IMAP Gmail
node test-imap-config.js

# Deve mostrar:
# ✅ TCP: OK
# ✅ SSL/TLS: OK
```

### Teste 2: Workflow
```bash
# Testar workflow
node test-agenda-edu-workflow.js

# Deve mostrar:
# ✅ Filtro IF: PASSOU
# ✅ Extração: PASSOU
# ✅ Formatação: PASSOU
```

### Teste 3: n8n
```
1. Ative o workflow
2. Envie e-mail de teste
3. Verifique execução
4. Confirme WhatsApp
```

## 📊 Status da Configuração

### ✅ Gmail
- [ ] Verificação em duas etapas
- [ ] Senha de aplicativo gerada
- [ ] IMAP habilitado
- [ ] Configurações verificadas

### ✅ n8n
- [ ] Workflow importado
- [ ] Credenciais criadas
- [ ] Nó configurado
- [ ] Conexão testada
- [ ] Workflow ativado

### ✅ Teste
- [ ] Script executado
- [ ] E-mail enviado
- [ ] Workflow executa
- [ ] WhatsApp enviado

## 🆘 Suporte Rápido

### Comandos Úteis
```bash
# Testar conectividade
node test-imap-config.js

# Testar workflow
node test-agenda-edu-workflow.js

# Verificar arquivos
ls -la agenda-edu-whatsapp-workflow-imap.json
```

### Logs Importantes
- **n8n**: Executions > Logs
- **Gmail**: Atividade da conta
- **Console**: F12 > Console

### Arquivos de Ajuda
- `GMAIL_IMAP_SETUP.md` - Guia completo
- `test-imap-config.js` - Teste de conectividade
- `test-agenda-edu-workflow.js` - Teste do workflow

---

**🎉 Configuração IMAP concluída!** Seu workflow Agenda Edu está pronto para usar IMAP Gmail.