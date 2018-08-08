import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/users/UserIndex'
import UserForm from '@/components/users/UserForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'UserIndex',
      component: UserIndex
    },
    {
      path: '/users/add',
      name: 'UserAdd',
      component: UserForm
    },
    {
      path: '/users/edit/:id',
      name: 'UserEdit',
      component: UserForm,
      props: true 
    }
  ]
})
