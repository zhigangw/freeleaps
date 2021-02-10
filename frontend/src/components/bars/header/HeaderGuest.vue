<template>
  <basic-header>
    <template #logo>
      <img class="logo" alt="freeleaps logo" src="../../../assets/logo.png" />
    </template>
    <template #panel>
      <h3 class="align-middle text-wrap shoutout">Freeleaps – The leading platform for software freelancers</h3>
    </template>
  </basic-header>
</template>
<script>
import BasicHeader from "../templates/BasicHeader.vue";

export default {
  name: "HeaderGuest",
  components: { BasicHeader },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.logo {
  float: left;
  max-width: 100%;
  max-height: 100%;
}
.shoutout {
  font-size: 3vmin;
  color: #fae4ab;
}
</style>