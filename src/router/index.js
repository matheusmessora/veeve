import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListarCiclista from '@/components/ListarCiclista'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cadastrar',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Listar',
      component: ListarCiclista
    }
  ]
})
