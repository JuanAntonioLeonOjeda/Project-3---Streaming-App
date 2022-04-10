<template>
  <v-container class="mt-10">
    <v-row align="center">
      <v-col
        cols="12"
      >
        <div class="text-center">
          <p class="mb-0">What music genre are you streming?</p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-select
          class="mt-0"
          v-model="genre"
          :items="genres"
          label="Choose stream's music genre"
          item-text="name"
        />
      </v-col>
    </v-row>
        <!-- <v-select
            v-model="genre"
            :items="genres"
            label="Tags"
            chips
          >
            <template #selection="{ item }">
              {{ item.name }}
            </template>
            <template #item="{ item, attrs, on }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-content>
                  <v-list-item-title>
                    <span>{{ item.name }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-select>
          {{ genre.id }} -->
  </v-container>
</template>

<script>
export default {
  name: 'GenreSelect',
  data () {
    return {
      genres: [],
      genre: ''
    }
  },
  async mounted () {
    try {
      const genre = await this.$store.dispatch('getAllGenres')
      this.genres = genre
    } catch (error) {
      throw new Error(error)
    }
  },
  async updated () {
    const genreId = this.genres.filter(e => e.name === this.genre)
    if (genreId[0]) {
      await this.$store.commit('saveGenre', genreId[0]._id)
    }
  }
}
</script>

<style lang="scss" scoped>
.d-flex {
  justify-content: center;
}
</style>
