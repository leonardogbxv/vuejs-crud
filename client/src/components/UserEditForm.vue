<template>
  <div class="container">
    <!-- Adiciona/remove a classe "show" -->
    <div v-bind:class="modalClass" class="modal-container">
      <div class="user-modal">
        <h3 class="text-info">Editar Usuário</h3>
        <form>
          <div class="form-group">
            <label for="">Nome</label>
            <input v-bind:value="user.name" required type="text" id="nameEdit" class="form-control"/>
          </div>
  
          <div class="form-group">
            <label for="">Email</label>
            <input v-bind:value="user.email" required type="email" id="emailEdit" class="form-control"/>
          </div>
          
          <div class="form-group">
            <label for="">Senha</label>
            <input v-bind:value="user.password" required type="password" id="passwordEdit" class="form-control"/>
          </div>

          <!-- ao clicar, "showModal" passa a ser false -->
          <button v-on:click.prevent="showModal = !showModal" class="btn btn-secondary mr-1">Fechar</button>
          <button v-on:click="updateUser(user._id)" type="submit" class="btn btn-primary">Salvar</button> 
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { EventBus } from '../main.js';

export default {
  name: 'UserEditForm',
  data() {
    return {
      users: [],
      user: '',
      showModal: false
    }
  },
  methods: {
    // Requisição PUT para atualizar informações do usuário
    async updateUser(id) {
      await fetch(`http://localhost:3000/api/users/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
          name: document.getElementById('nameEdit').value,
          email: document.getElementById('emailEdit').value,
          password: document.getElementById('passwordEdit').value
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        console.log('caiu aqui');
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },
  // Ao criar o componente, recebemos os dados emitidos do 'EventBus' aqui nesse componente
  created() {
    // evento de click
    EventBus.$on('click', (modal, user) => {
      this.showModal = !modal;
      this.user = user;
      console.log('showModal', this.showModal);
      console.log('modal', modal)
    })
  },
  // Função para colocar ou tirar a classe "show" no Modal
  computed: {
    modalClass() {
      return this.showModal ? 'show' : '';
    }
  }
  
};
</script>

<style>
/* Esta usando a mesma estilização do modal de cadastro */
</style>
