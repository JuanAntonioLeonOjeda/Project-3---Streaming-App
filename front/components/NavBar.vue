<template>
  <div>
    <v-app-bar
      class="navBar"
      color="topBar"
      dark
      app
      clipped-left
      flat
      dense
    >
      <v-container v-if="$vuetify.breakpoint.xsOnly">
        <v-row class="align-center">
          <v-avatar
            class="logoLocoLoroMbl mr-2"
            :tile="true"
            height="60"
            width="65"
          >
            <v-img
              v-if="$vuetify.theme.dark === true"
              :src="require('../static/LogoWShadow.png')"
              alt="logo"
            />
            <v-img
              v-if="$vuetify.theme.dark === false"
              :src="require('../static/LogoWShadowWhiteBackground.png')"
              alt="logo"
            />
          </v-avatar>
          <v-spacer />

          <v-avatar
            :tile="true"
            height="29"
            width="160"
          >
            <v-img
              v-if="$vuetify.theme.dark === true"
              :src="require('../static/LetrasPeekBeatsContrasteBlanco.png')"
              alt="logo"
            />
            <v-img
              v-if="$vuetify.theme.dark === false"
              :src="require('../static/LetrasPeekBeatsContrasteAzul.png')"
              alt="logo"
            />
          </v-avatar>

          <v-spacer />
          <v-btn icon color="black">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <v-container v-else-if="$vuetify.breakpoint.smOnly">
        <v-row class="align-center">
          <v-avatar
            :tile="true"
            height="44"
            width="250"
          >
            <v-img
              v-if="$vuetify.theme.dark === true"
              :src="require('../static/LetrasPeekBeatsContrasteBlanco.png')"
              alt="logo"
            />
            <v-img
              v-if="$vuetify.theme.dark === false"
              :src="require('../static/LetrasPeekBeatsContrasteAzul.png')"
              alt="logo"
            />
          </v-avatar>
          <v-avatar
            class="logoLocoLoro mr-2"
            :tile="true"
            height="70"
            width="75"
          >
            <v-img
              v-if="$vuetify.theme.dark === true"
              :src="require('../static/LogoWShadow.png')"
              alt="logo"
            />
            <v-img
              v-if="$vuetify.theme.dark === false"
              :src="require('../static/LogoWShadowWhiteBackground.png')"
              alt="logo"
            />
          </v-avatar>
          <v-spacer />
          <v-btn icon color="black">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-row class="align-center flex-row justify">
          <v-avatar
            class="logoLocoLoro mr-2"
            :tile="true"
            height="90"
            width="95"
          >
            <v-img
              v-if="$vuetify.theme.dark === true"
              :src="require('../static/LogoWShadow.png')"
              alt="logo"
            />
            <v-img
              v-if="$vuetify.theme.dark === false"
              :src="require('../static/LogoWShadowWhiteBackground.png')"
              alt="logo"
            />
          </v-avatar>
          <v-avatar
            class="logoLocoLetras mr-2"
            :tile="true"
            height="44"
            width="250"
          >
            <v-img
              v-if="$vuetify.theme.dark === true"
              :src="require('../static/LetrasPeekBeatsContrasteBlanco.png')"
              alt="logo"
            />
            <v-img
              v-if="$vuetify.theme.dark === false"
              :src="require('../static/LetrasPeekBeatsContrasteAzul.png')"
              alt="logo"
            />
          </v-avatar>
          <v-spacer />
          <v-col cols="3">
            <v-select
              class="selectMenu"
              outlined
              dense
              hide-details
              :items="genres"
              item-text="name"
              prepend-icon="mdi-magnify"
              label="Sort by genre"
              item-color="primary"
              :light="$vuetify.theme.dark === false"
              color="primary"
            />
          </v-col>
          <v-btn class="btnMenu" outlined raised color="accent">
            Discover
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isLoading: false,
      items: [],
      genres: [],
      xs: true,
      sm: true
    }
  },
  async mounted () {
    const genre = await this.$store.dispatch('getAllGenres')
    this.genres = genre
  },
  updated () {
    this.$store.commit('searchValues', this.model)
  }
}
</script>

<style lang='scss' scoped>
.logoLocoLoro {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 7px;
}
.logoLocoLoroMbl {
  z-index: 1;
  position: absolute;
  left: 10px;
  top: 7px;
}
.logoLocoLetras {
  z-index: 1;
  position: absolute;
  left: 10px;
  top: 2px;
}
.selectMenu {
  z-index: 1;
  position: absolute;
  right: 150px;
  top: 4px;
}
.btnMenu {
  z-index: 1;
  position: absolute;
  right: 10px;
  top: 6px;
}
</style>
