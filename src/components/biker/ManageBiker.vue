<template>
  <div>
    <div class="row">
      <div class="col">
        <h1></h1>
      </div>
    </div>
    <div class="row">
      <div class="col">

        <h2>{{biker.name}}</h2>
        <br />



      </div>
    </div>
    <div class="row">
      <div class="col">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Nome do ciclista</label>
            <input v-model="biker.name" class="form-control" id="exampleInputEmail1">
            <small id="emailHelp" class="form-text text-muted">Informe o nome completo do ciclista.</small>
          </div>
          <button v-on:click="send" class="btn btn-primary">Editar</button>
        </form>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col">

        <h2>Entregas roteirizadas</h2>
        <table class="table">
          <thead class="thead-light thead-primary">
          <tr>
            <th scope="col">OS</th>
            <th scope="col">Cliente</th>
            <th scope="col">Entregar em</th>
            <th scope="col">Tipo</th>
            <th scope="col">Status</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="p in orders">
            <td>{{p.id}}</td>
            <td>{{p.client.name}}</td>
            <td>{{p.shipping.address.neighborhood}}</td>
            <td>{{p.deliveryType}}</td>
            <td>{{p.status.current}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'ManageBiker',
  data () {
    return {
      biker: {},
      orders: []
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.read()
  },
  methods: {
    send: function(event) {
      console.log("sending...", this.biker)

      this.$http.put('http://localhost:8080/biker/' + this.biker.id, this.biker).then(res => {
        console.log(res.body)
        this.biker = res.body
        console.log(res)
      })
    },
    read: function(event) {
      console.log("read::ManageBiker")

      let id = this.$route.params.id
      this.$http.get('http://localhost:8080/biker/' + id ).then(res => {
        console.log(res.body)
        this.biker = res.body
        this.biker = res.body
        this.$http.get('http://localhost:8080/orders?biker=' + this.biker.id).then(res => {
          this.orders = res.data
        })
        console.log(res)
      })
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'read'
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
