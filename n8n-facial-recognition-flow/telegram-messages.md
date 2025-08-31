# Exemplos de Mensagens do Telegram

## 1. Rosto Reconhecido

```
🚨 Alerta de Reconhecimento Facial 🚨

Pessoa Identificada: *João Silva*
Horário: *14:30:00 do dia 01/01/2024*

Nível de Confiança: *95.67%*
```

## 2. Rosto Não Reconhecido

```
⚠️ Rosto Não Reconhecido ⚠️

Um rosto foi detectado na imagem, mas não foi possível identificá-lo na coleção cadastrada.

Horário: *14:30:00 do dia 01/01/2024*
```

## 3. Erro no Processamento

```
❌ Erro no Reconhecimento Facial ❌

Ocorreu um erro durante o processamento da imagem.

Erro: *{{ $json.error }}*
Horário: *{{ $now }}*
```

## 4. Múltiplos Rostos

```
🔍 Múltiplos Rostos Detectados 🔍

Rostos Identificados:
• João Silva (95.67%)
• Maria Santos (87.23%)

Horário: *14:30:00 do dia 01/01/2024*
```

## 5. Estatísticas Diárias

```
📊 Relatório Diário de Reconhecimento 📊

Data: *01/01/2024*
Total de Reconhecimentos: *15*
Rostos Identificados: *12*
Rostos Não Reconhecidos: *3*

Top 3 Pessoas:
1. João Silva (5 reconhecimentos)
2. Maria Santos (4 reconhecimentos)
3. Pedro Oliveira (3 reconhecimentos)
```
