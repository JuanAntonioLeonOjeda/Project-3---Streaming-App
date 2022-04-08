<template>
  <v-app>
    <v-main>
      <v-container class="mt-5 fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card elevation="5" class="blue-grey darken-3 accent-2">
              <v-window v-model="$store.state.stepChange">
                <v-window-item :value="1">
                  <SignupForm />
                </v-window-item>
                <v-window-item :value="2">
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
  data () {
    return {
      name: 'AccessForm'
    }
  }
}
</script>
