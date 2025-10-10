# Workflow: Encaminhar Comunicados Agenda Edu para WhatsApp

## 📋 Descrição

Este workflow automatiza o encaminhamento de comunicados da Agenda Edu para o WhatsApp, extraindo informações específicas dos emails e enviando mensagens formatadas para números predefinidos.

## 🔧 Funcionalidades

### 1. **Trigger IMAP Email**
- Monitora a caixa de entrada por novos emails
- Configuração padrão: verifica a cada minuto
- Marca emails como lidos após processamento

### 2. **Filtro de Email**
- Filtra apenas emails do remetente: `no-reply@agendaedu.com`
- Ignora emails de outros remetentes

### 3. **Extração de Dados**
O workflow extrai automaticamente:

#### **Nome do Aluno**
- Busca o texto entre "Confira a Agenda de" e "e continue acompanhando"
- Remove tags HTML
- Exemplo: `OLIVIA DUARTE LACERDA`

#### **Conteúdo Principal da Mensagem**
- Extrai o bloco entre "certo?" e "Confirmar Leitura"
- Preserva formatação básica (quebras de linha)
- Remove tags HTML desnecessárias
- Inclui: disciplina, data de entrega, descrição e lição de casa

#### **Links dos Anexos**
- Identifica todos os links de arquivos no email
- Extrai nome e URL de cada anexo
- Suporta: PDF, DOC, PPT, XLS e outros formatos

### 4. **Formatação da Mensagem**
A mensagem enviada segue o formato:

```
*Novo Comunicado da Agenda Edu*

*Aluno(a):*
[Nome do Aluno]

*Atividade:*
[Detalhes da atividade]

*Links para Anexos:*
📎 [Nome do arquivo 1]
[URL do arquivo 1]

📎 [Nome do arquivo 2]
[URL do arquivo 2]
```

### 5. **Envio WhatsApp**
- Envia para dois números:
  - `+55 21 99649-6442`
  - `+55 21 96671-9259`
- Utiliza o formato WhatsApp Business API

## 🚀 Como Configurar

### Pré-requisitos

1. **Credenciais IMAP**
   - Servidor IMAP do seu provedor de email
   - Usuário e senha
   - Porta (geralmente 993 para IMAP seguro)

2. **Credenciais WhatsApp**
   - Conta WhatsApp Business API
   - Token de autenticação
   - URL da API

### Passos de Instalação

1. **Importar o Workflow**
   - No n8n, vá para "Workflows" → "Import from File"
   - Selecione o arquivo `agenda-edu-whatsapp-workflow.json`

2. **Configurar IMAP Email**
   - Clique no nó "IMAP Email"
   - Configure as credenciais IMAP:
     - Host: `imap.seuservidor.com`
     - Port: `993`
     - User: `seu-email@dominio.com`
     - Password: `sua-senha`
   - Em "Options" → "Custom Email Rules":
     - Pode adicionar filtros adicionais se necessário

3. **Configurar WhatsApp**
   - Clique no nó "Enviar WhatsApp"
   - Configure as credenciais da WhatsApp Business API
   - Verifique os números de destino

4. **Ativar o Workflow**
   - Clique em "Active" no canto superior direito
   - O workflow começará a monitorar emails automaticamente

## 🧪 Testando o Workflow

### Teste Manual

1. **Teste com Email Real**
   - Solicite um email de teste da Agenda Edu
   - Aguarde o processamento (até 1 minuto)
   - Verifique se a mensagem chegou no WhatsApp

2. **Teste Individual de Nós**
   - Clique em "Execute Node" em cada nó
   - Verifique os dados de saída
   - Ajuste conforme necessário

### Validação dos Dados Extraídos

Use o nó "Execute Node" no "Extrair Dados do Email" para verificar:
- `nomeAluno`: deve conter apenas o nome, sem HTML
- `conteudoPrincipal`: deve estar formatado e legível
- `linksAnexos`: array com objetos `{nome, url}`

## 🔍 Troubleshooting

### Email não está sendo processado

**Problema**: Workflow não detecta novos emails

**Soluções**:
- Verifique as credenciais IMAP
- Confirme que o email é de `no-reply@agendaedu.com`
- Verifique logs de execução no n8n

### Dados extraídos incorretamente

**Problema**: Nome do aluno ou conteúdo não aparecem corretamente

**Soluções**:
- O formato do email da Agenda Edu pode ter mudado
- Ajuste os textos de busca no código JavaScript:
  - `'Confira a Agenda de'` e `'e continue acompanhando'`
  - `'certo?'` e `'Confirmar Leitura'`

### Links não são extraídos

**Problema**: Anexos não aparecem na mensagem

**Soluções**:
- Verifique se o email contém links
- Ajuste a regex no código: `/agendaedu\\.com/`
- Verifique logs de execução

### WhatsApp não envia mensagens

**Problema**: Mensagem não chega no WhatsApp

**Soluções**:
- Verifique credenciais WhatsApp Business API
- Confirme formato dos números: `5521996496442@c.us`
- Verifique limites de taxa da API

## 📝 Personalização

### Alterar Números de Destino

No nó "Formatar Mensagem WhatsApp", edite:

```javascript
return [
  {
    json: {
      to: 'NOVO_NUMERO_1',  // Formato: 5521999999999
      mensagem: mensagem,
      ...dados
    }
  },
  {
    json: {
      to: 'NOVO_NUMERO_2',
      mensagem: mensagem,
      ...dados
    }
  }
];
```

### Alterar Formato da Mensagem

No nó "Formatar Mensagem WhatsApp", edite a variável `mensagem`:

```javascript
let mensagem = '*Título Personalizado*\\n\\n';
// ... adicione seus campos
```

### Adicionar Mais Filtros

No nó "Filtrar Email Agenda Edu", adicione condições:

```
Condições:
- from.address contém "no-reply@agendaedu.com"
- subject contém "Agenda"  // Exemplo de filtro adicional
```

## 📊 Monitoramento

### Verificar Execuções

1. Vá para "Executions" no menu lateral
2. Veja histórico de execuções
3. Clique em cada execução para ver detalhes
4. Verifique erros em execuções com status "Error"

### Logs Úteis

Os nós Code mantêm os dados originais:
- `emailFrom`: remetente do email
- `emailSubject`: assunto
- `emailDate`: data de recebimento

## 🔒 Segurança

- **Credenciais**: Sempre use o sistema de credenciais do n8n
- **Nunca** exponha senhas no código
- Configure variáveis de ambiente para dados sensíveis
- Revise permissões de acesso ao workflow

## 📞 Suporte

### Estrutura do Email Esperado

O workflow espera emails da Agenda Edu com:
- Remetente: `no-reply@agendaedu.com`
- Corpo em HTML com estrutura:
  ```
  ...
  Confira a Agenda de [NOME DO ALUNO] e continue acompanhando...
  ...
  certo?
  [Conteúdo da atividade]
  Confirmar Leitura
  ...
  ```

### Logs de Debug

Para debug detalhado, adicione logs no código JavaScript:

```javascript
console.log('Nome extraído:', nomeAluno);
console.log('Conteúdo:', conteudoPrincipal);
console.log('Links:', linksAnexos);
```

Visualize os logs na execução do workflow.

## 🎯 Próximos Passos

- [ ] Adicionar notificações de erro
- [ ] Implementar retry automático em caso de falha
- [ ] Adicionar suporte para múltiplos alunos
- [ ] Criar relatórios de comunicados recebidos
- [ ] Integrar com banco de dados para histórico

---

**Versão**: 1.0.0  
**Data**: 2025-10-10  
**Compatibilidade**: n8n v1.0+
