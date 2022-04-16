<template>
  <div>
    <v-card flat class="pb-1 mt-10">
      <div v-if="loading" class="progress">
        <LoadingAnimation />
      </div>
      <div v-else>
        <v-card-title class="justify-center">
          <a>
            Top 5 Streamers
          </a>
        </v-card-title>
        <carousel-3d
          :disable3d="true"
          :space="365"
          :controls-visible="true"
          :height="110"
        >
          <slide v-for="(slide, i) in top5" :key="i" :index="i" class="slide" :style="[$vuetify.theme.dark === true ? {'background-color': '#ffffff00'} : {'background-color': '#353a3d9d'}]">
            <v-container>
              <v-row justify="center">
                <v-spacer />
                <v-col cols="6" class="pt-1">
                  <div class="avatar-container" position="absolute">
                    <v-list-item-avatar size="100">
                      <v-img :src="`https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`" alt="Avatar Image" />
                    </v-list-item-avatar>
                  </div>
                </v-col>
                <v-spacer />
                <figcaption
                  :style="[$vuetify.theme.dark === true ? {'background-color': '#ffffff10'} : {'background-color': '#353a3dd4'}]"
                >
                  <v-col cols="12" class="tags" :style="[$vuetify.theme.dark === true ? {'color': 'white'} : {'color': 'white'}]">
                    <span class="title">{{ slide.userName }}</span>
                    <p class="mb-0">
                      Followers: {{ slide.followers.length }}
                    </p>
                    <p>Streams made: {{ slide.myStreams.length }} </p>
                  </v-col>
                  <v-spacer />
                </figcaption>
              </v-row>
            </v-container>
          </slide>
        </carousel-3d>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TopFive',
  data () {
    return {
      top5: [],
      loading: true
    }
  },
  async mounted () {
    try {
      this.top5 = await this.$store.dispatch('getTopFive')
      this.loading = false
    } catch (error) {
      throw new Error(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  margin-top: 50px;
}
.title {
  font-size: 30px !important;
}
img {
  margin-top: 6px;
}
.avatar-container {
  z-index: 1;
  position: absolute;
  right: -5px;
  top: -4px;
}

.slide {
  background-color: #565de8ab;
  border-radius: 5px;
  // border-style: solid;
  // border-width: 2px !important;
}
.carousel-3d-container figcaption {
  z-index: 1;
  position: absolute;
  background-color: #ffffff00;
  left: 0;
  border-radius: 5px;
  padding: 5px;
  height: 100%;
  min-width: 65%;
  box-sizing: border-box;
}
.avatar {
  background-size: cover !important;
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
  transition: transform .5s ease-in-out;
}
a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
