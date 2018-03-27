<template>
  <div id="Wrapper">
    <div class="labelwrap">

      <div id="Monday">
      <h1>MONDAY</h1>
        <Card class="card"
        :field="field"
          v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Monday'">

        </Card>
      </div>
      <div id="Tuesday">
      <h1>TUESDAY</h1>
        <Card class="card"
               :field="field" v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Tuesday'">

      </Card>
      </div>
      <div id="Wednesday">
      <h1>WEDNESDAY</h1>
        <Card class="card"
               :field="field"
               v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Wednesday'">

      </Card>
      </div>
      <div id="Thursday">
      <h1>THURSDAY</h1>
        <Card class="card"
               :field="field"
               v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Thursday'">

      </Card>
      </div>
      <div id="Friday">
      <h1>FRIDAY</h1>
        <Card class="card"
               :field="field"
               v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Friday'">

      </Card>
      </div>
      <div id="Saturday">
      <h1>SATURDAY</h1>
        <Card class="card"
               :field="field"
               v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Saturday'">

           <button v-on:click="countUp"> Join </button>
           <p>{{count}}</p>
      </Card>
      </div>
      <div id="Sunday">
      <h1>SUNDAY</h1>
          <Card class="card"
                 :field="field"
                 v-bind:key="field.games" v-for="field in data.games" v-if="field.day == 'Sunday'">

      </Card>
      </div>
      <!-- wrapper divs  -->
    </div>
    <br>
<br>
</div>
</template>

<script>

import Card from '@/components/Card'

// more needed for importing card?
export default {
  name: 'Week',
  data () {
    return {
      data: [],
      count: 1
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
    },
    countUp: function () {
      this.count += 1
    }
  },
  components: {
    Card
  }
}
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

/* .card {
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
} */
/* .card:hover {
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
} */

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
  font-size: 11px;
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
  margin-bottom: 8px;
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
  background-color: #424242;
  /* padding-left: 2px; */
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
  /* margin-top:10px; */
  border-top: 4px #aaa solid;
  background-color: white;
  padding-left: 2px;
  padding-top:5px;
    padding-bottom:5px;
  border-radius: 1px;
  padding-top: 4px;
  /* width: 100%; */
  color: #222;
}

.card-buttons {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  /* padding: 2px; */
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
  height: 35px;
  width: 40px;
    border-top-left-radius: 5px;
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
</style>
