<template>
  <div>
    <v-btn color="error" @click="stopStream">
      Stop Stream
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'StopStream',
  methods: {
    async stopStream () {
      await this.$store.dispatch('stopStream')
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
