<template>
  <el-container class="index">

    <!-- 头部 -->
    <el-header class="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="logo">
          <el-image
            style="width: 100px"
            src="https://i.loli.net/2019/08/08/hgHb9ERsu6t2jB7.png">
          </el-image>
        </el-menu-item>

        <el-submenu index="user" style="float: right;">
          <template slot="title">
            <el-avatar size="large" src="https://i.loli.net/2019/08/01/5d4277746b10245068.png"></el-avatar>
          </template>
          <el-menu-item index="home">个人中心</el-menu-item>
          <el-menu-item index="logout">退出当前账号</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>


    <!--      中间部分-->
    <el-main>

      <el-row>
        <el-col :span="8" v-for="video in video_data" :key="video.id" style="padding-bottom: 1%">
          <el-card shadow="hover" :span="8">
            <el-row :gutter="12">
              <el-col :span="8">
                标题：{{video.title}}<br>
                作者：{{video.author}}<br>
              </el-col>
              <el-col :span="16">
                <video src="http://127.0.0.1:8000/static/media/video/QQ20190726-210821-HD.mp4" style="width: 100px;"></video>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
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
        activeIndex: 'logo',
        video_data: [],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      this.$http.get("http://127.0.0.1:8000/apis/video/all/").then(res => {
        this.video_data = res.data.data;
        console.log(res.data.data)
      }, err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 30px;
    position: relative;
    top: 0;
    left: 0;
    z-index: 200;
  }
</style>
