const express = require('express');

const app = express();

const AddJsonToArray = require('../utils/addJsontoArray');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(4000, () => console.log('servidor rodando na porta 4000'));

app.get('/tratandoJson', function (req, res) {
  const dados = AddJsonToArray.addJsonToArray(req.body);
  console.log(dados);
  res.json(dados);
});
