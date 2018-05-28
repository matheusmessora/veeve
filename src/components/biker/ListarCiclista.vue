<template>
  <div>
    <div class="row">
      <div class="col">
        <h1></h1>
      </div>
    </div>
    <div class="row">
      <div class="col">

        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">E-mail</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in bikers">
              <td>{{p.id}}</td>
              <td>{{p.name}}</td>
              <td>{{p.cpf}}</td>
              <td>{{p.email}}</td>
              <td>
                <span class="badge badge-secondary" v-if="p.status === 1">Ativo</span>
              </td>
              <td>
                <router-link :to="{ name: 'EditBiker', params: { id: p.id }}">Editar</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'ListarCiclista',
  data () {
    return {
      bikers: []
    }
  },
  beforeMount: function() {
    console.log("beforeMount")
    this.$http.get('http://localhost:8080/').then(res => {
      this.bikers = res.body
      console.log(res)
    })
  },
  methods: {
    listar: function(event) {
      this.$http.get('http://localhost:8080/').then(res => {
        this.bikers = res.data
        console.log(res)
      })

      console.log(event);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
