<template>
  <div class="box">
    <p>You're in Home Page</p>
    <p>Well done</p>
    <button class="btn" @click="goToLogin">Back to login</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.box {
  text-align: center;
}
.btn {
  background-color: rgb(71, 232, 243);
  padding: 10px;
  border-radius: 20px;
  border: 1px solid black;
}
</style>
