<template>
  <div class="danmaku">
    <el-row>
      <el-col :offset="2" :span="3">
        <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>游戏指北</span>
            </template>
            <router-link to="/info"><el-menu-item index="1-1">机能要求</el-menu-item></router-link>
            <router-link to="/menu"><el-menu-item index="1-2">主界面</el-menu-item></router-link>
            <el-submenu index="1-3">
              <template slot="title">系统玩法</template>
              <router-link to="/normal"><el-menu-item index="1-3-1">基本玩法</el-menu-item></router-link>
              <router-link to="/character"><el-menu-item index="1-3-2">角色养成</el-menu-item></router-link>
              <router-link to="/mission"><el-menu-item index="1-3-3">新手任务</el-menu-item></router-link>
              <router-link to="/setting"><el-menu-item index="1-3-4">设置页面</el-menu-item></router-link>
              <el-menu-item index="1-3-5" disabled>主线剧情（施工）</el-menu-item>
<!--              <router-link to="/story"><el-menu-item index="1-3-5">主线剧情</el-menu-item></router-link>-->
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2" disabled>
            <i class="el-icon-menu"></i>
            <span slot="title">卡查（施工）</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-menu"></i>
            <span slot="title">游戏资源（施工）</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-menu"></i>
            <span slot="title">动态（施工）</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="17">
        <div class="danmaku_box">
          <div class="db_bg">
            <router-view>
            </router-view>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DanmakuKagura",
  mounted() {
    this.$root.page = 'DanMaKu-wiki'
  },
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
.danmaku {
  /*text-align: center;*/
  color: #0b47bb;
  font-weight: bold !important;
}
/deep/ .el-menu {
  border: solid 1px rgb(193,196,174,0.3) !important;
  border-radius: 2%;
  background-color: rgb(0,0,0,0.2) !important;
}
.el-menu span {
  font-weight: 600;
}

/deep/ .el-submenu__title {
  color: white;
}

/deep/ .el-menu-item {
  color: white ;
}

/deep/ .el-menu-item.is-active a{
  color: #ff4040 !important;
  font-weight: 600;
}

/deep/ .el-menu-item.is-active{
  color: #ff4040 !important;
  font-weight: 600;
}


.el-menu-item:focus, .el-menu-item:hover {
  background-color: transparent !important;
}
/deep/ .el-submenu__title:hover {
  background-color: transparent !important;
}


.danmaku_box{
  margin-left: 1%;
  width: 99%;
  border: solid 1px rgb(193,196,174,0.3) !important;
  height: 800px;

}

.db_bg {
  max-height: 100%;
  overflow: auto;
  height: 100%;
  width: 100%;
  background: rgb(0,0,0,0.2);
  filter: blur(px);
}

.el-menu-item a{
  font-size: 14px !important;
  color: white;
}

/deep/ .el-menu-item-group__title{
  font-size: 15px !important;
}

/*修改滚动条样式*/
.db_bg::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.db_bg::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.db_bg::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);

}
</style>
