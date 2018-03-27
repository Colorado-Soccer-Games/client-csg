<template>
  <div class="card">
          <span>
          <h2> {{ field.location }} </h2>
          <br>
          <h3> {{ field.city }} </h3>
              <div class="field-deets">
                <p class="label-data"><span class="label">Time: </span>{{field.time}}</p>
                <p class="label-data"><span class="label">Level: </span>{{field.level}}</p>
                <p class="label-data"><span class="label">Field: </span>{{field.surface}}</p>
                <p class="label-data"><span class="label">Goals: </span>{{field.goals}}</p>
              </div>
              <div class="deets">
                <div class="split-left">
                <p class="label-info"><span class="label-field"><img class="bleh" src="../../static/full_water.png">&nbsp;| </span>{{field.info_water}}</p>
                <p class="label-info"><span class="label-field"><img class="bleh" src="../../static/full_restrooms.png">&nbsp;| </span>{{field.info_restrooms}}</p>
                </div >
                <div class="split-right">
                <p class="label-info"><span class="label-field"><img class="bleh" src="../../static/full_parking.png">&nbsp;|&nbsp;</span>{{field.info_parking}}</p>
                <p class="label-info"><span class="label-field"><img class="bleh" src="../../static/full_lights.png">&nbsp;|&nbsp;</span>{{field.info_lights}}</p>
                </div>
              </div>
              <div class="card-buttons">
                <!-- <button class="join" v-on:click="countUp"> Join </button>
                <button class="save" v-on:click="countUp"> Save </button> -->
                <div class="blimey">
                <h4>Total:</h4>
                <input disabled v-model='count' class="counter-style"> </input>
                </div>
             <button class="join" v-on:click="countUp"> Join </button>
                <button class="save" v-on:click="countUp"> Save </button>
              </div>
          </span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
     count: 1
    }
  },
    mounted () {
    this.load()
    this.count = this.field.stats_player_count
  },
    methods: {
      // put request
      // this.count
      // field @ field.id is what is being updated
      // with the new count
    countUp: function () {
      this.count += 1
    }
  },
  props: ['field']
}
</script>

// export default {
//   name: 'Card',
//   data () {
//     return {
//       data: [],
//       count: 1
//     }
//   },
//   mounted () {
//     this.load()
//   },
//   methods: {
//     load () {
//       fetch('http://localhost:3000/')
//         .then(res => res.json())
//         .then(data => {
//           this.data = data
//           // console.log(data);
//         })
//     },
//     countUp: function () {
//       this.count += 1
//     }
//   },
//   components: {
//     Card
//   }
// }

<style scoped>

.card {
  color: #222222;
  background-color: #dcdada;
  width: 120px;
  border-radius: 1px;
  border-top: 4px solid white;
  border-right: 4px solid rgb(199, 198, 198);
  margin-top: 20px;
  max-height: 185px;
  min-height: 185px;
  border-bottom-right-radius: 5px;
    border-bottom-left-radius: 3px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.13),
    0 0 40px rgba(0, 0, 0, 0.13) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.13),
    0 0 40px rgba(0, 0, 0, 0.13) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.13) inset;
}
.card:hover {
  color: #222222;
  background-color: #b6b5b5;
  width: 120px;
  border-radius: 1px;
  border-top: 4px solid white;
  border-right: 4px solid rgb(199, 198, 198);
  margin-top: 20px;
  max-height: 185px;
  min-height: 185px;
  border-bottom-right-radius: 5px;
    border-bottom-left-radius: 3px;
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.13),
    0 0 40px rgba(0, 0, 0, 0.13) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.13),
    0 0 40px rgba(0, 0, 0, 0.13) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.53) inset;
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
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
}

h2 {
  font-size: 11px;
  display: inline;
  color: #222222;
  padding-left: 2px;
  font-weight: 400;
}
h3 {
  font-size: 12px;
  color: #222222;
  padding-left: 2px;
  margin-bottom: 8px;
  margin-top: 10px;
  font-weight: 200;
}
h4 {
  font-size: 10px;
  display: inline;
  color: #222222;
  padding-left: 2px;
  font-weight: 900;
}

.icon {
  height: 20px;
}

.float {
  float: right;
}
.deets {
  background-color: #424242;
  padding-top:5px;
  padding-bottom:5px;
  border-radius: 1px;
  padding-top: 4px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-around;
  float:left;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33),
    0 0 40px rgba(0, 0, 0, 0.33) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33),
    0 0 40px rgba(0, 0, 0, 0.33) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33) inset;
}
.split-right {
/* display: flex;
flex-direction: column; */
}

.field-deets {
  border-top: 4px #aaa solid;
  background-color: white;
  padding-left: 2px;
  padding-top:5px;
  padding-bottom:5px;
  border-radius: 1px;
  padding-top: 4px;
  color: #222;
}

.card-buttons {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33),
    0 0 40px rgba(0, 0, 0, 0.33) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33),
    0 0 40px rgba(0, 0, 0, 0.33) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33) inset;
}
button {
  background-color: #222222;
  color: white;
  border: none;
  height: 30px;
  width: 37px;
    border-top-left-radius: 5px;
}

button:hover {
  background-color: white;
  color: #222222;
  border: none;
  cursor: pointer;
}

.join {
  color: white;
  margin-left: 20px;
  border-top-right-radius: 5px;
}

.save {
  background-color: #424242;
  color: white;
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
.label {
  font-weight: 400;
  color:rgb(80, 79, 79);
}

.label-field {
  font-size: 12px;
  padding-left: 2px;
  color:white;
      font-weight: 300;
}

.label-data {
  font-size: 12px;
  padding-left: 2px;
  color:black;
    font-weight: 100;
}

.label-info {
  font-size: 12px;
  padding-left: 2px;
  color:#aaa;
      font-weight: 100;
}

.bleh {
  min-height: 10px;
  max-height: 10px;
  min-width: 10px;
  max-width: 10px;
}
.counter-style {
  font-size: 14px;
  padding-left: 10px;
  color:#222;
  background-color:#dcdada;
  border: none;
  max-width: 20px;
}
.counter-style:hover {
  font-size: 14px;
  padding-left: 10px;
  color:#222;
  background-color:#b6b5b5;
  border: none;
  max-width: 20px;
}



.blimey {
display: flex;
  flex-direction: column;
}
</style>
