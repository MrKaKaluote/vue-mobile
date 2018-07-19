<template>
  <div>
    <common-header :tittle="tittle" :showmore="true"></common-header>
    <div class="page-content">
      <h1 @click="tohome">详情页面</h1>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
  data () {
    return {
      tittle: '详情'
    }
  },
  components: {
    commonHeader
  },
  methods: {
    tohome () {
      this.$router.goBack()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";

</style>
