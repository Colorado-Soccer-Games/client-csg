import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/components/Project'
import StatsBlue from '@/components/StatsBlue'
import StatsGold from '@/components/StatsGold'
import StatsRed from '@/components/StatsRed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Project',
      component: Project
    },
    {
      path: '/StatsBlue',
      name: 'StatsBlue',
      component: StatsBlue
    },
    {
      path: '/StatsGold',
      name: 'StatsGold',
      component: StatsGold
    },
    {
      path: '/StatsRed',
      name: 'StatsRed',
      component: StatsRed
    }
  ]
})
