<template>
  <div id="CreateGame--Wrapper">
    <div class="box">
    <h1 class="animated slideInDown">
      CREATE <span class="amp">&amp;</span> SCHEDULE GAMES</h1>
    </div>
    <div class="CreateGame--Form">
        <form>
          <br>
          <div class="location">
            <h3>Location:</h3>
            <input type="text" name="location" maxlength="25">
          </div>
          <div class="nudge">
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City:</h3>
            <input type="text" name="city" maxlength="25">
          </div>
          <br>
          <div class="flex">
            <div class="left">
            <h3>Day of Week:</h3>
            <br>
            <input type="radio" value="Monday" name="selection" checked="checked"> Monday <br>
            <input type="radio" value="Tuesday" name="selection"> Tuesday <br>
            <input type="radio" value="Wednesday" name="selection"> Wednesday <br>
            <input type="radio" value="Thursday" name="selection"> Thursday <br>
            <input type="radio" value="Friday" name="selection"> Friday <br>
            <input type="radio" value="Saturday" name="selection"> Saturday <br>
            <input type="radio" value="Sunday" name="selection"> Sunday
            <br>
            <br>
            <h3>Start Time: </h3>
            <br>
            <input type="radio" name="time-selection" checked="checked">
            <span>
            <img class="time--icon" src="@/assets/morning.png"/>
            <span>Morning</span>
            </span>
            <br>
            <input type="radio" name="time-selection">
            <span>
            <img class="time--icon" src="@/assets/day.png"/>
            <span>Day</span>
            </span>
            <br>
                  <input type="radio" name="time-selection">
                    <span>
                      <img class="time--icon" src="@/assets/night.png"/>
                    <span>Night</span>
                      </span>
            <br>
            <br>
                      <h3>Skill Level: </h3>
                <br>
                      <input type="radio" name="difficulty-selection" checked="checked">
                      <span>
                      <img class="time--icon" src="@/assets/open.png"/>
                      <span>Open</span>
                      </span>
                      <br>
                      <input type="radio" name="difficulty-selection">
                      <span>
                      <img class="time--icon" src="@/assets/normal.png"/>
                      <span>Normal</span>
                      </span>
                      <br>
                      <input type="radio" name="difficulty-selection">
                      <span>
                      <img class="time--icon" src="@/assets/competitive.png"/>
                      <span>Competitive</span>
                      </span>
                      <br>

          </div>
          <div>
                <div class="right">
                     <h3>Field Details: </h3>
                      <br>
                      <input type="checkbox" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/restrooms.png"/>
                      <span>Restrooms</span>
                      </span>
                      <br>
                      <input type="checkbox" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/water.png"/>
                      <span>Water</span>
                      </span>
                      <br>
                      <input type="checkbox" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/lights.png"/>
                      <span>Lights</span>
                      </span>
                      <br>
                      <input type="checkbox" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/parking.png"/>
                      <span>Parking</span>
                      </span>
                      <br>
                    <br>
                      <h3>Field Condition: </h3>
                      <br>
                      <input type="radio" name="goal-selection" checked="checked">
                      <span>
                      <img class="time--icon" src="@/assets/full.png"/>
                      <span>Full</span>
                      </span>
                      <br>
                      <input type="radio" name="goal-selection">
                      <span>
                      <img class="time--icon" src="@/assets/netless.png"/>
                      <span>Netless</span>
                      </span>
                      <br>
                      <input type="radio" name="goal-selection">
                      <span>
                      <img class="time--icon" src="@/assets/none.png"/>
                      <span>None</span>
                      </span>
                    <br>
                    <br>
                      <h3>Field Type: </h3>
                      <br>
                      <input type="radio" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/grass.png"/>
                      <span>Grass</span>
                      </span>
                      <br>
                      <input type="radio" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/turf.png"/>
                      <span>Turf</span>
                      </span>
                      <br>
                      <input type="radio" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/dirt.png"/>
                      <span>Dirt</span>
                      </span>
                      <br>
                      <input type="radio" name="field-type">
                      <span>
                      <img class="time--icon" src="@/assets/concrete.png"/>
                      <span>Concrete</span>
                      </span>
                      <br>
                    <br>
                    <!-- SUBMIT BUTTONS FIELDS  -->
                </div>
                </div>
                </div>
                <div class="nudge">
                  <!-- <br>
                  <br>
            <h3>Other Info:</h3>
            <input type="text" name="info" maxlength="200"> -->
          </div>
                    <div>
                    <input class='form--button'
                    type='submit'
                    value='CREATE GAME'>
                    </div>
        </form>
      </div>
  </div>
</template>

<script>
</script>

<style scoped>
/* html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
} */
#CreateGame--Wrapper {
  color: #AAAAAA;
  background-color: #222222;
  width: 30%;
  /* height: 400px; */
  /* border: 0.2rem solid red; */
  padding: 2rem;
  font-family: 'Lato', sans-serif;
}

h1 {
      font-size: 20px;
  font-family: 'Lato', sans-serif;
  /* font-family: 'Lalezar', sans-serif; */
font-weight: 700;
  color: #2EFD96 ;
color: #2D2D2D;
}

h3 {
  color: #2EFD96 ;
    color: #AAAAAA;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  display: inline;
  display: inline-flex;
  font-weight: 900;
}

input[type=text] {
  /* background-color: #222222; */
   background: transparent;
  color: #2EFD96 ;
    /* margin: 8px 0; */
    box-sizing: border-box;
    border: none;
    border-bottom: 2px #2EFD96 solid;
    font-weight: 100;
    width: 70%;
}

input[type=radio] {
  /* background-color:none; */
}

input {
  /* background-color: #222222; */
  background: transparent;
    color: #2EFD96 ;
    border: none;
        font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 100;
}
/* textarea {
    color:  #222222;
    background-color: #2EFD96;
    border: none;
    resize: none;
} */
.form--button {
display: flex;
justify-content: center;
height: 40px;
width: 100%;
background-color: #2EFD96;
color:  #222222;
margin-top: 50px;
  /* border-radius: 4px; */
  /* margin: 1rem 0 0 0; */
  /* border: 4px #2EFD96 solid; */
font-size: 18px;
font-family: 'Lato', sans-serif;
font-weight: 700;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.33), 0 0 40px rgba(0, 0, 0, 0.33) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.33), 0 0 40px rgba(0, 0, 0, 0.33) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.33) inset
  /* -webkit-transition: background-color 2s ease-in;
  -moz-transition: background-color 2s ease-in;
  -o-transition: background-color 2s ease-in;
  transition: background-color 2s ease-in; */
}

.form--button:hover {
cursor: pointer;
background-color: #2b2b2b;
color:#2EFD96;
border-top: 2px #2EFD96 solid;

-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;

font-size: 18px;
font-family: 'Lato', sans-serif;
font-weight: 700;
}
form {
font-family: 'Lato', sans-serif;
font-size: 12px;
color:#2EFD96;
/* background-color: #2D2D2D; */
background: #222222;
background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
background: -webkit-linear-gradient(top, #222222 0%,#2d2d2d 100%);
background: linear-gradient(to bottom, #222222 0%,#2d2d2d 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#2d2d2d',GradientType=0);
padding-top: .5rem;
border:4px solid #2EFD96;
border-top: 2px #2D2D2D solid;
-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
box-shadow:0 1px 4px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 0, 0, 0.55) inset;
}

.effect7:before, .effect7:after
{
content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:0;
    bottom:0;
    left:10px;
    right:10px;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;
}
.effect7:after
{
right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}

.time--icon {
  max-width: 15px;
  margin-top: 4px;
  margin-left: 5px;
  margin-bottom: -5px;
}

.right {
  margin-top: 10px;
  margin-left: 20px;
}

.left {
    margin-top: 10px;
    margin-left: 40px;
}
.flex {
  display: flex;
  justify-content: flex-start;
}

.box {
    background-color:#2EFD96;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    display:flex;
    justify-content: center;
}

.amp {
font-style: italic;
font-weight: 900;
font-size: 18px;
}
.effect7
{
position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.effect7:before, .effect7:after
{
content:"";
position:absolute;
z-index:-1;
-webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
-moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
box-shadow:0 0 20px rgba(0,0,0,0.8);
top:0;
bottom:0;
left:10px;
right:10px;
-moz-border-radius:100px / 10px;
border-radius:100px / 10px;
}
.effect7:after
{
right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}
.nudge {
  padding-left: 24px;
}
.location {
  padding-left: 24px;
}
</style>
