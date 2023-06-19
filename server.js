const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

// Rota inicial para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor funcionando corretamente!');
});

// Rota para upload de imagens
app.post('/upload', upload.array('images'), (req, res) => {
  // Processar as imagens recebidas aqui
  console.log(req.files); // Exemplo: exibir as informações dos arquivos recebidos

  // Retornar uma resposta adequada para o cliente
  res.send('Imagens recebidas com sucesso!');
});

// Iniciar o servidor na porta definida ou na porta 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
