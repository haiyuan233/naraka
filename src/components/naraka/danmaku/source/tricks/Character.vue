<template>
  <div class="info">
    <h2>- 养成</h2>
    <div style="margin-top: 15px;padding: 0 20px;text-align: center">
      <el-image
          style="width: 400px"
          src="static/danmaku/img/character.png"
          :preview-src-list="imgUrl"
      ></el-image>
    </div>
    <div style="margin-top: 15px;padding: 0 20px">
      <p>ヒロイン昇華：角色分解。</p>
      <p>育成：角色强化</p>
      <p>編成：进行队伍构成。</p>
      <p>强化：卡片强化升级。</p>
      <p>開花：使用进阶材料突破等级上限。</p>
      <p>深化：用相同卡强化属性。</p>
      <p>ミタマ昇華：卡片分解。两种升华都会给万能碎片。</p>
      <p>一覽：查看已获取角色和玉卡。</p>
      <p>ナカヨシクラウド（关系云）：角色关系云图。</p>
    </div>

    <ul>
      <p>注意</p>
      <li>获取新角色需要用碎片合成，开局会给300万能碎片，100个可以换一个新角色。</li>
      <li>角色需要使用角色碎片升级。</li>
      <li>可以同卡组队。</li>
      <li>选择强化到最大等级时，默认消耗掉所有的专属碎片和万能碎片。</li>
    </ul>
    <h2>- 卡面信息</h2>
    <div style="margin-top: 15px;padding: 0 20px;text-align: center">
      <el-image
          style="width: 400px"
          src="static/danmaku/img/card1.jpg"
          :preview-src-list="imgUrl"
      ></el-image>
      <el-image
          style="width: 400px"
          src="static/danmaku/img/card2.jpg"
          :preview-src-list="imgUrl"
      ></el-image>
    </div>
    <div style="margin-top: 15px;padding: 0 20px">
      <p>三种属性，红色代表<span style="color:#e54242;font-weight: 600;">Em（エモ）</span>，蓝色代表<span style="color:#3e88fd;font-weight: 600;">Co（クール）</span>，黄色代表<span style="color:#eac06f;font-weight: 600;">Ro（ローマン）</span>。</p>
      <p>三种技能，蓝色是主动技能 黄色是概率技能 绿色是远征技能 </p>
      <el-row>
        <el-col :offset="3" :span="7">
          <ul><span style="color: #3e88fd">主动技能分为</span>
            <li>伤害无效</li>
            <li>HP回复</li>
            <li>分数大幅UP</li>
          </ul>
        </el-col>
        <el-col :span="7">
          <ul><span style="color: #eac06f">概率技能分为</span>
            <li>判定强化</li>
            <li>コンポ継続</li>
            <li>分数UP</li>
          </ul>
        </el-col>
        <el-col :span="7">
          <ul><span style="color: #93f382">远征技能分为</span>
            <li>时间缩短</li>
            <li>获得报酬UP</li>
            <li>コメのしずくUP</li>
          </ul>
        </el-col>
      </el-row>
      <p>卡面的动态效果（Live2D）需要开花3次解锁</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Character",
  data:function () {
    return {
      imgUrl:[
          'static/danmaku/img/character.png',
          'static/danmaku/img/card1.jpg',
          'static/danmaku/img/card2.jpg',
      ]
    }
  }
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
