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
    // eslint-disable-next-line no-console
    console.log(stream)
    this.liveStreams = stream
  }
}
</script>

<style lang="scss" scoped>

</style>
