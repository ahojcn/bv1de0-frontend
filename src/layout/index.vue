<template>
  <el-container class="index">

    <!-- 头部 -->
    <el-header class="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1">
          <el-image
            style="width: 100px"
            src="https://i.loli.net/2019/08/08/hgHb9ERsu6t2jB7.png">
          </el-image>
        </el-menu-item>

        <el-submenu index="user" style="float: right;">
          <template slot="title">
            <el-avatar size="large" src="https://avatars1.githubusercontent.com/u/43307215?s=460&v=4"></el-avatar>
          </template>
          <el-menu-item index="home">个人中心</el-menu-item>
          <el-menu-item index="logout">退出当前账号</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>


    <!--      中间部分-->
    <el-main>

      <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg">
      <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg">
      <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg">

    </el-main>


    <!--      底部-->
    <el-footer>&copy; bv1de0</el-footer>

  </el-container>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      // this.$http.get("http://127.0.0.1:8000/apis/video/all/").then(res => {
      //   console.log(res)
      // }, err => {
      //   console.log(err)
      // })
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
  }
</style>
