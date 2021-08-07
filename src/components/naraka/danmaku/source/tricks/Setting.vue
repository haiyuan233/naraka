<template>
  <div class="info">
    <h2>- 设置页面</h2>
    <div style="padding: 0 20px;text-align: center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting"
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
