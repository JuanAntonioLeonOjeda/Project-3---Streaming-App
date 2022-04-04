<template>
  <v-navigation-drawer
    app
    expand-on-hover
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://images.pexels.com/photos/4566232/pexels-photo-4566232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            ElUserNameTuyo
          </v-list-item-title>
          <v-list-item link>
            <v-icon>mdi-account-circle</v-icon>
            <v-list-item-subtitle>My Profile</v-list-item-subtitle>
            <v-list-item link />
          </v-list-item>
        </v-list-item-content>
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
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer'

}
</script>

<style lang="scss" scoped>
</style>
