<template>
  <div class="font">
    <!-- <v-col cols="12" md="5" class="newTo deep-purple darken-2">
        <v-card-text class="white--text mt-12">
          <h1 class="text-center">
            New to PeekBeats?
          </h1>
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
            @click="stepChanger"
          >
            Join now
          </v-btn>
        </div>
      </v-col> -->
    <v-col cols="12" md="12">
      <v-card-text>
        <div>
          <h1 class="teal--text text--accent-2">
            <p>
              Welcome again!
            </p>
          </h1>
        </div>
        <v-divider class="mt-3 mb-5" dark />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            background-color="blue-grey darken-2"
            dark
            color="white"
            outlined
            :rules="emailRules"
            label="E-mail"
            prepend-inner-icon="mdi-at"
            required
            autocomplete="username email"
            @keyup.enter="validate(); login()"
          />
          <v-text-field
            v-model="pass1"
            required
            background-color="blue-grey darken-2"
            dark
            color="white"
            hint="At least 8 characters"
            counter
            :rules="passwordRules"
            outlined
            :type="passVisible ? 'text' : 'password'"
            label="Password"
            prepend-inner-icon="mdi-onepassword"
            :append-icon="
              passVisible
                ? 'mdi-eye-outline'
                : 'mdi-eye-off-outline'
            "
            autocomplete="new-password"
            @click:append="passVisible = !passVisible"
            @keyup.enter="validate(); login()"
          />
          <v-divider class="mb-5" dark />
          <div>
            <h3 class="white--text">
              <p>
                ¿New user?
                <a
                  class="text-decoration-none teal--text"
                  @click="stepChanger"
                > JOIN NOW </a>
              </p>
            </h3>
          </div>
          <div class="text-center mt-5">
            <v-btn
              :disabled="!valid"
              class="mt-5"
              color="teal accent-2"
              outlined
              elevation="2"
              x-large
              block
              @click="validate(); login()"
            >
              login
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-col>
  </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data () {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      pass1: '',
      passwordRules: [
        v => !!v || 'Required.',
        v => v.length >= 8 || 'Min 8 characters'
      ],
      passVisible: false
    }
  },
  methods: {
    stepChanger () {
      this.$store.commit('stepChanger', 2)
    },
    validate () {
      this.$refs.form.validate()
    },
    async login () {
      await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.pass1
        }
      })
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style scoped>
.newTo {
  background-image: url("../static/cassette-blur.jpg");
  background-size: auto;
  background-position: center;
}
</style>
