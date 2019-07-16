import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Homes from './views/Homes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/homes',
      name: 'homes',
      component: Homes,
      children: [
		{
			path: 'list',
			name: 'list',
			component: () =>import(/* webpackChunkName: "list" */ './views/List.vue') //懒加载
		},
		{
			path: 'user',
			name: 'user',
			component: () =>import(/* webpackChunkName: "user" */ './views/User.vue') //懒加载
		}
      ]
	},
	{
		path: '/add',
		name: 'add',
		component: () =>import(/* webpackChunkName: "add" */ './views/Add.vue')
  },
  {
		path: '/info',
		name: 'info',
		component: () =>import(/* webpackChunkName: "info" */ './views/Info.vue')
	},
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
