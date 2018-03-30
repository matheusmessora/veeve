<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>{{ msg }}</h1>
        <h2>Venha ser ciclista!</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="form-group col">
                    <label for="nameInput">Nome Completo</label>
                    <input type="text" class="form-control form-control-lg" id="nameInput">
                    <small id="nameHelp" class="form-text text-muted"></small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <label for="rgInput">RG</label>
                    <input type="text" class="form-control form-control-lg" id="rgInput">
                  </div>
                  <div class="form-group col">
                    <label for="cpfInput">CPF</label>
                    <input type="text" class="form-control form-control-lg" id="cpfInput">
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bem vindo a Veeve!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
