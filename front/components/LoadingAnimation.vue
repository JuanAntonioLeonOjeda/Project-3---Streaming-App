<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <div class="text-center">
          <v-progress-circular indeterminate :size="200" color="primary" />
        </div>
        <div class="mt-3 text-center">
          Searching...
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoadingAnimation'
}
</script>

<style lang="scss" scoped>
.spacer {
  height: 150px;
}
</style>
