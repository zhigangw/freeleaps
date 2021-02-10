<template>
  <header>
    <div class="container container-div">
      <div class="row row-cols-2">
        <div class="col col-3 col-md-2 col-lg-1 ">
          <slot name="logo" />
        </div>
        <div class="col col-9 col-md-10 col-lg-11 center-col">
          <slot name="panel" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "BasicHeader",
  components: {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
header {
  width: 100%;
  height: 4vmax;
  background: #02718f;
}

.container-div {
  width: 100%;
  height: 100%;
}
.center-col {
  padding-top:  1vmax;
}
div {
  /*border: solid black 1px;*/
  height: 100%;
}
</style>