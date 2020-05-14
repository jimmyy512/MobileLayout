<template>
    <div id="about1">
        <div class="topBlock"></div>
        <div class="listView">
            <div class="block" v-for="(it,index) in data" :key="index">
                <div>
                    {{`id : ${it.id} index: ${index}`}}
                </div>
            </div>
        </div>
        <div class="footer">
            this is footer
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      data: new Array(20).fill().map(() => {
        return {
          id: parseInt(Math.random() * 100 + 1)
        };
      })
    };
  }
};
</script>

<style lang="scss" scoped>
#about1{
    $topBlockHeight:30%;
    $listViewHeight:65%;
    $footerHeight:5%;
    height:calc(100% - #{$MainTitleHeight} - 10px);
    %BlockCss{
        margin:10px 10px 0px 10px;
    }
    .topBlock{
        @extend %BlockCss;
        height:$topBlockHeight;
        background-color: skyblue;
    }
    .listView{
        @extend %BlockCss;
        margin-bottom:10px;
        padding-bottom: 10px;
        height:calc(#{$listViewHeight} - 20px);
        background-color: rgb(155, 214, 77);
        overflow: auto;
        display:flex;
        flex-wrap: wrap;
        .block{
            width:calc(50% - 15px);
            height:20%;
            background-color: #fff;
            margin:10px 0px 0px 10px;
            display:flex;
            align-items: center;
            div{
                width:100%;
                text-align:center;
            }
        }
    }
    .footer{
        height:$footerHeight;
        background-color: gray;
        color:white;
        display:flex;
        align-items:center;
        justify-content: center;
    }
}
</style>
