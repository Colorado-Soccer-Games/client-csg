<template>
<div class="wrapa">
  <div class="left">
  <h1 class='animated wow slideInUp'> MOST GAMES PER DAY</h1>
  <vue-chart class="myChart" type='bar' :data='chartData'
  :options='options'></vue-chart>
  </div>

  <div class="right animated slideInUp">
    <h2>INFORMATION</h2>
            <h4>GAMES PER DAY</h4>
        <div class="flex">
        <h3>MONDAY:</h3> <span class="numb">2</span>
        </div>
        <div class="flex">
        <h3>TUESDAY:</h3> <span class="numb">3</span>
        </div>
                <div class="flex">
        <h3>WEDNESDAY:</h3> <span class="numb">2</span>
        </div>
        <div class="flex">
        <h3>THURSDAY:</h3> <span class="numb">4</span>
        </div>
                <div class="flex">
        <h3>FRIDAY:</h3> <span class="numb">5</span>
        </div>
        <div class="flex">
        <h3>SATURDAY:</h3> <span class="numb">6</span>
        </div>
                <div class="flex">
        <h3>SUNDAY:</h3> <span class="numb">6</span>
        </div>

        <h4>FIELD TYPES</h4>
        <div class="flex">
        <h3><img class="icon" src="../../static/full_grass.png"/></h3> <span class="numb">6</span>
        </div>
        <div class="flex">
        <h3><img class="icon" src="../../static/full_turf.png"/></h3> <span class="numb">4</span>
        </div>
                <div class="flex">
        <h3><img class="icon" src="../../static/full_dirt.png"/></h3> <span class="numb">2</span>
        </div>
                <div class="flex">
        <h3><img class="icon" src="../../static/full_concrete.png"/></h3> <span class="numb">3</span>
        </div>

  </div>
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
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [2]
        },
        {
          label: 'TUESDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          backgroundColor: '#00ADA9',
          borderWidth: '3',
          data: [3]
        },
        {
          label: 'WEDNESDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [2]
        },
        {
          label: 'THURSDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [4]
        },
        {
          label: 'FRIDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [5]
        },
        {
          label: 'SATURDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          borderSkipped: 'top',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [6]
        },
        {
          label: 'SUNDAY',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
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
        display: false
      }
    },
    mounted () {
      this.loadPeople()
    },
    methods: {
      loadPeople () {
        fetch('https://localhost:3000/')
          .then(response => response.json())
          .then(peopleVar => {
            this.people = peopleVar.people
            // this.createChartDatasets();
          })
      }
    }
  })
}
</script>

<style scoped>
.wrapa {
  display: flex;
  min-width: 100%;
  max-width: 100%;
  justify-content:space-around;
}

.right {
    /* background-color:#FF6444; */
  margin-bottom: 2rem;
    margin-top: 3.4rem;
      /* border-radius: 1px; */
      border-bottom-right-radius: 5px;
    border-bottom-left-radius: 10px;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43) inset;
    border-radius: 1px;
  border-top: 4px solid white;
  border-right: 4px solid rgb(199, 198, 198);
  color: #dcdada;
max-width: 145px;
min-width: 145px;
/* height: 300px; */
/* margin-right:2rem; */
background-color: #00ada9;
}
h2 {
  text-align: center;
  font-size: 10px;
  min-width: 100px;
  max-width: 100px;
  background-color: #dcdada;
  padding-top: 5px;
  padding-bottom: 8px;
  margin-bottom: 22px;
  /* border-bottom: 3px solid #dcdada; */
  color: #222222;
  font-weight: 900;
  /* border-top-right-radius: 5px; */
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
       -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43) inset;
}

h3 {
  padding-left: 14px;
    padding-right: 8px;
        padding-top: 4px;
    font-size: 10px;
    font-weight: 900;
    color: #222;
}
h4 {
  padding-left: 14px;
    padding-right: 8px;
        padding-top: 14px;
    font-size: 12px;
    font-weight: 700;
    color: #222;
}

.left {
width: 500px;
/* max-width: 500px; */
}

.icon {
  height: 14px;
}


.myChart {
  min-width: 55vw;
  /* padding-left:1rem; */
/* max-width: 200px; */
}
h1 {
  text-align: center;
  font-size: 14px;
  min-width: 200px;
  max-width: 200px;
  background-color: #00ada9;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 30px;
  border-bottom: 3px solid #dcdada;
  color: #222222;
  font-weight: 900;
  /* border-top-right-radius: 5px; */
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
}

.flex {
  display: flex;
justify-content: flex-start;
}

.numb {
  /* padding-left:1px; */
  font-weight: 800;
  font-size: 12px;
          padding-top: 4px;
}


</style>
