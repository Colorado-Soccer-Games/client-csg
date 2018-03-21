<template>
  <div id="HeaderWrapper">
     <header>
      <div id="Header--Wrapper__Left">
        <img class="logo rotate animated slideInLeft" src="@/assets/black.png">
      <h1 class="animated slideInDown">COLORADO SOCCER GAMES</h1>
      </div>
      <div id="Header--Wrapper__Center">
           <!-- <img class="logo" src="@/assets/black.png"> -->
      </div>
      <div id="Header--Wrapper__Right">
<a href="https://bencasalino.com/">ABOUT</a>
<a href="#weekly">WEEK-VIEW </a>
<a href="#allgames">ALL GAMES </a>
<a href="#map">MAP </a>
<a href="#contact">CONTACT </a>
      </div>
    </header>
    <!-- <section class="stripe">
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
header {
  padding-left: 20px;
  padding-right: 20px;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color:#005bea; */
background-color:
#2efd96;
max-height: 100px;
position: sticky;
    color: #222222;
    font-size: 20px;
font-family: 'Lalezar', sans-serif;
}

.logo {
max-height: 50px;
padding-right: 15px;
}

/* .stripe {
background-color:gold;
height: 8px;
} */

#Header--Wrapper__Center {
    /* color: #222222;
        font-family: 'Lato', sans-serif;
  font-size: 20px;
  display: flex;
  align-content: center;
  justify-content: flex-start; */
}

#Header--Wrapper__Left {
  /* max-width: 100px; */
  display: flex;
  align-items: center;
}

#Header--Wrapper__Right {
  /* max-width: 100px; */
}

a {
  text-decoration: none;
  color: black;
  list-style: none;
  padding-left: 20px;
      font-size: 14px;
}
a.hover {
  text-decoration: none;
  color: black;
  list-style: none;
}
.in {
font-style: italic;
font-weight: 400;
font-size: 12px;
}
</style>
