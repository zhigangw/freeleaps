<template>
  <input type="date" v-bind="$attrs" :value="dateValue" @input="onChange($event)" />
</template>

<script>
export default {
  name: "DateInput",
  props: {
    modelValue: null,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      dateValue: null,
    };
  },

  created() {},
  mounted() {
    if (this.modelValue instanceof Date) {
      this.dateValue = this.modelValue.toISOString().split('T')[0];
    } else {
      this.dateValue = this.modelValue;
    }
  },
  methods: {
    onChange(event) {
      if (this.modelValue instanceof Date) {
        this.dateValue = new Date(event.target.value);
      } else {
        this.dateValue = event.target.value;
      }
      this.$emit("update:modelValue", this.dateValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
