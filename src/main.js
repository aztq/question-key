// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

const store=new Vuex.Store(
  {
    state:{
      count:'try',
      finalmark:0,
      command:'',
    },
    mutations:{
      increase(state){
         state.finalmark+=20;
      },
      judge(state){
        if(state.finalmark==0)    state.command='回小学去吧';
        if(state.finalmark==20)   state.command='.....'
        if(state.finalmark==40)   state.command='这些题太难了吗'
        if(state.finalmark==60)   state.command='是个狼人';
        if(state.finalmark==80)   state.command='fighting,Ok？';
        if(state.finalmark==100)  state.command='强啊';
      },
      
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
