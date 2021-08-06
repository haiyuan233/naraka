<template xmlns="http://www.w3.org/1999/html">
  <div class="navbar"><img :src="imgUrl" width="100%" height="100%">
    <ul class="menu">
      <li>
        <el-tooltip placement="left">
          <div slot="content">{{ sData[0].name }}<br/>{{ sData[0].effect }}</div>
          <a @click="clickIco(sData[0].img, sData[0].data)" target="_blank" class="fa">
            <img :src="url(sData[0].img)" width="100%" height="100%"></a>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip placement="right">
          <div slot="content">{{ sData[1].name }}<br/>{{ sData[1].effect }}</div>
          <a @click="clickIco(sData[1].img, sData[1].data)" target="_blank" class="fa">
            <img :src="url(sData[1].img)" width="100%" height="100%"></a>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip placement="right">
          <div slot="content">{{ sData[2].name }}<br/>{{ sData[2].effect }}</div>
          <a @click="clickIco(sData[2].img, sData[2].data)" target="_blank" class="fa">
            <img :src="url(sData[2].img)" width="100%" height="100%"></a>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip placement="left">
          <div slot="content">{{ sData[3].name }}<br/>{{ sData[3].effect }}</div>
          <a @click="clickIco(sData[3].img, sData[3].data)" target="_blank" class="fa">
            <img :src="url(sData[3].img)" width="100%" height="100%"></a>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip placement="left">
          <div slot="content">{{ sData[4].name }}<br/>{{ sData[4].effect }}</div>
          <a @click="clickIco(sData[4].img, sData[4].data)" target="_blank" class="fa">
            <img :src="url(sData[4].img)" width="100%" height="100%"></a>
        </el-tooltip>
      </li>
      <li style=""><a @click="clickClose(require('../../../assets/naraka/yj/bg/dian.png'))" target="_blank" class="fa close" title="清除"><span>×</span></a></li>
      <li><a target="_blank" class="fa">
        <img :src="imgUrl" width="100%" height="100%"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CircleMenu",
  props: {
    sData: {
      type: Array,
      default: function () {
        return null
      }
    },
    tag: {
      type: String,
      default: function () {
        return null
      }
    },
    total: {
      type: Array,
      default: function () {
        return [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    },
  },
  data: function () {
    return {
      imgUrl: require('../../../assets/naraka/yj/bg/dian.png'),
      choose: 'none',
      // imgUrl: require('../../../assets/naraka/yj/1/yj3_1.png')
    }
  },
  methods: {
    clickIco(pic, data){
      this.imgUrl = require('../../../assets/' + pic)
      let res = {
        data:data,
        tag:this.tag
      }
      this.$emit('total', res)
      // console.log(data)
    },
    clickClose(pic){
      this.imgUrl = pic
      let res = {
        data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        tag:this.tag
      }
      this.$emit('total', res)
      // console.log([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    },
    url(iurl){
      return require('../../../assets/' + iurl)
    }
  }
}
</script>

<style scoped>
  @import '../../../assets/menu/bootstrap.min.css';
  @import '../../../assets/menu/font-awesome.min.css';
  @import '../../../assets/menu/jsdaima.css';

  .close{
    background: #ffffff;
    height: 30px !important;
    width: 30px !important;
    left: 130px;
    top: -10px;
  }
  a span {
    color: #000000;
    font-weight: 600;
    font-size: 30px;
  }

</style>
