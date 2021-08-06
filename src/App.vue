<template>
  <div>
    <div id="menus">
      <el-row>
        <el-col :offset="2" :span="20">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }"><a href="#">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#" style="font-weight: 700;">{{this.$root.page}}</a></el-breadcrumb-item>
          </el-breadcrumb>
        </el-col></el-row>
    </div>
    <div id="app">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  width: 100%;
  margin-top: 60px;
  position: absolute;
  z-index: 0;
}

a {
  color: rgba(255, 255, 255, 0.8) !important;
  outline: none !important;
  font-size: 20px !important;
  text-decoration: none !important;
  -webkit-transition: 0.2s !important;
  transition: 0.2s !important;
}

a:hover, a:focus {
  color: #929292 !important;
  font-size: 20px !important;
  text-decoration: none !important;
  cursor: pointer !important;
}

body {
  margin: 0;

  /*!*width: 100%;*!*/
  /*height: 90vh;*/
  /*font-family: "Exo", sans-serif;*/
  /*color: #fff;*/
  /*!*background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab) no-repeat;*!*/
  /*background-size: 400% 400%;*/
  /*animation: gradientBG 15s ease infinite;*/
  /*!*background: url("assets/naraka/yj/bg/hut.png") no-repeat center;*!*/
  /*!*background-size: 1800px 1158px;*!*/
  /*!*background-color: rgba(0, 0, 0, 0.7);*!*/
}

/*@keyframes gradientBG {*/
/*  0% {*/
/*    background-position: 0% 50%;*/
/*  }*/
/*  50% {*/
/*    background-position: 100% 50%;*/
/*  }*/
/*  100% {*/
/*    background-position: 0% 50%;*/
/*  }*/
/*}*/


#menus {
  padding-top: 30px;
}
</style>
