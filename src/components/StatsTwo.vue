<template>
  <div class="StatsTwo wow animated slideInLeft">
    <div class="wrap">
      <h1 class="animated wow slideInUp">MOST POPULAR FIELDS/PARKS</h1>
    </div>
      <ChartTwo/>
  </div>
</template>

<script>
import ChartTwo from '@/components/ChartTwo'

export default {
  name: 'StatsTwo',
  components: {
    ChartTwo
  }
}
</script>

<style scoped>
.StatsTwo{
  padding-left: 1rem;
}

.wrap {
  justify-content: center;
  display: flex;
}

h1 {
font-size: 1.5rem;
padding: 10px;
background-color:#00ADA9;
border-top: 3px #aaa solid;
max-width: 400px;
color: #222;
font-weight: 700;
text-align: center;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
</style>
