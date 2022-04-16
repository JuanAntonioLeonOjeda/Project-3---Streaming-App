<template>
  <v-footer v-if="!$vuetify.breakpoint.xs" inset height="70" width="auto" app>
    <v-container>
      <v-row justify="center">
        <v-col lg="2" md="3" cols="12" align-self="center">
          <h5 class="text-center">
            PeekBeats © {{ new Date().getFullYear() }} — All Rights Reserved
          </h5>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>
<style lang="scss" scoped>
h1 {
  background-color: #565de849
}
</style>
