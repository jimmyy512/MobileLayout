<template>
  <div id="app">
    <my-title></my-title>
    <router-view/>
  </div>
</template>

<script>
import myTitle from "@/components/myTitle";
export default {
  components: {
    myTitle
  }
};
</script>

<style lang="scss">
*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html,body,#app{
  width:100%;
  height:100%;
  overflow:hidden;
}
</style>
