<template>
  <div class="info">
    <div style="margin-top: 10px">
      <h2>- 运行环境</h2>
      <ul>
        <li>Android 8.0&nbsp+&nbsp/&nbspIOS13&nbsp+&nbsp</li>
        <li>为Android环境时，不能获取ROOT权限后运行</li>
        <li>操作系统为x64</li>
        <li>支持谷歌框架</li>
      </ul>
    </div>
    <h2>- 游戏前准备</h2>
    <div style="margin-top: 15px;padding: 0 20px;margin-bottom: 15px">
      <p>官方渠道:App Store日区，Google Play日区。</p>
      <p>可以从qooapp或谷歌市场安装。目前可以裸连。</p>
      <p style="color:#ea3434;font-size: 26px;margin: 10px 0">注意</p>
      <p>※谷歌需梯子，并且使用谷歌账号游玩时要保持所有谷歌相关进程产生流量均通过梯子转发，在使用分应用代理时注意把所有google相关应用全部加入代理。</p>
      <p>※同理，安卓充值目前也是要走谷歌的。</p>
    </div>
    <h2>- 相关链接</h2>
    <div style="margin-top: 15px;padding: 0 20px">
      <p>官方网站：<a href="https://danmaku.jp/">https://danmaku.jp/</a></p>
      <p>官方推特：<a href="https://twitter.com/danmakuJP">https://twitter.com/danmakuJP</a></p>
      <p>官方YouTube频道：<a href="https://www.youtube.com/channel/UCdrdsEdEVBqlInUM_gjQzJQ">https://www.youtube.com/channel/UCdrdsEdEVBqlInUM_gjQzJQ</a></p>
      <p>官方Niconico频道：<a href="https://ch.nicovideo.jp/touhou-x">https://ch.nicovideo.jp/touhou-x</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style scoped>
.info{
  max-height: 100%;
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
