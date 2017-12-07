import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Food from '@/components/Food'
import Commodity from '@/components/Commodity'
import ActivityAdd from '@/components/ActivityAdd'
import FoodDetail from '@/components/FoodDetail'
import CommodityAdd from '@/components/CommodityAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
     {
      path: '/activity_add',
      name: 'ActivityAdd',
      component: ActivityAdd
    },
    {
      path: '/commodity_add',
      name: 'CommodityAdd',
      component: CommodityAdd
    },
    {
      path: '/food_detail',
      name: 'FoodDetail',
      component: FoodDetail
    },
     {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: Commodity
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    }
  ]
})
