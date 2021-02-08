<template>
  <header>
    <div class="container container-div">
      <div class="row row-cols-2">
        <div class="col col-3 col-md-2 col-lg-1">
          <slot name="logo" />
        </div>
        <div class="col col-9 col-md-10 col-lg-11">
          <div class="row row-cols-2 shoutout-row">
            <div class="col-10">
              <slot name="shoutout" />
            </div>
            <div class="col-2">
              <slot name="operation" />
            </div>
          </div>
          <div class="row row-cols-2 operation-row">
            <div class="col-10">
              <slot name="profile" />
            </div>
            <div class="col-2">
              <slot name="status" />
            </div>
          </div>
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
  height: 5rem;
  min-height: 12.5vmax;
}

.container-div {
  width: 100%;
  height: 100%;
}

.shoutout-row {
  height: 67%;
}

.operation-row {
  height: 33%;
}

.shoutout-slot > .child {
  height: 100%;
}

.logo-slot >>> .child {
  display: block;
}
div {
  border: solid black 1px;
  height: 100%;
}
</style>