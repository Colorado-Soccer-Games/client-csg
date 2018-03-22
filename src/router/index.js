import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/components/Project'
import StatsOne from '@/components/StatsOne'
import StatsTwo from '@/components/StatsTwo'
import StatsThree from '@/components/StatsThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/StatsOne',
      name: 'StatsOne',
      component: StatsOne
    },
    {
      path: '/StatsTwo',
      name: 'StatsTwo',
      component: StatsTwo
    },
    {
      path: '/StatsThree',
      name: 'StatsThree',
      component: StatsThree
    }
  ]
})
