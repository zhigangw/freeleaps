<template>
  <basic-header>
    <template #logo>
      <img class="logo" alt="freeleaps logo" src="../../../assets/logo.png" />
    </template>
    <template #shoutout>
      <h3 class="text-wrap shoutout">Freeleaps – The leading platform for software freelancers</h3>
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
    max-width: 100%;
    max-height: 100%;
}
.shoutout
{
  font-size: 3vmin;
}
</style>