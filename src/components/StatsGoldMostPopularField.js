import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data () {
    return { games: [] }
  },
  mounted () {
    const baseURL = 'https://protected-meadow-94841.herokuapp.com/'
    fetch(baseURL, {
      method: 'GET'
    })
      .then(res => res.json())
      // eslint-disable-next-line
      .catch(error => console.error("Error:", error))
      // eslint-disable-next-line
      .then(response => {

        this.games = response.games.length
        console.log('games', this.games)
      })
      .then(() => {
        this.renderChart({ labels: ['TOTAL SCHEDULED GAMES'],
          datasets: [{ label: 'tester',
            backgroundColor: '#FFC636',
            data: [this.games, 0] }] }, {
          responsive: HTMLOptGroupElement,
          maintainAspectRatio: false })
      })
  }
}
