<template>
  <div v-bind="$attrs" ref="editor"></div>
</template>
<script>
import Quill from "quill";

export default {
  name: "RichTextEditor",
  props: {
    modelValue: null,
    placeholder: null,
  },

  emits: ["update:modelValue", "edit"],
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    let editorConfiguration = {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline"],
        ],
      },
      theme: "bubble",
      formats: ["bold", "underline", "header", "italic"],
      placeholder: this.placeholder,
    };

    this.editor = new Quill(this.$refs.editor, editorConfiguration);

    this.editor.root.innerHTML = this.modelValue;

    this.editor.on("text-change", () => this.update());
  },

  methods: {
    update() {
      this.$emit(
        "edit",
        this.editor.getText() ? this.editor.root.innerHTML : ""
      );
    },
  },
};
</script>

