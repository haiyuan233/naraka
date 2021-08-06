<template>
  <div class="home">
    <el-row>
      <el-col :offset="4" :span="8">
        <div class="naraka-box">
          <p>- 游戏工具 -</p>
          <router-link to="/skill">NARAKA印记模拟器&nbsp&nbsp&nbsp</router-link>
          <router-link to="/danmakuKagura">DanMaKu-wiki&nbsp&nbsp&nbsp</router-link>
<!--          <router-link to="/damage">伤害计算器</router-link>-->
        </div>
        <div class="naraka-box">
          <p>- 开发工具 -</p>
          <router-link to="#" @click.native="toPost()">POST娘&nbsp&nbsp&nbsp</router-link>
        </div>
        <div class="naraka-box">
          <p>- BLOG -</p>
          <router-link to="#" @click.native="toBlog()">Kuso Game搬运&nbsp&nbsp&nbsp</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.$root.page = ''
  },
  methods:{
    toPost() {
      window.location.href = 'https://www.wadanoharasp.com:8081';
      // window.location.href = 'http://192.168.8.50:3000/';
    },
    toBlog() {
      window.location.href = 'https://www.wadanoharasp.com:8082';
      // window.location.href = 'http://192.168.8.50:3000/';
    }
  }
}
</script>

<style scoped>
.naraka-box p {
  margin: 10px 0 0 0;
  color: #c94040 !important;
  font-size: 30px !important;
  line-height: 2 !important;
  font-weight: bold !important;
}
.home {
  text-align: center;
  color: #000000;
  font-weight: bold !important;
}
.naraka-box{
  text-align: left;
}
</style>
