<template>
  <div class="container-sm">
    <NavBar></NavBar>
    <CardUse>
      <div class="row">
        <div class="col-lg-3">
          <SideBar></SideBar>
        </div>
        <ContentPage>
          <div class="card mb-1">
            <img
              src="https://tva1.sinaimg.cn/large/9bd9b167gy1fwrtfivt62j21hc0u0dzm.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">文章1</h5>
              <p class="card-text">鲜艳的花朵</p>
              <p class="card-text"><small class="text-muted">发布于3分钟前</small></p>
            </div>
          </div>
          <div class="card mb-1">
            <img
              src="https://tva1.sinaimg.cn/large/9bd9b167gy1fwrtfivt62j21hc0u0dzm.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">文章2</h5>
              <p class="card-text">鲜艳的花朵</p>
              <p class="card-text"><small class="text-muted">发布于3分钟前</small></p>
            </div>
          </div>
          <FooterPagination></FooterPagination>
        </ContentPage>
      </div>
    </CardUse>
  </div>
</template>

<script>
// @ is an alias to /src
import CardUse from "@/components/CardUse.vue";
import ContentPage from "@/components/ContentPage.vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import FooterPagination from "@/components/FooterPagination.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    SideBar,
    ContentPage,
    CardUse,
    FooterPagination
  },
};
</script>
<style scoped>
.card-img-top {
  max-width: 100%;
  border-radius: 4px;
}
</style>
