<template>
  <v-container class="mt-0 pt-0">
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
        xs="12"
        class="mt-0 pt-0"
      >
        <div class="text-center">
          <v-btn
            color="accent"
            x-large
            block
            :class="$vuetify.theme.dark === true ? 'mb-4 black--text' : 'mb-4 white--text'"
            @click="startStream"
          >
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
        await this.$store.commit('getStreamInfo', stream.stream)
        await this.$store.commit('changeRole')
        await this.$store.commit('saveGenre', '')
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
