<template>
  <div id="app">
    <app-main></app-main>
    <div class="row">
      <div class="col-xs-12">
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
