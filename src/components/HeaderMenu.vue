<template>
    <div class="container-header">
    <div class="header-left">
      <img src="../assets/images/burgermenu_icon.svg" alt="burger icon">
      <div class="title-header">受付台帳</div>
    </div>
    <div class="header-right">
      <div class="wrapper-text">
        <div class="branch-lipps">LIPPS 表参道店</div>
        <div class="current-date">2022年3月1日(火)</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F0F2F7;
  height: 66px;
  width: 100%;
  border-left: 1px solid #D9DCE3;
}
.header-left {
  display: flex;
  gap: 20px;
  margin-left: 20px;
}
.title-header {
  font-size: 24px;
  font-weight: bold;
}
.wrapper-text {
  text-align: right;
  margin-right: 10px;
}
.current-date {
  font-size: 16px;
  font-weight: bold;
}
</style>