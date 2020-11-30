const express = require('express');
const router = express.Router();

const { findUsers, insertUser, deleteUser, updateUser } = require('../../database/db');

// GET(read) usuarios (".../api/users")
router.get('/', async (req, res) => {
  await findUsers((err, users) => {
    if(err) {
      return console.log(err);
    }

    return res.send({ users });
  });
});

// POST(create) usuario
router.post('/', async (req, res) => {
  try {
    await insertUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      createdAt: new Date()
    });
  
    return res.status(200).send({ success: 'Usuario criado com sucesso!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Ocorreu um erro na criação de usuário...' });
  }
});

// PUT(update) usuario
router.put('/edit/:id', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    await updateUser(req.params.id, { name, email, password });

    return res.status(200).send({ success: 'Edição feita com sucesso!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Ocorreu um erro nas modificações de usuário...' });
  }
});

// DELETE usuario
router.delete('/delete/:id', async (req, res) => {
  try {
    await deleteUser(req.params.id);

    return res.status(200).send({ success: 'Usuario excluído com sucesso!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Ocorreu um erro ao excluir o usuário...' });
  }
});

module.exports = router;