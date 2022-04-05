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
    try {
      const stream = await this.$store.dispatch('liveStreams')
      this.liveStreams = stream
    } catch (error) {
      throw new Error(error)
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
