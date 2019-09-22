import Vue from 'vue'
import Router from 'vue-router'
import MyComp from '@/components/MyComp'
import Elearning from '@/components/Elearning'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:MyComp , 
      component:MyComp,
      
    },
    {
      path:'/Elearning',
      name:Elearning , 
      component:Elearning,
    }
  ]
})
