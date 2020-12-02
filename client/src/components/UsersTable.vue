<template>
  <div class="container">
    <h3 class="mt-2 mb-3 float-left text-primary">Usuários</h3>
    <!-- Tabela de Usuários -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Usuario ID</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Senha</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <!-- Diretiva "v-for" para pegar os usuários da API -->
        <tr v-for="(user, index) in users.users" :key="user._id" class="m-5">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user._id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          
          <td>
            <form>
              <button v-on:click.prevent="emitShowModal(user)" class="btn btn-sm btn-info mr-1">Editar</button>
              <button v-on:click="deleteUser(user._id)" type="submit" class="btn btn-sm btn-danger">Deletar</button>
            </form>
          </td>
        </tr>
        <!-- Fim "v-for" -->
      </tbody>
    </table>
    <!-- Fim tabela -->
  </div>
</template>

<script>
import { EventBus } from '../main.js';

export default {
  name: 'UsersTable',
  data() {
    return {
      users: [],
      showModal: false
    }
  },
  // Ao criar o componente, é feito uma requisição GET para a API do backend
  async created() {
    await fetch('http://localhost:3000/api/users/')
    .then(response => response.json())
    .then(data => {
      this.users = data;
      console.log('caiu aqui');
    })
    .catch(err => {
      console.error(err);
    });
  },
  methods: {
    // Requisição DELETE para excluir o usuário
    async deleteUser(id) {
      await fetch(`http://localhost:3000/api/users/delete/${id}`, {
        method: 'DELETE'
      })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
    },
    // Metodo usa o 'EventBus' para poder emitir dados de forma global
    // --> Emite dados de "user" e "showModal"
    emitShowModal(user) {
      this.user = user;
      EventBus.$emit('click', this.showModal, this.user);
      
      console.log(this.user);
      console.log('UsersTable:', this.showModal);
    }
  }
}
</script>

<style scoped>
th {
  padding-left: 1.2rem;
}
</style>
