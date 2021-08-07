<template>
  <div  class="bg_box">
    <div style="height: 40px;margin-bottom: 10px;padding-left: 5px;margin-top: 10px;text-align: left">
      <el-button type="primary" icon="el-icon-arrow-left" @click="linkTo('/setting')">返回</el-button>
    </div>
    <div class="bg_img">
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/sysSetting1.jpg"
          :preview-src-list='url'
      ></el-image>
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/sysSetting2.jpg"
          :preview-src-list='url'
      ></el-image>
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/sysSetting3.jpg"
          :preview-src-list='url'
      ></el-image>
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/sysSetting4.jpg"
          :preview-src-list='url'
      ></el-image>
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/sysSetting5.jpg"
          :preview-src-list='url'
      ></el-image>
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/sysSetting6.jpg"
          :preview-src-list='url'
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "SysSetting",
  methods:{
    linkTo(url) {
      this.$router.push(url)
    }
  },
  data:function () {
    return {
      url:[
        "/static/danmaku/img/setting/sysSetting1.jpg",
        "/static/danmaku/img/setting/sysSetting2.jpg",
        "/static/danmaku/img/setting/sysSetting3.jpg",
        "/static/danmaku/img/setting/sysSetting4.jpg",
        "/static/danmaku/img/setting/sysSetting5.jpg",
        "/static/danmaku/img/setting/sysSetting6.jpg",
      ]
    }
  }
}
</script>

<style scoped>
.el-button--primary {
  font-weight: 600;
  color: #716454;
  background-color: #f2efde;
  border-color: #f2efde;
}
</style>