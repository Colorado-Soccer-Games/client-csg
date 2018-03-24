<template>
  <div id="Wrapper">
      <div id="this">
      <h1 class="wow animated slideInLeft">MOST POPULAR FIELDS</h1>
    <div class="data wow animated slideInLeft">
        <div class="FullGameInfoCard" v-bind:key="field.games" v-for="field in data.games" v-if="field.stats_total_players > 100">
       <div class="inline-column id">
          <img class="icon wow animated slideInLeft" src="../../static/full_competitive.png"/>
        <p class="game-id">ID: {{ field.id }}</p>
       </div>
       <div class="inset place">
        <p class="location"> {{ field.location }}</p>
       <span> <p class="city">&nbsp;|&nbsp;{{ field.city }}</p> </span>
       </div>
       <div class="date">
        <p class="day"> <span></span> {{ field.day }}</p>
       </div>
       <div class="inline-column inset stats">
        <!-- <p class="players"><span class="bold">Total Players: </span>{{ field.stats_total_players }}</p> -->
        <p class="completed"><span class="bold wow animated slideInDown">Total Players: </span>
        <span class="highlight wow animated fadeIn">
        {{ field.stats_total_players }}
        </span>
        </p>
       </div>
      </div>
      <!-- FullGameInfoCard -->
      <!-- row -->
    </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'Week',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(data => {
          this.data = data
          // console.log(data);
        })
    }
  }
}
</script>
<style scoped>
#Wrapper {
  /* display: flex;
  justify-content: space-between; */
  color: #dcdada;
  /* background-color: #222222; */
  font-family: "Lato", sans-serif;
  /* width: 100vw; */
  /* margin: 1rem; */
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
  background-color: #FF6444;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 3px solid #dcdada;
  color: #222222;
  font-weight: 900;
  /* border-top-right-radius: 5px; */
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
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
}

.day {
  padding: 4px 0 0 3px;
}

/* .time{
padding: 2px 0 10px 3px;
} */
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
  background-color: #FF6444;
  border-bottom-right-radius: 10px;
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
  background-color: #FF6444;
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
color:  #FF6444;
font-size: 10px;
font-family: 'Lato', sans-serif;
font-weight: 400;
width: 145px;
height: 25px;
border: 2px #FF6444 solid;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
}
.bold {
  font-weight: 900;
}

.row {
  /* display: flex;
  flex-direction: row; */
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


</style>
