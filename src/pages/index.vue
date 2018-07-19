<template>
  <div class="page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="nav-footer">
      <footer>
        <router-link v-for='(item, index) in navList' :to='item.path' :key='index'
                     v-bind:class="{'active':activeRoute == item.path}">
          <div :class="'tab-'+index"></div>
          <p v-text="item.name"></p>
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          'path': '/home',
          'name': '推荐'
        },
        {
          'path': '/story',
          'name': '故事'
        },
        {
          'path': '/footprints',
          'name': '足迹'
        },
        {
          'path': '/day',
          'name': '纪念日'
        }
      ]
    }
  },
  computed: {
    activeRoute () {
      return this.$route.path
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.nav-footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    .h(98);
    background: @tab-general-bg-color;
    display: block;
    footer {
      font-size: 0;
      border-top: 1px solid #E7E7E7;
      border-bottom: 1px solid #F8F8F8;
      .pt(10);
      line-height: 1.2;
      width: 100%;
      .h(98);
      display: flex;
      a {
        text-decoration: none;
        color: @base-font-color;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        display: block;
        .fs(22);
        .tab-0, .tab-1, .tab-2, .tab-3 {
          display: inline-block;
          .h(42);
          .w(42);
          background-size: cover;
        }
        .tab-0 {
          background-image: url("../assets/imgs/index-noselect.svg");
        }
        .tab-1 {
          background-image: url("../assets/imgs/note-noselect.svg");
        }
        .tab-2 {
          background-image: url("../assets/imgs/print-noselect.svg");
        }
        .tab-3 {
          background-image: url("../assets/imgs/dy-noselect.svg");
        }
        &:hover {
          text-decoration: none;
        }
        &.router-link-active.active {
          .tab-0 {
            background-image: url("../assets/imgs/index-select.svg");
          }
          .tab-1 {
            background-image: url("../assets/imgs/note-select.svg");
          }
          .tab-2 {
            background-image: url("../assets/imgs/print-select.svg");
          }
          .tab-3 {
            background-image: url("../assets/imgs/dy-select.svg");
          }
        }
      }
      p {
        margin: 0;
      }
    }
  }
</style>
