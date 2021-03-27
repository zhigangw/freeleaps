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
          ["bold", "italic", "strike", "underline", "link"], // toggled buttons
          ["blockquote", "code-block"],

         // [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          //[{ script: "sub" }, { script: "super" }], // superscript/subscript
          //[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          //[{ direction: "rtl" }], // text direction

          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          
          ["clean"],
        ],
      },
      theme: "snow",
      formats: [
        "align",
        "background",
        "blockquote",
        "bold",
        "code",
        "color",
        "code-block",
        "direction",
        "font",
        "header",
        "image",
        "indent",
        "italic",
        "link",
        "list",
        "size",
        "strike",
        "script",
        "underline",
        "video",
      ],
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

