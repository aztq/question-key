<template>
   <div class='fontPage'>
    <img style='' id='mark' src='../assets/4-2.png'>
    <div><span style=''>{{this.$store.state.finalmark}}分</span></div>
    <div style='margin-top:-4rem;'><li id='command'>{{this.$store.state.command}}</li></div>
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
  },
  methods:{
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
    height:30%;
}
span{
    position:absolute;
    top:19.5%;
    left:45%;
    font-size:1.5rem;
}
#command {
    font-size:1rem;
    padding-left:1.2rem;
    padding-top:0.1%;
    text-align: center;
}
#btn{
  top:40%;
  left:35%;
  position:absolute;
  width:30%;
  height:3rem;
}
#info{
  top:50%;
  left:35%;
  text-align:center;
  position:absolute;
  width:30%;
}

/*每句评语的样式
:class='{twenty:this.$store.state.finalmark==20,
                 forty:this.$store.state.finalmark==40,
                 sixty:this.$store.state.finalmark==60,
                 eighty:this.$store.state.finalmark==80,
                 hundred:this.$store.state.finalmark==100}'
.twenty{
    left:42%;
}
.forty{
    left:35%;
}
.sixty{
    left:42%;
}
.eighty{
    left:35%;
}
.hundred{
    left:42%;
}

*/
</style>
