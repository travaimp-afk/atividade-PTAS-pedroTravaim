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

app.get('/tarefas/:id', (req, res) => {
const tarefa = tarefas.find(t => t.id === Number(req.params.id));

if (!tarefa) {
return res.status(404).json({ erro: 'nao encontra tarefa' });}

res.json(tarefa);});

app.listen(3000, () => {
  console.log('roda na 3000');});