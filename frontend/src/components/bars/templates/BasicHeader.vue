<template>
  <div class="d-flex container-div">
    <slot name="logo" />
    <slot name="panel" />
  </div>
</template>
<script>
export default {
  name: "BasicHeader",
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
</style>