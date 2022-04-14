<template>
  <v-app>
    <v-main>
      <v-container class="mt-5 fill-height" fluid>
        <div class="loroLogo">
          <v-spacer />
          <v-img
            class="move"
            height="280"
            width="460"
            :src="require('../static/WelcomePage.png')"
          />
        </div>
        <v-row class="main-row">
          <v-col
            cols="12"
            offset-lg="1"
            lg="4"
            offset-md="1"
            md="5"
          >
            <!-- deep-purple lighten-2 -->
            <v-card elevation="5" class="main-card" color="#3D8287" width="100%">
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
  background-image: url("https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg");
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
  right: 250px;
  top: 320px;
}
.move {
  animation:bounce-in-bck 1.5s both
}
@keyframes bounce-in-bck{0%{transform:scale(7);animation-timing-function:ease-in;opacity:0}38%{transform:scale(1);animation-timing-function:ease-out;opacity:1}55%{transform:scale(1.5);animation-timing-function:ease-in}72%{transform:scale(1);animation-timing-function:ease-out}81%{transform:scale(1.24);animation-timing-function:ease-in}89%{transform:scale(1);animation-timing-function:ease-out}95%{transform:scale(1.04);animation-timing-function:ease-in}100%{transform:scale(1);animation-timing-function:ease-out}}
</style>
