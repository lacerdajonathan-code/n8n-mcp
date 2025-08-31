# Implementação do Fluxo de Reconhecimento Facial

## Passo a Passo

### 1. Configurar Credenciais
- AWS: Access Key + Secret Key
- Google: OAuth2 para Sheets
- Telegram: Bot Token

### 2. Criar Coleção AWS
- Acesse AWS Rekognition
- Crie uma coleção de faces
- Adicione rostos conhecidos

### 3. Configurar Planilhas
- Planilha 1: Mapeamento FaceId -> Nome
- Planilha 2: Log de eventos

### 4. Importar Fluxo
- Copie o JSON do workflow
- Importe no n8n
- Configure as variáveis

### 5. Testar
- Envie e-mail com foto
- Verifique planilha e Telegram
