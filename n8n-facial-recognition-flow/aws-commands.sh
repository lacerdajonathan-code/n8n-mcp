#!/bin/bash

# Script para configurar AWS Rekognition para o fluxo n8n

# 1. Configurar AWS CLI
aws configure

# 2. Criar coleção de faces
aws rekognition create-collection \
    --collection-id "facial-recognition-collection" \
    --region us-east-1

# 3. Adicionar rosto à coleção
aws rekognition index-faces \
    --collection-id "facial-recognition-collection" \
    --image '{"S3Object":{"Bucket":"seu-bucket","Name":"foto-pessoa.jpg"}}' \
    --external-image-id "pessoa-001" \
    --region us-east-1

# 4. Listar faces na coleção
aws rekognition list-faces \
    --collection-id "facial-recognition-collection" \
    --region us-east-1

# 5. Testar reconhecimento
aws rekognition search-faces-by-image \
    --collection-id "facial-recognition-collection" \
    --image '{"S3Object":{"Bucket":"seu-bucket","Name":"foto-teste.jpg"}}' \
    --region us-east-1

# 6. Deletar coleção (se necessário)
aws rekognition delete-collection \
    --collection-id "facial-recognition-collection" \
    --region us-east-1
