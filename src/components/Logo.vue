<template>
  <RouterLink to="/" class="logo">
    <!-- <img src="~/assets/Logo.png" alt="CSPI" /> -->
    <span> OMDbAPI </span>
    .COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: $black;
  span {
    color: $primary;
  }
  img {
    padding: 20px;
  }
}
</style>
