<template>
  <div>
    <label v-if="label" :for="label">{{label}}</label>
    <select ref="selectInput" :id="label" @change="onChange($event)" :value="modelValue">
      <option v-for="item in options" :key="item.name" :value="item.name">{{item.name}}</option>
    </select>
    <p v-if="message != null">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "LabelSelectInput",
  props: {
    label: null,
    modelValue: null,
    options: null,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      message: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate(validator, value) {
      console.log(value);
      this.message = validator(value);
      return this.message;
    },

    onChange(event) {
      this.$emit("update:modelValue", event.target.value);
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
