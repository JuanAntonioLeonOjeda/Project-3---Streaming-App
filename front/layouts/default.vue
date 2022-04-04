<template>
  <v-app dark>
    <v-main>
      <NavBar />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
<<<<<<< HEAD
    <FooterBar />
=======
>>>>>>> f6cdf6db545ba35c864b1d871d7a2ffe917e3221
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
