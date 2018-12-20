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
  name: 'ttopic',
   data () {
    return {
      title:'3.猎天使魔女2中主角是什么发型？',
      current:-1,
      arr:[0,1,2,3],
      url:'ttopic',
      answer:
      [ {name:'A.短发'},
        {name:'B.长发'},
        {name:'C.中分'},
        {name:'D.黑长直'}]
       }
  },
  methods:{
     al:function(index){
       this.current=index; 
       this.url='/ftopic'
     },
    judge:function(){
        if(this.current!=0&&this.current!=1&&this.current!=2&&this.current!=3)
        {alert('请选择答案')}
         if(this.current==0){
           this.$store.commit('increase')
         }
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