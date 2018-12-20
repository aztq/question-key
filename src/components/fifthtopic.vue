<template>
   <div class='fontPage'>
    <ul>
        <li class='first'>{{title}}</li>
      <li @click='al(index)' :class='{selected:index==current}' v-for='(item,index) in answer' :key=index>{{item.name}}</li>
    </ul>
    <router-link :to=url><img id='btn' @click='judge' src='../assets/3-1.png'></router-link>
   </div>
</template>

<script>
export default {
  name: 'fifthtopic',
   data () {
    return {
      title:'5.孩子们眼中的希望 是什么形状 ',
      current:-1,
      url:'/fifthtopic',
      answer:
      [ {name:'A.殇歌传千里  家乡平饥荒'},
        {name:'B.是否院子有秋千可以荡 口袋里有糖'},
        {name:'C.是否醒来有面包跟早餐 再喝碗浓汤'},
        {name:'D.恐惧可在孩子们脸上'}]
       }
  },
  methods:{
     al:function(index){
       this.current=index;
       this.url='/result';
       
     },
    judge:function(){
        if(this.current!=0&&this.current!=1&&this.current!=2&&this.current!=3)
        {
          alert('请选择答案')
        }
         if(this.current==1|this.current==2){
           this.$store.commit('increase');
           
         }
         this.$store.commit('judge');
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