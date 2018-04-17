<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>{{ msg }}</h1>
        <h2>VENHA</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        IMAGEM
      </div>

      <div class="col"></div>
    </div>

    <button v-on:click="greet">A</button>

    <!--<div class="row">-->
      <!--<div class="col">-->
        <!--<div class="card">-->
            <!--<div class="card-body">-->
              <!--<form v-on:submit.prevent="greet">-->
                <!--<div class="form-row">-->
                  <!--<div class="form-group col">-->
                    <!--<label for="nameInput">Nome Completo</label>-->
                    <!--<input type="text" class="form-control form-control-lg" id="nameInput">-->
                    <!--<small id="nameHelp" class="form-text text-muted"></small>-->
                  <!--</div>-->
                  <!--<div class="form-group col">-->
                    <!--<label for="emailInput">E-mail</label>-->
                    <!--<input type="email" class="form-control form-control-lg" id="emailInput">-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="form-row">-->
                  <!--<div class="form-group col">-->
                    <!--<label for="phoneInput">Telefone</label>-->
                    <!--<input type="text" class="form-control form-control-lg" id="phoneInput">-->
                    <!--<small id="phoneHelp" class="form-text text-muted"></small>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="form-row">-->
                  <!--<div class="form-group col">-->
                    <!--<label for="rgInput">RG</label>-->
                    <!--<input type="text" class="form-control form-control-lg" id="rgInput">-->
                  <!--</div>-->
                  <!--<div class="form-group col">-->
                    <!--<label for="cpfInput">CPF</label>-->
                    <!--<input type="text" class="form-control form-control-lg" id="cpfInput">-->
                  <!--</div>-->
                <!--</div>-->
                <!--<button type="submit" class="btn btn-primary">Cadastrar</button>-->
              <!--</form>-->
            <!--</div>-->
        <!--</div>-->

      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import Ping from '@/services/prospect';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bem vindo a Veeve1!'
    }
  },
  methods: {
    greet: function(event) {
      Ping.ping();
      this.$http.get('https://jsonplaceholder.typicode.com/posts/2').then(res => {
        this.msg = res.body.title
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
