<template>
  <div>
    <div class="input-group mb-3">
      <span v-if="label != null" class="input-group-text" id="basic-addon1">{{label}}</span>
      <input
        v-bind="$attrs"
        @input="onInput($event)"
        v-model="text"
        class="form-control"
        :aria-label="label"
        aria-describedby="basic-addon1"
      />
    </div>
    <p v-if="showMessage()">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "LabelTextInput",
  props: {
    label: null,
    modelValue: null,
    suppressMessage: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      text: null,
      message: null,
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function (val) {
        this.text = val;
      },
    },
  },

  created() {},
  mounted() {},
  methods: {
    showMessage() {
      return this.message != null && this.suppressMessage != true;
    },
    validate(validator, value) {
      this.message = validator.validate(value);
      return this.message;
    },
    onInput(event) {
      event;
      this.message = null;
      this.$emit("update:modelValue", this.text);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
