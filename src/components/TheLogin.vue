<template>
  <div class="card">
    <form class="form-control" @submit.prevent="submitForm">
      <label for="email">Email</label>
      <input type="email" id="email" v-model.trim="email" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password" />
      <p v-if="!formIsValid">
        Please enter a valid email and password (at least 6 characters long).
      </p>
      <the-button>{{ submitButton }}</the-button>
      <the-button type="button" mode="flat" @click="switchAuthMode">{{
        switchModeButtonCaption
      }}</the-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
    }
  },
  computed: {
    submitButton() {
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead'
      } else {
        return 'Login'
      }
    },
  },
  methods: {
    submitForm() {
      this.formIsValid = true
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false
        return
      }

      if (this.mode === 'login') {
        //...
      } else {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
        })
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  .form-control {
    margin: 0.5rem 0;
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
      display: block;
    }
    input,
    textarea {
      display: block;
      width: 100%;
      font: inherit;
      border: 1px solid #ccc;
      padding: 0.15rem;
    }

    input:focus,
    textarea:focus {
      border-color: #3d008d;
      background-color: #faf6ff;
      outline: none;
    }
    form {
      margin: 1rem;
      border: 1px solid #ccc;
      border-radius: 12px;
      padding: 1rem;
    }
  }
}
</style>
