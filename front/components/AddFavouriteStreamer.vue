<template>
  <div>
    <v-btn color="#565EE8" @click="AddFavouriteStreamer">
      Add Favourite Streamer
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddFavouriteStreamer',
  methods: {
    async AddFavouriteStreamer () {
      const streamerId = this.$store.state.streamInfo.streamer
      const result = await this.$store.dispatch('addFavouriteStreamer', streamerId)
      alert(result)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
