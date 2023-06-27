const fs = require('fs');

function escreveArquivo(dado, callback) {
  fs.writeFile('teste.txt', dado, 'utf8', callback);
}

function escreveArquivoPromise(dado) {
  return new Promise((resolve, reject) => {
    fs.writeFile('teste.txt', dado, 'utf8', (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

module.exports = {
  escreveArquivo,
  escreveArquivoPromise,
};
