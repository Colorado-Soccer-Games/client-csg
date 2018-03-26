<template>
<div class="wrap">
<div id=FieldsMaps>
<ul class="flex-container">
<li class="flex-item">
Arvada High School
<br>
Aroura Sports Park
<br>
Ash Grove Park
<br>
Barnum W. Sports Center
<br>
Brighton Youth Sports Fields
<br>
Bear Creek Fields
<br>
Boulder High School
<br>
Carpenter Park Fields
</li>
<li class="flex-item">
Confluence Park
<br>
Congress Park
<br>
City Park
<br>
Cramer Park
<br>
Carpenter Park Fields
<br>
Cheeseman Park
<br>
Colo Soccer Complex
<br>
Daniels Athletic Complex
</li>

<li class="flex-item">
Dailey Park
<br>
Denver Parks East District
<br>
Evolve Action Sports Park
<br>
El Pomar Youth Sports Park
<br>
Englewood Park
<br>
Golden Sports Park
<br>
Gossage Youth Complex
<br>
Glendale Sports Center
</li>
<li class="flex-item">
Highlands High School
<br>
Hamilton Feilds
<br>
Hampden Heights Park
<br>
Kennedy Soccer Complex
<br>
Lowry Sports Fields
<br>
Longmont Park
<br>
Lakewood Fields
<br>
Littelton Park
</li>
<li class="flex-item">
Meadow Wood Sports Park
<br>
Memorial Complex Park
<br>
Mountain West Athletic Park
<br>
North High School Field
<br>
Nederland Fields
<br>
Overland Park
<br>
Park South Center
<br>
Pulaski Park
</li>
<li class="flex-item">
Platte Park
<br>
Pinehurst Park
<br>
Pleasant View Fields
<br>
RiNo Athletic Fields
<br>
Ruby Hill Park
<br>
Rooney Sports Complex
<br>
Silver Creek High School
<br>
Sloan Lake Park
</li>
<li class="flex-item">
Sayian Fields
<br>
Stapelton Lake Park
<br>
Thorton Sports Park
<br>
Ulysses Park
<br>
West Colfax Park
<br>
West High School
<br>
Westminster Athletic Park
<br>
Washington High School
</li>
</ul>
</div>
</div>

</template>

<script>
export default {
  name: 'MapFields',
  data () {
    return {}
  }
}
</script>

<style scoped>

#FieldsMaps {
color: #2d2d2d;
background-color: #2efd96;
height: 140px;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 500;
}
 .wrap {
   background-color: #2efd96;
   padding: 1rem;
   padding-left: 4rem;
 }
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}

.flex-item {
  /* background: tomato; */
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 1em;
  text-align: left;

}
li:hover {
 text-decoration: underline;
  cursor: pointer;
}

</style>
