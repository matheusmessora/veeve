<template>
  <div>
    <div class="row">
      <div class="col">
        <h1></h1>
      </div>
    </div>
    <div class="row">
      <div class="col">

        <h2>Entregas registradas</h2>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">OS</th>
              <th scope="col">Cliente</th>
              <th scope="col">Entregar em</th>
              <th scope="col">Tipo</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in registeredOrders">
              <td>{{p.id}}</td>
              <td>{{p.client.name}}</td>
              <td>{{p.shipping.address.neighborhood}}</td>
              <td>{{p.deliveryType}}</td>
              <td>{{p.status.current}}</td>
            </tr>
          </tbody>
        </table>

        <h2>Entregas Em Rota</h2>
        <table class="table">
          <thead class="thead-light">
          <tr>
            <th scope="col">OS</th>
            <th scope="col">Cliente</th>
            <th scope="col">Entregar em</th>
            <th scope="col">Tipo</th>
            <th scope="col">Status</th>
            <th scope="col">Biker</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="p in enRouteOrders">
            <td>{{p.order.id}}</td>
            <td>{{p.order.client.name}}</td>
            <td>{{p.order.shipping.address.neighborhood}}</td>
            <td>{{p.order.deliveryType}}</td>
            <td>{{p.order.status.current}}</td>
            <td>
              <router-link :to="{ name: 'EditBiker', params: { id: p.biker.id }}">{{p.biker.name}}</router-link>
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
  name: 'ShowOrders',
  data () {
    return {
      orders: [],
      registeredOrders: [],
      enRouteOrders: []
    }
  },
  beforeMount: function() {
    console.log("beforeMount")
    this.$http.get('http://localhost:8080/orders').then(res => {
      this.orders = res.body
      var enRoute = this.enRouteOrders
      // this.registeredOrders = []
      this.orders.forEach(function (order) {
        if(order.status.current === "Registered") {
          this.registeredOrders.push(order)
        }
        if(order.status.current === "EnRoute") {
          let enRoute = this.last(order.status.history)
          let id = enRoute.bikerID
          this.$http.get('http://localhost:8080/biker/' + id).then(res => {
            let orderEnRoute = {
              order: order,
              biker: res.data
            }
            this.enRouteOrders.push(orderEnRoute)
          })
        }
      }, this)
    })
  },
  methods: {
    last: function(historyData) {
      return historyData[historyData.length - 1];
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
