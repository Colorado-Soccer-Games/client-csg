<template>
  <div id="Stats--Wrapper">
      <div class="toggle-buttons-wrapper">
          <router-link :to="{name: 'Project'}">
          <button class="about"> ABOUT THE PROJECT </button>
          </router-link>

          <router-link :to="{name: 'NewChart'}">
          <button class="stats1"> MOST GAMES PER DAY</button>
          </router-link>

          <router-link :to="{name: 'StatsGold'}">
          <button class="stats2">MOST POPULAR FIELDS</button>
          </router-link>

          <router-link :to="{name: 'StatsRed'}">
          <button class="stats3">MOST ACTIVE GAMES</button>
          </router-link>

      </div>
      <br>
<div class="wrapperz">
  <router-view> </router-view>
</div>
</div>
</template>

<script>
// import Chart from '@/components/Chart'

export default {
  name: 'About',
  components: {
    // Chart
  }
}
</script>

<style scoped>
#Stats--Wrapper {
width: 70%;
max-height: 200px;
/* height: 400px; */
/* border-right: 8px solid gold; */
/* padding: 2rem; */
padding-top: 2rem;
font-family: 'Lato', sans-serif;
}

.toggle-buttons-wrapper {
display: flex;
flex-flow: wrap nowrap;
justify-content: space-around;
}

.about {
background-color: #2EFD96;
color:  #222222;
font-size: 14px;
font-family: 'Lato', sans-serif;
font-weight: 700;
height: 30px;
width: 100%;
border: 2px solid #2EFD96;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.10) inset
}

.stats1 {
background-color:#00ADA9;
color:  #222222;
font-size: 14px;
font-family: 'Lato', sans-serif;
font-weight: 700;
height: 30px;
width: 100%;
border: none;
border: 2px solid #00ADA9;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.10) inset
}

.stats2 {
background-color: #FFC636;
color:  #222222;
font-size: 14px;
font-family: 'Lato', sans-serif;
font-weight: 700;
height: 30px;
width: 100%;
border: none;
border: 2px solid #FFC636;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.10) inset
}
.stats3 {
background-color: #FF6444;
color:  #222222;
font-size: 14px;
font-family: 'Lato', sans-serif;
font-weight: 700;
height: 30px;
width: 100%;
border: 2px solid #FF6444;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.10) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.10) inset
}
button:hover {
height: 30px;
background-color: #222222;
color:  #2EFD96;
border: 2px solid #2EFD96 ;
font-size: 14px;
font-family: 'Lato', sans-serif;
font-weight: 900;
cursor: pointer;
-webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
-moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
box-shadow:0 0 20px rgba(0,0,0,0.8);
}
.wrapperz {

}

</style>
