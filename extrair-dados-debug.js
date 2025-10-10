// Código melhorado para o nó "Extrair Dados do E-mail" com debug
// Cole este código no nó "Extrair Dados do E-mail" do n8n

// ===== DEBUG - INÍCIO =====
console.log('🔍 DEBUG - Iniciando extração de dados');
console.log('Dados de entrada:', JSON.stringify($input, null, 2));

// Verificar se $input existe e tem dados
if (!$input || !$input.first) {
  console.log('❌ ERRO: $input não existe ou não tem método first()');
  return { json: { erro: 'Dados de entrada inválidos' } };
}

const inputData = $input.first();
console.log('Dados do primeiro item:', JSON.stringify(inputData, null, 2));

if (!inputData || !inputData.json) {
  console.log('❌ ERRO: inputData.json não existe');
  return { json: { erro: 'Estrutura de dados inválida' } };
}

const emailData = inputData.json;
console.log('Dados do e-mail:', JSON.stringify(emailData, null, 2));
// ===== DEBUG - FIM =====

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

// Verificar se temos conteúdo para extrair
const emailContent = emailData.html || emailData.text || '';
console.log('Conteúdo do e-mail encontrado:', emailContent ? 'SIM' : 'NÃO');
console.log('Tamanho do conteúdo:', emailContent.length);

if (!emailContent) {
  console.log('❌ ERRO: Nenhum conteúdo HTML ou texto encontrado');
  return { 
    json: { 
      erro: 'Nenhum conteúdo encontrado',
      debug: {
        hasHtml: !!emailData.html,
        hasText: !!emailData.text,
        emailData: emailData
      }
    } 
  };
}

// Extrair nome do aluno
console.log('🔍 Extraindo nome do aluno...');
const nomeAlunoMatch = emailContent.match(/Confira a Agenda de\s+([^\s]+(?:\s+[^\s]+)*?)\s+e continue acompanhando/);
const nomeAluno = nomeAlunoMatch ? nomeAlunoMatch[1].trim() : 'Nome não encontrado';
console.log('Nome do aluno extraído:', nomeAluno);

// Extrair conteúdo principal
console.log('🔍 Extraindo conteúdo principal...');
const conteudoMatch = emailContent.match(/certo\?([\s\S]*?)Confirmar Leitura/);
let conteudoPrincipal = conteudoMatch ? conteudoMatch[1].trim() : 'Conteúdo não encontrado';
console.log('Conteúdo principal encontrado:', conteudoPrincipal ? 'SIM' : 'NÃO');

// Limpar HTML do conteúdo principal
conteudoPrincipal = limparHTML(conteudoPrincipal);
console.log('Conteúdo principal limpo:', conteudoPrincipal.substring(0, 100) + '...');

// Extrair links dos anexos
console.log('🔍 Extraindo links dos anexos...');
const linksAnexos = [];
const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
let match;

while ((match = linkRegex.exec(emailContent)) !== null) {
  const url = match[1];
  const texto = match[2];
  
  // Verificar se o texto do link corresponde a um arquivo (contém extensão)
  if (/\.(pdf|doc|docx|ppt|pptx|xls|xlsx|zip|rar)$/i.test(texto)) {
    linksAnexos.push(url);
    console.log('Link encontrado:', url, '->', texto);
  }
}

// Se não encontrou links com extensões, procurar por qualquer link que contenha "Império" ou similar
if (linksAnexos.length === 0) {
  console.log('🔍 Procurando links alternativos...');
  const linkRegex2 = /<a[^>]+href="([^"]+)"[^>]*>([^<]*Império[^<]*)<\/a>/g;
  while ((match = linkRegex2.exec(emailContent)) !== null) {
    linksAnexos.push(match[1]);
    console.log('Link alternativo encontrado:', match[1], '->', match[2]);
  }
}

console.log('Total de links encontrados:', linksAnexos.length);

// Resultado final
const resultado = {
  'Nome do Aluno': nomeAluno,
  'Conteúdo Principal da Mensagem': conteudoPrincipal,
  'Links dos Anexos': linksAnexos,
  'Email Original': emailData,
  'Debug': {
    'Conteúdo HTML Presente': !!emailData.html,
    'Conteúdo Texto Presente': !!emailData.text,
    'Tamanho do Conteúdo': emailContent.length,
    'Nome Extraído': nomeAluno !== 'Nome não encontrado',
    'Conteúdo Extraído': conteudoPrincipal !== 'Conteúdo não encontrado',
    'Links Extraídos': linksAnexos.length
  }
};

console.log('✅ Resultado final:', JSON.stringify(resultado, null, 2));

return { json: resultado };