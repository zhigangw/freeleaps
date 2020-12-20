<template>
  <div>
    <div>
      <button @click="addPeriod">Add</button>
    </div>
    <period-pannel
      v-for="period in periods"
      :key="period.startDate"
      :id="period.startDate"
      :period="period"
      @edit="editPeriod($event)"
    />
  </div>
</template>

<script>
import PeriodPannel from "./PeriodPanel";

export default {
  name: "ExperiencePannel",

  props: {
    periods: null,
  },

  components: {
    PeriodPannel,
  },
  
  emits: ["edit"],

  data() {
    return {};
  },

  computed: {},

  created() {},
  mounted() {},
  methods: {
    addPeriod() {
      this.$emits("add", event.target.period);
    },
    editPeriod(event) {
      this.$emits("edit", event.target.period);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
