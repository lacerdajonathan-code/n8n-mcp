#!/usr/bin/env node

/**
 * Script de diagnóstico para OAuth2 Gmail no Railway
 * Verifica conectividade e configurações
 */

const https = require('https');
const http = require('http');

// URL do Railway
const RAILWAY_URL = 'https://primary-production-8b618.up.railway.app';

// Função para testar URL
function testUrl(url, description) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    
    console.log(`🔍 Testando: ${description}`);
    console.log(`   URL: ${url}`);
    
    const req = protocol.get(url, (res) => {
      console.log(`   Status: ${res.statusCode} ${res.statusMessage}`);
      console.log(`   Headers: ${JSON.stringify(res.headers, null, 2)}`);
      
      if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log(`   ✅ ${description} - OK`);
        resolve(true);
      } else {
        console.log(`   ❌ ${description} - ERRO`);
        resolve(false);
      }
    });
    
    req.on('error', (err) => {
      console.log(`   ❌ ${description} - ERRO: ${err.message}`);
      resolve(false);
    });
    
    req.setTimeout(10000, () => {
      console.log(`   ⏰ ${description} - TIMEOUT`);
      req.destroy();
      resolve(false);
    });
  });
}

// Função principal de diagnóstico
async function diagnosticarRailway() {
  console.log('🔧 Diagnóstico OAuth2 Gmail no Railway');
  console.log('=====================================\n');
  
  // URLs para testar
  const urls = [
    {
      url: `${RAILWAY_URL}`,
      description: 'URL principal do n8n'
    },
    {
      url: `${RAILWAY_URL}/rest/oauth2-credential/callback`,
      description: 'Callback OAuth2 (principal)'
    },
    {
      url: `${RAILWAY_URL}/oauth/callback`,
      description: 'Callback OAuth2 (alternativo)'
    },
    {
      url: `${RAILWAY_URL}/rest/credentials`,
      description: 'Endpoint de credenciais'
    }
  ];
  
  console.log(`🎯 Testando conectividade com Railway`);
  console.log(`   URL base: ${RAILWAY_URL}\n`);
  
  // Testar cada URL
  const resultados = [];
  for (const urlInfo of urls) {
    const resultado = await testUrl(urlInfo.url, urlInfo.description);
    resultados.push({
      url: urlInfo.url,
      description: urlInfo.description,
      sucesso: resultado
    });
    console.log(''); // Linha em branco
  }
  
  // Resumo dos resultados
  console.log('📊 Resumo dos Testes');
  console.log('===================');
  
  const sucessos = resultados.filter(r => r.sucesso).length;
  const total = resultados.length;
  
  console.log(`✅ Sucessos: ${sucessos}/${total}`);
  console.log(`❌ Falhas: ${total - sucessos}/${total}\n`);
  
  // Análise dos resultados
  console.log('🔍 Análise dos Resultados');
  console.log('========================');
  
  const principalOk = resultados.find(r => r.description.includes('principal') && r.sucesso);
  const callbackOk = resultados.find(r => r.description.includes('Callback OAuth2') && r.sucesso);
  
  if (principalOk) {
    console.log('✅ URL principal do n8n está acessível');
  } else {
    console.log('❌ URL principal do n8n NÃO está acessível');
    console.log('   → Verifique se o Railway está rodando');
    console.log('   → Verifique se a URL está correta');
  }
  
  if (callbackOk) {
    console.log('✅ Callback OAuth2 está acessível');
    console.log(`   → Use esta URL no Google Cloud Console: ${callbackOk.url}`);
  } else {
    console.log('❌ Callback OAuth2 NÃO está acessível');
    console.log('   → Problema com configuração OAuth2');
    console.log('   → Verifique se n8n está configurado corretamente');
  }
  
  // Recomendações
  console.log('\n💡 Recomendações');
  console.log('================');
  
  if (!principalOk) {
    console.log('1. Verifique se o Railway está rodando');
    console.log('2. Acesse a URL principal no navegador');
    console.log('3. Verifique os logs do Railway');
  }
  
  if (!callbackOk) {
    console.log('1. Use a versão IMAP como alternativa');
    console.log('2. Verifique configuração do n8n');
    console.log('3. Teste com URL alternativa');
  }
  
  if (principalOk && callbackOk) {
    console.log('1. Configure OAuth2 no Google Cloud Console');
    console.log('2. Use a URL do callback que funcionou');
    console.log('3. Teste a conexão no n8n');
  }
  
  // URLs para Google Cloud Console
  console.log('\n🔗 URLs para Google Cloud Console');
  console.log('==================================');
  
  const urlsCallback = resultados.filter(r => r.description.includes('Callback') && r.sucesso);
  
  if (urlsCallback.length > 0) {
    console.log('Use uma destas URLs no Google Cloud Console:');
    urlsCallback.forEach((urlInfo, index) => {
      console.log(`${index + 1}. ${urlInfo.url}`);
    });
  } else {
    console.log('❌ Nenhuma URL de callback funcionando');
    console.log('   → Use a versão IMAP como alternativa');
  }
  
  // Alternativa IMAP
  console.log('\n🔄 Alternativa: Usar IMAP');
  console.log('========================');
  console.log('Se OAuth2 não funcionar, use:');
  console.log('1. Importe: agenda-edu-whatsapp-workflow-imap.json');
  console.log('2. Configure credenciais IMAP do Gmail');
  console.log('3. Use senha de aplicativo do Gmail');
  
  console.log('\n✅ Diagnóstico concluído!');
}

// Executar diagnóstico
if (require.main === module) {
  diagnosticarRailway().catch(console.error);
}

module.exports = { diagnosticarRailway, testUrl };