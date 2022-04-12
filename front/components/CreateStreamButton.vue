<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        xs="12"
      >
        <div class="text-center">
          <v-btn
            color="#565EE8"
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
      const genreId = this.$store.state.genreId
      await this.$store.dispatch('createStream', genreId)
      const roomId = uuidv4()
      const stream = await this.$store.dispatch('assignStreamRoom', roomId)
      this.$store.commit('getStreamInfo', stream.stream)
      this.$store.commit('changeRole')
      this.$router.push({
        path: `/streams/${roomId}`
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  div {
    margin-top: 5px;
  }
</style>
