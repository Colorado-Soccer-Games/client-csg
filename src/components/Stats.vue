<template>
  <div id="Stats--Wrapper">
      <div class="toggle-buttons-wrapper">
        <button class="about">
          ABOUT THE PROJECT
          </button>
        <button class="stats1"> MOST GAMES PER DAYS</button>
        <button class="stats2">MOST POPULAR FIELDS</button>
        <button class="stats3">MOST ACTIVE GAMES</button>
      </div>
      <br>
<div class="wrapperz">
<div class="left">
<div class="about-text">
  <p>SCG is a web application for the people of Colorado to help orgainize & track statistical data for all active pick-up soccer games across the state. </p>
</div>
</div>
<div class="right">
    <h1>VIEW GAME DATA</h1>
       <p>SCG is a web application for the people of Colorado to help orgainize & track statistical data for all active pick-up soccer games across the state.</p>
        <br>
       <h1>GET FEILD INFO</h1>
              <p>aksjdklasjdklsjad</p>
        <br>
               <h1>JOIN A GAME</h1>
                             <p>aksjdklasjdklsjad</p>
        <br>
        <h1>SET TEXT REMINDERS</h1>
                                     <p>aksjdklasjdklsjad</p>
        <br>
        <hr>
        <h4> CREATE/HOST A GAME</h4>

</div>
</div>


<!-- <div class="check-wrap">
  <img class="icon" src="@/assets/check.png"/>
    <div class="wrapping">
       <h1>GET FIELD INFO</h1>
       <br>
        <h2> Know the details about the field before you even go.</h2>
    </div>
</div>
<div class="check-wrap">
  <img class="icon" src="@/assets/check.png"/>
    <div class="wrapping">
       <h1>RSVP/JOIN <span class="sm"> A </span> GAME</h1>
       <br>
        <h2>Use the weekly view below to join a game and see the numbers.</h2>
    </div>
</div>
<div class="check-wrap">
  <img class="icon" src="@/assets/check.png"/>
      <div class="wrapping">
       <h1>GET TEXT/SMS UPDATES</h1>
       <br>
        <h2>Set reminders or get updates on specific games to stay up to date.  </h2>
    </div>
</div>
<div class="check-wrap">
  <img class="icon" src="@/assets/black.png"/>
      <div class="wrapping">
       <h1>CREATE/HOST <span class="sm"> A </span> GAME</h1>
       <br>
        <h2>No games near you? Host a game by completing the form to the left. </h2>
    </div>
</div> -->
</div>
</template>

<script>
import Chart from '@/components/Chart'

export default {
  name: 'Stats',
  components: {
    Chart
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

h1 {
  background-color: #2EFD96;
  color: #222;
      font-size: 1.2rem;
      padding:2px 0 0 2px;
      /* border-top: 4px #aaa solid; */
  font-family: 'Lato', sans-serif;
        font-weight: 900;
        max-width: 230px;
        height: 30px;
        border-top-right-radius: 2px;
                border-bottom-right-radius: 100px;
                border-bottom-left-radius: 2px;
}
h2 {
  color: #76F4B5;
        font-size: .9rem;
      padding-left: 10px;
      padding-bottom: 20px;
}
h3 {
  color: #2CF28F;
}
h4 {
  color: #377355;
}
h5 {
  color: #23BF71;
}
h6 {
  color: #FFFFFF;
}

.new1 {
  color: #474143;
}
.new2 {
  color: #00ADA9;
}
.new3 {
  color: #FFC636;
}
.new4 {
  color: #FF6444;
}

.chart-wrapper {
  max-width: 100px;
  max-height: 100px;
  display: inline;
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
.icon {
  max-height: 20px;
  min-height: 20px;
    background-color: #2EFD96;
    border-left: 3px solid white;
    padding: 5px;
}

.check-wrap {
  display: flex;
  flex-flow: row;
}

.wrapping {
    display: flex;
  flex-flow: column ;
}

.ital {
font-style: italic;
font-weight: 400;
font-size: 18px;
}

.sm {
  font-size: 18px;
}
.about-text{
  padding: 1rem;
    border-top: 2px #727272 solid;
  border-right: 4px #292929 solid;
  /* max-width: 110px;
  min-width: 110px; */
  background-color: #2e2e2e;
  color: white;
  font-weight: 500;
  font-size: 14px;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
}
.wrapperz {
  display: flex;
  /* flex-flow: row; */
  justify-content: space-between;
}

.left {
background-color: #2EFD96;
min-width: 50%;
color:#222;
padding: 1rem;
/* min-height: 200px; */
}
.right {
margin-right: 55px;
min-width: 50%;
}
p {
  padding:4px 0 0 4px;
    font-weight: 500;
  font-size: 12px;
  color: #aaa;
  z-index: 99999;

}
</style>
