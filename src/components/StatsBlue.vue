<template>
  <div class="StatsOne wow animated slideInLeft">
      <h1 class="animated wow slideInUp"> MOST GAMES PER DAY</h1>
        <div class="wrap">
      </div>
      <StatsBlueMostGamesPerDay/>
  </div>
</template>

<script>
import StatsBlueMostGamesPerDay from '@/components/StatsBlueMostGamesPerDay'

export default {
  name: 'StatsBlue',
  components: {
    StatsBlueMostGamesPerDay
  }
}
</script>

<style scoped>
.StatsOne{
  padding-left: 1rem;
}

.wrap {
  justify-content: center;
  display: flex;
}



h1 {
  text-align: center;
  font-size: 14px;
  min-width: 200px;
  max-width: 200px;
  background-color: #00ADA9;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 3px solid #dcdada;
  color: #222222;
  font-weight: 900;
  /* border-top-right-radius: 5px; */
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 10px;
}

</style>
