<template>
  <div class="container">
    <NavBar></NavBar>
    <CardUse>
      <h3>相册</h3>
      <p class="text-muted"><mark>喵雨的老婆们❤️</mark></p>
<CardUse>
  <div class="photo text-center">
        <photo-provider>
          <photo-consumer v-for="src in imgList" :intro="src" :key="src" :src="src">
            <img :src="src" class="view-box" />
          </photo-consumer>
        </photo-provider>
      </div>
</CardUse>
    </CardUse>
  </div>
</template>
<script>
//本地组件导入
import CardUse from "@/components/CardUse.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "AlbumView",
  components: { CardUse, NavBar },
  data() {
    return {
      imgList: [
        "https://img.mokeyjay.com/images/2020/05/19/85d2ee4dae93f20ba91246a8e09c9283.png",
        "https://api.vvhan.com/api/acgimg",
        "https://www.dmoe.cc/random.php",
        "https://tva1.sinaimg.cn/large/9bd9b167gy1fwrtfivt62j21hc0u0dzm.jpg",
        "https://tva1.sinaimg.cn/large/9bd9b167gy1fwrtldsawcj21hc0u0tv0.jpg",
        "https://api.ghser.com/random/api.php"

      ],
    };
  },
};
</script>
<style lang="less" scoped>
.photo img {
  max-width: 100%;
  height: 10%;
  margin-bottom: 30px;
}
</style>
