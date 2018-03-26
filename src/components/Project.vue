<template>
  <div id="Stats--Wrapper" class="wow slideInLeft animated">
<div class="wrapperz">
<div class="left">
      <!-- <img class="kkk" src="/../../static/shadow.png"> -->
<div class="about-text">
  <p><img class="aboutlogo" src="/../../static/green.png">CSG is a web application for the people of Colorado to help orgainize & track statistical data for all active pick-up soccer games across the state.
    <br>
  </p>

</div>
<div class="twilio-form">
<form>
  <p class="text-title"><img class="phone" src="../../static/phone.png" alt=""> SET UPDATES/REMINDERS FOR GAMES<p>
  <p class="text-deets"> To recieve text updates and notifications about specific games via SMS, enter the game name and the associated phone number to begin.<p>
    <br>
    <div clas="imarow">
  <p class="text-label">GAME NAME:</p>
  <input type="text" name="location" maxlength="25">
      <br>
      <br>
</div>
            <div clas="imarow">
  <p class="text-label">PHONE NUMBER:</p>
  <input type="number" name="location" maxlength="25">
  </div>
  <br>
     <input class='form--button'
            type='submit'
            value='GET UPDATES'>
</form>
</div>
</div>
<div class="right">
<h1 class="wow animated slideInDown">VIEW GAME DATA</h1>
<p class="desc animated wow fadeIn">All past games contain data so players make the most better decisions. </p>
<br>
<br>
<h1 class="wow animated slideInDown">GET FIELD INFO</h1>
<p class="desc animated wow fadeIn">Before joining a game, check out the available field information.</p>
<br>
<br>
<h1 class="wow animated slideInDown">JOIN A GAME</h1>
<p class="desc animated wow fadeIn">To attend a game simply click the join button from the game below.</p>
<br>
<br>
<h1 class="wow animated slideInDown">SET TEXT UPDATES</h1>
<p class="desc animated wow fadeIn">Enter a phone number to receive SMS reminders/cancellations.</p>
<br>
<h6 class="animated slideInDown"> CREATE/HOST A GAME <img class="arrow" src="../../static/darkgrey.png" alt=""></h6>
<p class="greeny animated wow fadeIn">Don't see a game in your vicinity? Use the form to create one!</p>
</div>
</div>
</div>
</template>

<script>

import Chart from '@/components/Chart'

export default {
  name: 'Project',
  components: {
    Chart
  },
  routes: {
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
  background-color:rgb(42, 230, 136);
  color: #222;
  font-size: 1.2rem;
  padding:6px 0 0 6px;
  /* border-top: 4px #aaa solid; */
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  max-width: 190px;
  height: 30px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 10px;
  /* border-bottom-left-radius: 2px; */
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
  max-width: 200px;
  font-size: .9rem;
  }
  h6 {
  color: #222;
  /* padding-left: 10px;
  padding-bottom: 20px;
  padding-top: 10px; */
  /* border-left:#2EFD96 4px solid; */
  background-color:rgb(42, 230, 136);
  font-size: 1.2rem;
  padding:5px 0 9px 5px;
  /* border-top: 4px #aaa solid; */
  font-family: 'Lato', sans-serif;
  font-weight: 800;
  max-width: 250px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 10px;
  /* border-bottom-left-radius: 2px; */
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
  /* border: 2px solid #2EFD96 ; */
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
  /* margin-top: 1rem; */
  display: flex;
  /* flex-flow: row; */
  justify-content: space-between;
  }

  .left {
  background-color: #2EFD96;
  min-width: 53%;
  color:#222;
  padding: 2rem 2rem 1rem 2rem;
  border-bottom-right-radius: 5px;
  /* padding-right: 35px; */
  /* min-height: 200px; */
  }
  .right {
  margin-right: 55px;
  min-width: 66%;
  }
  p {
  padding:4px 0 0 4px;
  font-weight: 500;
  font-size: 12px;
  color: #aaa;
  z-index: 99999;
  }

  .desc {
  margin-top:5px;
  margin-left: 5px;
  }

  .greeny {
  color: #aaa;
  margin-top:5px;
  margin-left: 5px;
  font-weight: 500;
  }

  .text-title {
  font-size: 13px;
  font-weight: 900;
  color: #222;
  /* padding-bottom: 14px;
  border-bottom: 3px #474143 solid; */
  }

  .text-deets {
  font-size: 12px;
  font-weight: 400;
  color: #222;
  }

  .aboutlogo {
  /* padding-top:4px; */
  max-height: 10px;
  }
  .text-label {
  font-size: 12px;
  font-weight: 600;
  color: #222;
  display: inline;
  /* padding-left: -5px; */
  }

  input[type="text"] {
  /* background-color: #222222; */
  background: transparent;
  color: #222;
  /* margin: 8px 0; */
  box-sizing: border-box;
  border: none;
  border-bottom: 2px #222 solid;
  font-weight: 500;
  width: 65%;
  }
  input[type="number"] {
  /* background-color: #222222; */
  background: transparent;
  color: #222;
  /* margin: 8px 0; */
  box-sizing: border-box;
  border: none;
  border-bottom: 2px #222 solid;
  font-weight: 500;
  width: 57%;
  }

  .phone {
  height:20px;
  }

  .form--button {
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  border: none;
  background-color: #222;
  color: #2EFD96;
  margin-top: 10px;
  /* border-radius: 4px; */
  /* margin: 1rem 0 0 0; */
  /* border: 4px #2EFD96 solid; */
  font-size: 18px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.53),
  0 0 40px rgba(0, 0, 0, 0.33) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.53),
  0 0 40px rgba(0, 0, 0, 0.33) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.53) inset;
  }
  .form--button:hover {
  cursor: pointer;
  background-color:#39e58b;
  color: #222;
  /* border-top: 2px #2efd96 solid; */
  font-size: 18px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  }

  .arrow {
  padding-top:2px;
  height:16px;
  }

  .twilio-form{
  padding-top: 1rem;
  }
</style>
