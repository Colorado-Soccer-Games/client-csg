<template>
  <div class="StatsOne wow animated slideInLeft">
      i am the component for the first button
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

