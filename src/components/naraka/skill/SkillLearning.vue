<template>
  <div class="skillDiv">
    <el-row>
      <el-col :offset="2" :span="10">
        <div class="circle">
          <div class="skill">
            <div class="skill-box">
              <div class="top-box">
                <div style="height:100%;width:100%;position:relative">
                  <circle-menu
                      class="menus menu3-1"
                      :sData="skillData.yj3"
                      :tag="'menu31'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu3-2"
                      :sData="skillData.yj3"
                      :tag="'menu32'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu3-3"
                      :sData="skillData.yj3"
                      :tag="'menu33'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu3-4"
                      :sData="skillData.yj3"
                      :tag="'menu34'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu3-5"
                      :sData="skillData.yj3"
                      :tag="'menu35'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu3-6"
                      :sData="skillData.yj3"
                      :tag="'menu36'"
                      @total="getTotal"
                  ></circle-menu>
                </div>
              </div>
              <div class="bottom-box">
                <div style="height:100%;width:100%;position:relative">
                  <circle-menu
                      class="menus menu2-1"
                      :sData="skillData.yj2"
                      :tag="'menu21'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu2-2"
                      :sData="skillData.yj2"
                      :tag="'menu22'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu2-3"
                      :sData="skillData.yj2"
                      :tag="'menu23'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu2-4"
                      :sData="skillData.yj2"
                      :tag="'menu24'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu2-5"
                      :sData="skillData.yj2"
                      :tag="'menu25'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu2-6"
                      :sData="skillData.yj2"
                      :tag="'menu26'"
                      @total="getTotal"
                  ></circle-menu>
                </div>
              </div>
              <div class="left-box">
                <div style="height:100%;width:100%;position:relative">
                  <circle-menu
                      class="menus menu1-1"
                      :sData="skillData.yj1"
                      :tag="'menu11'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu1-2"
                      :sData="skillData.yj1"
                      :tag="'menu12'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu1-3"
                      :sData="skillData.yj1"
                      :tag="'menu13'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu1-4"
                      :sData="skillData.yj1"
                      :tag="'menu14'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu1-5"
                      :sData="skillData.yj1"
                      :tag="'menu15'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu1-6"
                      :sData="skillData.yj1"
                      :tag="'menu16'"
                      @total="getTotal"
                  ></circle-menu>
                </div>
              </div>
              <div class="right-box">
                <div style="height:100%;width:100%;position:relative">
                  <circle-menu
                      class="menus menu4-1"
                      :sData="skillData.yj4"
                      :tag="'menu41'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu4-2"
                      :sData="skillData.yj4"
                      :tag="'menu42'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu4-3"
                      :sData="skillData.yj4"
                      :tag="'menu43'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu4-4"
                      :sData="skillData.yj4"
                      :tag="'menu44'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu4-5"
                      :sData="skillData.yj4"
                      :tag="'menu45'"
                      @total="getTotal"
                  ></circle-menu>
                  <circle-menu
                      class="menus menu4-6"
                      :sData="skillData.yj4"
                      :tag="'menu46'"
                      @total="getTotal"
                  ></circle-menu>
                </div>
              </div>
            </div>

          </div>
          <div class="bes-circle">
            <div class="larg-circle">
              <div class="mid-circle">
                <div class="mini-circle">
                  <div class="center-circle">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="setting">
          <div class="data-list">
            <h2>印记加成效果</h2>
            <template v-for="item in title">
              <p v-bind:key="item" v-if="sumTotal(item[0], total) !== 0">
              {{ item[1] }} : {{sumTotal(item[0], total) + item[2]}}

              </p>
            </template>
          </div>

        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import CircleMenu from '../menu/CircleMenu'
import {params} from '../../../assets/js/data.js'

export default {
  name: "SkillLearning",
  components: {
    CircleMenu
  },
  mounted() {
    this.$root.page = 'NARAKA印记模拟器'
  },
  data: function () {
    return {
      skillData: params.skill,
      title: [
        [0, '幸运值',''],
        [1, '初始怒气','%'],
        [2, '技能冷却速度','%'],
        [3, '飞索距离','%'],
        [4, '飞索速度','%'],
        [5, '每秒怒气回复','%'],
        [6, '每秒精力回复','%'],
        [7, '精力上限','%'],
        [8, '闪避精力消耗','%'],
        [9, '伤害怒气转换','%'],
        [10, '受伤怒气转换','%'],
        [11, '魂冢能量损失速度','%'],
        [12, '受到暗域伤害降低','%'],
        [13, '货郎折扣','%'],
        [14, '每10秒获得暗潮币',''],
        [15, '救援速度','%'],
        [16, '敌方血条存在时间','%']
      ],
      total: [
        {
          name: 'menu11',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu12',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu13',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu14',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu15',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu16',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu21',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu22',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu23',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu24',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu25',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu26',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu31',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu32',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu33',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu34',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu35',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu36',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu41',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu42',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu43',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu44',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu45',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          name: 'menu46',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    }
  },
  methods: {
    getTotal(msg) {
      // this.$emit().event
      let total = this.total
      total.forEach(item => {
        if (item.name === msg.tag) {
          item.data = msg.data
        }
      })
      this.total = total
    },
    sumTotal(num, total) {
      let sum = 0
      total.forEach(item => {
        sum += item.data[num]
      })
      return sum
    }
  }
}
</script>

<style scoped>
.skillDiv{
  text-align: center;
}
.circle {
  position: relative;
  z-index: 0;
  display: inline-block;
  /*margin:0 auto;*/
  /*margin-left: 100px;*/
  border-radius: 50%;
  border: white solid 2px;
  width: 800px;
  /*width: 400px%;*/
  height: 800px;
}

.bes-circle {
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 50%;
  border: transparent solid 2px;
  width: 600px;
  height: 600px;
  background: url("../../../assets/naraka/yj/bg/quan4.png");
  background-size: 100% 100%;
}

.larg-circle {
  margin: 0 auto;
  margin-top: 80px;
  border-radius: 50%;
  border: transparent solid 2px;
  width: 440px;
  height: 440px;
  background: url("../../../assets/naraka/yj/bg/quan3.png");
  background-size: 100% 100%;
}

.mid-circle {
  margin: 0 auto;
  margin-top: 58px;
  border-radius: 50%;
  border: white solid 2px;
  width: 320px;
  height: 320px;
  background: url("../../../assets/naraka/yj/bg/quan2.png");
  background-size: 100% 100%;
}

.mini-circle {
  margin: 0 auto;
  margin-top: 8px;
  border-radius: 50%;
  border: white solid 2px;
  width: 300px;
  height: 300px;
  background: url("../../../assets/naraka/yj/bg/quan1.png");
  background-size: 100% 100%;
}

.center-circle {
  margin: 0 auto;
  margin-top: 10%;
  width: 80%;
  height: 80%;
  background: url("../../../assets/naraka/yj/bg/quan0.png");
  background-size: 100% 100%;
}


.skill {
  position: absolute;
  /*border: black solid 1px;*/
  width: 800px;
  height: 800px;
  z-index: 99;
}

.skill div {
  /*border: black solid 1px;*/
  border: transparent solid 1px;

}


.skill-box {
  position: relative;
  width: 800px;
  height: 800px;
}

.top-box {
  position: absolute;
  text-align: center;
  margin-left: 200px;
  top: 70px;
  height: 250px;
  width: 400px;
}

.bottom-box {
  position: absolute;
  text-align: center;
  margin-left: 200px;
  bottom: 70px;
  height: 250px;
  width: 400px;
}

.left-box {
  position: absolute;
  text-align: center;
  top: 160px;
  left: -30px;
  height: 500px;
  width: 200px;
}

.right-box {
  position: absolute;
  text-align: center;
  top: 160px;
  right: -30px;
  height: 500px;
  width: 200px;
}

.menus {
  position: absolute;
}

.menu3-1 {
  left: 165px;
}

.menu3-2 {
  top: 55px;
  left: 100px;
}

.menu3-3 {
  top: 55px;
  left: 230px;
}

.menu3-4 {
  top: 100px;
  left: 165px;
}

.menu3-5 {
  top: 130px;
  left: 65px;
}

.menu3-6 {
  top: 130px;
  left: 265px;
}


.menu2-1 {
  left: 165px;
  top: 190px;
}

.menu2-2 {
  top: 135px;
  left: 100px;
}

.menu2-3 {
  top: 135px;
  left: 230px;
}

.menu2-4 {
  top: 90px;
  left: 165px;
}

.menu2-5 {
  top: 60px;
  left: 65px;
}

.menu2-6 {
  top: 60px;
  left: 265px;
}

.menu1-1 {
  left: 55px;
  top: 0px;
}

.menu1-2 {
  left: 15px;
  top: 75px;
}

.menu1-3 {
  left: 0px;
  top: 165px;
}

.menu1-4 {
  left: 0px;
  bottom: 165px;
}

.menu1-5 {
  left: 15px;
  bottom: 75px;
}

.menu1-6 {
  left: 55px;
  bottom: 0px;
}

.menu4-1 {
  right: 55px;
  top: 0px;
}

.menu4-2 {
  right: 15px;
  top: 75px;
}

.menu4-3 {
  right: 0px;
  top: 165px;
}

.menu4-4 {
  right: 0px;
  bottom: 165px;
}

.menu4-5 {
  right: 15px;
  bottom: 75px;
}

.menu4-6 {
  right: 55px;
  bottom: 0px;
}


.setting {
  display: inline-block;
  width: 800px;
}


.data-list {
  /*height: 600px;*/
  /*width: 100%;*/
  color: #535252;
  font-size: 20px;
  font-weight: 600;
  /*border: white solid 1px;*/
}

.data-list h2 {
  color: #535252;
  font-weight: 600;
}
</style>
