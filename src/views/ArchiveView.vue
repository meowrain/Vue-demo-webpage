<template>
<div class="container">
    <NavBar></NavBar>
    <CardUse>
      <div class="row">
        <div class="col-lg-3">
          <SideBar></SideBar>
        </div>
          <ContentPage>归档</ContentPage>
      </div>
    </CardUse>
</div>
</template>
<script>
import CardUse from '@/components/CardUse.vue';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
import ContentPage from '@/components/ContentPage.vue';
export default {
    name:"ArchiveView",
    components:{ NavBar, CardUse, SideBar, ContentPage }
}
</script>