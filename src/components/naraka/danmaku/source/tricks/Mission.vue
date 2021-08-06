<template>
  <div class="info">
    <h2>- 新手任务</h2>
    <div style="margin-top: 30px;padding: 0 20px;font-size: 20px">
      <el-row>
        <el-col :offset="2" :span="11">
          <ul style="color: #eac06f">
            <li>1-1 单曲normal难度完成</li>
            <li>1-2 游玩5次蓝色曲目</li>
            <li>1-3 通关5首曲目</li>
            <li>1-4 C评分完成一次曲目</li>
            <li>1-5 进行5次远征</li>
            <li>1-6 博丽神社复兴完毕</li>
            <li>1-7 拥有一张20级卡片</li>
            <li>1-8 对一张卡进行开花</li>
            <li>1-9 进行问卷调查</li>
          </ul>
        </el-col>
        <el-col :span="11">
          <ul style="color: #563e82">
            <li>2-1 单曲hard难度完成</li>
            <li>2-2 游玩5次黄色曲目</li>
            <li>2-3 通关10首曲目</li>
            <li>2-4 FC一首曲目</li>
            <li>2-5 远征大成功一次</li>
            <li>2-6 红魔馆复兴完毕</li>
            <li>2-7 拥有一张30级卡片</li>
            <li>2-8 一张卡的开花等级到2</li>
            <li>2-9 对一张卡进行深化</li>
          </ul>
        </el-col>

      </el-row>

    </div>
    <div  style="margin-top: 30px;padding: 0 20px;font-size: 20px">
      <el-row>
        <el-col :offset="2" :span="11">
          <ul style="color: #3e88fd">
            <li>3-1 游玩5次红色曲目</li>
            <li>3-2 通关20首曲目</li>
            <li>3-3 B评分完成一次曲目</li>
            <li>3-4 远征大成功3次</li>
            <li>3-5 复兴完3处</li>
            <li>3-6 进行10次育成</li>
            <li>3-7 拥有一张40级卡片</li>
            <li>3-8 一张卡的开花等级到3</li>
            <li>3-9 进行2次深化</li>
          </ul>
        </el-col>
        <el-col :span="11">
          <ul style="color: #93f382">
            <li>4-1 单曲EX难度完成</li>
            <li>4-2 游玩30次曲目</li>
            <li>4-3 A评分完成一次曲目</li>
            <li>4-4 使用20次卡片的主动技能</li>
            <li>4-5 进行30次远征</li>
            <li>4-6 复兴完6处</li>
            <li>4-7 拥有一张5级开花卡片</li>
            <li>4-8 进行3次深化</li>
            <li>4-9 进行20次育成</li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  name: "Mission"
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
