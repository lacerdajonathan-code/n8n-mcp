#!/bin/bash

# Script de instalação do Workflow Agenda Edu - WhatsApp
# Este script ajuda a configurar o workflow no n8n

echo "🚀 Instalando Workflow Agenda Edu - WhatsApp"
echo "=============================================="

# Verificar se o n8n está instalado
if ! command -v n8n &> /dev/null; then
    echo "❌ n8n não encontrado. Instalando n8n..."
    npm install -g n8n
    if [ $? -ne 0 ]; then
        echo "❌ Erro ao instalar n8n. Instale manualmente: npm install -g n8n"
        exit 1
    fi
    echo "✅ n8n instalado com sucesso"
else
    echo "✅ n8n já está instalado"
fi

# Verificar se o arquivo de workflow existe
if [ ! -f "agenda-edu-whatsapp-workflow.json" ]; then
    echo "❌ Arquivo de workflow não encontrado: agenda-edu-whatsapp-workflow.json"
    exit 1
fi

echo "✅ Arquivo de workflow encontrado"

# Criar diretório de configuração se não existir
mkdir -p ~/.n8n/workflows
mkdir -p ~/.n8n/credentials

# Copiar workflow para o diretório do n8n
cp agenda-edu-whatsapp-workflow.json ~/.n8n/workflows/
echo "✅ Workflow copiado para ~/.n8n/workflows/"

# Criar arquivo de exemplo de credenciais
cat > ~/.n8n/credentials/imap-credentials.example.json << 'EOF'
{
  "name": "IMAP Email Account",
  "type": "imap",
  "data": {
    "host": "imap.gmail.com",
    "port": 993,
    "secure": true,
    "user": "seu-email@gmail.com",
    "password": "sua-senha-de-aplicativo"
  }
}
EOF

cat > ~/.n8n/credentials/whatsapp-credentials.example.json << 'EOF'
{
  "name": "WhatsApp Business API",
  "type": "whatsApp",
  "data": {
    "accessToken": "seu-token-de-acesso",
    "phoneNumberId": "seu-phone-number-id",
    "businessAccountId": "seu-business-account-id"
  }
}
EOF

echo "✅ Arquivos de exemplo de credenciais criados:"
echo "   - ~/.n8n/credentials/imap-credentials.example.json"
echo "   - ~/.n8n/credentials/whatsapp-credentials.example.json"

# Executar teste do workflow
echo ""
echo "🧪 Executando teste do workflow..."
node test-agenda-edu-workflow.js

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Teste do workflow executado com sucesso!"
else
    echo ""
    echo "❌ Erro no teste do workflow. Verifique os logs acima."
    exit 1
fi

echo ""
echo "🎉 Instalação concluída com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "1. Configure suas credenciais IMAP e WhatsApp no n8n"
echo "2. Importe o workflow: agenda-edu-whatsapp-workflow.json"
echo "3. Ative o workflow no n8n"
echo "4. Teste com um e-mail real da Agenda Edu"
echo ""
echo "📚 Documentação completa: AGENDA_EDU_WHATSAPP_SETUP.md"
echo "⚙️  Configuração: agenda-edu-config.json"
echo ""
echo "🔧 Para iniciar o n8n: n8n start"
echo "🌐 Interface web: http://localhost:5678"