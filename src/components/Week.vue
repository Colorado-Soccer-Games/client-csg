<template>
  <div id="Wrapper">
    <div class="labelwrap">
      <div id="Monday">
      <h1>MONDAY</h1>
            <div class="card" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Monday'">
              <span>
                <h2> {{ field.location }} </h2>
                  <!-- <img class=" float icon" src="@/assets/normal.png"/> -->
                  <br>
                <h3> {{ field.city }} </h3>
                <div class="deets">
                  <!-- <img class="icon" src="@/assets/dirt.png"/>
                  <img class="icon" src="@/assets/netless.png"/>
                  <img class="icon" src="@/assets/night.png"/>
                  <br>
                  <img class="icon" src="@/assets/lights.png"/>
                  <img class="icon" src="@/assets/water.png"/> -->
                </div>
                <div class="card-buttons">
                  <h4>Total:</h4> <span> </span>
                  <br>
                  <button> Join </button>
                </div>
              </span>
            </div>
      </div>
      <div id="Tuesday">
      <h1>TUESDAY</h1>
            <div class="card" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Tuesday'">
              <span>
                <h2> {{ field.location }} </h2>
                  <!-- <img class=" float icon" src="@/assets/normal.png"/> -->
                  <br>
                <h3> {{ field.city }} </h3>
                <div class="deets">
                  <!-- <img class="icon" src="@/assets/dirt.png"/>
                  <img class="icon" src="@/assets/netless.png"/>
                  <img class="icon" src="@/assets/night.png"/>
                  <br>
                  <img class="icon" src="@/assets/lights.png"/>
                  <img class="icon" src="@/assets/water.png"/> -->
                </div>
                <div class="card-buttons">
                  <h4>Total:</h4> <span> </span>
                  <br>
                  <button> Join </button>
                </div>
              </span>
            </div>
      </div>
      <div id="Wednesday">
      <h1>WEDNESDAY</h1>
              <div class="card" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Wednesday'">
              <span>
                <h2> {{ field.location }} </h2>
                  <!-- <img class=" float icon" src="@/assets/normal.png"/> -->
                  <br>
                <h3> {{ field.city }} </h3>
                <div class="deets">
                  <!-- <img class="icon" src="@/assets/dirt.png"/>
                  <img class="icon" src="@/assets/netless.png"/>
                  <img class="icon" src="@/assets/night.png"/>
                  <br>
                  <img class="icon" src="@/assets/lights.png"/>
                  <img class="icon" src="@/assets/water.png"/> -->
                </div>
                <div class="card-buttons">
                  <h4>Total:</h4> <span> </span>
                  <br>
                  <button> Join </button>
                </div>
              </span>
            </div>
      </div>
      <div id="Thursday">
      <h1>THURSDAY</h1>
            <div class="card" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Thursday'">
            <span>
              <h2> {{ field.location }} </h2>
                <!-- <img class=" float icon" src="@/assets/normal.png"/> -->
                <br>
              <h3> {{ field.city }} </h3>
              <div class="deets">
                <!-- <img class="icon" src="@/assets/dirt.png"/>
                <img class="icon" src="@/assets/netless.png"/>
                <img class="icon" src="@/assets/night.png"/>
                <br>
                <img class="icon" src="@/assets/lights.png"/>
                <img class="icon" src="@/assets/water.png"/> -->
              </div>
              <div class="card-buttons">
                <h4>Total:</h4> <span> </span>
                <br>
                <button> Join </button>
              </div>
            </span>
          </div>

      </div>
      <div id="Friday">
      <h1>FRIDAY</h1>
                <div class="card" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Friday'">
              <span>
                <h2> {{ field.location }} </h2>
                  <!-- <img class=" float icon" src="@/assets/normal.png"/> -->
                  <br>
                <h3> {{ field.city }} </h3>
                <div class="deets">
                  <!-- <img class="icon" src="@/assets/dirt.png"/>
                  <img class="icon" src="@/assets/netless.png"/>
                  <img class="icon" src="@/assets/night.png"/>
                  <br>
                  <img class="icon" src="@/assets/lights.png"/>
                  <img class="icon" src="@/assets/water.png"/> -->
                </div>
                <div class="card-buttons">
                  <h4>Total:</h4> <span> </span>
                  <br>
                  <button> Join </button>
                </div>
              </span>
            </div>
      </div>
      <div id="Saturday">
      <h1>SATURDAY</h1>
                <div class="card" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Saturday'">
              <span>
                <h2> {{ field.location }} </h2>
                  <!-- <img class=" float icon" src="@/assets/normal.png"/> -->
                  <br>
                <h3> {{ field.city }} </h3>
                <div class="deets">
                  <!-- <img class="icon" src="@/assets/dirt.png"/>
                  <img class="icon" src="@/assets/netless.png"/>
                  <img class="icon" src="@/assets/night.png"/>
                  <br>
                  <img class="icon" src="@/assets/lights.png"/>
                  <img class="icon" src="@/assets/water.png"/> -->
                </div>
                <div class="card-buttons">
                  <h4>Total:</h4> <span> </span>
                  <br>
                  <button> Join </button>
                </div>
              </span>
            </div>

      </div>
      <div id="Sunday">
      <h1>SUNDAY</h1>
                <div class="card" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Sunday'">
              <span>
                <h2> {{ field.location }} </h2>
              <div v-html="iconSwitcher">
              </div>
                  <!-- <img class="float icon" src="@/assets/normal.png"/> -->
                  <br>
                <h3> {{ field.city }} </h3>
                <div class="deets">
                  <!-- <img class="icon" src="@/assets/dirt.png"/>
                  <img class="icon" src="@/assets/netless.png"/>
                  <img class="icon" src="@/assets/night.png"/>
                  <br>
                  <img class="icon" src="@/assets/lights.png"/>
                  <img class="icon" src="@/assets/water.png"/> -->
                </div>
                <div class="card-buttons">
                  <h4>Total:</h4> <span> </span>
                  <br>
                  <button> Join </button>
                </div>
              </span>
            </div>
      </div>
    </div>
    <br>
<br>
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
  },
  computed: {
    iconSwitcher() {
      var allIcons= [];
        switch(icons) {
          case "timeMorning":
            icons.push ('<img class="float icon" src="@/assets/morning.png"/>');
          case "timeNight":
             icons.push('<img class="float icon" src="@/assets/night.png"/>');
      }
        return allIcons.join();
      }
  }
}


// my data....

// Object.keys(games)
// the array should be each option to filter through???

//keys.forEach(el)

// switch(icons.el) {
// case "timeMorning":
//     icons.push('<img class="float icon" src="@/assets/morning.png"/>');
// case "timeDay":
//     icons.push('<img class="float icon" src="@/assets/day.png"/>');
// case "timeNight":
//     icons.push('<img class="float icon" src="@/assets/night.png"/>');
//};


// Object.keys(game.el) => []
// keys.forEach(el)

// const copy = [];
// is there a seperate for.each....a single for each on EACH set of icons?
// or is this for
// items.forEach(function(item){
//   allIcons.push(item)
// });

//

    // var  allIcons= [];
    // switch(icons) {
    // case "timeMorning":
    //     icons.push '<img class="float icon" src="@/assets/morning.png"/>';
    // case "timeDay":
    //     icons.push = '<img class="float icon" src="@/assets/day.png"/>';
    // case "timeNight":
    //     icons.push = '<img class="float icon" src="@/assets/night.png"/>';


    // case "levelOpen":
    //     icons.push('<img class="float icon" src="@/assets/open.png"/>');
    // case "levelNormal":
    //     icons.push = '<img class="float icon" src="@/assets/normal.png"/>';
    // case "levelCompetitive":
    //     icons.push = '<img class="float icon" src="@/assets/competitive.png"/>';


    // case "goalsFull":
    //     icons.push = '<img class="float icon" src="@/assets/full.png"/>';
    // case "goalsNetless":
    //     icons.push = '<img class="float icon" src="@/assets/netless.png"/>';
    // case "goalsNone":
    //     icons.push = '<img class="float icon" src="@/assets/none.png"/>';


    // case "surfaceGrass":
    //     icons.push = '<img class="float icon" src="@/assets/grass.png"/>';
    // case "surfaceTurf":
    //     icons.push = '<img class="float icon" src="@/assets/turf.png"/>';
    // case "surfaceDirt":
    //     icons.push = '<img class="float icon" src="@/assets/dirt.png"/>';
    // case "timeConcrete":
    //     icons.push = '<img class="float icon" src="@/assets/concrete.png"/>';


    // case "fieldLights":
    //     icons.push = '<img class="float icon" src="@/assets/lights.png"/>';
    // case "fieldParking":
    //     icons.push = '<img class="float icon" src="@/assets/parking.png"/>';
    // case "fieldWater":
    //     icons.push = '<img class="float icon" src="@/assets/water.png"/>';
    // case "fieldRestrooms":
    //     icons.push = '<img class="float icon" src="@/assets/restrooms.png"/>';

</script>
<style scoped>
#Wrapper {
  display: flex;
  justify-content: space-between;
  color: #dcdada;
  background-color: #222222;
  font-family: "Lato", sans-serif;
  /* width: 100vw; */
  /* margin: 1rem; */
}

.card {
  color: #222222;
  background-color: #dcdada;
  width: 120px;
  border-radius: 1px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  margin-top: 20px;
  max-height: 140px;
  min-height: 140px;
}

h1 {
  text-align: center;
  font-size: 14px;
  min-width: 120px;
  max-width: 120px;
  background-color: #2efd96;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 3px solid #dcdada;
  color: #222222;
  font-weight: 900;
  /* border-top-right-radius: 5px; */
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
}

h2 {
  font-size: 10px;
  display: inline;
  color: #222222;
  padding-left: 2px;
  font-weight: 400;
}
h3 {
  font-size: 12px;
  /* display: inline; */
  color: #222222;
  padding-left: 2px;
  margin-bottom: 24px;
  margin-top: 10px;
  font-weight: 200;
}
h4 {
  font-size: 12px;
  display: inline;
  color: #222222;
  padding-left: 2px;
  font-weight: 100;
}

.icon {
  height: 20px;
}

.float {
  float: right;
}
.deets {
  /* margin-top:10px; */
  background-color: #222222;
  padding-left: 2px;
  border-radius: 1px;
  padding-top: 4px;
  width: 100%;
}

.card-buttons {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  /* padding: 2px; */
  width: 100%;
}
button {
  background-color: #222222;
  color: white;
  border: none;
  height: 20px;
  width: 40px;
}

button:hover {
  background-color: white;
  color: #222222;
  border: none;
  cursor: pointer;
}

.labelwrap {
  display: flex;
  justify-content: space-around;
  width: 95vw;
  margin-bottom: 3rem;
}

#Monday {
  background-color: #2e2e2e;
}

#Wednesday {
  background-color: #2e2e2e;
}
#Friday {
  background-color: #2e2e2e;
}
#Wednesday {
  background-color: #2e2e2e;
}
#Sunday {
  background-color: #2e2e2e;
}

#Tuesday {
  background-color: #383838;
}

#Thursday {
  background-color: #383838;
}
#Saturday {
  background-color: #383838;
}
</style>
