# Checklist de Configuração

## ✅ Pré-requisitos AWS
- [ ] Conta AWS ativa
- [ ] Amazon Rekognition habilitado
- [ ] Usuário IAM criado
- [ ] Política AmazonRekognitionFullAccess anexada
- [ ] Access Key e Secret Key gerados
- [ ] Coleção de faces criada
- [ ] Rostos adicionados à coleção

## ✅ Pré-requisitos Google
- [ ] Projeto no Google Cloud criado
- [ ] Google Sheets API ativada
- [ ] Tela de consentimento OAuth configurada
- [ ] Credenciais OAuth2 criadas
- [ ] Planilha "Mapeamento de Rostos" criada
- [ ] Planilha "Log de Reconhecimento" criada
- [ ] IDs das planilhas anotados

## ✅ Pré-requisitos Telegram
- [ ] Bot criado via @BotFather
- [ ] Token da API obtido
- [ ] Chat ID identificado
- [ ] Bot adicionado ao chat/grupo

## ✅ Configuração n8n
- [ ] n8n instalado e funcionando
- [ ] Credenciais AWS configuradas
- [ ] Credenciais Google Sheets configuradas
- [ ] Credenciais Telegram configuradas
- [ ] Workflow importado
- [ ] Variáveis configuradas
- [ ] Fluxo testado

## ✅ Teste do Sistema
- [ ] E-mail de teste enviado
- [ ] Imagem processada corretamente
- [ ] Rosto reconhecido na AWS
- [ ] Nome encontrado na planilha
- [ ] Log registrado na planilha
- [ ] Mensagem enviada no Telegram
- [ ] Fluxo executado sem erros

## ✅ Monitoramento
- [ ] Logs do n8n configurados
- [ ] Métricas AWS configuradas
- [ ] Histórico Google Sheets ativo
- [ ] Alertas Telegram funcionando
