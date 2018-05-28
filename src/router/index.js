import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListarCiclista from '@/components/biker/ListarCiclista'
import ManageBiker from '@/components/biker/ManageBiker'
import ShowOrders from '@/components/orders/ShowOrders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cadastrar',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/orders',
      name: 'OrdersShow',
      component: ShowOrders
    },
    {
      path: '/bikers',
      name: 'Listar',
      component: ListarCiclista
    },
    {
      path: '/bikers/:id',
      name: 'EditBiker',
      component: ManageBiker
    }
  ]
})
