<template>
  <div>
    <label for="labelTextInput">{{name}}</label>
    <input id="labelTextInput" v-bind="$attrs" @input="onInput($event)" :value="modelValue" />
    <p v-if="message != null">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "LabelTextInput",
  props: {
    name: null,
    modelValue: null,
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
      this.message = validator(value);
      return this.message;
    },
    onInput(event) {
      this.message = null;
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
