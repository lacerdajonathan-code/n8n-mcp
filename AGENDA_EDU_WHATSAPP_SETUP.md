# Workflow Agenda Edu - Encaminhamento WhatsApp

Este workflow automatiza o encaminhamento de comunicados da Agenda Edu para o WhatsApp, extraindo informações específicas dos e-mails recebidos.

## Visão Geral do Workflow

O workflow consiste em 5 nós principais:

1. **IMAP Email** - Captura e-mails automaticamente
2. **IF - Agenda Edu** - Filtra apenas e-mails da Agenda Edu
3. **Extrair Dados do E-mail** - Extrai informações específicas do HTML
4. **Formatar Mensagem** - Formata a mensagem para WhatsApp
5. **Enviar WhatsApp** - Envia a mensagem para os números configurados

## Configuração Necessária

### 1. Credenciais IMAP

Configure as credenciais do seu provedor de e-mail:

- **Host**: Seu servidor IMAP (ex: imap.gmail.com)
- **Porta**: 993 (SSL) ou 143 (TLS)
- **Usuário**: Seu e-mail
- **Senha**: Sua senha ou senha de aplicativo
- **SSL**: Habilitado

### 2. Credenciais WhatsApp Business API

Configure as credenciais do WhatsApp Business API:

- **Token de Acesso**: Token da API do WhatsApp
- **Número de Telefone**: Número verificado do WhatsApp Business
- **Webhook URL**: URL para receber notificações (opcional)

### 3. Números de Destino

Os números de telefone estão configurados no nó "Formatar Mensagem":
- +5521996496442
- +5521966719259

Para alterar os números, edite o array `numerosTelefone` no código JavaScript.

## Funcionamento Detalhado

### 1. Captura de E-mails (IMAP Email)

- **Frequência**: A cada minuto
- **Filtro**: Apenas e-mails de `no-reply@agendaedu.com`
- **Formato**: Suporta HTML e texto

### 2. Filtro de E-mails (IF - Agenda Edu)

Verifica se o campo "from" contém `no-reply@agendaedu.com` para garantir que apenas e-mails da Agenda Edu sejam processados.

### 3. Extração de Dados (Extrair Dados do E-mail)

O código JavaScript extrai três informações principais:

#### Nome do Aluno
```javascript
// Procura por: "Confira a Agenda de [NOME] e continue acompanhando"
const nomeAlunoMatch = emailContent.match(/Confira a Agenda de\\s+([^\\s]+(?:\\s+[^\\s]+)*?)\\s+e continue acompanhando/);
```

#### Conteúdo Principal
```javascript
// Procura por: "certo?" [CONTEÚDO] "Confirmar Leitura"
const conteudoMatch = emailContent.match(/certo\\?([\\s\\S]*?)Confirmar Leitura/);
```

#### Links dos Anexos
```javascript
// Procura por links <a> que contenham arquivos com extensões comuns
const linkRegex = /<a[^>]+href=\"([^\"]+)\"[^>]*>([^<]+)<\\/a>/g;
```

### 4. Formatação da Mensagem

A mensagem é formatada com:
- Título: "Novo Comunicado da Agenda Edu"
- Nome do aluno
- Conteúdo da atividade
- Links dos anexos (um por linha)

### 5. Envio via WhatsApp

A mensagem é enviada para todos os números configurados no array `numerosTelefone`.

## Exemplo de Mensagem Gerada

```
*Novo Comunicado da Agenda Edu*

*Aluno(a):*
OLIVIA DUARTE LACERDA

*Atividade:*
História - Paula Castellano
Disciplina: História
Data de entrega: Entregar em sala de aula
Descrição: Material da semana - slides Império Romano
Lição de Casa: Império...o Romano.pdf Império...o Romano.pptx

*Links para Anexos:*
• http://link.agendaedu.com/arquivo1.pdf
• http://link.agendaedu.com/arquivo2.pptx
```

## Instalação no n8n

1. **Importar o Workflow**:
   - Acesse o n8n
   - Vá em "Workflows" > "Import from File"
   - Selecione o arquivo `agenda-edu-whatsapp-workflow.json`

2. **Configurar Credenciais**:
   - Configure as credenciais IMAP
   - Configure as credenciais WhatsApp Business API

3. **Ativar o Workflow**:
   - Clique em "Activate" para iniciar o workflow
   - O workflow começará a verificar e-mails automaticamente

## Personalização

### Alterar Números de Telefone

Edite o nó "Formatar Mensagem" e modifique o array:

```javascript
const numerosTelefone = [
  '+5521996496442',  // Substitua pelos seus números
  '+5521966719259'
];
```

### Modificar Formato da Mensagem

Edite o nó "Formatar Mensagem" e altere a variável `mensagem`:

```javascript
const mensagem = `*Seu Título Personalizado*\n\n*Aluno(a):*\n${nomeAluno}\n\n...`;
```

### Ajustar Filtros de E-mail

Para capturar e-mails de outros remetentes, edite o nó "IMAP Email" e modifique o filtro `fromEmail`.

## Troubleshooting

### E-mails não são capturados
- Verifique as credenciais IMAP
- Confirme se o e-mail está sendo recebido
- Verifique se o filtro `fromEmail` está correto

### Dados não são extraídos corretamente
- Verifique se o formato do e-mail da Agenda Edu mudou
- Ajuste as expressões regulares no nó "Extrair Dados do E-mail"
- Teste com um e-mail de exemplo

### WhatsApp não envia mensagens
- Verifique as credenciais do WhatsApp Business API
- Confirme se os números estão no formato correto (+55...)
- Verifique se o número do WhatsApp Business está verificado

## Logs e Monitoramento

- Acesse "Executions" no n8n para ver o histórico de execuções
- Verifique os logs de cada nó para identificar problemas
- Use o modo "Test" para debugar o workflow

## Segurança

- Mantenha as credenciais seguras
- Use senhas de aplicativo quando possível
- Monitore regularmente os logs de acesso
- Considere usar webhooks em vez de polling frequente para produção

## Suporte

Para problemas específicos:
1. Verifique os logs de execução no n8n
2. Teste cada nó individualmente
3. Verifique se as credenciais estão corretas
4. Confirme se o formato dos e-mails não mudou