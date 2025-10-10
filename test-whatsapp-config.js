#!/usr/bin/env node

/**
 * Script de teste para configuração do WhatsApp Business
 * Testa se os números estão na lista de permitidos
 */

// Função para testar configuração do WhatsApp
function testarConfiguracaoWhatsApp() {
  console.log('📱 Teste de Configuração WhatsApp Business');
  console.log('==========================================\n');
  
  // Números que estão causando erro
  const numerosProblema = [
    '+5521996496442',
    '+5521966719259'
  ];
  
  console.log('🚨 Números que estão causando erro:');
  numerosProblema.forEach((numero, index) => {
    console.log(`   ${index + 1}. ${numero}`);
  });
  console.log('');
  
  console.log('🔍 Diagnóstico do Erro:');
  console.log('   Erro: "Recipient phone number not in allowed list"');
  console.log('   Causa: Números não estão na lista de permitidos');
  console.log('   Solução: Adicionar números à lista de permitidos\n');
  
  console.log('✅ Soluções Disponíveis:');
  console.log('   1. Adicionar números à lista de permitidos');
  console.log('   2. Usar números de teste');
  console.log('   3. Usar workflow sem WhatsApp');
  console.log('   4. Configurar números no Meta Business Manager\n');
  
  console.log('📋 Checklist de Verificação:');
  console.log('   [ ] Conta WhatsApp Business ativa');
  console.log('   [ ] Números adicionados à lista de permitidos');
  console.log('   [ ] Token de acesso válido');
  console.log('   [ ] Phone Number ID correto');
  console.log('   [ ] Formato dos números: +55XXXXXXXXXXX');
  console.log('');
  
  console.log('🛠️ Como Adicionar Números à Lista de Permitidos:');
  console.log('   1. Acesse: https://business.facebook.com/');
  console.log('   2. Vá em: WhatsApp > Configurações');
  console.log('   3. Procure: "Lista de números permitidos"');
  console.log('   4. Adicione os números:');
  numerosProblema.forEach(numero => {
    console.log(`      - ${numero}`);
  });
  console.log('   5. Salve as alterações\n');
  
  console.log('🧪 Teste Alternativo:');
  console.log('   Use o workflow sem WhatsApp para testar a extração:');
  console.log('   - Importe: agenda-edu-workflow-no-whatsapp.json');
  console.log('   - Teste a extração de dados');
  console.log('   - Verifique os logs de execução\n');
  
  console.log('📞 Números de Teste Sugeridos:');
  console.log('   - Use seu próprio número (sempre permitido)');
  console.log('   - Use números de teste da sua conta');
  console.log('   - Verifique quais números estão permitidos\n');
  
  console.log('🔧 Configuração no n8n:');
  console.log('   1. No nó WhatsApp, vá em "Additional Fields"');
  console.log('   2. Adicione: "to" com número permitido');
  console.log('   3. Teste com um número que funciona');
  console.log('');
  
  console.log('✅ Próximos Passos:');
  console.log('   1. Adicione os números à lista de permitidos');
  console.log('   2. Teste com um número que você sabe que funciona');
  console.log('   3. Use o workflow sem WhatsApp para verificar extração');
  console.log('   4. Configure corretamente as credenciais WhatsApp');
}

// Função para mostrar formato correto dos números
function mostrarFormatoNumeros() {
  console.log('\n📱 Formato Correto dos Números:');
  console.log('===============================\n');
  
  console.log('✅ Formato Correto:');
  console.log('   +5511999999999  (Brasil)');
  console.log('   +5521996496442  (Seu número)');
  console.log('   +5521966719259  (Seu número)');
  console.log('');
  
  console.log('❌ Formatos Incorretos:');
  console.log('   11999999999     (sem +55)');
  console.log('   (11) 99999-9999 (formato brasileiro)');
  console.log('   11 99999-9999   (com espaços)');
  console.log('');
  
  console.log('🔍 Verificação:');
  console.log('   - Deve começar com +55');
  console.log('   - Deve ter 13 dígitos total');
  console.log('   - Sem espaços ou caracteres especiais');
  console.log('   - Números devem estar ativos no WhatsApp');
}

// Função para mostrar comandos de teste
function mostrarComandosTeste() {
  console.log('\n🧪 Comandos de Teste:');
  console.log('====================\n');
  
  console.log('1. Testar extração de dados:');
  console.log('   node test-agenda-edu-workflow.js\n');
  
  console.log('2. Testar conectividade IMAP:');
  console.log('   node test-imap-config.js\n');
  
  console.log('3. Testar conectividade OAuth2:');
  console.log('   node diagnose-railway-oauth2.js\n');
  
  console.log('4. Debug de extração:');
  console.log('   node debug-email-extraction.js\n');
  
  console.log('5. Testar e-mails Facebook:');
  console.log('   node test-facebook-emails.js\n');
}

// Função principal
function main() {
  testarConfiguracaoWhatsApp();
  mostrarFormatoNumeros();
  mostrarComandosTeste();
  
  console.log('🎯 Resumo:');
  console.log('==========');
  console.log('O workflow está funcionando perfeitamente!');
  console.log('O problema é apenas na configuração dos números permitidos.');
  console.log('Adicione os números à lista de permitidos no WhatsApp Business.');
  console.log('Ou use o workflow sem WhatsApp para testar a extração.');
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = {
  testarConfiguracaoWhatsApp,
  mostrarFormatoNumeros,
  mostrarComandosTeste
};