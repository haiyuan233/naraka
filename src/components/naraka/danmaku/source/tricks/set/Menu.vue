<template>
  <div  class="bg_box">
    <div style="height: 40px;margin-bottom: 10px;padding-top:10px;margin-top: 10px;">
      点击对应区域进入对应页面
    </div>
    <div class="bg_img">
      <el-image
          style="width: 1255px"
          src="/static/danmaku/img/setting/set1.jpg"
      ></el-image>
    </div>
    <div style="width: 1255px">
      <el-row style="top:120px">
        <el-col :offset="4" :span="16">
          <div class="bg_set box1">
            <div @click="linkTo('/setting/personal')" style="margin-left: 6px" title="个人界面">个人界面</div><div @click="linkTo('/setting/friends')" style="margin-left: 83px" title="好友">好友</div><div @click="linkTo('/setting/item')" style="margin-left: 83px" title="物品一览">物品一览</div>
          </div>
          <div class="bg_set box2">
            <div @click="linkTo('/setting/sysSetting')" style="margin-left: 6px" title="系统设置">系统设置</div><div @click="linkTo('/setting/gameSetting')" style="margin-left: 82px" title="游戏设置">游戏设置</div>
          </div>
          <div class="bg_set box3">
            <div style="margin-left: 6px" title="FAQ">FAQ</div><div style="margin-left: 82px" title="客服">客服</div><div style="margin-left: 82px" title="帮助">帮助</div><div style="margin-left: 82px" title="账号设置">账号设置</div>
          </div>
          <div class="bg_set box3">
            <div style="margin-left: 6px" title="信用卡">信用卡</div><div style="margin-left: 82px" title="许可证">许可证</div><div style="margin-left: 82px" title="基本政策">基本政策</div><div style="margin-left: 82px" title="成就">成就</div>
          </div>
          <div class="bg_set box3">
            <div style="margin-left: 6px" title="利用规约">利用规约</div><div style="margin-left: 82px" title="回到标题">回到标题</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props:{
    width: {
      type: String,
    },
  },
  data:function () {
    return {
    }
  },
  methods:{
    linkTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.bg_box{
  text-align: left;
}
.bg_img{
  position: absolute;
}

.bg_set div{
  position: relative;

  color: black;
  /*background: black;*/
  border: 1px #aa9878 solid;
  display: inline-block;
  text-align:center ;
}
.box1 div{
  cursor: pointer;
  height: 60px;
  width: 26%;
}

.box2 div{
  cursor: pointer;
  margin-top: 28px;
  height: 60px;
  width: 44%;
}
.box3 div{
  cursor: no-drop;
  margin-top: 28px;
  height: 47px;
  width: 17%;
}
</style>