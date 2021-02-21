<template>
  <div class="container-div">
    <img class="logo" alt="freeleaps logo" src="../../../assets/logo.png" />
    <span class="shoutout">Freeleaps – The leading platform for software freelancers</span>
  </div>
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
.container-div {
  width: 100%;
  height: 100%;
}
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