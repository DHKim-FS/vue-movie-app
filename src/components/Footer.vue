<template>
  <footer>
    <Logo />
    <a href="https://github.com/ParkYoungWoong" target="_blank">
      (C){{ new Date().getFullYear() }} Kim Daehee</a
    >
  </footer>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: 0.3;

  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>
