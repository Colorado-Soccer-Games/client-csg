import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/components/Project'
import NewChart from '@/components/NewChart'
import StatsGold from '@/components/StatsGold'
import StatsRed from '@/components/StatsRed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/NewChart',
      name: 'NewChart',
      component: NewChart
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
