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
const router = new VueRouter({
  routes: [
    {
      name: "aboutName",
      path: '/about',
      component: About,
      meta: { title: "关于" }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: { isAuth: true, title: 'home' },
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: 'news' },
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: 'message' },
          children: [
            {
              name: "detailName",
              path: 'detail/:id/:title',
              component: Detail,
              meta: { isAuth: true, title: 'detail' },
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
//暴露之前增加路由守卫
//全局前置路由守卫，每次路由切换之前会被调用，以及初始化的时候会被调用
router.beforeEach((to, from, next) => {
  console.log('@前置路由守卫');
  console.log('@to', to);
  console.log('@from', from);
  if (to.meta.isAuth) {//判断是否需要鉴权
    if (localStorage.getItem('school') === 'atguigu') {
      next();
    } else {
      alert("学校名不对，请修改学校名")
    }
  } else {
    next();
  }
})
router.afterEach((to, from) => {
  debugger;
  document.title = to.meta.title || '尚硅谷';
  console.log('@后置路由守卫');
  console.log('@to', to);
  console.log('@from', from);
})
export default router