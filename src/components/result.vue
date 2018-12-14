<template>
   <div class='fontPage'>
    <img id='mark' src='../assets/4-2.png'>
    <span>{{this.$store.state.finalmark}}</span>
    <li>{{this.$store.state.command}}</li>
    <img id='btn' src='../assets/4-3.png'>
    <span id='info'>关注xxxx</span>
    
   </div>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
 .fontPage{
  width:100%;
  height:100%;
  background:url('../assets/4-1.jpg');
  background-size:100% 100%;
  position:absolute;
  z-index:-1;
}
#mark{
    width:60%;
    margin-left:19%;
    margin-top:5%;
}
span{
    position:absolute;
    top:20%;
    left:50%;
    font-size:1.5rem;
}
li {
    position:absolute;
    top:25%;
    left:30%;
    font-size:1.4rem;
}
#btn{
  top:38%;
  left:35%;
  position:absolute;
  width:30%;
}
#info{
  top:50%;
  left:35%;
  text-align:center;
  position:absolute;
  width:30%;
}
</style>
