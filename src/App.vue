<template>
  <div id="EntireApplicationWrapper">
    <Header/>
    <div class="Wrapper">
    <About/>
    <Create/>
    </div>
    <LegendText/>
    <div class="WeekWrapper">
      <Week/>
  </div>
      <div class="AllGamesWrapper">
  </div>
  <Map/>
  <MapFields/>
      <div class="GamesWrapper">
  <Edit/>
  <AllCreatedGames/>
</div>
  <Footer/>
  </div>
</template>

<script>
// sample image path <img src="./assets/logo.png">
// Components
import Header from '@/components/Header'
import Create from '@/components/Create'
import About from '@/components/About'
import Project from '@/components/Project'
import StatsOne from '@/components/StatsOne'
import StatsTwo from '@/components/StatsTwo'
import StatsThree from '@/components/StatsThree'
import LegendText from '@/components/LegendText'
import Week from '@/components/Week'
import Map from '@/components/Map'
import MapFields from '@/components/MapFields'
import AllCreatedGames from '@/components/AllCreatedGames'
import Edit from '@/components/Edit'
// import Week from '@/components/All'
import Footer from '@/components/Footer'

// Global UI Components

// Unused Components
// import Resources from '@/components/Resources'
// import About from '@/components/About'
// import Contact from '@/components/Contact'

export default {
  name: 'App',
  components: {
    Header,
    Create,
    About,
    Project,
    StatsOne,
    StatsTwo,
    StatsThree,
    LegendText,
    Map,
    MapFields,
    Week,
    Edit,
    AllCreatedGames,
    Footer
  }
}
</script>

<style>
/* FONTS import */
@import url('https://fonts.googleapis.com/css?family=Lato|Libre+Franklin|Merriweather|Montserrat|Roboto+Slab|Lalezar');
/* font-family: 'Libre Franklin', sans-serif; */
/* font-family: 'Roboto Slab', serif; */
/* font-family: 'Lato', sans-serif; */
/* font-family: 'Montserrat', sans-serif; */
/* font-family: 'Merriweather', serif; */
/* font-family: 'Lalezar', serif; */

/* START css reset styles */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
/* default font fallback */
/* font-family: 'Roboto Slab', serif; */
font-family: 'Lato', sans-serif;
  background-color: #222222;
color:white;
}
ol, ul, a{
text-decoration: none;
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
/* END css reset styles */
/* START fall back default styles */
/* END fall back default styles */

.Wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.WeekWrapper {
  display: flex;
  flex-flow: row nowrap;

}

.GamesWrapper {
    display: flex;
    justify-content: center;

}
</style>
