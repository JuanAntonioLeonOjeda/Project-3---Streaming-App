<template>
  <div>
    <NavBar />
    <NavigationDrawer />
    <v-container position="relative">
      <v-row>
        <v-col
          cols="12"
          md="12"
          lg="12"
        >
          <div class="text-center">
            <div id="mainFrame">
              <v-card>
                <div v-if="streamerRole">
                  Your stream room is: {{ roomId }}
                </div>
                <v-card-title>
                  Welcome: {{ userName }}
                  <v-spacer />
                  <v-icon class="mr-3">
                    mdi-account-group
                  </v-icon>
                  <span v-if="stream.currentViewers !== []">
                    {{ getTotalViewers }}
                  </span>
                  <span v-else>
                    0
                  </span>
                </v-card-title>
                <StreamVideo />
                <div id="localVideo" />

                <v-card-subtitle class="pa-0 mt-5">
                  Music genre: {{ genre.name }}
                </v-card-subtitle>
                <v-card-subtitle class="pa-0">
                  <v-btn v-if="streamerRole" icon @click="editDescription">
                    <v-icon>mdi-square-edit-outline</v-icon>
                  </v-btn>
                  {{ stream.description }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-container>
                    <v-row>
                      <v-col>
                        <div class="text-center">
                          <StopStream v-if="streamerRole" />
                          <AddFavouriteStreamer v-else />
                        <!-- <v-btn
                          v-if="role !== 'streamer'"
                          icon
                          :@click="like = !like"
                        >
                        <v-icon color="red">{{ like ? 'mdi-cards-heart' : 'mdi-cards-heart-outline' }}</v-icon>
                        </v-btn> -->
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'StreamPage',
  data () {
    return {
      roomId: this.$route.params.id,
      streamerRole: this.$store.state.streamer,
      userName: '',
      stream: this.$store.state.streamInfo,
      genre: '',
      like: false
    }
  },
  computed: {
    getTotalViewers () {
      return this.stream.currentViewers.length
    }
  },
  async mounted () {
    const streamer = await this.$store.dispatch('getOneUser', this.stream.streamer)
    this.userName = streamer.userName
    const genre = await this.$store.dispatch('getGenre', this.stream.genre)
    this.genre = genre
  },
  updated () {
  },
  methods: {
    editDescription () {
    }
  }
}
</script>

<style lang="scss" scoped>
#mainFrame {
  width: 95%;
  position: absolute;
  left: 40px;
    #localVideo {
      z-index: 50;
      height: calc(70vh - 90px);
      width: 100%;
      background-color: #7f828b  31;
    }

    .bottom-bar {
      position: absolute;
      bottom: 25px;
      width: 100vw;
      text-align: center;
    }
  }
</style>
