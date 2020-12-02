// Importa express e cors
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware para passar um Objeto para Objeto JSON (em uma requisição)
app.use(express.json());
// Middleware para permitir acesso à API de um dominio diferente (Nesse caso, o nosso 'client': localhost:8080)
app.use(cors());

// Aplicação vai usar a rota "/api/users" como correspondente
// Ex: "/api/users/abc123", 
const usersRouter = require('./routes/api/users');
app.use('/api/users', usersRouter);

// Começa a rodar servidor
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Servidor rodando na porta ${port}`);