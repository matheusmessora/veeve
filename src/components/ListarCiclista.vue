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
              <th scope="col">CPF</th>
              <th scope="col">Ciclista</th>
              <th scope="col">Telefone</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in prospects">
              <th scope="row">{{p.cpf}}</th>
              <td>{{p.name}}</td>
              <td>{{p.phone}}</td>
              <td>{{p.email}}</td>
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
      prospects: []
    }
  },
  beforeMount: function() {
    console.log("beforeMount")
    this.$http.get('http://localhost:8080/prospect').then(res => {
      this.prospects = res.body
      console.log(res)
    })
  },
  methods: {
    listar: function(event) {
      this.$http.get('http://localhost:8080/prospect').then(res => {
        this.prospects = res.data
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
