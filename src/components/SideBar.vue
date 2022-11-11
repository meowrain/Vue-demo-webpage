<template>
  <CardUse>
    <div class="text-center">
      <img src="https://meowrain.cn/upload/2022/11/6b217e783fac1fac.jpg" alt="" />
      <br />
      <span>喵雨</span>
      <br />
      <button type="button" class="btn btn-sm btn-primary">关注+</button>
      <br />
      <span class="little">❤️为了圣女大人！！❤️</span>
      <br />
      <span class="little"
        ><i class="bi bi-geo-alt-fill"></i>Shanxi Agricultural University</span
      >
      <br />
      <span class="list-info">
        <a href="https://github.com/meowrain"><i class="bi bi-github"></i></a>
        <a href="/"><i class="bi bi-envelope"></i></a>
      </span>
    </div>
    <CardUse>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="bi bi-arrow-return-right"></i> 分类</li>
        <li class="list-group-item"><i class="bi bi-bookmark-star-fill"></i> 标签</li>
        <li class="list-group-item"><i class="bi bi-link"></i> 友链</li>
      </ul>
    </CardUse>
  </CardUse>
</template>
<script>
import CardUse from "./CardUse.vue";

export default {
  name: "SideBar",
  components: { CardUse },
};
</script>
<style lang="less" scoped>
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1px;
}
.little {
  font-size: 13px;
  color: lightslategray;
}
.list-group {
  font-size: 14px;
}
.list-info a {
  text-decoration: none;
  outline: none;
  color: #000;
  margin-right: 10px;
}
.btn:hover {
  background-color: red;
}
</style>
