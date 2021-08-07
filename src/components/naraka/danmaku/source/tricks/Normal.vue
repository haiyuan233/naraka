<template>
  <div class="info">
    <h2>- 基本玩法</h2>
<!--    <div style="margin-top: 15px;padding: 0 20px;text-align: center">-->
<!--      <el-image-->
<!--          style="width: 400px"-->
<!--          src="static/danmaku/img/character.png"-->
<!--          :preview-src-list="imgUrl"-->
<!--      ></el-image>-->
<!--    </div>-->
    <div style="margin-top: 15px;padding: 0 20px;">
      <h3>干劲</h3>
      <p>干劲每天用道具的回复上限是30。</p>
    </div>
    <div style="margin-top: 15px;padding: 0 20px;">
      <h3>远征</h3>
      <p>可以把角色和卡派遣出去获取材料。材料中标着复兴的是复兴任务需要的材料，可以用来推进主线。</p>
      <p>远征有不同的类型，おつかい(派遣)蓝色，ぼうけん(冒险)黄色，ひがわり(每日轮换)绿色，ボス(BOSS)红色</p>
    </div>
    <div style="margin-top: 15px;padding: 0 20px;">
      <h3>复兴</h3>
      <p>玩家从博丽神社开始，逐步用派遣获得的材料修复幻想乡，解锁新内容，并推进主线剧情。
        除了剧情文本之外，基本上不存在理解难度。复兴按钮会提示下一步需要的材料，以及获取的奖励。</p>
    </div>
    <div style="margin-top: 15px;padding: 0 20px;">
      <h3>弹幕神乐</h3>
      <p>打歌。每首曲子分5个难度，easy，normal，hard，extra，lunatic。lunatic难度解锁需要那首曲子的extra全连。</p>
      <p>选中某首歌之后，可以查看曲目信息，查看可获取的奖励，上锁（收藏）。</p>
      <p>曲名的左边有图标，红色代表<span style="color:#e54242;font-weight: 600;">Em（エモ）</span>，蓝色代表<span style="color:#3e88fd;font-weight: 600;">Co（クール）</span>，黄色代表<span style="color:#eac06f;font-weight: 600;">Ro（ローマン）</span>，三色勾玉表示兼具三种属性（ALL）。</p>
    </div>
    <div style="margin-top: 15px;padding: 0 20px;">
      <h3>通行证</h3>
      <p>通行证有普通版和进阶版，二者购买时直接获取的付费石数量不一样，普通版只有必得SSR券，而进阶版应该是有一张自选SSR券。通行证等级需要打歌和派遣来提升，付费石可以直升通行证等级，500一级。</p>
    </div>
    <div style="margin-top: 15px;padding: 0 20px;">
      <h3>抽卡</h3>
      <p>十连抽卡券的没有保底。</p>
    </div>
    <div style="margin-top: 15px;padding: 0 20px;">
      <h3>公会</h3>
      <p>クラブ按钮可以加入或创建Club，会长为一人，可设置最多19名副会长，其余为普通成员。</p>
      <p>一个人最多可以加入三个公会。</p>
      <p>公会可以获取公会币，用来购买装饰和称号。</p>
      <p>除会长之外14天不登录自动脱离，会长14天不登录降为普通成员，由加入时间最长的副会长接任。</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Normal"
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
h3{
  color: #e54242 !important;
}
.info a{
  font-size: 16px !important;
  color: #e54242 !important;
  font-weight: 600 !important;
  margin: 0;
}
</style>
