<template>
   <div class='fontPage'>
    <ul>
       <li class='first'>{{title}}</li>
      <li @click='al(index)' :class='{selected:index==current}' v-for='(item,index) in answer' :key=index>{{item.name}}</li>
    </ul>
    <router-link :to=url><img id='btn' @click='judge' src='../assets/2-2.png'></router-link>
   </div>
</template>

<script>
export default {
  name: 'ftopic',
  data () {
    return {
      title:'4.翻译"移动支付"',
      current:-1,
      url:'/ftopic',
      answer:
      [ {name:'A.moving payment'},
        {name:'B.move pay'},
        {name:'C.moblie payment'},
        {name:'D.mobile payment'}]
       }
  },
  methods:{
     al:function(index){
       this.current=index;
       this.url='/fifthtopic'
     },
     judge:function(){
        if(this.current!=0&&this.current!=1&&this.current!=2&&this.current!=3)
        {alert('请选择答案')}
         if(this.current==3){
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