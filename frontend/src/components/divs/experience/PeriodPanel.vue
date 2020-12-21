<template>
  <div>
    <table>
      <tr>
        <td>
          <p>{{headline}}</p>
          <p>{{description}}</p>
        </td>
        <td>
          <button @click="onEdit">Edit</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PeriodPannel",
  props: {
    period: null,
  },
  components: {},
  emits: ["edit"],

  data() {
    return {};
  },

  computed: {
    headline: function () {
      return (
        this.period.startDate +
        " - " +
        this.period.endDate +
        ", " +
        this.period.headline
      );
    },
    description: function () {
      return this.period.description;
    },
  },

  created() {},
  mounted() {},
  methods: {
    onEdit() {
      this.$emit("edit", this.period);
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
