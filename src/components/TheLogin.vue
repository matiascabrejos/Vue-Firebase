<template>
  <div class="card">
    <form action="" class="form-control">
      <label for="email">Email</label>
      <input type="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" v-model="password" />
      <button>Login</button>
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
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
  }
}
</style>
