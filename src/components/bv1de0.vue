<template>
  <div>
    <video id="myVideo" class="video-js" style="margin: 0 auto">
      <source
        :src="'http://127.0.0.1:8000/' + video_data.file_url"
        type="video/mp4">
    </video>

    <el-divider><i class="el-icon-chat-dot-square"></i></el-divider>

    <div v-for="item in comment_data.results" :key="item.id" style="width: 800px; margin: 0 auto; padding-bottom: 5px">
      <el-card shadow="hover">
        <el-avatar :src="'http://127.0.0.1:8000/' + item.user_info.avatar"></el-avatar>
        {{item.detail}}
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bv1de0",
    mounted() {
      this.initVideo();
      this.getVideoComment();
    },
    data() {
      return {
        video_data: this.$route.params.video,
        comment_data: {}
      }
    },
    methods: {
      initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px"
        });
      },

      getVideoComment() {
        this.$http.get('apis/comment/?search=' + this.video_data.id).then(res => {
          this.comment_data = res.data;
          console.log(res.data)
        }, err => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped>

</style>
