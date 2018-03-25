<template>
<div>
    <h1 class="animated wow slideInUp"> MOST GAMES PER DAY</h1>
  <vue-chart type='bar' :data='chartData'
  :options='options'></vue-chart>
  </div>
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
      labels: ['TOTAL GAMES PER WEEKDAY'],
      datasets: [
        {
          label: 'MONDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          borderWidth:'3',
            hoverBackgroundColor:'#2efd96',
            borderWidth:'3',
            backgroundColor: '#00ADA9',
            data: [2]
        },
        {
          label: 'TUESDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor:'#2efd96',
          backgroundColor: '#00ADA9',
                    borderWidth:'3',
          data: [3]
        },
        {
          label: 'WEDNESDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [2]
        },
        {
          label: 'THURSDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [4]
        },
        {
          label: 'FRIDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [5]
        },
        {
          label: 'SATURDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          borderSkipped:'top',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [6]
        },
        {
          label: 'SUNDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [6]
        }
      ]
    },
    options: {
        gridLines: {
        display: false
    },
        legend: {
        display: true
    },
    },
    mounted(){
		this.loadPeople();
	},
	methods: {
		loadPeople() {
			fetch("https://localhost:3000/")
				.then(response => response.json())
				.then(peopleVar => {
					this.people = peopleVar.people;
					// this.createChartDatasets();
				}
			);
        },
    }

  })
}
</script>

<style scoped>



h1 {
  text-align: center;
  font-size: 14px;
  min-width: 200px;
  max-width: 200px;
  background-color: #00ADA9;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom:30px;
  border-bottom: 3px solid #dcdada;
  color: #222222;
  font-weight: 900;
  /* border-top-right-radius: 5px; */
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
}

</style>
