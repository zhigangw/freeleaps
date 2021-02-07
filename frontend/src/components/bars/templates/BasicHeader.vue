<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-1">
          <slot name="logo" />
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <slot name="shoutout" />
            </div>
            <div class="col">
              <slot name="operation" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <slot name="profile" />
            </div>
            <div class="col">
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
}


div {
  list-style: none;
  margin: 0 2rem;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid black 1px;
}

</style>