<template>
  <div id="app">
    <div class="row">
      <div class="container col-xs-12">
    <app-main></app-main>
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import Main from "./components/Main";
  export default {
     appMain: Main,

}
</script>

<style>

</style>
