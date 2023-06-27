const { escreveArquivo, escreveArquivoPromise } = require('./file');

console.log('Início do programa');

// Teste com callbacks
escreveArquivo('Conteúdo do arquivo utilizando callbacks.', (err) => {
  if (err) {
    console.error('Ocorreu um erro ao escrever o arquivo (callbacks):', err);
    return;
  }
  console.log('Arquivo escrito com sucesso utilizando callbacks.');
});

// Teste com promises
escreveArquivoPromise('Conteúdo do arquivo utilizando promises.')
  .then(() => {
    console.log('Arquivo escrito com sucesso utilizando promises.');
  })
  .catch((err) => {
    console.error('Ocorreu um erro ao escrever o arquivo (promises):', err);
  });

console.log('Fim do programa');
