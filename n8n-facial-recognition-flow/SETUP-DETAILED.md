# Configuração Detalhada do Fluxo de Reconhecimento Facial

## 1. Configuração AWS

### 1.1 Criar Usuário IAM
- Acesse AWS Console > IAM
- Crie novo usuário
- Anexe política: AmazonRekognitionFullAccess
- Gere Access Key e Secret Key

### 1.2 Criar Coleção no Rekognition
- Acesse AWS Console > Rekognition
- Vá para "Face collections"
- Clique "Create collection"
- Digite nome da coleção
- Anote o Collection ID

### 1.3 Adicionar Rostos à Coleção
- Use AWS CLI ou SDK
- Comando: aws rekognition index-faces
- Coleção: sua-colecao
- Imagem: foto da pessoa

## 2. Configuração Google Sheets

### 2.1 Criar Projeto no Google Cloud
- Acesse console.cloud.google.com
- Crie novo projeto
- Ative Google Sheets API
- Configure tela de consentimento OAuth

### 2.2 Criar Credenciais OAuth2
- Vá para "APIs & Services" > "Credentials"
- Clique "Create Credentials" > "OAuth 2.0 Client IDs"
- Tipo: Desktop application
- Baixe o arquivo JSON

### 2.3 Configurar Planilhas
- Crie planilha "Mapeamento de Rostos"
- Colunas: FaceId | Nome
- Crie planilha "Log de Reconhecimento"
- Colunas: Data | Hora | Nome | Similaridade
- Anote os IDs das planilhas

## 3. Configuração Telegram

### 3.1 Criar Bot
- Envie /start para @BotFather
- Use /newbot para criar bot
- Digite nome e username
- Anote o token do bot

### 3.2 Obter Chat ID
- Envie mensagem para o bot
- Acesse: https://api.telegram.org/bot<TOKEN>/getUpdates
- Procure por "chat":{"id":123456789}
- Anote o Chat ID

## 4. Configuração n8n

### 4.1 Instalar n8n
- npm install -g n8n
- ou usar Docker: docker run -it --rm n8nio/n8n

### 4.2 Configurar Credenciais
- AWS: Type=AWS, Access Key, Secret Key
- Google Sheets: Type=Google Sheets OAuth2
- Telegram: Type=Telegram Bot API, Bot Token

### 4.3 Importar Workflow
- Copie o JSON do workflow-complete.json
- No n8n: Workflows > Import from JSON
- Cole o conteúdo e importe

### 4.4 Configurar Variáveis
- Vá para Settings > Variables
- Adicione as variáveis do variables.env
- Colete os valores reais das configurações

## 5. Teste do Fluxo

### 5.1 Enviar E-mail de Teste
- Para: conta configurada no IMAP
- Assunto: [Reconhecimento Facial] Teste
- Anexo: foto com rosto cadastrado

### 5.2 Verificar Execução
- No n8n: Executions
- Verifique cada nó executado
- Confirme dados na planilha
- Verifique mensagem no Telegram

## 6. Monitoramento

### 6.1 Logs do n8n
- Executions > View execution
- Verifique dados de entrada/saída
- Monitore falhas e sucessos

### 6.2 Métricas AWS
- CloudWatch > Rekognition
- API calls, errors, latency

### 6.3 Google Sheets
- Histórico de modificações
- Controle de versões

## 7. Troubleshooting

### 7.1 Erro: "Collection not found"
- Verifique COLLECTION_ID
- Confirme coleção existe no AWS

### 7.2 Erro: "Invalid credentials"
- Verifique credenciais AWS
- Confirme permissões IAM

### 7.3 Erro: "Sheet not found"
- Verifique IDs das planilhas
- Confirme credenciais Google

### 7.4 Erro: "Bot token invalid"
- Verifique token do bot
- Confirme bot está ativo

## 8. Manutenção

### 8.1 Atualizações
- Mantenha n8n atualizado
- Verifique compatibilidade dos nós
- Teste após atualizações

### 8.2 Backup
- Exporte workflow regularmente
- Faça backup das credenciais
- Documente mudanças

### 8.3 Limpeza
- Limpe logs antigos
- Arquivar planilhas antigas
- Otimize uso de recursos
