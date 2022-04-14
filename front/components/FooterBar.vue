<template>
  <v-footer v-if="!$vuetify.breakpoint.xs" absolute color="#565EE8">
    <v-container>
      <v-card>
        <h6 class="text-center">
          PeekBeats © {{ new Date().getFullYear() }} — All Rights Reserved
        </h6>
      </v-card>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>
<style lang="scss" scoped>
h6 {
  background-color: #2730df50
}
</style>
