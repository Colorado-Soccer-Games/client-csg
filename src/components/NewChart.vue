<template>
  <vue-chart type='bar' :data='chartData'></vue-chart>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  name: 'App',

  components: {
    VueChart
  },
  // eslint-disable-next-line
  data: () => ({
    chartData: {
      labels: ['Total Games'],
      datasets: [
        {
          label: 'Monday',
          backgroundColor: '#aaa',
          data: [10]
        },
        {
          label: 'Tuesday',
          backgroundColor: '#aaa',
          data: [13]
        },
        {
          label: 'Wednesday',
          backgroundColor: '#aaa',
          data: [11]
        },
        {
          label: 'Thrusday',
          backgroundColor: '#aaa',
          data: [8]
        },
        {
          label: 'Friday',
          backgroundColor: '#aaa',
          data: [7]
        },
        {
          label: 'Saturday',
          backgroundColor: '#aaa',
          data: [5]
        },
        {
          label: 'Sunday',
          backgroundColor: '#aaa',
          data: [8]
        }
      ]
    }
  })
}
</script>

<style scoped>
</style>
