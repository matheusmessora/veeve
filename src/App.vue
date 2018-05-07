<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Veeve</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/#/cadastrar">Cadastrar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/">Listar</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './scss/custom.scss';

  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  @import './scss/main.scss';
</style>
