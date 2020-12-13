<template>
  <div>
    <img v-show="showPreview" :src="modelValue" />
    <label :for="label">{{label}}</label>
    <input
      type="file"
      :id="label"
      v-bind="$attrs"
      accept="image/png, image/jpeg"
      @change="onChange($event)"
    />
    <p v-if="message != null">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "LabelImageInput",
  props: {
    label: null,
    modelValue: null,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      message: null,
      imagePreview: this.modelValue,
      showPreview: false,
    };
  },

  created() {},
  mounted() {},
  methods: {
    validate(validator, value) {
      this.message = validator(value);
      return this.message;
    },

    onChange(event) {
      console.log(event.target.files[0]);
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.showPreview = true;
        }.bind(this),
        false
      );
      reader.readAsDataURL(file);
      console.log(file);
      console.log(reader.result);
      this.$emit("update:modelValue", reader.result);
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
