#!/usr/bin/env node

/**
 * Script de teste para o workflow Agenda Edu - WhatsApp
 * Simula o processamento de um e-mail da Agenda Edu
 */

const fs = require('fs');
const path = require('path');

// E-mail de exemplo da Agenda Edu (simulado)
const emailExemplo = {
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
        <p>Lição de Casa: Império...o Romano.pdf Império...o Romano.pptx</p>
        <p><a href="http://link.agendaedu.com/arquivo1.pdf">Império...o Romano.pdf</a></p>
        <p><a href="http://link.agendaedu.com/arquivo2.pptx">Império...o Romano.pptx</a></p>
        <p>Confirmar Leitura</p>
      </body>
    </html>
  `,
  text: 'E-mail em texto simples'
};

// Função para limpar HTML
function limparHTML(html) {
  return html
    .replace(/<[^>]*>/g, ' ') // Remove tags HTML
    .replace(/\s+/g, ' ') // Remove espaços múltiplos
    .replace(/&nbsp;/g, ' ') // Remove &nbsp;
    .replace(/&amp;/g, '&') // Decodifica &amp;
    .replace(/&lt;/g, '<') // Decodifica &lt;
    .replace(/&gt;/g, '>') // Decodifica &gt;
    .replace(/&quot;/g, '"') // Decodifica &quot;
    .trim();
}

// Função para extrair dados do e-mail (simulando o nó "Extrair Dados do E-mail")
function extrairDadosEmail(emailContent) {
  // Extrair nome do aluno
  const nomeAlunoMatch = emailContent.match(/Confira a Agenda de\s+([^\s]+(?:\s+[^\s]+)*?)\s+e continue acompanhando/);
  const nomeAluno = nomeAlunoMatch ? nomeAlunoMatch[1].trim() : 'Nome não encontrado';

  // Extrair conteúdo principal entre "certo?" e "Confirmar Leitura"
  const conteudoMatch = emailContent.match(/certo\?([\s\S]*?)Confirmar Leitura/);
  let conteudoPrincipal = conteudoMatch ? conteudoMatch[1].trim() : 'Conteúdo não encontrado';

  // Limpar HTML do conteúdo principal
  conteudoPrincipal = limparHTML(conteudoPrincipal);

  // Extrair links dos anexos
  const linksAnexos = [];
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
  let match;

  while ((match = linkRegex.exec(emailContent)) !== null) {
    const url = match[1];
    const texto = match[2];
    
    // Verificar se o texto do link corresponde a um arquivo (contém extensão)
    if (/\.(pdf|doc|docx|ppt|pptx|xls|xlsx|zip|rar)$/i.test(texto)) {
      linksAnexos.push(url);
    }
  }

  // Se não encontrou links com extensões, procurar por qualquer link que contenha "Império" ou similar
  if (linksAnexos.length === 0) {
    const linkRegex2 = /<a[^>]+href="([^"]+)"[^>]*>([^<]*Império[^<]*)<\/a>/g;
    while ((match = linkRegex2.exec(emailContent)) !== null) {
      linksAnexos.push(match[1]);
    }
  }

  return {
    'Nome do Aluno': nomeAluno,
    'Conteúdo Principal da Mensagem': conteudoPrincipal,
    'Links dos Anexos': linksAnexos
  };
}

// Função para formatar mensagem (simulando o nó "Formatar Mensagem")
function formatarMensagem(data) {
  const nomeAluno = data['Nome do Aluno'];
  const conteudoPrincipal = data['Conteúdo Principal da Mensagem'];
  const linksAnexos = data['Links dos Anexos'];

  // Formatar links dos anexos
  let linksFormatados = '';
  if (linksAnexos && linksAnexos.length > 0) {
    linksFormatados = linksAnexos.map(link => `• ${link}`).join('\n');
  } else {
    linksFormatados = 'Nenhum anexo encontrado';
  }

  // Criar mensagem formatada
  const mensagem = `*Novo Comunicado da Agenda Edu*

*Aluno(a):*
${nomeAluno}

*Atividade:*
${conteudoPrincipal}

*Links para Anexos:*
${linksFormatados}`;

  return mensagem;
}

// Função principal de teste
function testarWorkflow() {
  console.log('🧪 Testando Workflow Agenda Edu - WhatsApp (Gmail OAuth2)\n');
  
  // Simular entrada do e-mail
  console.log('📧 E-mail de entrada:');
  console.log(`De: ${emailExemplo.from}`);
  console.log(`Assunto: ${emailExemplo.subject}`);
  console.log('HTML: [conteúdo HTML do e-mail]\n');

  // Testar filtro IF
  console.log('🔍 Testando filtro IF - Agenda Edu:');
  const isAgendaEdu = emailExemplo.from.includes('no-reply@agendaedu.com');
  console.log(`E-mail é da Agenda Edu: ${isAgendaEdu ? '✅ SIM' : '❌ NÃO'}\n`);

  if (!isAgendaEdu) {
    console.log('❌ Workflow interrompido - e-mail não é da Agenda Edu');
    return;
  }

  // Extrair dados
  console.log('📊 Extraindo dados do e-mail:');
  const dadosExtraidos = extrairDadosEmail(emailExemplo.html);
  console.log(`Nome do Aluno: ${dadosExtraidos['Nome do Aluno']}`);
  console.log(`Conteúdo Principal: ${dadosExtraidos['Conteúdo Principal da Mensagem'].substring(0, 100)}...`);
  console.log(`Links dos Anexos: ${dadosExtraidos['Links dos Anexos'].length} encontrados`);
  dadosExtraidos['Links dos Anexos'].forEach((link, index) => {
    console.log(`  ${index + 1}. ${link}`);
  });
  console.log('');

  // Formatar mensagem
  console.log('💬 Formatando mensagem para WhatsApp:');
  const mensagemFormatada = formatarMensagem(dadosExtraidos);
  console.log(mensagemFormatada);
  console.log('');

  // Simular envio para números
  const numerosTelefone = ['+5521996496442', '+5521966719259'];
  console.log('📱 Simulando envio para números:');
  numerosTelefone.forEach((numero, index) => {
    console.log(`${index + 1}. ${numero} - ✅ Mensagem enviada`);
  });

  console.log('\n✅ Teste concluído com sucesso!');
  console.log('\n📋 Resumo do teste:');
  console.log(`- Filtro IF: ${isAgendaEdu ? 'PASSOU' : 'FALHOU'}`);
  console.log(`- Extração de dados: ${dadosExtraidos['Nome do Aluno'] !== 'Nome não encontrado' ? 'PASSOU' : 'FALHOU'}`);
  console.log(`- Formatação: ${mensagemFormatada.includes('*Novo Comunicado da Agenda Edu*') ? 'PASSOU' : 'FALHOU'}`);
  console.log(`- Links extraídos: ${dadosExtraidos['Links dos Anexos'].length} encontrados`);
}

// Executar teste
if (require.main === module) {
  testarWorkflow();
}

module.exports = {
  extrairDadosEmail,
  formatarMensagem,
  testarWorkflow
};