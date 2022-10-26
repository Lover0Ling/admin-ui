import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import show from "../components/show";
import helloWorld from "../components/HelloWorld";
import UserData from "../components/UserData";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/show",
      name:"show",
      component:show,
      children:[{
        path:"/hello",
        component:helloWorld
      },
        {
          path:"/UserData",
          component:UserData
        }
      ]
    },
  ]
})
