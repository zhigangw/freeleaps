<template>
  <basic-header>
    <template #logo>
      <img class="img-freeleaps-logo" alt="freeleaps logo" src="../../../assets/logo.png" />
    </template>
    <template #shoutout>
      <h3>Freeleaps – The leading platform for software freelancers</h3>
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
.img-freeleaps-logo {
  float: left;
  height: 70%;
  margin: 15px;
  background: #555;
}
</style>