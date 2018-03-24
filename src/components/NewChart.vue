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
            data: [4]
        },
        {
          label: 'TUESDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor:'#2efd96',
          backgroundColor: '#00ADA9',
                    borderWidth:'3',
          data: [6]
        },
        {
          label: 'WEDNESDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [1]
        },
        {
          label: 'THURSDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [2]
        },
        {
          label: 'FRIDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [3]
        },
        {
          label: 'SATURDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          borderSkipped:'top',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [5]
        },
        {
          label: 'SUNDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
                    hoverBackgroundColor:'#2efd96',
          borderWidth:'3',
          backgroundColor: '#00ADA9',
          data: [5]
        }
      ]
    },
    options: {
        gridLines: {
        display: false
    },
        legend: {
        display: false
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
					this.createChartDatasets();
				}
			);
        },
    }

  })
}
</script>

<style scoped>
</style>
