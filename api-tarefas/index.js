const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('api de tarefas no ar');});

app.listen(3000, () => {
console.log('rodando na 3000');});