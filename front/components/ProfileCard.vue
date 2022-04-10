<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <div class="account">
          <h1>
            My account
          </h1>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="ml-10 mr-10 pl-10 pr-10 pt-10 pb-10">
          <v-avatar size="150">
            <v-img
              alt="user"
              src="https://images.pexels.com/photos/4566232/pexels-photo-4566232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </v-avatar>
          <h1>
            {{ userEmail }}
          </h1>
          <v-divider class="mt-3 mb-5" dark />
          <v-form>
            <p>
              Change your nick name
            </p>
            <v-text-field
              filled
              color="deep-purple"
              :label="userName"
              type="email"
            />
            <p>
              Set your bio info
            </p>
            <v-textarea
              auto-grow
              filled
              color="deep-purple"
              label="Bio"
              rows="1"
            />
          </v-form>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="white--text"
              color="deep-purple accent-4"
              depressed
            >
              Apply
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col>
        <h1>
          Favourites Genres
        </h1>
        <v-card class="ml-10 mr-10 pl-10 pr-10 pt-10 pb-10">
          <v-list>
            <v-list-item-group
              v-model="model"
              multiple
              color="indigo"
            >
              <v-list-item
                v-for="(item, i) in genres"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.name" />
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="white--text"
              color="deep-purple accent-4"
              depressed
            >
              Apply
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProfileCard',
  data () {
    return {
      userName: '',
      userEmail: '',
      genres: []
    }
  },
  async mounted () {
    const user = await this.$store.dispatch('getUserName')
    this.userName = user.userName
    this.userEmail = user.email

    const genre = await this.$store.dispatch('getAllGenres')
    this.genres = genre
  }

}
</script>

<style lang="scss" scoped>
h1 {
    font-size: calc(2vw + 1vh);
}
</style>
