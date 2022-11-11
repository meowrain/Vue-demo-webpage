<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="text-center">
      <form>
  <fieldset>
    <legend>登录页</legend>
    <div class="mb-3">
      <label for="username" class="form-label">用户名</label>
      <input type="text" class="form-control" placeholder="输入用户名">
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="form-label">密码</label>
      <input type="password" id="inputPassword5" class="form-control" placeholder="输入密码">
      </div>
    <button type="submit" class="btn btn-primary">登录</button>
  </fieldset>
</form>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "LoginPageView",
  components: { NavBar },
};
</script>
<style scoped></style>
