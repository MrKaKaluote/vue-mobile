<template>
  <div class="hello">
    <h1 @click="increase">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2 @click="todetail">Ecosystem</h2>
    <mt-button @click="login">按钮</mt-button>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import * as homeApi from 'api/home-api'
import { ERR_OK } from 'config/index'
export default {
  data () {
    return {
      msg: 'Welcome to Gaosong Vue.js App',
      num: 0
    }
  },
  created() {
    // console.log(this.number)
  },
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    increase() {
      this.num++
      this.setNum(this.num)
      this.$router.goBack()
    },
    todetail() {
      // this.$router.push('/Detail')
      this.$router.togo('/Home/Detail')
    },
    login() {
      let params = {
        password: 'gs123456',
        storeNo: '',
        userName: '17326015487'
      }
      homeApi.loginUserNo(params).then((res) => {
        let {data} = res
        if (data.success === ERR_OK) {
          alert(data.value.token)
        } else {
        }
      }).catch(() => {
      })
    }
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.hello{
  h1{
    color: red;
    .fs(38);
  }
}
</style>
