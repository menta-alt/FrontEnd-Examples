import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')

//1、 安装插件 
Vue.use(Router)

// const router = new Router({
//   routes:[

//   ]
// })
// export default router

//2、创建路由对象和导出合并
export default new Router({
  routes: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/shopcart',
      component: Shopcart
    }
  ],
  mode:'history'
})
