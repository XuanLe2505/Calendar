<template>
    <div class="sidebar">
      <div class="logo-lipps">
        <img src="../assets/images/lipps hair_logo.svg" alt="logo lipps">
      </div>
      <div class="sidebar-item dashboard">
        <img src="../assets/images/dashboard_icon.svg" alt="dashboard">
        <div>ダッシュボード</div>
      </div>
      <div class="sidebar-item ledger">
        <img src="../assets/images/ledger_icon.svg" alt="ledger">
        <div>受付台帳</div>
      </div>
      <div class="sidebar-item register">
        <img src="../assets/images/register_icon.svg" alt="register">
        <div>会計</div>
      </div>
      <div class="sidebar-item stock">
        <img src="../assets/images/stock_icon.svg" alt="stock">
        <div>マテリアル管理</div>
      </div>
      <div class="sidebar-item home">
        <img src="../assets/images/home_icon.svg" alt="home">
        <div>ホーム</div>
      </div>
      <div class="sidebar-item home">
        <img src="../assets/images/setting_icon.svg" alt="setting">
        <div>設定</div>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 120px;
  height: 100vh;
  padding: 18px 10px 0 10px;
  background-color: #F0F2F7;
}
.logo-lipps {
  margin-bottom: 20px;
}
.sidebar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1B2330;
  border-radius: 5px;
  gap: 5px;
  width: 100px;
  height: 100px;
  border: 1px solid #3D4753;
  margin-bottom: 10px;
}
</style>