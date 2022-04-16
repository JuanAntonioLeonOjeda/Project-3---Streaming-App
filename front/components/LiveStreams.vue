<template>
  <div>
    <v-card flat class="pb-1 mt-10">
      <div v-if="typeof liveStreams === 'string'">
        {{ liveStreams }}
      </div>
      <div v-else-if="loading" class="progress">
        <div class="spacer" />
        <LoadingAnimation />
      </div>
      <div v-else-if="liveStreams.length !== 0" class="text-center">
        <v-card-title class="justify-center">
          <a>
            Discover
          </a>
        </v-card-title>
        <carousel-3d
          :autoplay="true"
          :autoplay-timeout="5000"
          :display="9"
          :height="230"
          :controls-visible="true"
          :controls-prev-html="'&#10092; '"
          :controls-next-html="'&#10093;'"
          :controls-width="30"
          :controls-height="60"
        >
          <slide
            v-for="(stream, idx) in liveStreams"
            :key="idx"
            :index="idx"
            position="relative"
            :style="[$vuetify.theme.dark === true ? {'background-image':'url(https://images.pexels.com/photos/4140107/pexels-photo-4140107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', 'border-radius': '5px'} : {'background-image':'url(https://images.pexels.com/photos/4140107/pexels-photo-4140107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', 'border-radius': '5px'}]"
          >
            <!-- 'border-color': '#565EE8','border-style': 'solid', 'border-width': '2px !important' -->
            <!-- 'border-color': '#000000', 'border-style': 'solid', 'border-width': '2px !important' -->
            <div class="avatar-container" position="absolute">
              <v-list-item-avatar size="80">
                <v-img :src="`https://images.pexels.com/photos/3760278/pexels-photo-3760278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`" alt="Avatar Image" />
              </v-list-item-avatar>
            </div>
            <figcaption>
              <v-row>
                <v-col cols="6">
                  <span class="title">{{ stream.streamer.userName }}</span>
                  <p class="genre-text">
                    {{ stream.genre.name }}
                  </p>
                </v-col>
                <v-col cols="3">
                  <p class="mt-10">
                    <v-icon class="mr-1 pb-1" color="yellow">
                      mdi-account-group
                    </v-icon>  {{ stream.currentViewers.length }}
                  </p>
                </v-col>
                <v-col cols="3">
                  <p class="mt-10">
                    <v-icon class="mr-1 pb-1" color="red">
                      mdi-heart
                    </v-icon> {{ stream.likes.length }}
                  </p>
                </v-col>
              </v-row>
            </figcaption>

            <v-btn
              class="buttonPlay"
              height="100%"
              text
              block
              @click="joinStream(stream._id)"
            />
          </slide>
        </carousel-3d>
      </div>
    </v-card>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'LiveStreams',
  data () {
    return {
      loading: true,
      liveStreams: [],
      cycle: false,
      card: {
        src: 'https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    }
  },
  async mounted () {
    try {
      const stream = await this.$store.dispatch('liveStreams')
      this.liveStreams = stream
      this.loading = false
    } catch (error) {
      throw new Error(error)
    }
  },
  methods: {
    async joinStream (streamId) {
      const stream = await this.$store.dispatch('joinStream', streamId)
      this.$store.state.streamInfo = stream
      this.$router.push({ path: `/streams/${stream.room}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.genre-text {
  font-size: 13px;
  color: rgb(255, 255, 255)
}
.title {
  font-size: 1.6rem !important;
}
.buttonPlay {
  z-index: 12112;
  position: absolute;
}
.avatar-container {
  z-index: 1;
  position: absolute;
  left: 140px;
  top: 105px;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.535);
  color: #fff;
  bottom: 0;
  padding: 5px 15px 5px 15px;
  height: 70px;
  min-width: 100%;
  box-sizing: border-box;
}
a {
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  text-decoration: none;
  margin-bottom: 25px;
  padding: 25px;
}
a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 15px;
  border-radius: 7px;
  background-color: #565de8;
  top: 60px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .4s ease-in-out;
}
a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

</style>
