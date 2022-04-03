<template>
  <v-window v-model="step">
    <v-window-item :value="2">
      <div class="text-center">
            <v-btn
              class="mt-5"
              color="teal accent-2"
              outlined
              elevation="2"
              x-large
              dark
              @click="step--"
              >Join now</v-btn
            >
          </div>
    </v-window-item>
    <v-window-item :value="1">
      <v-row class="fill-height">
        <v-col cols="12" md="5" class="newTo deep-purple darken-2">
          <v-card-text class="white--text mt-12">
            <h1 class="text-center">New to Reboot?</h1>
          </v-card-text>
          <v-divider class="mt-3 mb-3" dark />
          <div class="text-center">
            <v-btn
              class="mt-5"
              color="teal accent-2"
              outlined
              elevation="2"
              x-large
              dark
              @click="step++"
              >Join now</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <v-card-text class="mt-12">
            <h1 class="text-center teal--text text--accent-2">
              Create Account
            </h1>
            <v-divider class="mt-3 mb-3" dark></v-divider>
            <v-form>
              <v-text-field
                background-color="blue-grey darken-2"
                dark
                color="white"
                outlined
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                prepend-inner-icon="mdi-at"
                required
              ></v-text-field>
              <v-text-field
                background-color="blue-grey darken-2"
                dark
                color="white"
                hint="At least 8 characters"
                counter
                :rules="passwordRules"
                outlined
                v-model="pass1"
                :type="passVisible ? 'text' : 'password'"
                label="Password"
                prepend-inner-icon="mdi-onepassword"
                :append-icon="
                  passVisible
                    ? 'mdi-eye-outline'
                    : 'mdi-eye-off-outline'
                "
                @click:append="passVisible = !passVisible"
              ></v-text-field>
              <v-divider class="mt-3 mb-3" dark></v-divider>
              <div class="text-center mt-5">
                <v-btn
                  class="mt-5"
                  color="teal accent-2"
                  outlined
                  elevation="2"
                  x-large
                  block
                >
                  sign in
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-col>
      </v-row>
    </v-window-item>
  </v-window>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      step: 1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>