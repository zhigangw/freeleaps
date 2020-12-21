<template>
  <div>
    <div>
      <button @click="addPeriod()">Add</button>
    </div>
    <period-pannel
      v-for="period in periods"
      :key="period.startDate"
      :id="period.oid"
      :period="period"
      @edit="editPeriod"
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

  emits: ["add", "edit"],

  data() {
    return {};
  },

  computed: {},

  created() {},
  mounted() {},
  methods: {
    addPeriod() {
      this.$emit("add");
    },
    editPeriod(period) {
      this.$emit("edit", period);
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
