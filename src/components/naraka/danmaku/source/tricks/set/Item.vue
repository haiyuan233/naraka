<template>
  <div  class="bg_box">
    <div style="height: 40px;margin-bottom: 10px;padding-left: 5px;margin-top: 10px;text-align: left">
      <el-button type="primary" icon="el-icon-arrow-left" @click="linkTo('/setting')">返回</el-button>
    </div>
    <div class="bg_img">
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/personal.jpg"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  methods:{
    linkTo(url) {
      this.$router.push(url)
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