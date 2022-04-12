<template>
  <div class="font">
    <!-- <v-col
        cols="12"
        md="5"
        class="alreadyOn deep-purple darken-2"
      >
        <v-card-text class="white--text">
          <h1 class="text-center">
            Welcome to a place where you choose what you fancy to hear
          </h1>
        </v-card-text>

        <v-divider class="mt-3 mb-3" dark />

        <v-card-text class="white--text">
          <h1 class="text-center">
            Already a Peek?
          </h1>
        </v-card-text>
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
            LogIn
          </v-btn>
        </div>
      </v-col> -->
    <v-col cols="12" md="12" class="formularios">
      <v-card-text>
        <h1 class="teal--text text--accent-2">
          <p>
            Create an account
          </p>
        </h1>
        <v-divider
          class="
              mt-3
              mb-4"
          dark
        />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            background-color="blue-grey darken-2"
            dark
            color="white"
            outlined
            :counter="10"
            :rules="usernameRules"
            label="Username"
            prepend-inner-icon="mdi-form-textbox"
            required
            autocomplete="username"
          />
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
          />
          <v-text-field
            v-model="pass1"
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
          />
          <v-text-field
            v-model="pass2"
            background-color="blue-grey darken-2"
            dark
            color="white"
            hint="At least 8 characters"
            counter
            :rules="passwordRules.concat(passwordConfirmationRule)"
            outlined
            :type="passVisible1 ? 'text' : 'password'"
            label="Confirm password"
            prepend-inner-icon="mdi-onepassword"
            :append-icon="
              passVisible1
                ? 'mdi-eye-outline'
                : 'mdi-eye-off-outline'
            "
            autocomplete="new-password"
            @click:append="passVisible1 = !passVisible1"
          />
          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    dark
                    color="white"
                    label="Birthday"
                    prepend-icon="mdi-cake-variant-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer />
                  <v-btn
                    text
                    color="primary"
                    @click="modal = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="7"
              md="7"
            >
              <v-checkbox
                v-model="checkbox"
                color="white"
                dark
                :rules="[
                  (v) =>
                    !!v ||
                    'You must agree the Terms and Conditions to continue!',
                ]"
                label="Terms and Conditions"
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="5"
              md="5"
            >
              <v-checkbox
                color="white"
                dark
                label="Mailing List"
                required
              />
            </v-col>
          </v-row>
          <v-divider class="mb-5" dark />
          <div>
            <h3 class="white--text">
              <p>
                Already have an account?
                <a
                  class="text-decoration-none teal--text"
                  @click="stepChanger"
                > LOG IN </a>
              </p>
            </h3>
          </div>
          <v-btn
            :disabled="!valid"
            class="mt-5"
            color="teal accent-2"
            outlined
            elevation="2"
            x-large
            block
            @click="validate(); signup()"
          >
            SignUp
          </v-btn>
        </v-form>
      </v-card-text>
    </v-col>
  </div>
</template>

<script>

export default {
  props: {
  },
  data: () => ({
    name: 'SignupForm',
    valid: false,

    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 10) || 'Username must be less than 10 characters'
    ],

    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],

    pass1: '',
    pass2: '',
    passwordRules: [
      v => !!v || 'Required.',
      v => v.length >= 8 || 'Min 8 characters'
    ],

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    checkbox: false,
    menu: false,
    modal: false,
    menu2: false,
    passVisible: false,
    passVisible1: false
  }),
  computed: {
    passwordConfirmationRule () {
      return () => this.pass1 === this.pass2 || 'Password must match'
    }
  },

  methods: {
    stepChanger () {
      this.$store.commit('stepChanger', 1)
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
    },
    async signup () {
      const form = {
        userName: this.username,
        email: this.email,
        password: this.pass1,
        dateOfBirth: this.date
      }
      await this.$store.dispatch('signup', form)
      this.login()
    }
  }
}
</script>

<style scoped>
.alreadyOn {
  z-index: 1;
  background-image: url("../static/cassette-blur.jpg");
  background-size: cover;
  background-position: center;
}
/* .formularios {
  background-image: url("https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
} */
</style>
