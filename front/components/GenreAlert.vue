<template>
  <v-container>
    <v-row>
      <v-col offset="4" cols="4">
        <div class="text-center">
          <v-alert
            dense
            outlined
            type="error"
            transition="scale-transition"
            :value="$store.genreAlert"
          >
            Please select a <strong>music genre</strong>
          </v-alert>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GenreAlert'
}
</script>

<style lang="scss" scoped>
</style>
