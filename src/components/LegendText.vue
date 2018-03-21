<template>
<div class="wrap">
  <div id="weekly">
    <div class="another">
       <img class="this" src="../../static/bleh.png"/>
           <h1>WEEKLY VIEW </h1>
    </div>
    <!-- <p>info about legentd? </p>
    <h2>how to rsvp for the games below</h2> -->
  <!-- <div id="CreateGame--Wrapper">
    <div class="box">
    <h1 class="animated slideInDown">
      SET GAME REMINDER<span class="in">&nbsp; via &nbsp;</span>TEXT/SMS </h1>
    </div>
    <div class="CreateGame--Form">
        <form>
          <br>
          <div class="location">
            <h3>Enter Phone Number</h3>
            <input type="number" name="location" maxlength="25">
          </div>
          <div>
          <input class='form--button'
          type='submit'
          value='SAVE'>
          </div>
        </form>
      </div>
  </div> -->
  </div>
<div id=Level-Wrapper>

  <div class="inner-legend">
       <p><span><img class="icon" src="../../static/full_open.png"/></span>
      <span class="label">OPEN/CO-ED</span></p>
      <p class="level-label">Game is open to all skill levels. </p>
      <br>
             <p><span><img class="icon" src="../../static/full_normal.png"/></span>
      <span class="label">NORMAL</span></p>
      <p class="level-label">Not for beginners, but still for fun. </p>
      <br>
             <p><span><img class="icon" src="../../static/full_normal.png"/></span>
      <span class="label">COMPETITIVE</span></p>
      <p class="level-label">Fast pace game for highly skilled players. </p>
      <br>
  </div>
</div>
<div id=Field-Wrapper>
  <div class="inner-field">
       <p><span><img class="icon" src="../../static/full_full.png"/></span>
      <span class="label">GOALS <span class="amp">&amp;</span> NETS</span></p>
      <p class="level-label">Field is eqiped with regulation goals. </p>
      <br>
             <p><span><img class="icon" src="../../static/full_netless.png"/></span>
      <span class="label">GOAL POSTS ONLY</span></p>
      <p class="level-label">Field has goals but no nets. </p>
      <br>
             <p><span><img class="icon" src="../../static/full_none.png"/></span>
      <span class="label">NO GOALS</span></p>
      <p class="level-label">Field has no goals or marking lines. </p>
      <br>
  </div>
</div>
<!-- <div id=Time-Wrapper>
  <h1>&nbsp;</h1>
  <div class="inner-legend">
       <p><span><img class="icon" src="@/assets/day.png"/></span>
      <span class="label">8AM-11AM</span></p>
      <p class="level-label">&nbsp; </p>
      <br>
             <p><span><img class="icon" src="@/assets/morning.png"/></span>
      <span class="label">11AM-5PM</span></p>
      <p class="level-label">&nbsp; </p>
      <br>
             <p><span><img class="icon" src="@/assets/night.png"/></span>
      <span class="label">5PM-LIGHTS OFF</span></p>
      <p class="level-label">&nbsp; </p>
      <br>
  </div>
</div> -->
<div id=Surface-Wrapper>
  <div class="inner-surface">
       <p><span><img class="icon" src="../../static/full_grass.png"/></span>
      <span class="level-label"> Cleats &nbsp;/&nbsp; Studs </span></p>
      <br>
             <p><span><img class="icon" src="../../static/full_dirt.png"/></span>
      <span class="level-label"> Cleats &nbsp;/&nbsp; Studs </span></p>
      <br>
             <p><span><img class="icon" src="../../static/full_turf.png"/></span>
      <span class="level-label">Hard Ground</span></p>
      <br>
             <p><span><img class="icon" src="../../static/full_concrete.png"/></span>
      <span class="level-label"> Futsal &nbsp;/&nbsp; Running </span></p>
      <br>
  </div>
</div>
<div id=Info-Wrapper>
  <div class="inner-info">
       <p><span><img class="icon" src="../../static/full_parking.png"/></span>
      <span class="level-label">Free Parking available. </span></p>
      <br>
             <p><span><img class="icon" src="../../static/full_lights.png"/></span>
      <span class="level-label">Lights/nightly game eligble. </span></p>
      <br>
             <p><span><img class="icon" src="../../static/full_restrooms.png"/></span>
      <span class="level-label">Open restrooms at field. </span></p>
      <br>
             <p><span><img class="icon" src="../../static/full_water.png"/></span>
      <span class="level-label">Drinking fountains available.</span></p>
      <br>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'LegendText',
  data () {
    return {}
  }
}
</script>

<style scoped>

#weekly {
  min-width: 33vw;
    max-width: 33vw;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
}
#Level-Wrapper {
  color: #2d2d2d;
  background-color: #2efd96;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 500;
  border-top: 4px #dcdada solid;
}
#Field-Wrapper {
  color: #2d2d2d;
  background-color: #2efd96;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 500;
    border-top: 4px #dcdada solid;
}

#Surface-Wrapper {
  color: #2d2d2d;
  background-color: #2efd96;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 500;
    border-top: 4px #dcdada solid;
}

#Info-Wrapper {
  color: #2d2d2d;
  background-color: #2efd96;
  font-family: "Lato", sans-serif;
  font-size: 12px;
    border-top: 4px #dcdada solid;
  font-weight: 500;
}
.wrap {
  background-color: #2efd96;
  /* padding: 1rem; */
  padding-top: 1rem;
    height: 180px;
    display: flex;
justify-content: center;
}

.logo {
  /* padding-top: 33px; */
  max-height: 32px;
  padding-right: 5px;
    /* border-right: 3px #222 solid; */
}

h1 {
    padding-bottom: 12px;
  font-weight: 900;
  color: #383838;
  font-size: 1.5rem;
}
.in {
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
}
.icon {
  max-width: 20px;
  max-height: 20px;
}

.inner-legend {
background: #222222;
background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
background: -webkit-linear-gradient(top, #222222 0%,#2d2d2d 100%);
background: linear-gradient(to bottom, #222222 0%,#2d2d2d 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#2d2d2d',GradientType=0);
max-width: 210px;
min-width: 210px;
max-height: 140px;
min-height: 140px;
padding: 2px 0 0 12px;
border-bottom-left-radius: 4px;
}
.inner-field {
background: #222222;
background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
background: -webkit-linear-gradient(top, #222222 0%,#2d2d2d 100%);
background: linear-gradient(to bottom, #222222 0%,#2d2d2d 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#2d2d2d',GradientType=0);
max-width: 210px;
min-width: 210px;
max-height: 140px;
min-height: 140px;
padding: 2px 0 0 2px;

}
.inner-surface {
background: #222222;
background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
background: -webkit-linear-gradient(top, #222222 0%,#2d2d2d 100%);
background: linear-gradient(to bottom, #222222 0%,#2d2d2d 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#2d2d2d',GradientType=0);
max-width: 120px;
min-width: 120px;
max-height: 137px;
min-height: 137px;
padding: 5px 0 0 2px;
}
.inner-info {
background: #222222;
background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
background: -webkit-linear-gradient(top, #222222 0%,#2d2d2d 100%);
background: linear-gradient(to bottom, #222222 0%,#2d2d2d 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#2d2d2d',GradientType=0);
max-width: 170px;
min-width: 170px;
max-height: 137px;
min-height: 137px;
padding: 5px 0 0 2px;
border-bottom-right-radius: 4px;
}

p{
  color: #dcdada;
}

.level-label {
    font-size: 11px;
}
.label {
    color: #aaa;
  font-weight: 900;
  font-size: 15px;
}

.amp {
  font-style: italic;
  font-weight: 900;
  font-size: 13px;
}

.rotate{
    -webkit-transition-duration: 0.8s;
    -moz-transition-duration: 0.8s;
    -o-transition-duration: 0.8s;
    transition-duration: 0.8s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform;
    overflow:hidden;
        cursor: pointer;
     }
 .rotate:hover
{
    -webkit-transform:rotate(360deg);
    -moz-transform:rotate(360deg);
    -o-transform:rotate(360deg);
    transform:rotate(360deg);
    cursor: pointer;      /* This was missing. */
}
.this {
  height: 130px;
  padding-bottom: 14px;
  margin-right:5px;
}
.another {
  flex-direction: column;
}
</style>
