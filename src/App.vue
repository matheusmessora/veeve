<template>
  <div id="app">
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
