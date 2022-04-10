<template>
  <div>
    <NavBar />
    <NavigationDrawer />
    <v-container position="relative">
      <v-row>
        <v-col>
          <div class="text-center">
            <v-card>
              <div v-if="streamerRole">
                Your stream room is: {{ roomId }}
              </div>
              <StreamVideo />
              <v-card-title>
                {{ userName }}
                <v-spacer />
                <v-icon>
                  mdi-account-group
                </v-icon>
                <span v-if="stream.currentViewers !== []">
                  {{ getTotalViewers }}
                </span>
                <span v-else>
                  0
                </span>
              </v-card-title>

              <v-card-subtitle class="pa-0">
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
  methods: {
    editDescription () {
    }
  },
  updated () {
  }
}
</script>

<style lang="scss" scoped>
</style>
