//专门用于创建整个应用的路由器
// import Vue from 'vue';
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
// Vue.use()
//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      name: "aboutName",
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: "detailName",
              path: 'detail/:id/:title',
              component: Detail,
              //props第一种写法，值为对象,该对象的所有keyvalue都会以props的形式传给detail组件
              // props: {
              //   a: 1, b: "hello"
              // }
              //props的第二种写法，值为布尔值，就会把该路路由组件收到的所有params参数，传给detail组件
              // props: true
              //props的第三种，只为函数
              // props ($route) {
              //   return {
              //     id: $route.params.id,
              //     title: $route.params.title
              //   }
              // },
              props ({ params: { id, title } }) {
                return {
                  id: id,
                  title: title
                }
              }
            }
          ]
        }
      ]
    }
  ]
})