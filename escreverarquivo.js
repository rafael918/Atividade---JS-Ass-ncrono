
// arquivo escrito  utilazando callbacks //

const fs = require('fs');

function escreverArquivoCallback(dados, callback) {
  fs.writeFile('teste.txt', dados, 'utf8', callback);
}

escreverArquivoCallback('Conteúdo do arquivo utilizando callbacks.', (err) => {
  if (err) {
    console.error('Ocorreu um erro ao escrever o arquivo:', err);
    return;
  }
  console.log('Arquivo escrito com sucesso utilizando callbacks.');
});

//arquivo utilizando promises//

function escreverArquivoPromise(dados) {
    return new Promise((resolve, reject) => {
      fs.writeFile('teste.txt', dados, 'utf8', (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

   /// arquivo  utilizando async/await///
  
  escreverArquivoPromise('Conteúdo do arquivo utilizando promises.')
    .then(() => {
      console.log('Arquivo escrito com sucesso utilizando promises.');
    })
    .catch((err) => {
      console.error('Ocorreu um erro ao escrever o arquivo:', err);
    });
  
          escreverArquivoAsyncAwait

    async function escreverArquivoAsyncAwait(dados) {
        try {
          await fs.promises.writeFile('teste.txt', dados, 'utf8');
          console.log('Arquivo escrito com sucesso utilizando async/await.');
        } catch (err) {
          console.error('Ocorreu um erro ao escrever o arquivo:', err);
        }
      }
      
      escreverArquivoAsyncAwait('Conteúdo do arquivo utilizando async/await.');
      
      
  