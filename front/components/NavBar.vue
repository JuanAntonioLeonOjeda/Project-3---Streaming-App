<template>
  <v-app-bar
    color="#565EE8"
    dark
    app
    clipped-left
    elevation="2"
    rounded
  >
    <v-container v-if="$vuetify.breakpoint.xsOnly">
      <v-row class="align-center">
        <!-- <v-col cols="2" class="text-center">
          <v-btn text>
            Discover
          </v-btn>
        </v-col>
        <v-spacer /> -->
        <img class="logo" src="../static/peek-beats-logo.JPG" alt="Parrot Logo">
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    </v-container>
    <v-container v-else-if="$vuetify.breakpoint.smOnly">
      <v-row class="align-center">
        <v-col cols="2" class="text-center">
          <v-btn text>
            Discover
          </v-btn>
        </v-col>
        <v-spacer />
        <img class="logo" src="../static/peek-beats-logo.JPG" alt="Parrot Logo">
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    </v-container>

    <v-container v-else>
      <v-row class="align-center">
        <v-col cols="2" class="text-center">
          <v-btn text>
            Discover
          </v-btn>
        </v-col>
        <v-spacer />
        <img class="logo" src="../static/peek-beats-logo.JPG" alt="Parrot Logo">
        <v-col cols="3">
          <v-toolbar-title>Peek Beats</v-toolbar-title>
        </v-col>
        <v-spacer />
        <v-autocomplete
          v-model="model"
          :items="genres"
          chips
          clearable
          hide-details
          hide-selected
          item-text="name"
          item-value="symbol"
          label="Search for a genre..."
          solo-inverted
        >
          <template #no-data>
            <v-list-item>
              <v-list-item-title>
                Search for your favorite
                <strong>Genre</strong>
              </v-list-item-title>
            </v-list-item>
          </template>
          <template #selection="{ attr, on, item, selected }">
            <v-chip
              v-bind="attr"
              :input-value="selected"
              color="blue-grey"
              class="white--text"
              v-on="on"
            >
              <span v-text="item.name" />
            </v-chip>
          </template>
          <template #item="{ item }">
            <v-list-item-avatar
              color="purple"
              class="text-h5 font-weight-light white--text"
            >
              {{ item.name.charAt(0) }}
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.name" />
              <v-list-item-subtitle v-text="item.symbol" />
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isLoading: false,
      items: [],
      model: null,
      tab: null,
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
.logo {
  height: 50px;
  width: 50px;
}
</style>
