<template>
  <div>
    <div class="text-center">
      <h2 class="mb-0">
        Top 5 Streamers
      </h2>
    </div>
    <div v-if="loading" class="progress">
      <LoadingAnimation />
    </div>
    <div v-else>
      <carousel-3d
        :disable3d="true"
        :space="365"
        :controls-visible="true"
        :height="100"
      >
        <slide v-for="(slide, i) in top5" :key="i" :index="i" class="slide" postition="relative">
          <v-container>
            <v-row justify="center">
              <v-spacer />
              <v-col cols="3">
                <div class="avatar-container" position="absolute">
                  <v-avatar size="67">
                    <img :src="`${slide.avatar}`" alt="Avatar Image">
                  </v-avatar>
                </div>
              </v-col>
              <v-spacer />
              <v-col cols="6" class="pt-1">
                <span class="title">{{ slide.userName }}</span>
                <p class="mb-0">Followers: {{ slide.followers.length }} </p>
                <p>Streams made: {{ slide.myStreams.length }} </p>
              </v-col>
              <v-spacer />
            </v-row>
          </v-container>
        </slide>
      </carousel-3d>
    </div>
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
img {
  margin-top: 6px;
  // border-radius: 50%;
  // height: 60px;
}
.avatar-container {
  top: 0;
  left: 100;
  display: inline-block;
}
.slide {
  background-color: #565de850;
  border-radius: 25px;
  border-color: #565EE8;
  border-style: solid;
  border-width: 5px !important;
}
</style>
