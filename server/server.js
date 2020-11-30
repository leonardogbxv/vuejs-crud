// Importa express
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Aplicação vai usar a rota "/api/users" como correspondente
// Ex: "/api/users/abc123", 
const usersRouter = require('./routes/api/users');
app.use('/api/users', usersRouter);

// Começa a rodar servidor
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Servidor rodando na porta ${port}`);