<template>
   <div id="app">
    <!-- uri에 따라 해당 컴포넌트가 router-view를 대신함 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
@import './assets/css/style.css';
</style>
