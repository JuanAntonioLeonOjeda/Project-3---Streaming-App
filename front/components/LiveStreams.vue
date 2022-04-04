<template>
  <div>
    {{ liveStreams }}
  </div>
</template>

<script>
export default {
  name: 'LiveStreams',
  data () {
    return {
      liveStreams: []
    }
  },
  async mounted () {
    const stream = await this.$store.dispatch('liveStreams')
    this.liveStreams = stream
  }
}
</script>

<style lang="scss" scoped>

</style>
