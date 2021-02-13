<template>
  <div>
    <h3 class="slogan">Find a trustworthy partner, simplify the work, secure your return.</h3>
    <div class="contian-div">
      <div class="row row-cols-4">
        <div class="col"></div>
        <div class="col-6 col-md-4 col-lg-2">
          <EmailInput :placeholder="'Your Email'" />
        </div>
        <div class="col-3 col-md-2 col-lg-1">
          <button class="btn btn-primary" @click="gotoBuyerRegister">Start</button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from "../../components/inputs/user/EmailInput";

export default {
  name: "FrontDoor",
  props: {},

  data() {
    return {};
  },

  components: {
    EmailInput,
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slogan {
  @extend .text-start;
  padding: 2%;
  color: $info;
}
.contian-div {
  @extend .container;
  padding: 2%;
  /*border: solid black 1px;*/
}
</style>
