<template>
  <div class="container">
    <NavBar></NavBar>
    <CardUse>
      <div class="row">
        <div class="col-lg-3">
          <SideBar></SideBar>
        </div>
        <ContentPage>
        <h4>关于我</h4>
        <p class="fw-light">Fight for what you love</p>
        <p class="fs-6">&nbsp;&nbsp;&nbsp;大家好，我是MeowRain，中文可读作喵雨，至于为什么起这个名字，其实是因为英文里的rain和我的名字有谐音字，哈哈😄，再一个就是我比较喜欢猫咪，也养着一只小猫咪（叫小喵，目前是我姐姐代养，自己太忙了顾不上照顾小猫咪）所以就叫MeowRain啦。</p>
        <p class="fs-6">&nbsp;&nbsp;&nbsp;今年18岁，在读大一，❤️希望我能永葆有18岁这时的对未来的期望和对新事物的passion（热情），哈哈。</p>
        <p class="fs-6">&nbsp;&nbsp;&nbsp;热爱前端，梦想能成为一个很有水平的前端程序员。对大多数事物充满兴趣与热情，致力于做一个斜杠青年！喜欢听别人讲故事，看别人的故事（ps:别人的故事总能让我学到点儿动画）。</p>
        <h4>未来计划🐈</h4>
        <ul>
          <li>学习前端三件套（html,css,javascript）</li>
          <li>自己写一个halo主题</li>
          <li>学习Python，爬二次元图片</li>
          <li>买一台x86架构机器，组自己的本地服务器</li>
        </ul>
        <p class="fs-6">在这里放猫猫照片一张</p>
        <img src="https://meowrain.cn/upload/2022/06/image.png" alt="" width="300px" height="300px">
        </ContentPage>
      </div>
    </CardUse>
  </div>
</template>
<script>
import CardUse from "@/components/CardUse.vue";
import ContentPage from "@/components/ContentPage.vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  name: "AboutView",
  components: { NavBar, CardUse, SideBar, ContentPage },
};
</script>
