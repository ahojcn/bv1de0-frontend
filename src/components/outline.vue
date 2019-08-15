<template>
  <div>
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
            <el-col :span="5" v-for="video in video_data" :key="video.id" style="padding-bottom: 1%">
              <el-row>
                <el-col :span="23">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <video
                      :src="'http://localhost:8000/' + video.file_url"
                      class="image"></video>
                    <div style="padding: 14px;">
                      <span>{{video.title}}</span>
                      <div class="bottom clearfix">
                        <time class="time">{{ video.categories }}</time>
                        <el-button class="button" type="primary" @click="goToVideo(video)">
                          去瞅瞅
                        </el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="1"></el-col>
              </el-row>
            </el-col>
          </el-row>

        </el-card>
      </el-col>

      <el-col :span="5" class="float_box">
        <el-row>
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <span>
                新用户
                <i class="el-icon-user"></i>
              </span>
            </div>

            <el-tooltip placement="top" v-for="user in new_users" :key="user.id">
              <el-avatar size="medium" :src=" 'http://127.0.0.1:8000/' + user.avatar "></el-avatar>
              <div slot="content">{{user.username}}<br/>{{user.motto}}<br>{{Date(user.date_joined)}}</div>
            </el-tooltip>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "outline",

    data() {
      return {
        video_data: [],
        new_users: [],
      };
    },
    methods: {
      goToVideo(video) {
        this.$router.push({
          name: 'bv1de0',
          params: {
            'video': video
          }
        })
      },
    },
    mounted() {
      // 获取视频列表
      this.$http.get("apis/video/all/").then(res => {
        this.video_data = res.data.results;
      }, err => {
        console.log(err)
      });

      // 获取最新用户
      this.$http.get("apis/user/").then(res => {
        this.new_users = res.data.results;
        console.log(res.data.results)
      }, err => {
        console.log(err)
      });
    }
  }
</script>

<style scoped>


  .float_box {
    display: block;
    position: fixed;
    right: 2%;
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
