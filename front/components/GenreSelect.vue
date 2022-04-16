<template>
  <div>
    <v-card flat class="mt-16">
      <div>
        <v-card-title class="justify-center">
          <a>
            Simply select your genre and start streaming!
          </a>
        </v-card-title>
        <v-row justify="center">
          <v-col cols="6">
            <v-select
              v-model="genre"
              class="mt-0"
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
                <v-list-item-content>x
                  <v-list-item-title>
                    <span>{{ item.name }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-select>
          {{ genre.id }} -->
        <CreateStreamButton />
      </div>
    </v-card>
    <v-divider />
  </div>
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
      await this.$store.commit('genreAlert', false)
      await this.$store.commit('saveGenre', genreId[0]._id)
    }
  }
}
</script>

<style lang="scss" scoped>
.d-flex {
  justify-content: center;
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
  transition: transform .7s ease-in-out;
}
a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
