# Instruções de Uso do Fluxo de Reconhecimento Facial

## 🚀 Início Rápido

### 1. Importar Workflow
1. Abra o n8n
2. Vá para Workflows > Import from JSON
3. Cole o conteúdo do arquivo `workflow-complete.json`
4. Clique em Import

### 2. Configurar Credenciais
1. Vá para Settings > Credentials
2. Configure:
   - AWS Credentials
   - Google Sheets OAuth2
   - Telegram Bot API

### 3. Configurar Variáveis
1. Vá para Settings > Variables
2. Adicione as variáveis do arquivo `variables.env`
3. Substitua pelos valores reais

### 4. Testar o Fluxo
1. Envie um e-mail com foto
2. Assunto: [Reconhecimento Facial] Teste
3. Verifique execução no n8n

## 📋 Arquivos Importantes

- `workflow-complete.json` - Fluxo principal do n8n
- `variables.env` - Variáveis de configuração
- `SETUP-DETAILED.md` - Configuração passo a passo
- `CHECKLIST.md` - Checklist de verificação
- `aws-commands.sh` - Comandos AWS CLI
- `sheets-example.csv` - Exemplo de planilha
- `telegram-messages.md` - Exemplos de mensagens

## 🔧 Configurações Específicas

### AWS Rekognition
- Collection ID: sua-colecao-rekognition
- Região: us-east-1 (ou sua região)
- Threshold: 90% (configurável)

### Google Sheets
- Planilha 1: Mapeamento FaceId -> Nome
- Planilha 2: Log de eventos
- Formato: dd/MM/yyyy HH:mm:ss

### Telegram
- Bot: @seu_bot
- Chat ID: 123456789
- Parse Mode: Markdown

## 📧 Formato do E-mail

**Para**: conta-configurada@email.com
**Assunto**: [Reconhecimento Facial] Identificação
**Anexo**: foto.jpg (formato: JPG, PNG, GIF)

## 🔍 Fluxo de Execução

1. **Trigger**: E-mail recebido
2. **Validação**: Verifica se é imagem
3. **Processamento**: Lê anexo binário
4. **AWS**: Busca rosto na coleção
5. **Google**: Busca nome da pessoa
6. **Log**: Registra na planilha
7. **Telegram**: Envia alerta

## ⚠️ Tratamento de Erros

- **Imagem inválida**: Fluxo para
- **Rosto não encontrado**: Log de "não reconhecido"
- **Erro AWS**: Log de erro
- **Erro Google**: Retry automático
- **Erro Telegram**: Log de falha

## 📊 Monitoramento

- **Execuções**: n8n > Executions
- **Logs**: n8n > View execution
- **Métricas**: AWS CloudWatch
- **Planilhas**: Google Sheets > Histórico
- **Telegram**: Mensagens enviadas

## 🆘 Suporte

### Problemas Comuns
1. **Credenciais inválidas**: Verifique configuração
2. **Coleção não encontrada**: Confirme AWS
3. **Planilha não encontrada**: Verifique ID
4. **Bot não responde**: Confirme token

### Logs de Debug
- Ative modo debug no n8n
- Verifique dados de entrada/saída
- Monitore execuções falhadas

## 🔄 Manutenção

### Atualizações
- Exporte workflow antes de mudanças
- Teste em ambiente de desenvolvimento
- Mantenha backup das credenciais

### Limpeza
- Arquivar planilhas antigas
- Limpar logs de execução
- Monitorar uso de recursos AWS

## 📈 Melhorias Futuras

- [ ] Múltiplas coleções AWS
- [ ] Reconhecimento de múltiplos rostos
- [ ] Integração com câmeras IP
- [ ] Dashboard de estatísticas
- [ ] Alertas por e-mail
- [ ] Backup automático
