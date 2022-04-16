<template>
  <v-app>
    <v-main v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
      <v-card
        flat
        tile
        class="main-card"
        color="#fff"
        width="100%"
        height="100%"
      >
        <v-window v-model="$store.state.stepChange">
          <v-window-item :value="2">
            <SignupForm />
          </v-window-item>
          <v-window-item :value="1">
            <LoginForm />
          </v-window-item>
        </v-window>
      </v-card>
    </v-main>
    <v-main v-else>
      <v-container class="mt-5 fill-height" fluid>
        <div class="loroLogo">
          <v-spacer />
          <v-img
            class="move"
            width="45vw"
            :src="require('../static/PEEKBEATS.png')"
          />
        </div>
        <v-row class="main-row">
          <v-col
            cols="12"
            offset-lg="7"
            lg="4"
            offset-md="7"
            md="5"
          >
            <!-- deep-purple lighten-2 -->
            <v-card flat tile class="main-card" color="#fff" width="100%">
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

  // background-image: url("https://images.pexels.com/photos/3916376/pexels-photo-3916376.jpeg");
  // background-image: url("https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  // background-image: url("https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg");
<style scoped>
#app {
  position: relative;
  background-image: url("https://images.pexels.com/photos/8512607/pexels-photo-8512607.jpeg");
  background-size: cover;
  background-position: center;
  margin: -20px !important;
}
.main-card {
 padding: 25px;
}
v-card {
  margin: 10;
}
.loroLogo {
  position: absolute;
  left: 8%;
  top: 45%;
}
.move {
  animation:bounce-in-bck 1.5s both
}
@keyframes bounce-in-bck{0%{transform:scale(7);animation-timing-function:ease-in;opacity:0}38%{transform:scale(1);animation-timing-function:ease-out;opacity:1}55%{transform:scale(1.5);animation-timing-function:ease-in}72%{transform:scale(1);animation-timing-function:ease-out}81%{transform:scale(1.24);animation-timing-function:ease-in}89%{transform:scale(1);animation-timing-function:ease-out}95%{transform:scale(1.04);animation-timing-function:ease-in}100%{transform:scale(1);animation-timing-function:ease-out}}
</style>
