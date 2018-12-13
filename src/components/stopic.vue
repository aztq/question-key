<template>
   <div class='fontPage'>
    <ul>
       <li class='first'>{{title}}</li>
      <li @click='al(index)' :class='{selected:index==current}' v-for='(item,index) in answer'  :key=index>{{item.name}}</li>
    </ul>
    <router-link :to=url><img id='btn' @click='judge' src='../assets/2-2.png'></router-link>
   </div>
</template>

<script>
export default {
  name: 'stopic',
   data () {
    return {
      title:'1+3=___',
      current:-1,
      url:'stopic',
      arr:[0,1,2,3],
      answer:
      [ {name:'A.大发噶空间冷静啊'},
        {name:'B.大发噶客观冷静啊'},
        {name:'C.大发噶空间大的客观冷静啊'},
        {name:'D.大发噶空间大的客观冷静啊'}]
       }
  },
  methods:{
     al:function(index){
       this.current=index;
       this.url='/ttopic'
     },
     judge:function(){
        if(this.current!=0&&this.current!=1&&this.current!=2&&this.current!=3)
        {alert('请选择答案')}
     }   
   }
}
</script>

<style scoped>
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