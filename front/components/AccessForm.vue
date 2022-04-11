<template>
  <v-app>
    <v-main>
      <v-container class="mt-5 fill-height" fluid>
        <div class="loroLogo">
          <v-spacer />
          <v-img
            lazy-src="require(../static/lorologo-removebg-preview.png)"
            height="350"
            width="450"
            :src="require('../static/lorologo-removebg-preview.png')"
          />
        </div>
        <v-row class="main-row">
          <v-col
            cols="12"
            md="4"
            offset-md="2"
          >
            <v-card elevation="5" class="main-card blue-grey darken-3 accent-2" width="100%">
              <v-window v-model="$store.state.stepChange">
                <v-window-item :value="2">
                  <SignupForm />
                </v-window-item>
                <v-window-item :value="1">
                  <LoginForm />
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AccessForm',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#app {
  position: relative;
  background-image: url("https://images.pexels.com/photos/92083/pexels-photo-92083.jpeg");
  background-size: cover;
  background-position: center;
}
.main-card {
 padding: 25px;
}
v-card {
  margin: 10;
}
.loroLogo {
  position: absolute;
  right: 200px;
  top: 0;
}
</style>
