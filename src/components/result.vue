<template>
   <div class='fontPage'>
    <img id='mark' src='../assets/4-2.png'>
    <span>{{grade}}</span>
    <img id='btn' src='../assets/4-3.png'>
    <span id='info'>关注xxxx</span>
   </div>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      grade:'wefwe'
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
    top:23%;
    left:41%;
    font-size:1.5rem;
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
