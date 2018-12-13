<template>
  <div>
     <div class='fontPage'>
      <img  id='suspend' src='../assets/WechatIMG2.png'>
      <img  id='top' src='../assets/1-2.png'> 
     </div>
    <router-link to='/firsttopic'><img id='btn' src='../assets/1-4.png'></router-link>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
#suspend{
  position:absolute;
  width:29%;
  margin-top:-22%;
  margin-left:65%; 
}
#top{
  position:absolute;
  width:75%;
  margin-top:23%;
  margin-left:7%; 
}

.fontPage{
  width:100%;
  height:100%;
  background:url('../assets/1-1.jpg');
  background-size:100% 100%;
  position:absolute;
  z-index:-1;
}
#btn{
  top:55%;
  left:35%;
  position:absolute;
  width:30%;
}
</style>
