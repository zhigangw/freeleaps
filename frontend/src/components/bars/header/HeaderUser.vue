<template>
  <nav class="navbar navbar-expand navbar-light bg-light m-0 p-0 h-100">
    <div class="container-fluid h-100">
      <a class="navbar-brand h-100 m-0 p-0" href="#">
        <img class="logo" alt="freeleaps logo" src="../../../assets/logo.png" />
      </a>
      <div class="navbar-nav nav-pills nav-fill mx-auto h-100 w-50 flex-wrap">
        <button class="nav-link btn btn-link w-20 active 0 shoutout" aria-current="page">Home</button>
        <button class="nav-link btn btn-link w-20 shoutout" href="#">Link</button>
        <button class="nav-link btn btn-link w-20 shoutout" href="#">Disabled</button>
        <button class="nav-link btn btn-link w-20 shoutout" href="#">Disabled</button>
      </div>
      <button class="btn btn-outline-success h-100" type="submit">Search</button>
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

.shoutout {
  @include media-breakpoint-up(xs) {
    font-size: rfs-fluid-value(0.7rem);
  }
  @include media-breakpoint-up(sm) {
    font-size: rfs-fluid-value(1.125rem);
  }
  @include media-breakpoint-up(md) {
    font-size: rfs-fluid-value(1.5rem);
  }
  @include media-breakpoint-up(lg) {
    font-size: rfs-fluid-value(2rem);
  }
  @include media-breakpoint-up(xl) {
    font-size: rfs-fluid-value(2rem);
  }
  @include media-breakpoint-up(xxl) {
    font-size: rfs-fluid-value(2.5rem);
  }
  @extend .align-middle;
  @extend .text-wrap;
  color: #fae4ab;
  height: 100%;
}
</style>