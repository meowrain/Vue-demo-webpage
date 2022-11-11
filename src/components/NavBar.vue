<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">🌸喵雨の小屋🌸</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house-fill"></i>&nbsp;首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/archive"><i class="bi bi-archive"></i>&nbsp;归档</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/album"><i class="bi bi-card-image"></i>&nbsp;相册</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"><i class="bi bi-file-earmark-person-fill"></i>&nbsp;关于</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login"><i class="bi bi-box-arrow-in-right"></i>&nbsp;登录</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: "NavBar",
}
</script>
<style scoped></style>