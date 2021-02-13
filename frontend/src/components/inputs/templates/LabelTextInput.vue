<template>
  <div>
    <div class="input-group">
      <span v-if="label != null" class="input-group-text" id="basic-addon1">{{label}}</span>
      <input
        v-bind="$attrs"
        @input="onInput($event)"
        :value="modelValue"
        class="form-control"
        :aria-label="label"
        aria-describedby="basic-addon1"
      />
    </div>
    <p v-if="message != null">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "LabelTextInput",
  props: {
    label: null,
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
      this.message = validator.validate(value);
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
</style>
