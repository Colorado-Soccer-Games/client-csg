<template>
  <div class="StatsThree  wow animated slideInLeft">
        <div class="wrap">
      <h1 class="animated wow slideInUp">MOST ACTIVE GAMES</h1>
      </div>
      <StatsGoldMostPopularField/>
  </div>
</template>

<script>
import StatsGoldMostPopularField from '@/components/StatsGoldMostPopularField'

export default {
  name: 'StatsGold',
  components: {
    StatsGoldMostPopularField
  }
}
</script>

<style scoped>
.StatsThree{
  padding-left: 1rem;
}

.wrap {
  justify-content: center;
  display: flex;
}

h1 {
font-size: 1.5rem;
padding: 10px;
background-color:#FFC636;
border-top: 3px #aaa solid;
max-width: 400px;
color: #222;
font-weight: 700;
text-align: center;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
</style>
