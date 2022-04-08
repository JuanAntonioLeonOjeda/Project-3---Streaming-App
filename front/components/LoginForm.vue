<template>
  <div class="font">
    <v-row class="fill-height">
      <v-col cols="12" md="5" class="newTo deep-purple darken-2">
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
      </v-col>
      <v-col cols="12" md="7">
        <v-card-text class="mt-12">
          <h1 class="text-center teal--text text--accent-2">
            LogIn
          </h1>
          <v-divider class="mt-3 mb-3" dark />
          <v-form>
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
              @click:append="passVisible = !passVisible"
            />
            <v-divider class="mt-3 mb-3" dark />
            <div class="text-center mt-5">
              <v-btn
                class="mt-5"
                color="teal accent-2"
                outlined
                elevation="2"
                x-large
                block
                @click="login"
              >
                login
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  props: {
  },
  data () {
    return {
      name: 'LoginForm',
      valid: true,
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
      select: null,
      checkbox: false,
      pass1: '',
      pass2: '',
      passwordRules: [
        v => !!v || 'Required.',
        v => v.length >= 8 || 'Min 8 characters'
      ],
      radioGroup: '',
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      passVisible: false,
      passVisible1: false,
      alert: true,
      noError: true,
      hasError: true
    }
  },
  computed: {
    passwordConfirmationRule () {
      return () => this.pass1 === this.pass2 || 'Password must match'
    }
  },
  mounted () {
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
.font {
  font-family: "Cormorant", serif;
}
h1 {
  font-size: calc(1vw + 1vh + 1.5vmin);
  line-height: 80%;
  padding: 10px;
}
.newTo {
  background-image: url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?cs=srgb&dl=pexels-c%C3%A1tia-matos-1072179.jpg&fm=jpg");
  background-size: 1000px 1000px;
}
.alreadyOn {
  background-image: url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?cs=srgb&dl=pexels-c%C3%A1tia-matos-1072179.jpg&fm=jpg");
  background-size: 1000px 1000px;
}
.alert {
  width: 70%;
  margin: 10px auto;
}
.text-success {
  display: none;
}
.text-danger {
  display: none;
}
</style>
