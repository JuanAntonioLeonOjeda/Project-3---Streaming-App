<template>
  <div class="font">
    <v-col cols="12" md="12">
      <v-card-text>
        <div>
          <h1>
            <p>
              Welcome again!
            </p>
          </h1>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :light="$vuetify.theme.dark === true"
            color="$vuetify.theme.light"
            outlined
            :rules="emailRules"
            label="E-mail"
            prepend-inner-icon="mdi-at"
            required
            flat
            autocomplete="username email"
            @keyup.enter="validate(); login()"
          />
          <v-text-field
            v-model="pass1"
            required
            :light="$vuetify.theme.dark === true"
            color="$vuetify.theme.light"
            hint="At least 8 characters"
            counter
            :rules="passwordRules"
            outlined
            flat
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
          <div>
            <h3>
              <p>
                ¿New user?
                <a
                  class="text-decoration-none"
                  @click="stepChanger"
                > JOIN NOW </a>
              </p>
            </h3>
          </div>
          <v-divider class="mt-3 mb-5 black" />
          <div class="text-center">
            <v-alert
              :class="{ alert: alert, 'text-danger': hasError }"
              border="top"
              color="pink darken-1"
              dark
            >
              Email or password incorrect.
              <v-spacer />
              <v-col class="shrink">
                <v-btn
                  color="white"
                  outlined
                  @click="hasError=true"
                >
                  Okay
                </v-btn>
              </v-col>
            </v-alert>
            <v-btn
              :disabled="!valid"
              class="mt-5"
              color="#565EE8"
              outlined
              tile
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
      passVisible: false,
      alert: true,
      hasError: true
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
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.pass1
          }
        })
        this.$store.commit('saveCurrentUser', this.$auth.$state.user)
        this.$router.push({ path: '/home' })
      } catch (error) {
        if (this.email || this.pass1 === '') {
          this.hasError = true
        }
        this.hasError = false
      }
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
.text-danger {
  display: none;
}
h1, a {
  color: #565EE8;
}
h3 {
  color: #353A3D;
}
</style>
