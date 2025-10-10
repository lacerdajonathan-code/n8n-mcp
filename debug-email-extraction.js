#!/usr/bin/env node

/**
 * Script de debug para extração de dados do e-mail
 * Diagnostica problemas na extração de dados
 */

// Função para debug detalhado
function debugEmailExtraction(inputData) {
  console.log('🔍 DEBUG - Extração de Dados do E-mail');
  console.log('=====================================\n');
  
  // 1. Verificar estrutura dos dados de entrada
  console.log('1. 📊 Estrutura dos Dados de Entrada:');
  console.log('   Tipo:', typeof inputData);
  console.log('   É Array:', Array.isArray(inputData));
  console.log('   Chaves:', Object.keys(inputData || {}));
  console.log('');
  
  // 2. Verificar se é um array e pegar o primeiro item
  let emailData;
  if (Array.isArray(inputData) && inputData.length > 0) {
    emailData = inputData[0];
    console.log('2. ✅ Dados do E-mail (primeiro item do array):');
  } else if (inputData && typeof inputData === 'object') {
    emailData = inputData;
    console.log('2. ✅ Dados do E-mail (objeto direto):');
  } else {
    console.log('2. ❌ ERRO: Dados de entrada inválidos');
    console.log('   Esperado: Array com e-mails ou objeto com dados do e-mail');
    console.log('   Recebido:', inputData);
    return null;
  }
  
  // 3. Verificar estrutura do e-mail
  console.log('   Estrutura do e-mail:');
  console.log('   - from:', emailData.from || 'NÃO ENCONTRADO');
  console.log('   - subject:', emailData.subject || 'NÃO ENCONTRADO');
  console.log('   - html:', emailData.html ? 'PRESENTE' : 'NÃO ENCONTRADO');
  console.log('   - text:', emailData.text || 'NÃO ENCONTRADO');
  console.log('   - to:', emailData.to || 'NÃO ENCONTRADO');
  console.log('');
  
  // 4. Verificar conteúdo HTML
  if (emailData.html) {
    console.log('3. 📄 Conteúdo HTML:');
    console.log('   Tamanho:', emailData.html.length, 'caracteres');
    console.log('   Primeiros 200 caracteres:', emailData.html.substring(0, 200));
    console.log('   Contém "Agenda Edu":', emailData.html.includes('Agenda Edu'));
    console.log('   Contém "Confira a Agenda de":', emailData.html.includes('Confira a Agenda de'));
    console.log('   Contém "certo?":', emailData.html.includes('certo?'));
    console.log('   Contém "Confirmar Leitura":', emailData.html.includes('Confirmar Leitura'));
    console.log('');
  } else {
    console.log('3. ❌ ERRO: Conteúdo HTML não encontrado');
    console.log('   Verifique se o nó IMAP/Gmail está configurado corretamente');
    console.log('');
  }
  
  // 5. Verificar conteúdo de texto
  if (emailData.text) {
    console.log('4. 📝 Conteúdo de Texto:');
    console.log('   Tamanho:', emailData.text.length, 'caracteres');
    console.log('   Primeiros 200 caracteres:', emailData.text.substring(0, 200));
    console.log('');
  } else {
    console.log('4. ⚠️  AVISO: Conteúdo de texto não encontrado');
    console.log('');
  }
  
  // 6. Testar extração de dados
  console.log('5. 🧪 Testando Extração de Dados:');
  
  const emailContent = emailData.html || emailData.text || '';
  
  if (!emailContent) {
    console.log('   ❌ ERRO: Nenhum conteúdo para extrair');
    return null;
  }
  
  // Testar extração do nome do aluno
  const nomeAlunoMatch = emailContent.match(/Confira a Agenda de\s+([^\s]+(?:\s+[^\s]+)*?)\s+e continue acompanhando/);
  const nomeAluno = nomeAlunoMatch ? nomeAlunoMatch[1].trim() : 'Nome não encontrado';
  console.log('   - Nome do Aluno:', nomeAluno);
  
  // Testar extração do conteúdo principal
  const conteudoMatch = emailContent.match(/certo\?([\s\S]*?)Confirmar Leitura/);
  const conteudoPrincipal = conteudoMatch ? conteudoMatch[1].trim() : 'Conteúdo não encontrado';
  console.log('   - Conteúdo Principal:', conteudoPrincipal.substring(0, 100) + '...');
  
  // Testar extração de links
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
  const linksAnexos = [];
  let match;
  
  while ((match = linkRegex.exec(emailContent)) !== null) {
    const url = match[1];
    const texto = match[2];
    if (/\.(pdf|doc|docx|ppt|pptx|xls|xlsx|zip|rar)$/i.test(texto)) {
      linksAnexos.push(url);
    }
  }
  console.log('   - Links dos Anexos:', linksAnexos.length, 'encontrados');
  
  console.log('');
  
  // 7. Resultado final
  console.log('6. 📋 Resultado da Extração:');
  console.log('   Nome do Aluno:', nomeAluno);
  console.log('   Conteúdo Principal:', conteudoPrincipal.substring(0, 50) + '...');
  console.log('   Links dos Anexos:', linksAnexos);
  console.log('');
  
  return {
    'Nome do Aluno': nomeAluno,
    'Conteúdo Principal da Mensagem': conteudoPrincipal,
    'Links dos Anexos': linksAnexos
  };
}

// Função para testar com dados simulados
function testarComDadosSimulados() {
  console.log('🧪 Testando com Dados Simulados');
  console.log('===============================\n');
  
  // Simular dados como vêm do n8n
  const dadosSimulados = [
    {
      from: 'no-reply@agendaedu.com',
      subject: 'Nova atividade - História',
      html: `
        <html>
          <body>
            <p>Olá,</p>
            <p>Confira a Agenda de OLIVIA DUARTE LACERDA e continue acompanhando as atividades escolares.</p>
            <p>Nova atividade cadastrada:</p>
            <p>certo?</p>
            <p>História - Paula Castellano</p>
            <p>Disciplina: História</p>
            <p>Data de entrega: Entregar em sala de aula</p>
            <p>Descrição: Material da semana - slides Império Romano</p>
            <p>Liação de Casa: Império...o Romano.pdf Império...o Romano.pptx</p>
            <p><a href="http://link.agendaedu.com/arquivo1.pdf">Império...o Romano.pdf</a></p>
            <p><a href="http://link.agendaedu.com/arquivo2.pptx">Império...o Romano.pptx</a></p>
            <p>Confirmar Leitura</p>
          </body>
        </html>
      `,
      to: 'Responsável <responsavel@email.com>'
    }
  ];
  
  const resultado = debugEmailExtraction(dadosSimulados);
  
  if (resultado) {
    console.log('✅ Teste com dados simulados: SUCESSO');
  } else {
    console.log('❌ Teste com dados simulados: FALHOU');
  }
}

// Função para testar com dados vazios
function testarComDadosVazios() {
  console.log('\n🧪 Testando com Dados Vazios');
  console.log('============================\n');
  
  const dadosVazios = [];
  const resultado = debugEmailExtraction(dadosVazios);
  
  if (resultado) {
    console.log('✅ Teste com dados vazios: SUCESSO');
  } else {
    console.log('❌ Teste com dados vazios: FALHOU (esperado)');
  }
}

// Função para testar com dados inválidos
function testarComDadosInvalidos() {
  console.log('\n🧪 Testando com Dados Inválidos');
  console.log('===============================\n');
  
  const dadosInvalidos = {
    from: 'no-reply@agendaedu.com',
    subject: 'Nova atividade - História'
    // Sem html ou text
  };
  
  const resultado = debugEmailExtraction(dadosInvalidos);
  
  if (resultado) {
    console.log('✅ Teste com dados inválidos: SUCESSO');
  } else {
    console.log('❌ Teste com dados inválidos: FALHOU (esperado)');
  }
}

// Função principal
function main() {
  console.log('🔧 Debug - Extração de Dados do E-mail');
  console.log('=====================================\n');
  
  // Testar com diferentes cenários
  testarComDadosSimulados();
  testarComDadosVazios();
  testarComDadosInvalidos();
  
  console.log('\n📋 Instruções para Debug no n8n:');
  console.log('================================');
  console.log('1. No nó "Extrair Dados do E-mail", adicione este código no início:');
  console.log('   console.log("Dados de entrada:", JSON.stringify($input, null, 2));');
  console.log('');
  console.log('2. Verifique os logs de execução no n8n');
  console.log('3. Compare com a estrutura esperada mostrada acima');
  console.log('');
  console.log('4. Se os dados estiverem vazios, verifique:');
  console.log('   - Se o nó IMAP/Gmail está configurado corretamente');
  console.log('   - Se as credenciais estão funcionando');
  console.log('   - Se o filtro está correto');
  console.log('');
  console.log('5. Se os dados estiverem presentes mas a extração falhar:');
  console.log('   - Verifique se o formato do e-mail mudou');
  console.log('   - Ajuste as expressões regulares');
  console.log('   - Teste com e-mails reais da Agenda Edu');
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = {
  debugEmailExtraction,
  testarComDadosSimulados,
  testarComDadosVazios,
  testarComDadosInvalidos
};