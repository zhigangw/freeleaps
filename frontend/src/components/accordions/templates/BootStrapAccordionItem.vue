<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="addId">
      <button
        class="accordion-button p-0"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#'+collapseId"
        aria-expanded="false"
        :aria-controls="collapseId"
      >
        <slot name="header" />
      </button>
    </h2>
    <div
      :id="collapseId"
      class="accordion-collapse collapse"
      :aria-labelledby="addId"
      data-bs-parent="#accordion-parent"
    >
      <div class="accordion-body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
<script>
let _uid = 0;
export default {
  name: "BootStrapAccordionItem",
  data() {
    return {
      addId: null,
      collapseId: null,
    };
  },
  mounted() {
    this.addId = "add" + (++_uid).toString();
    this.collapseId = "collapse" + (++_uid).toString();
  },
  components: {},
  computed: {},
  methods: {},
};
</script>