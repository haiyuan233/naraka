import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/naraka/Home'
import SkillLearning from '../components/naraka/skill/SkillLearning'
import Damage from '../components/naraka/util/Damage'
import DanmakuKagura from '../components/naraka/danmaku/DanmakuKagura'
import Card from '../components/naraka/danmaku/card/Card'
import Info from '../components/naraka/danmaku/source/Info'
import Menu from '../components/naraka/danmaku/source/menu/Menu'
import Character from '../components/naraka/danmaku/source/tricks/Character'
import Mission from '../components/naraka/danmaku/source/tricks/Mission'
import Normal from '../components/naraka/danmaku/source/tricks/Normal'
import Setting from '../components/naraka/danmaku/source/tricks/Setting'
import Story from '../components/naraka/danmaku/source/tricks/Story'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/skill',
      component: SkillLearning
    },{
      path: '/damage',
      component: Damage
    },{
      path: '/danmakuKagura',
      component: DanmakuKagura,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        {
          path: '/',
          redirect: '/info',
          component: Info
        },{
          path: '/info',
          component: Info
        },{
          path: '/menu',
          component: Menu
        },{
          path: '/card',
          component: Card
        },{
          path: '/normal',
          component: Normal
        },{
          path: '/character',
          component: Character
        },{
          path: '/story',
          component: Story
        },{
          path: '/setting',
          component: Setting
        },{
          path: '/mission',
          component: Mission
        },
        // ...其他子路由
      ]
    },
  ]
})
