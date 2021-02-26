<template>
  <nav class="navbar navbar-expand navbar-light  m-0 p-0 h-100">
    <div class="container-fluid h-100">
      <a class="navbar-brand h-100 m-0 p-0" href="#">
        <img class="logo" alt="freeleaps logo" src="../../../assets/logo.png" />
      </a>
      <div class="nav-bar-container">
        <button class="nav-bar-button" aria-current="page">Workplace</button>
        <button class="nav-bar-button" href="#">Requests</button>
        <button class="nav-bar-button" href="#">Network</button>
        <button class="nav-bar-button" href="#">Post</button>
      </div>
      <button class="btn btn-outline-success h-100" type="submit">Account</button>
    </div>
  </nav>
</template>
<script>
export default {
  name: "HeaderGuest",
  components: {},
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.logo {
  float: left;
  max-width: 100%;
  max-height: 100%;
}

.nav-bar-container {
  @extend .navbar-nav;
  @extend .nav-fill;
  @extend .mx-auto;
  @extend .h-80;
  @extend .w-50;

}

.nav-bar-button {
  @include media-breakpoint-up(xs) {
    font-size: rfs-fluid-value(0.5rem);
  }
  @include media-breakpoint-up(sm) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(md) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(lg) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(xl) {
    font-size: rfs-fluid-value(1rem);
  }
  @include media-breakpoint-up(xxl) {
    font-size: rfs-fluid-value(1rem);
  }
  @extend .align-middle;
  @extend .text-wrap;
  @extend .nav-link;
  @extend .btn;
  @extend .btn-outline-info;
  @extend .border-0;
  @extend .w-20;
  color: #fae4ab;
  height: 100%;
}
</style>