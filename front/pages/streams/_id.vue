<template>
  <div>
    CREATE UR FUCKING STREAM
    {{ roomId }}
  </div>
</template>

<script>
export default {
  name: 'StreamPage',
  data () {
    return {
      roomId: this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
