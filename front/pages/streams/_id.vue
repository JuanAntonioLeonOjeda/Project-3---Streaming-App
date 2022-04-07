<template>
  <div>
    Your stream room is: {{ roomId }}
    <StreamVideo />
    <StopStream v-if="role === 'streamer'" />
  </div>
</template>

<script>
export default {
  name: 'StreamPage',
  data () {
    return {
      roomId: this.$route.params.id,
      role: this.$store.state.role
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
