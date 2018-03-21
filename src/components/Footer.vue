<template>
<div class="wrap">
  <span id="contact"></span>
  <footer>
    <div id="FooterWrapper">
      <div class="meh">
         <img class="logo rotate" src="../../static/green.png">
         </div>
         <hr>
<div id="PreFooter">
<div class="FooterRow">
<a href="https://bencasalino.com/" class="FooterLink"><img class="host" src="../../static/soccer-ball.png"> &nbsp;About Project </a>
<a href="https://bencasalino.com/"  class="FooterLink"><img class="host" src="../../static/soccer-shoe.png"> Contribute </a>
<a href="https://bencasalino.com/"  class="FooterLink"><img class="host" src="../../static/contact.png">Contact Me</a>
</div>
<div class="FooterRow">
<a href="https://soccer-directory-colorado.firebaseapp.com/"  class="FooterLink"> <img class="host" src="../../static/soccer.png"> &nbsp; Resources Directory </a>
<a href="https://soccer-directory-colorado.firebaseapp.com/"  class="FooterLink"><img class="host" src="../../static/field.png">Fields Directory </a>
<a href="https://soccergamescolorado.herokuapp.com/s"  class="FooterLink"><img class="host" src="../../static/hostwhite.png">Heroku&nbsp;|&nbsp;Firebase</a>
</div>
<div class="FooterRow">
<a href="https://soccergamescolorado.herokuapp.com/" class="FooterLink"><img class="host" src="../../static/database.png">&nbsp;API&nbsp;|&nbsp;Database</a>
<a href="https://github.com/bencasalino"  class="FooterLink"><img class="host2" src="../../static/github-logo.png">Github Repo</a>
<a href="https://github.com/bencasalino"  class="FooterLink"> <img class="host" src="../../static/code.png">&nbsp;Technologies</a>
</div>
</div>
        <!-- <img class="logo" src="@/assets/green.png"> -->
     </div>
  </footer>
        <div id="PostFooter">
         COPYRIGHT 2018 | &copy;
      </div>
</div>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style>
footer {
  text-decoration: none;
list-style: none;
padding-left: 20px;
padding-right: 20px;
display: flex;
justify-content: center;
align-items: flex-end;
height: 500px;
position: sticky;
color: #222222;
font-size: 20px;
font-family: 'Lato', sans-serif;
background: #222222;
background: -moz-linear-gradient(top, #222222 0%, #2d2d2d 100%);
background: -webkit-linear-gradient(top, #222222 0%,#2d2d2d 100%);
background: linear-gradient(to bottom, #222222 0%,#2d2d2d 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#2d2d2d',GradientType=0)
}

.logo {
  height: 50px;
  /* padding-bottom: 10px; */
}
.host {
  height: 10px;
}
.host2 {
  height: 10px;
  /* padding-left:21px; */
}

#PreFooter {
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #aaa;
  display: flex;
  justify-content: center;
  text-decoration: none;
list-style: none;
}

#PostFooter {
color: #222222;
background-color: #2efd96;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 500;
}

.FooterRow {
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.FooterLink {
  color: #aaa;
  padding-bottom: 10px;
   display: flex;
  justify-content: space-around;
  /* flex-direction: column; */
}

a:link    {
  /* Applies to all unvisited links */
  text-decoration:  none;
  }
a:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  }
a:hover   {
  /* Applies to links under the pointer */
  text-decoration:  underline;
  }
a:active  {
  /* Applies to activated links */
  text-decoration:  underline;
  }

.meh {
  display: flex;
justify-content: center;
padding-bottom: 8px;
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

</style>
