<template>
  <vue-chart type='bar' :data='chartData' :options='options'></vue-chart>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  name: 'App',
  components: {
    VueChart
  },
  data () {
    return {
      games: [],
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: true
      // height: 200,
      // scaleOverride: true
    }
  },
  // eslint-disable-next-line
  mounted() {
    const baseURL = 'http://localhost:3000/'
    fetch(baseURL, {
      method: 'GET'
    })
      .then(res => res.json())
      // eslint-disable-next-line
      .catch(error => console.error('Error:', error))
      // eslint-disable-next-line
      .then(response => {
        this.games = response.games.length
        console.log('games', this.games)
      })
      .then(() => {
        this.renderChart(
          {
            labels: ['TOTAL SCHEDULED GAMES'],
            datasets: [
              {
                label: 'tester',
                backgroundColor: '#00ADA9',
                data: [this.games, 0]
              }
            ]
          },
          { responsive: HTMLOptGroupElement, maintainAspectRatio: false }
        )
      })
  }
}
</script>
<style scoped>
</style>
