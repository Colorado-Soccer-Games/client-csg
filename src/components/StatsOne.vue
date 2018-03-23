<template>
  <div class="StatsOne wow animated slideInLeft">
        <div class="wrap">
      <h1 class="animated wow slideInUp"> MOST GAMES PER DAY</h1>
      </div>
      <Chart/>
  </div>
</template>

<script>
import Chart from '@/components/Chart'

export default {
  name: 'StatsOne',
  components: {
    Chart
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
