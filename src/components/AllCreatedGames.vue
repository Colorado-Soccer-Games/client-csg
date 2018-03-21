<template>
  <div id="Wrapper">
    <span id="allgames"></span>
    <div>
      <h1>All Created Games</h1>
        <a href="javascript:history.go(0)">
          <button>REFRESH GAME LIST</button>
        </a>
    </div>
    <div class="row">
      <div v-bind:key="field.games" v-for="field in data.games" class="FullGameInfoCard">
       <div class="inline-column id">
          <img class="icon" src="../../static/greenflag.png"/>
        <p class="game-id">ID: {{ field.id }}</p>
        <!-- <p>{{ field.level }}</p> -->
       </div>
       <div class="inline-column inset place">
        <p class="location"> {{ field.location }}</p>
        <p class="city">{{ field.city }}</p>
       </div>
       <div class="date">
        <p class="day"> <span></span> {{ field.day }}</p>
            <!-- <p class="time">{{ field.time }}</p> -->
       </div>
       <!-- <div class="surface">
         <img class="icon" src="@/assets/dirt.png"/>
         <img class="icon" src="@/assets/netless.png"/>
       </div> -->
       <!-- <div class="field">
        <img class="icon" src="@/assets/lights.png"/>
        <img class="icon" src="@/assets/parking.png"/>
        <img class="icon" src="@/assets/water.png"/>
        <img class="icon" src="@/assets/restrooms.png"/>
       </div> -->
       <div class="inline-column inset stats">
        <p class="players"><span class="bold">Total Players: </span>{{ field.stats_total_players }}</p>
        <p class="completed"><span class="bold">Total Games: </span>{{ field.stats_games_completed }}</p>
       </div>
      </div>
      <!-- FullGameInfoCard -->
      <!-- row -->
    </div>
  </div>
  <!-- wrapper -->
</template>

<script>
export default {
  name: 'AllGames',
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
  min-width: 50vw;
  margin-top: 2rem;
}

h1 {
  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #2efd96;
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
  font-size: 14px;
  max-width: 200px;
  min-width: 200px;
  background-color: #aaa;
  border-bottom-left-radius: 10px;
}

.location {
  padding: 4px 0 10px 3px;
  font-weight: 400;
  color: black;
}

.city {
  padding: 2px 0 10px 3px;
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
  max-width: 100px;
  min-width: 100px;
  color: black;
  background-color: #2efd96;
  border-bottom-right-radius: 10px;
}

.icon {
  max-width: 20px;
  min-width: 20px;
}

.players {
  padding: 4px 0 0 4px;
  font-size: 12px;
  font-weight: 400;
}

.completed {
  padding: 4px 0 0 4px;
  font-size: 12px;
  font-weight: 400;
}

.game-id {
  font-size: 10px;
  padding: 4px 0 0 2px;
}
button {
margin: 1rem 0 1rem 1rem;
  background-color: #2EFD96;
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
color:  #2EFD96;
font-size: 10px;
font-family: 'Lato', sans-serif;
font-weight: 400;
width: 145px;
height: 25px;
border: 2px #2EFD96 solid;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
}
.bold {
  font-weight: 900;

}
</style>
