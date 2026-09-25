import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
res.send('api de tarefas rodando');});

let tarefas = [
{id:1, titulo: 'estudar',concluida: false },
{id:2, titulo: 'correr',concluida: true },
{id:3, titulo: 'almoçar',concluida: false }];

app.get('/tarefas', (req, res) => {
const { concluida } = req.query;

if (concluida) {
return res.json(tarefas.filter(t => String(t.concluida) === concluida));}
res.json(tarefas);});

app.get('/tarefas/:id', (req, res) => {
const tarefa = tarefas.find(t => t.id === Number(req.params.id));

if (!tarefa) {
return res.status(404).json({erro: 'sem tarefa'});}
res.json(tarefa);});

app.post('/tarefas', (req, res) => {
const { titulo } = req.body;

const novaTarefa = {
id: tarefas.length + 1, titulo, concluida: false};

tarefas.push(novaTarefa);
res.status(201).json(novaTarefa);});

app.listen(3000, () => {
console.log('roda na 3000');});