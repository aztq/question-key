<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../reset.css';
#app {
  font-size:16px;
  width:100%;
  height:100%;
}
ul{
  position:absolute;
  left:18%;
  top:15%;
  color:white;
}
li{
  margin:5%;
  font-size:1rem;
}
.first{
  font-size:2rem;
}
.selected{
  color:#516aa0;
}
</style>
