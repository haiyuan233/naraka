<template>
  <div class="info">
    <h2>- 首次登入</h2>
    <div style="margin-top: 15px;padding: 0 20px;text-align: center">
      <p style="text-align: left">在点击使用规定并从上到下拖动说明文后，同意的按钮就会亮，点击后继续</p>
      <el-image
          style="width: 400px"
          src="static/danmaku/img/th1.png"
          :preview-src-list="imgUrl"
          ></el-image>
      <p style="text-align: left">首先选择使用AppLE ID登录还是使用谷歌账号登录。可以点击最底部选项使用游客登录跳过此步骤。</p>
      <el-image
          style="width: 400px"
          src="static/danmaku/img/th2.png"
          :preview-src-list="imgUrl"
      ></el-image>
      <p style="text-align: left">完成新手教程后，进入主界面</p>
      <el-image
          style="width: 400px"
          src="static/danmaku/img/menu.png"
          :preview-src-list="imgUrl"></el-image>
      <p style="font-size: 15px">主界面</p>
    </div>
    <div style="margin-top: 10px">
      <h2>- 抽卡相关</h2>
      <ul>
        <li>抽卡券可以单独使用</li>
        <li>抽卡时优先消耗无偿石。十连保底SR，但抽卡券十连无保底。</li>
        <li>SSR中有极稀有的徽章SSR</li>
        <li>3000有偿石必得是仅限氪金有偿石才能抽，仅限一次</li>
        <li>point池是杂物池</li>
        <li>概率明示<ul>
          <li>徽章SSR: 0.4%</li>
          <li>SSR: 3.6%</li>
          <li>SR: 18%</li>
          <li>R: 78%</li>
          <li>保底单发概率为，SR 96%，徽章SSR 0.4%，SSR 3.6%</li>
        </ul></li>
      </ul>
    </div>
    </div>


</template>

<script>
export default {
  name: "Menu1",
  data:function () {
    return {
      imgUrl:['static/danmaku/img/th2.png','static/danmaku/img/th1.png','static/danmaku/img/menu.png']
    }
  }
}
</script>

<style scoped>
.info{
  padding: 20px;
  color: white;
  font-weight: 600;
  line-height: 28px;
}

.info h1,h2,h3,h4,h5,h6,p,span{
  margin: 0;
}
.info a{
  font-size: 16px !important;
  color: #e54242 !important;
  font-weight: 600 !important;
  margin: 0;
}


</style>
