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
      title:'1.下列不属于在抗日战争时期取得的胜利是（ ）',
      current:-1,
      url:'/firsttopic',
      answer:
      [ {name:'A.平型关大捷'},
        {name:'B.昆仑关战役'},
        {name:'C.镇南关大捷'},
        {name:'D.台儿庄战役'}]
       }
  },
  methods:{
     al:function(index){
       this.current=index;
       //alert(this.current); 确认答案的键 🗡
       this.url='/stopic'
     },
     judge:function(){
        
       //判断是否选择答案
        if(this.current!=0&&this.current!=1&&this.current!=2&&this.current!=3)
        {alert('请选择答案')
         }
         if(this.current==2){
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
