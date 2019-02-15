<template>
    <div class="header-box">
      <div class="left-icon">
        <span v-if="showback" @click="back" class="icon-back"></span>
      </div>
      <div class="header-tittle">
        <span v-if="showinput">
          <cus-input></cus-input>
        </span>
        <span v-if="!showinput">{{tittle}}</span>
      </div>
      <div class="right-icon">
        <span v-if="showmore" class="icon"></span>
      </div>
    </div>
</template>

<script>
import cusInput from 'common/cus-input'
export default {
  data() {
    return {}
  },
  props: {
    showright: {
      type: Boolean,
      default: false
    },
    showleft: {
      type: Boolean,
      default: false
    },
    showinput: {
      type: Boolean,
      default: false
    },
    tittle: {
      type: String,
      default: '标题'
    },
    showback: {
      type: Boolean,
      default: true
    },
    showmore: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.goBack()
    }
  },
  components: {
    cusInput
  }
}
</script>

<style lang="less" scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
.header-box{
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  .h(100);
  .lh(100);
  background-color: @base-color;
  color: @base-header-color;
  .fs(@base-header-size);
  display: flex;
  z-index: 1;
  .left-icon{
    position: relative;
    flex: 1;
    .icon-back{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .left(25);
      .top(25);
      background-image: url("../assets/imgs/w-back.svg");
      background-size: cover;
    }
  }
  .header-tittle{
    flex: 3;
  }
  .right-icon{
    position: relative;
    flex: 1;
    .icon{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .right(25);
      .top(25);
      background-image: url("../assets/imgs/more.svg");
      background-size: cover;
    }
  }
}
</style>
