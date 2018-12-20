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
html{
  font-size:16px;
  letter-spacing: 0.01rem;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
#app {
  font-size:16px;
  width:100%;
  height:100%;
}
ul{
  position:absolute;
  left:25%;
  top:15%;
  color:white;
  width:65%;
}
li{
  margin:5%;
  font-size:1rem;
  
}
.first{
  font-size:1rem;
}
.selected{
  color:#516aa0;
}

</style>
