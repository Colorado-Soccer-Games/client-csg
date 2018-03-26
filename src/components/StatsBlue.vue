<template>
<div id="Wrapper">
<div id="left">
<h1 class="wow animated slideInLeft">MOST POPULAR FIELDS</h1>
<div class="data">

<vue-chart class="myChart" type='bar' :data='chartData'
:options='options'></vue-chart>
</div>
</div>

<div class="right animated slideInUp">
<h2>FIELD INFORMATION:</h2>
<p class="info-text">All total game field details & relevant information. </p>
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
  <div class="coly-wrap">
        <div class="coly">
        <h4>FIELD TYPES</h4>
        <div class="flex">
        <img class="iconz" src="../../static/full_grass.png"/> <span class="numb">9</span>
        </div>
        <div class="flex">
        <img class="iconz" src="../../static/full_turf.png"/> <span class="numb">5</span>
        </div>
        <div class="flex">
        <img class="iconz" src="../../static/full_dirt.png"/> <span class="numb">4</span>
        </div>
        <div class="flex">
        <img class="iconz" src="../../static/full_concrete.png"/> <span class="numb">3</span>
        </div>
        </div>


        <div class="coly">
        <h4>FIELD TYPES</h4>
        <div class="flex">
        <img class="iconz" src="../../static/full_grass.png"/> <span class="numb">9</span>
        </div>
        <div class="flex">
        <img class="iconz" src="../../static/full_turf.png"/> <span class="numb">5</span>
        </div>
        <div class="flex">
        <img class="iconz" src="../../static/full_dirt.png"/> <span class="numb">4</span>
        </div>
        <div class="flex">
        <img class="iconz" src="../../static/full_concrete.png"/> <span class="numb">3</span>
        </div>
        </div>
        </div>



        <span><img class="logo animated slideInLeft" src="../../static/grey.png">
</span>

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
          label: 'MON',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [2]
        },
        {
          label: 'TUE',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          backgroundColor: '#00ADA9',
          borderWidth: '3',
          data: [3]
        },
        {
          label: 'WED',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [2]
        },
        {
          label: 'THR',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [4]
        },
        {
          label: 'FRI',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [5]
        },
        {
          label: 'SAT',
          borderColor: '#dcdada',
          hoverBorderColor: '#aaa',
          borderSkipped: 'top',
          hoverBackgroundColor: '#2efd96',
          borderWidth: '3',
          backgroundColor: '#00ADA9',
          data: [6]
        },
        {
          label: 'SUN',
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
        display: true,
        labels: {
          defaultFontSize: '10px',
        }
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
#Wrapper {
  display: flex;
  justify-content: space-around;
  color: #3b3b3b;
  /* background-color: #222222; */
  font-family: "Lato", sans-serif;
  /* width: 100vw; */
  /* margin: 1rem; */
    min-width: 100%;
  max-width: 100%;
}

.logo {
  height: 35px;
  padding-top: 20px;
  margin-left: 100px;
  /* justify-content: center; */
}
.head1 {
    padding-top: 20px;
font-size: 18px;
font-weight: 400;
padding-left: 4px;
font-family: 'Lalezar', sans-serif;
color: #3b3b3b;
}
.head2 {
    padding-top: 20px;
font-size: 18px;
font-weight: 400;
font-family: 'Lalezar', sans-serif;
color: #3b3b3b;
padding-left: 7px;
}

.lab1{
  font-size: 14px;
font-weight: 600;
padding-left: 9px;
color: rgb(69, 68, 68);
padding-top: 4px;
}
.lab2{
  font-size: 14px;
font-weight: 400;
padding-right: 39px;
color: #222222;
padding-top: 4px;
}
/* .flex {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
} */

.info-text {
  font-size: 10px;
  color: #3b3b3b;
    padding: 5px 0 0 5px;
}
.right {
  max-height:400px;
  width: 243px;
  background-color:#00ADA9;
  margin-bottom: 2rem;
    margin-top: 3.4rem;
      border-radius: 1px;
      border-bottom-right-radius: 5px;
    border-bottom-left-radius: 0px;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43) inset;
    border-radius: 1px;
  border-top: 4px solid white;
  border-right: 4px solid rgb(199, 198, 198);
  color: #222222;
}

.data {
  color: #222222;
  background-color: #dcdada;
  width: 600px;
  padding-top:20px;
  border-radius: 1px;
  border-top: 4px solid white;
  border-right: 4px solid rgb(199, 198, 198);
  margin-left: 0rem;
  margin-top: 20px;
  max-height: 400px;
  min-height: 400px;
  border-bottom-right-radius: 5px;
    border-bottom-left-radius: 3px;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43),
    0 0 40px rgba(0, 0, 0, 0.43) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.43) inset;
}

h1 {
  text-align: center;
  font-size: 14px;
  min-width: 200px;
  max-width: 200px;
  background-color: #00ADA9;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 3px solid #dcdada;
  color: #222222;
  font-weight: 900;
  /* border-top-right-radius: 5px; */
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
}
h2 {
  text-align: center;
  font-size: 14px;
  min-width: 200px;
  max-width: 200px;
  background-color: #dcdada;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 3px solid #00ADA9;
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
.FullGameInfoCard {
  display: flex;
  margin-bottom: 2rem;
  /* border: 2px #dcdada solid; */
}

.inline-column {
  display: flex;
  flex-direction: column;
}

.inset {
      -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.55) inset
}

.id {
  border-top: 2px #dcdada solid;
  font-size: 10px;
  max-width: 45px;
  min-width: 45px;
}
.place {
  border-top: 2px #dcdada solid;
  border-right: 4px rgb(158, 158, 158) solid;
  padding: 2px 0 10px 3px;
  font-size: 14px;
  max-width: 250px;
  min-width: 250px;
  background-color: #aaa;
  border-bottom-left-radius: 10px;
  display: flex;
}

.location {
  padding: 4px 0 10px 3px;
  font-weight: 400;
  color: black;
}

.city {
  padding: 4px 0 10px 3px;
  color: black;
  font-weight: 900;
}

.date {
  border-top: 2px #dcdada solid;
  border-right: 4px #292929 solid;
  max-width: 110px;
  min-width: 110px;
  background-color: #2e2e2e;
  color: white;
  flex-flow: row no wrap;
  font-weight: 500;
  font-size: 14px;
        cursor: pointer;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(124, 42, 42, 0.33);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.33);
  -webkit-transition: box-shadow 1s ease-in;
  -moz-transition: box-shadow 1s ease-in;
  -o-transition: box-shadow 1s ease-in;
  transition: box-shadow 3s ease-in;
}

.day {
  padding: 4px 0 0 3px;
}

.surface {
  border-top: 2px #dcdada solid;
  padding: 4px 0 0 4px;
  max-width: 55px;
  min-width: 55px;
  background: #222222;
  background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
  background: -webkit-linear-gradient(top, #222222 0%, #2d2d2d 100%);
  background: linear-gradient(to bottom, #222222 0%, #2d2d2d 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#222222",
      endColorstr="#2d2d2d",
      GradientType=0
    );
}
.field {
  border-top: 2px #dcdada solid;
  max-width: 100px;
  min-width: 100px;
  background: #222222;
  background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
  background: -webkit-linear-gradient(top, #222222 0%, #2d2d2d 100%);
  background: linear-gradient(to bottom, #222222 0%, #2d2d2d 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#222222",
      endColorstr="#2d2d2d",
      GradientType=0
    );
  border-right: 4px #2c2c2c solid;
}
.stats {
  border-top: 2px white solid;
  max-width: 136px;
  min-width: 136px;
  color: black;
  background-color: #00ADA9;
  border-bottom-right-radius: 10px;
      cursor: pointer;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(124, 42, 42, 0.33);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.33);
  -webkit-transition: box-shadow 1s ease-in;
  -moz-transition: box-shadow 1s ease-in;
  -o-transition: box-shadow 1s ease-in;
  transition: box-shadow 3s ease-in;
}

.stats:hover {
    background-color: rgb(1, 143, 140);
}

.date:hover {
    background-color:rgb(51, 51, 51) ;
}
.place:hover {
    color: black;
  background-color: #00ADA9;
}

.icon {
  max-width: 50px;
  min-width: 50px;
}

.players {
  padding: 4px 0 0 4px;
  font-size: 12px;
  font-weight: 400;
}

.completed {
  padding: 4px 0 0 4px;
  font-size: 18px;
  font-weight: 900;
}

.game-id {
  font-size: 10px;
  padding: 4px 0 0 2px;
}
button {
margin: 1rem 0 1rem 1rem;
  background-color: #00ADA9;
color:  #222222;
font-size: 10px;
font-family: 'Lato', sans-serif;
font-weight: 700;
width: 145px;
height: 25px;
border: none;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.33), 0 0 40px rgba(0, 0, 0, 0.33) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.33), 0 0 40px rgba(0, 0, 0, 0.33) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.33) inset
}
button:hover {
  background-color: #222222;
color:  #FFC636;
font-size: 10px;
font-family: 'Lato', sans-serif;
font-weight: 400;
width: 145px;
height: 25px;
border: 2px #FFC636 solid;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
}
.bold {
  font-weight: 900;
}

.highlight {
  background-color: black;
  color:#dcdada;
  padding: 2px 2px 2px 2px;
  border-bottom: #dcdada solid 4px;
  border-bottom-left-radius: 5px;
  -webkit-box-shadow:0 0 2px rgba(0,0,0,0.6);
-moz-box-shadow:0 0 2px rgba(0,0,0,0.6);
box-shadow:0 0 2px rgba(0,0,0,0.6);
}

.myChart {
  min-width: 550px;
  height:400px;
  /* padding-left:1rem; */
/* max-width: 200px; */
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
.iconz {
  padding-top: 4px;
    padding-left: 14px;
min-width: 18px;
max-width: 18px;
max-height: 18px;
min-height: 18px;
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

.coly-wrap {
  display: flex;
  flex-direction: row;
}

</style>
