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
        <el-col :span="18">
          <el-card shadow="never">
            <div slot="header" class="clearfix">
              <span>
                最新视频
                <i class="el-icon-video-play"></i>
              </span>
            </div>

            <el-row>
              <el-col :span="8" v-for="video in video_data" :key="video.id" style="padding-bottom: 1%">
                <el-row>
                  <el-col :span="23">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                      <video src="http://127.0.0.1:8000/static/media/video/QQ20190726-210821-HD.mp4"
                             class="image"></video>
                      <div style="padding: 14px;">
                        <span>{{video.title}}</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ video.categories }}</time>
                          <el-button type="text" class="button" @click="goToVideo(video)">去瞅瞅</el-button>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="1"> </el-col>
                </el-row>
              </el-col>
            </el-row>

          </el-card>
        </el-col>
        <el-col :span="6">
          <el-row>
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
              <span>
                最新留言
                <i class="el-icon-video-play"></i>
              </span>
              </div>
            </el-card>
          </el-row>
          <el-row>
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
              <span>
                新成员
                <i class="el-icon-video-play"></i>
              </span>
              </div>

              <div>
                <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                <el-divider></el-divider>
                <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
              </div>
            </el-card>
          </el-row>
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
      },
      goToVideo(video) {
        alert(video.id)
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

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
