<template>
  <v-container class="mt-0 pt-0 mb-10">
    <v-row class="mb-10">
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        xs="12"
        class="mt-0 pt-0"
      >
        <div class="text-center">
          <v-btn
            color="primary"
            x-large
            block
            class="mt-20"
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
