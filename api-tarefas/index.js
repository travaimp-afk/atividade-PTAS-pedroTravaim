const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('api de tarefas rodando');});

let tarefas = [
{id:1, titulo: 'estudar',concluida: false },
{id:2, titulo: 'correr',concluida: true },
{id:3, titulo: 'almoçar',concluida: false }];

app.get('/tarefas', (req, res) => {
  res.json(tarefas)});

app.listen(3000, () => {
  console.log('roda na 3000');});