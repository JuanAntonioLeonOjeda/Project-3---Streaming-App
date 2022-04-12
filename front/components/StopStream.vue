<template>
  <div>
    <div class="bottom-bar d-flex justify-center">
      <v-btn class="mx-2" fab color="error" @click="stopStream">
        <v-icon dark>
          mdi-stop
        </v-icon>
      </v-btn>
      <v-spacer />
      <!-- @click="offCamera()" -->
      <v-btn class="mx-2" fab>
        <v-icon dark>
          mdi-camera
        </v-icon>
      </v-btn>
      <v-btn class="mx-2" fab>
        <v-icon dark>
          mdi-microphone
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StopStream',
  methods: {
    async stopStream () {
      await this.$store.dispatch('stopStream')
      this.$store.commit('changeRole')
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
