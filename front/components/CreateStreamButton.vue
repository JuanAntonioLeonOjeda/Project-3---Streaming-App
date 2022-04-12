<template>
  <v-container>
    <v-row>
      <v-col offset="4" cols="4">
        <div class="text-center">
          <v-btn class="mt-20" color="secondary" block @click="startStream">
            Start Stream
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const { v4: uuidv4 } = require('uuid')
export default {
  name: 'CreateStreamButton',
  methods: {
    async startStream () {
      if (this.$store.state.genreId) {
        const genreId = this.$store.state.genreId
        await this.$store.dispatch('createStream', genreId)
        const roomId = uuidv4()
        const stream = await this.$store.dispatch('assignStreamRoom', roomId)
        this.$store.commit('getStreamInfo', stream.stream)
        this.$store.commit('changeRole')
        this.$router.push({
          path: `/streams/${roomId}`
        })
      } else {
        await this.$store.commit('genreAlert', true)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  div {
    margin-top: 5px;
  }
</style>
