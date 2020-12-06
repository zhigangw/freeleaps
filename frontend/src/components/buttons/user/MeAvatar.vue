<template>
  <div>
    <button @click="gotoSettings">Me</button>
  </div>
</template>

<script>
export default {
  name: "MeAvatar",
  components: {},
  computed: {},
  methods: {
    gotoSettings() {
      if (this.mnx_isUserAuthenticated()) {
        this.mnx_navToUserSettings();
      }
    },
  },
};
</script>

<style scoped>
</style>