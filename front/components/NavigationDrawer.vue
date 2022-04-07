<template>
  <v-navigation-drawer
    app
    clipped
    :mini-variant="$vuetify.breakpoint.xsOnly"
    mini-variant-width="70"
    mobile-breakpoint="150"
  >
    <v-list>
      <v-list-item class="px-2" />
      <v-list-item link>
        <v-list-item-avatar
          size="67"
        >
          <v-img src="https://images.pexels.com/photos/4566232/pexels-photo-4566232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ userName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Profile</v-list-item-title>
        <v-list-item link />
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list
      nav
      dense
    >
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
        <v-list-item-icon>
          <v-icon>
            mdi-theme-light-dark
          </v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>Day/Nigth</v-list-item-subtitle>
      </v-list-item>

      <v-divider />
      <div v-if="$vuetify.breakpoint.xsOnly" class="pa-2">
        <v-btn
          color="secondary"
          fab
          outlined
        >
          <v-icon dark>
            mdi-power
          </v-icon>
        </v-btn>
      </div>
      <div v-else class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      userName: 'NavigationDrawer',
      xs: true
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
