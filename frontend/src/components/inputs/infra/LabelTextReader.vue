<template>
  <div>
    <table>
      <tr>
        <td>
          <label :for="label">{{label}}</label>
        </td>
        <td>
          <button @click="onEdit($event)">Edit</button>
        </td>
      </tr>
      <tr>
        <textarea :id="label" v-bind="$attrs" @input="onInput($event)" v-model="text" readonly />
      </tr>
      <tr>
        <p v-if="message != null">{{message}}</p>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "LabelTextReader",
  props: {
    label: null,
    modelValue: null,
  },
  emits: ["update:modelValue", "edit"],
  data() {
    return {
      text: null,
      message: null,
    };
  },

  created() {},
  mounted() {
    this.text = this.modelValue;
  },
  watch: {
    modelValue: function (val) {
      this.text = val;
    },
  },
  methods: {
    onInput(event) {
      event;
      this.message = null;
      this.$emit("update:modelValue", this.text);
    },

    onEdit(event) {
      event;
      this.$emit("edit", this.text);
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
