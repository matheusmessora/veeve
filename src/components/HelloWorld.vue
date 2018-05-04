<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>{{msg}}</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="cadastrar">
                <div class="form-row">
                  <div class="form-group col">
                    <h2>Bem vindo Ciclista</h2>
                    <p>Cadastre-se para pedalar!</p>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-12 col-md-6">
                    <label for="nameInput">Nome Completo</label>
                    <input type="text" class="form-control form-control-lg" id="nameInput" autocomplete="name" v-model="modelo.name">
                    <small id="nameHelp" class="form-text text-muted"></small>
                  </div>
                  <div class="form-group col-12 col-md-6">
                    <label for="emailInput">E-mail</label>
                    <input type="email" class="form-control form-control-lg" id="emailInput" autocomplete="email" v-model="modelo.email">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <label for="phoneInput">Telefone</label>
                    <input type="tel" class="form-control form-control-lg" id="phoneInput" autocomplete="tel-national" v-model="modelo.phone">
                    <small id="phoneHelp" class="form-text text-muted"></small>
                  </div>
                </div>
                <div class="form-row">

                  <div class="form-group col-12 col-md-6">
                    <label for="cpfInput">CPF</label>
                    <input type="text" class="form-control form-control-lg" id="cpfInput" v-model="modelo.cpf">
                  </div>
                  <div class="form-group col-12 col-md-6">
                    <label for="rgInput">RG</label>
                    <input type="text" class="form-control form-control-lg" id="rgInput" v-model="modelo.rg">
                  </div>
                </div>
                <button type="submit" class="btn btn-lg btn-primary">Cadastrar</button>
              </form>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Ping from '@/services/prospect';

export default {
  name: 'HelloWorld',
  data () {
    return {
      modelo: {},
      msg: 'Bem vindo!!'
    }
  },
  methods: {
    cadastrar: function(event) {

      console.log("this", this)
      console.log("this.modelo", this.modelo)
      Ping.ping();
      this.$http.post('http://localhost:8080/prospect', this.modelo).then(res => {
        this.msg = "FOI"
        console.log(res)
      })
      // this.$http.get('https://jsonplaceholder.typicode.com/posts/2').then(res => {
      //   this.msg = res.body.title
      //   console.log(res)
      // })

      console.log(event);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
