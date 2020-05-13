<template>
    <div id="about1">
        <my-title></my-title>
        <div class="centerBlock"></div>
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

<style lang="scss" scoped>
#about1{
    width:100%;
    height:100%;
    .centerBlock{
        margin:10px 10px;
        height:40%;
        background-color: skyblue;
    }
}
</style>
