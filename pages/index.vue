<template>
   <div class="bg-gradient-to-b from-gray-900 purpel- to-gray-700 w-full h-screen">
      <Hero/>
      <segments/>
   </div>
</template>

<script>
import Segments from '~/components/Segments.vue'
export default {
  components: { Segments },
  name: 'IndexPage'
}
</script>
