<template>
  <div>
    <div v-if="!$vuetify.breakpoint.xs">
      <v-navigation-drawer
        app
        clipped
        :mini-variant="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.xsOnly"
        mini-variant-width="73"
        mobile-breakpoint="600"
      >
        <v-list>
          <v-list-item link @click="$router.push({ path: '/profile' })">
            <v-list-item-avatar
              size="67"
            >
              <v-img src="https://images.pexels.com/photos/4566232/pexels-photo-4566232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ userName }}
              </v-list-item-title>
              <v-list-item-subtitle>
                My Profile
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item link @click="$router.push({ path: '/profile' })">
        <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title></v-list-item-title>
      </v-list-item> -->
        </v-list>
        <v-divider />
        <v-list
          nav
          dense
        >
          <v-list-item link @click="$router.push({ path: '/home' })">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-record</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Streams</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Friends</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-message-reply</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Whispers</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-police-badge</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Badges</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-shuffle-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shuffle</v-list-item-title>
          </v-list-item>
        </v-list>
        <template #append>
          <v-list-item @click="dayOrNigth">
            <v-icon>
              mdi-theme-light-dark
            </v-icon>
            <!-- <v-list-item-subtitle>Day/Nigth</v-list-item-subtitle> -->
            <v-container class="ml-5" fluid>
              <v-switch
                inset
              />
            </v-container>
          </v-list-item>

          <v-divider />
          <div v-if="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.xsOnly" class="pa-2">
            <v-btn
              color="red darken-1"
              outlined
              elevation="2"
              block
              fab
            >
              <v-icon dark>
                mdi-power
              </v-icon>
            </v-btn>
          </div>
          <div v-else class="pa-2">
            <v-btn
              color="red darken-1"
              outlined
              elevation="2"
              x-large
              block
            >
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </div>
    <div v-else>
      <v-bottom-navigation
        fixed
        app
      >
        <v-btn
          color="teal lighten-2"
          text
          value="home"
          @click="$router.push({ path: '/home' })"
        >
          <span>Home</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn
          color="teal lighten-2"
          text
          value="friends"
        >
          <span>Friends</span>

          <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn
          color="deep-purple accent-4"
          text
          value="nearby"
        >
          <span>Discover</span>

          <v-icon>mdi-compass</v-icon>
        </v-btn>

        <v-btn
          color="teal lighten-2"
          text
          value="shuffle"
        >
          <span>Shuffle</span>

          <v-icon>mdi-shuffle-variant</v-icon>
        </v-btn>

        <v-btn
          color="teal lighten-2"
          text
          value="profile"
          @click="$router.push({ path: '/profile' })"
        >
          <v-list-item-avatar
            size="40"
          >
            <v-img src="https://images.pexels.com/photos/4566232/pexels-photo-4566232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </v-list-item-avatar>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      userName: ''
    }
  },
  async mounted () {
    const user = await this.$store.dispatch('getUserName')
    this.userName = user.userName
  },
  methods: {
    dayOrNigth () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
