<template>
  <div class="input-box">
    <span class="icon"></span>
    <input type="text" class="search" placeholder="找人 找故事">
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
.input-box{
  position: relative;
  .icon{
    position: absolute;
    display: inline-block;
    .w(45);
    .h(45);
    top: 50%;
    .mt(-18);
    .left(-20);
    background-image: url("../assets/imgs/search.svg");
    background-size: cover;
  }
  .search{
    .b-radius(8);
    .h(50);
    .lh(50);
    width: 100%;
    outline: none;
    .pl(50);
    .pt(5);
    .pt(5);
    .ml(-25);
    .fs(26);
  }
}
</style>
