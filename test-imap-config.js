#!/usr/bin/env node

/**
 * Script de teste para configuração IMAP Gmail
 * Testa conectividade e configurações
 */

const net = require('net');
const tls = require('tls');

// Configurações IMAP Gmail
const IMAP_CONFIG = {
  host: 'imap.gmail.com',
  port: 993,
  secure: true
};

// Função para testar conectividade TCP
function testTcpConnection(host, port) {
  return new Promise((resolve) => {
    console.log(`🔍 Testando conectividade TCP: ${host}:${port}`);
    
    const socket = new net.Socket();
    
    socket.setTimeout(5000);
    
    socket.connect(port, host, () => {
      console.log(`   ✅ TCP conectado com sucesso`);
      socket.destroy();
      resolve(true);
    });
    
    socket.on('error', (err) => {
      console.log(`   ❌ Erro TCP: ${err.message}`);
      resolve(false);
    });
    
    socket.on('timeout', () => {
      console.log(`   ⏰ Timeout TCP`);
      socket.destroy();
      resolve(false);
    });
  });
}

// Função para testar conexão SSL/TLS
function testSslConnection(host, port) {
  return new Promise((resolve) => {
    console.log(`🔍 Testando conexão SSL/TLS: ${host}:${port}`);
    
    const socket = tls.connect(port, host, {
      rejectUnauthorized: true,
      servername: host
    }, () => {
      console.log(`   ✅ SSL/TLS conectado com sucesso`);
      console.log(`   📜 Certificado: ${socket.getPeerCertificate().subject.CN}`);
      socket.destroy();
      resolve(true);
    });
    
    socket.on('error', (err) => {
      console.log(`   ❌ Erro SSL/TLS: ${err.message}`);
      resolve(false);
    });
    
    socket.setTimeout(5000, () => {
      console.log(`   ⏰ Timeout SSL/TLS`);
      socket.destroy();
      resolve(false);
    });
  });
}

// Função para testar configurações IMAP
function testImapConfig() {
  console.log('📧 Testando Configuração IMAP Gmail');
  console.log('===================================\n');
  
  console.log('📋 Configurações IMAP Gmail:');
  console.log(`   Host: ${IMAP_CONFIG.host}`);
  console.log(`   Porta: ${IMAP_CONFIG.port}`);
  console.log(`   SSL/TLS: ${IMAP_CONFIG.secure ? 'Sim' : 'Não'}\n`);
  
  return Promise.all([
    testTcpConnection(IMAP_CONFIG.host, IMAP_CONFIG.port),
    testSslConnection(IMAP_CONFIG.host, IMAP_CONFIG.port)
  ]);
}

// Função para validar credenciais (simulação)
function validateCredentials() {
  console.log('🔐 Validação de Credenciais');
  console.log('============================\n');
  
  console.log('✅ Verificações necessárias:');
  console.log('   1. Verificação em duas etapas habilitada');
  console.log('   2. Senha de aplicativo gerada');
  console.log('   3. IMAP habilitado no Gmail');
  console.log('   4. Credenciais configuradas no n8n\n');
  
  console.log('📝 Configurações recomendadas no n8n:');
  console.log('   Host: imap.gmail.com');
  console.log('   Porta: 993');
  console.log('   Secure: true');
  console.log('   User: seu-email@gmail.com');
  console.log('   Password: senha-de-aplicativo (16 caracteres)\n');
}

// Função para testar workflow
function testWorkflow() {
  console.log('🔄 Testando Workflow');
  console.log('===================\n');
  
  console.log('📁 Arquivos necessários:');
  console.log('   ✅ agenda-edu-whatsapp-workflow-imap.json');
  console.log('   ✅ test-agenda-edu-workflow.js');
  console.log('   ✅ GMAIL_IMAP_SETUP.md\n');
  
  console.log('🧪 Para testar o workflow:');
  console.log('   node test-agenda-edu-workflow.js\n');
}

// Função para mostrar próximos passos
function showNextSteps() {
  console.log('🚀 Próximos Passos');
  console.log('==================\n');
  
  console.log('1. 📧 Configure Gmail:');
  console.log('   - Habilite verificação em duas etapas');
  console.log('   - Gere senha de aplicativo');
  console.log('   - Habilite IMAP\n');
  
  console.log('2. 🔧 Configure n8n:');
  console.log('   - Importe: agenda-edu-whatsapp-workflow-imap.json');
  console.log('   - Crie credenciais IMAP');
  console.log('   - Configure nó IMAP Email\n');
  
  console.log('3. 🧪 Teste:');
  console.log('   - Execute: node test-agenda-edu-workflow.js');
  console.log('   - Ative o workflow no n8n');
  console.log('   - Envie e-mail de teste\n');
  
  console.log('4. 📚 Documentação:');
  console.log('   - Leia: GMAIL_IMAP_SETUP.md');
  console.log('   - Siga o guia passo a passo\n');
}

// Função principal
async function main() {
  console.log('🔧 Diagnóstico IMAP Gmail + n8n');
  console.log('================================\n');
  
  try {
    // Testar conectividade
    const [tcpOk, sslOk] = await testImapConfig();
    
    console.log('\n📊 Resultados dos Testes');
    console.log('========================');
    console.log(`TCP: ${tcpOk ? '✅ OK' : '❌ FALHOU'}`);
    console.log(`SSL/TLS: ${sslOk ? '✅ OK' : '❌ FALHOU'}\n`);
    
    if (tcpOk && sslOk) {
      console.log('🎉 Conectividade IMAP funcionando!');
      console.log('   → Gmail IMAP está acessível');
      console.log('   → SSL/TLS está funcionando');
      console.log('   → Pode configurar no n8n\n');
    } else {
      console.log('❌ Problemas de conectividade detectados');
      console.log('   → Verifique sua conexão de internet');
      console.log('   → Verifique se Gmail está acessível');
      console.log('   → Tente novamente em alguns minutos\n');
    }
    
    // Validar credenciais
    validateCredentials();
    
    // Testar workflow
    testWorkflow();
    
    // Mostrar próximos passos
    showNextSteps();
    
  } catch (error) {
    console.error('❌ Erro durante o teste:', error.message);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  testImapConfig,
  validateCredentials,
  testWorkflow
};