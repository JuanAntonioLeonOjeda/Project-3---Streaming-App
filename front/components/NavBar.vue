<template>
  <v-app-bar color="deep-purple accent-4" dense dark app>
    <v-container>
      <v-row class="align-center">
        <v-col cols="2" class="text-center">
          <v-btn> Discover </v-btn>
        </v-col>
        <v-spacer />
        <v-col cols="4" class="text-center">
          <v-text-field
            label="Search genre"
            single-line
            prepend-icon="mdi-magnify"
          />
        </v-col>
        <v-spacer />
        <v-col cols="2" class="text-center">
          <v-icon>mdi-heart</v-icon>
          <v-toolbar-title>Peek Beats</v-toolbar-title>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang='scss' scoped>
</style>
